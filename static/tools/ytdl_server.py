#!/usr/bin/env python3
"""视频下载器本地辅助服务，基于 yt-dlp，需要 ffmpeg（高画质/合并/分类/转MP3）浏览器本身无法解析各大平台的视频链接（跨域限制、签名、反爬），所以由这个服务在本机调用 yt-dlp 解析

它的前端页面支持多个链接，也支持抖音、小红书的整段分享文字，每条结果有封面、标题、作者、时长，画质可选（最高画质、各分辨率、仅音频），多条时有「全部下载」

下载服务地址默认 127.0.0.1:8765，可以改，会记住；页面没连上服务时会提示怎么启动；辅助程序只放行这6个平台的链接，b23.tv、v.douyin.com、xhslink.com 这类短链会自动展开

用法：
    pip install -U yt-dlp                      # 应经常更新
    python ytdl_server.py                      # 监听 127.0.0.1:8765
    python ytdl_server.py --host 0.0.0.0       # 允许局域网其他设备访问
    python ytdl_server.py --browser edge       # 借用浏览器登录状态（抖音/小红书/微博需要）
    python ytdl_server.py --cookies cookies.txt # 或用 cookies 文件
    python ytdl_server.py --outdir T:\\Downloads  # 指定保存目录（默认是系统「下载」文件夹）
    python ytdl_server.py --cookies cookies.txt --proxy http://127.0.0.1:7890
"""
import argparse
import json
import os
import re
import shutil
import sys
import tempfile
import threading
import time
import urllib.request
import uuid
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import parse_qs, quote, urlparse

try:
    import yt_dlp
except ImportError:
    sys.exit('缺少 yt-dlp，请先运行：pip install -U yt-dlp')

try:
    sys.stdout.reconfigure(errors='replace')
    sys.stderr.reconfigure(errors='replace')
except Exception:
    pass

# 只放行这六个平台（含常见短链域名），避免本机服务被当作任意网址下载器滥用
ALLOWED = (
    'youtube.com', 'youtu.be',
    'twitter.com', 'x.com', 't.co',
    'bilibili.com', 'b23.tv',
    'weibo.com', 'weibo.cn',
    'xiaohongshu.com', 'xhslink.com',
    'douyin.com', 'iesdouyin.com',
)
SHORT = ('t.co', 'b23.tv', 'v.douyin.com', 'xhslink.com', 'm.weibo.cn')
UA = ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/130.0 Safari/537.36')
TTL = 3600  # 任务与临时文件保留 1 小时
MAX_TASKS = 4  # 同时进行的下载任务上限

ARGS = None
OUT = ''  # 视频最终保存目录，默认是系统「下载」文件夹
WORK = os.path.join(tempfile.gettempdir(), 'ytdl_box')
TASKS = {}
LOCK = threading.Lock()


def default_downloads():
    """系统「下载」文件夹（Windows 取已知文件夹，兼容被改到其他盘的情况）"""
    if os.name == 'nt':
        try:
            import ctypes

            class GUID(ctypes.Structure):
                _fields_ = [('a', ctypes.c_ulong), ('b', ctypes.c_ushort),
                            ('c', ctypes.c_ushort), ('d', ctypes.c_ubyte * 8)]
            g = GUID(0x374DE290, 0x123F, 0x4565,
                     (ctypes.c_ubyte * 8)(0x91, 0x64, 0x39, 0xC4, 0x92, 0x5E, 0x46, 0x7B))
            p = ctypes.c_wchar_p()
            if ctypes.windll.shell32.SHGetKnownFolderPath(ctypes.byref(g), 0, None, ctypes.byref(p)) == 0:
                r = p.value
                ctypes.windll.ole32.CoTaskMemFree(p)
                if r:
                    return r
        except Exception:
            pass
    return os.path.join(os.path.expanduser('~'), 'Downloads')


def unique(path):
    b, e = os.path.splitext(path)
    n = 1
    while os.path.exists(path):
        path = '%s (%d)%s' % (b, n, e)
        n += 1
    return path


def clean(e):
    return re.sub(r'\x1b\[[0-9;]*m', '', str(e)).replace('ERROR: ', '').strip()


def host_ok(url):
    h = (urlparse(url).hostname or '').lower()
    return any(h == d or h.endswith('.' + d) for d in ALLOWED)


def normalize(url):
    """校验域名、展开短链，并把抖音分享页 / 精选页地址转成 yt-dlp 认识的形式"""
    url = url.strip()
    if not re.match(r'^https?://', url, re.I):
        raise ValueError('不是有效的链接')
    if not host_ok(url):
        raise ValueError('只支持 YouTube / 推特(X) / 哔哩哔哩 / 微博 / 小红书 / 抖音 的链接')
    if (urlparse(url).hostname or '').lower() in SHORT:
        req = urllib.request.Request(url, headers={'User-Agent': UA})
        with urllib.request.urlopen(req, timeout=12) as r:
            url = r.geturl()
        if not host_ok(url):
            raise ValueError('短链跳转到了不支持的站点')
    m = (re.search(r'iesdouyin\.com/share/(?:video|note)/(\d+)', url)
         or re.search(r'douyin\.com/.*[?&]modal_id=(\d+)', url))
    if m:
        url = 'https://www.douyin.com/video/' + m.group(1)
    return url


def base_opts():
    o = {'quiet': True, 'no_warnings': True, 'noprogress': True, 'noplaylist': True,
         'socket_timeout': 20, 'retries': 3, 'windowsfilenames': True}
    if ARGS.cookies:
        o['cookiefile'] = ARGS.cookies
    if ARGS.browser:
        o['cookiesfrombrowser'] = (ARGS.browser,)
    if ARGS.proxy:
        o['proxy'] = ARGS.proxy
    return o


def get_info(url):
    url = normalize(url)
    with yt_dlp.YoutubeDL({**base_opts(), 'skip_download': True}) as y:
        d = y.extract_info(url, download=False)
    count = 1
    if d.get('entries'):
        es = [e for e in d['entries'] if e]
        count = len(es)
        if not es:
            raise ValueError('没有找到视频')
        d = es[0]
    fm = d.get('formats') or []
    heights = sorted({f['height'] for f in fm if f.get('height') and f.get('vcodec') != 'none'}, reverse=True)
    return {
        'url': url,
        'title': d.get('title') or d.get('id') or '未命名',
        'uploader': d.get('uploader') or d.get('channel') or '',
        'duration': d.get('duration'),
        'thumbnail': d.get('thumbnail') or '',
        'site': d.get('extractor_key') or '',
        'heights': heights,
        'count': count,
    }


def run_task(tid, url, q, save=False):
    t = TASKS[tid]
    out = os.path.join(WORK, tid)
    os.makedirs(out, exist_ok=True)
    t['dir'] = out
    ff = bool(shutil.which('ffmpeg'))

    def hook(h):
        if h['status'] == 'downloading':
            total = h.get('total_bytes') or h.get('total_bytes_estimate') or 0
            t['pct'] = round(h.get('downloaded_bytes', 0) * 100 / total, 1) if total else None
            t['speed'] = h.get('speed')
            t['eta'] = h.get('eta')
        elif h['status'] == 'finished':
            t['stage'] = 'processing'

    opts = {**base_opts(),
            'outtmpl': os.path.join(out, '%(title).80s [%(id)s].%(ext)s'),
            'progress_hooks': [hook]}
    if q == 'audio':
        opts['format'] = 'ba/b'
        if ff:
            opts['postprocessors'] = [{'key': 'FFmpegExtractAudio',
                                       'preferredcodec': 'mp3', 'preferredquality': '192'}]
    else:
        cap = '[height<=%d]' % int(q) if q.isdigit() else ''
        opts['format_sort'] = ['res', 'ext:mp4:m4a']
        if ff:
            opts['format'] = 'bv*%s+ba/b%s/b' % (cap, cap)
            opts['merge_output_format'] = 'mp4'
        else:  # 没有 ffmpeg 时只能选音视频合一的流（画质可能较低）
            opts['format'] = 'b%s/b' % cap
    try:
        with yt_dlp.YoutubeDL(opts) as y:
            y.extract_info(normalize(url), download=True)
        files = [os.path.join(out, f) for f in os.listdir(out)
                 if not f.endswith(('.part', '.ytdl', '.temp'))]
        if not files:
            raise ValueError('下载完成但没有找到文件')
        src = max(files, key=os.path.getsize)
        if save:  # 直接写入下载目录，不再经过浏览器
            os.makedirs(OUT, exist_ok=True)
            dst = unique(os.path.join(OUT, os.path.basename(src)))
            shutil.move(src, dst)
            shutil.rmtree(out, ignore_errors=True)
            t['file'] = dst
            t['saved'] = True
        else:
            t['file'] = src
        t['state'] = 'done'
        t['pct'] = 100
    except Exception as e:
        t['state'] = 'error'
        t['error'] = clean(e)


def cleaner():
    while True:
        time.sleep(300)
        now = time.time()
        with LOCK:
            old = [k for k, v in TASKS.items() if now - v['ts'] > TTL and v['state'] != 'running']
            for k in old:
                shutil.rmtree(TASKS.pop(k)['dir'], ignore_errors=True)


class H(BaseHTTPRequestHandler):
    protocol_version = 'HTTP/1.1'

    def log_message(self, *a):
        pass

    def cors(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Private-Network', 'true')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')

    def js(self, obj, code=200):
        b = json.dumps(obj, ensure_ascii=False).encode('utf-8')
        self.send_response(code)
        self.cors()
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(b)))
        self.end_headers()
        self.wfile.write(b)

    def do_OPTIONS(self):
        self.send_response(204)
        self.cors()
        self.send_header('Content-Length', '0')
        self.end_headers()

    def do_GET(self):
        u = urlparse(self.path)
        q = {k: v[0] for k, v in parse_qs(u.query).items()}
        try:
            if u.path == '/api/ping':
                return self.js({'ok': True, 'ytdlp': yt_dlp.version.__version__,
                                'ffmpeg': bool(shutil.which('ffmpeg'))})
            if u.path == '/api/info':
                return self.js(get_info(q.get('url', '')))
            if u.path == '/api/start':
                url = normalize(q.get('url', ''))
                qual = q.get('q', 'best')
                if qual != 'audio' and qual != 'best' and not qual.isdigit():
                    raise ValueError('画质参数无效')
                tid = uuid.uuid4().hex[:12]
                with LOCK:
                    if sum(1 for v in TASKS.values() if v['state'] == 'running') >= MAX_TASKS:
                        raise ValueError('同时下载的任务太多，请等一会儿再试')
                    TASKS[tid] = {'state': 'running', 'stage': 'downloading', 'pct': 0,
                                  'ts': time.time(), 'dir': os.path.join(WORK, tid)}
                threading.Thread(target=run_task, args=(tid, url, qual, q.get('save') == '1'),
                                 daemon=True).start()
                return self.js({'id': tid})
            if u.path == '/api/status':
                t = TASKS.get(q.get('id', ''))
                if not t:
                    return self.js({'error': '任务不存在或已过期'}, 404)
                return self.js({'state': t['state'], 'stage': t.get('stage'), 'pct': t.get('pct'),
                                'speed': t.get('speed'), 'eta': t.get('eta'),
                                'name': os.path.basename(t['file']) if t.get('file') else '',
                                'size': os.path.getsize(t['file']) if t.get('file') else 0,
                                'saved': bool(t.get('saved')),
                                'dir': os.path.dirname(t['file']) if t.get('saved') else '',
                                'error': t.get('error', '')})
            if u.path == '/api/file':
                t = TASKS.get(q.get('id', ''))
                if not t or t['state'] != 'done' or not os.path.isfile(t['file']):
                    return self.js({'error': '文件不存在或已过期'}, 404)
                return self.send_file(t)
        except Exception as e:
            return self.js({'error': clean(e)}, 400)
        self.js({'error': 'not found'}, 404)

    def send_file(self, t):
        path = t['file']
        name = os.path.basename(path)
        ascii_name = re.sub(r'[^\x20-\x7e]', '_', name).replace('"', "'")
        size = os.path.getsize(path)
        self.send_response(200)
        self.cors()
        self.send_header('Content-Type', 'application/octet-stream')
        self.send_header('Content-Length', str(size))
        self.send_header('Content-Disposition',
                         'attachment; filename="%s"; filename*=UTF-8\'\'%s' % (ascii_name, quote(name)))
        self.end_headers()
        t['ts'] = time.time()
        with open(path, 'rb') as f:
            while True:
                b = f.read(1 << 20)
                if not b:
                    break
                try:
                    self.wfile.write(b)
                except (BrokenPipeError, ConnectionResetError):
                    break


def main():
    global ARGS, OUT
    p = argparse.ArgumentParser(description='极限工具箱 · 视频下载器辅助服务')
    p.add_argument('--host', default='127.0.0.1', help='监听地址，默认 127.0.0.1；局域网访问用 0.0.0.0')
    p.add_argument('--port', type=int, default=8765)
    p.add_argument('--cookies', help='Netscape 格式 cookies.txt 路径')
    p.add_argument('--browser', help='从浏览器读取登录状态：chrome / edge / firefox / brave …')
    p.add_argument('--outdir', help='视频保存目录；默认是系统「下载」文件夹（若浏览器下载目录不同，请在这里指定）')
    p.add_argument('--proxy', help='代理，例如 http://127.0.0.1:7890')
    ARGS = p.parse_args()
    OUT = os.path.abspath(os.path.expanduser(ARGS.outdir)) if ARGS.outdir else default_downloads()
    shutil.rmtree(WORK, ignore_errors=True)
    os.makedirs(WORK, exist_ok=True)
    threading.Thread(target=cleaner, daemon=True).start()
    srv = ThreadingHTTPServer((ARGS.host, ARGS.port), H)
    print('yt-dlp %s · ffmpeg %s' % (yt_dlp.version.__version__,
                                     '已找到' if shutil.which('ffmpeg') else '未找到（无法合并高画质 / 转 MP3）'))
    print('视频保存目录：' + OUT)
    print('视频下载服务已启动：http://%s:%d   （Ctrl+C 退出）' % (
        '127.0.0.1' if ARGS.host in ('0.0.0.0', '') else ARGS.host, ARGS.port))
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        shutil.rmtree(WORK, ignore_errors=True)


if __name__ == '__main__':
    main()
