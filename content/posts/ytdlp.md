---
title: "yt-dlp 下载视频使用指南"
date: 2025-04-25T13:56:03+08:00
draft: false
tags: ["YouTube"]
categories: ["软件"]
---

[yt-dlp](https://github.com/yt-dlp/yt-dlp) 是一个强大的命令行视频下载工具，支持数千个网站的音视频及字幕下载。最新版需要 JavaScript 运行时 [Deno](https://deno.com)

## 安装

```bash

# 通过包管理器
sudo pacman -S yt-dlp 
sudo pacman -S ffmpeg # 支持转换格式

# 或下载最新版
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp # 方法1
sudo wget https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -O /usr/local/bin/yt-dlp # 方法2
sudo chmod a+rx /usr/local/bin/yt-dlp # 赋予执行权限

yt-dlp -U # 更新版本
yt-dlp --update-to nightly # 或最新的版本
```

## 使用

视频地址可以使用 `url` 或 `vid` 在视频页点分享后可以直接复制 url 链接，也可用复制 `youtu.be/` 后面的 `vid` 号

```bash
yt-dlp -F url 或 vid # 列出音频和视频，可用查看详细信息及编号
yt-dlp url # 默认下载最高质量视频，url 也可以是播放列表链接

yt-dlp --playlist-start 2 --playlist-end 5 url # 指定播放列表开始到结束的序号，默认为 1 
yt-dlp -x --audio-format mp3 --playlist-start 1 --playlist-end 5 url # 音乐列表

# 指定格式和质量
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" url
yt-dlp --remux-video mp4 url # 或
yt-dlp -f "bestvideo[height<=1080]+bestaudio" url # 指定 1080p + 最高质量音频）

yt-dlp -f 22 url 或 vid # 下载编号 22 的视频
yt-dlp -f 137+140 # 下载编号 137视频 140音频 并整合
yt-dlp -f 137+140 url --merge-output-format mp4 # 将音视频合并下载为 MP4 文件（需要 ffmpeg）

yt-dlp -f 22 url --proxy socks5://127.0.0.1:10808 # 使用代理

# 从多个播放列表下载 
nano playlists.txt # 创建文本文件并添加想下载的 url，每行一个
https://www.youtube.com/playlist?list=PLAYLIST_ID_1
https://www.youtube.com/playlist?list=PLAYLIST_ID_2
https://www.youtube.com/playlist?list=PLAYLIST_ID_3

yt-dlp -x --audio-format mp3 -i --batch-file='path/to/playlists.txt' # 然后引入并下载

# 从播放列表下载新视频
yt-dlp --download-archive downloaded.txt url # 会创建文件，记录已下载过的视频，之后再次运行将跳过它们

# 参数
--limit-rate 1M # 限制下载速度为1M

```

### 常用实例

```bash
# 通过指定代理下载音视频及字幕
yt-dlp -F url # 先列出所有音视频，以确定要下载哪个
yt-dlp -f 136+140 url --write-auto-subs --sub-langs zh-Hans --proxy socks5://192.168.10.1:18111 # 指定视频音频字幕（自动翻译）

# 下载播放列表，最佳视频+最佳音频，并输出为 mp4
ytdl -f "bestvideo+bestaudio" --merge-output-format mp4 "https://youtube.com/playlist?list=XXX"

# 同时下载写入英文字幕+略缩图+影片介绍（适合转存）
yt-dlp --write-subs --write-auto-subs --sub-format SRT --sub-langs en --write-thumbnail --write-description url
```

### 音频

```bash
yt-dlp -x --audio-format mp3 url # 指定下载 mp3 音频格式，如果要封面加上 --embed-thumbnail
yt-dlp -x --audio-format flac # 如果有无损格式
yt-dlp -f 140 url # 下载编号为 140 的音频
yt-dlp -f bestaudio url # 下载最佳音频

```

### 字幕

```bash
yt-dlp --list-subs url # 列出字幕，查看所需语言字幕是否存在

yt-dlp --write-subs --sub-lang zh-Hans url # 同时下载视频和字幕
yt-dlp --embed-subs --sub-lang zh-Hans url # 或将字幕嵌入视频文件中

yt-dlp --write-subs --sub-langs zh-Hans,en --skip-download --convert-subs srt url # 仅字幕，不包括视频
yt-dlp --write-auto-subs --sub-langs zh-Hans --skip-download url # 自动翻译字幕到中文，不包括视频

yt-dlp -f 137+bestaudio url --write-subs --sub-langs zh-Hans # 下载视频+音频+字幕
yt-dlp -f 137+bestaudio url --embed-subs --sub-langs zh-Hans --merge-output-format mp4 # 下载视频+音频+字幕

ffmpeg -i 1.mp4 -vf 'subtitles=1.srt' -c:a copy output.mp4 # 如果要写入硬字幕
```

### 下载需要登录的视频

```bash
# Firefox
yt-dlp --cookies-from-browser firefox:/Users/appinn/Library/Application\ Support/Firefox/Profiles/12345.default-release-12345/ https://www.bilibili.com/video/xxx
# Edge，
yt-dlp.exe --cookies-from-browser edge:"C:\Users\appinn\AppData\Local\Microsoft\Edge\User Data\Profile 1" -F https://www.bilibili.com/video/xxxx
# Chrome
yt-dlp.exe --cookies-from-browser chrome:"C:\Users\scavi\AppData\Local\Google\Chrome\User Data\Default" -F https://www.bilibili.com/video/xxxx
```

### 参数与配置文件

可将参数写在同目录中名为 `yt-dlp.conf` 的配置文件中，这样只需执行下载命令，便会根据配置文件中的参数进行下载

```bash
# 可以随时编辑配置文件调整，将不要的选项前加上 # 号注释掉
# 格式：yt-dlp -f [编号] [代理配置] [视频链接] [合并语句] [外部下载器选择] [下载器参数]
yt-dlp -f 137+bestaudio --proxy socks5://127.0.0.1:8080 url --merge-output-format mp4 --external-downloader aria2c --downloader-args aria2c:"-x 16 -k 1M" url

# 说明
-f 137+bestaudio # 下载编号为137的视频和最佳音频 
--output T:/%(title)s-%(resolution)s.%(ext)s # 指定输出路径
--proxy socks5://192.168.1.1:0000 # socks5 代理配置
--merge-output-format mp4 # 下载后合并为mp4格式
-x --audio-format mp3 # 如果只要音频
--external-downloader aria2c # 下载器选择
--downloader-args [下载器名]:"[下载器配置]" # 如上 -x 16 为16线程 -k 1M 代表块大小为1M（youtube 不支持分块，此句可忽略）

# 字幕处理
--write-subs # 下载字幕文件，如 .srt 
--embed-subs # 或将字幕嵌入视频
--sub-langs zh-Hans,en # 指定字幕语言
--convert-subs srt # 转换成 srt
--skip-download # 只下载字幕

# 是否保存元数据
--embed-thumbnail # 缩略图
--embed-metadata # 元数据

# Cookies 引入
--cookies-from-browser chrome:"T:\PortableApps\ungoogled-chromium\userdata\Default"
--cookies T:/www.youtube.com_cookies.txt

# 指定 ffmpeg 路径
--ffmpeg-location D:/Qsync/Apps/MPV/ffmpeg.exe
```

### 调用不同的配置文件

使用不同的配置文件来管理不同的下载设置能够提高效率

```bash
yt-dlp --config-location /path/to/config/file.conf [URL] # 直接指定配置文件
yt-dlp --ignore-config --config-location /path/to/config/file.conf [URL] # 忽略默认配置文件并指定配置文件
```
创建多个配置文件，按需使用
```bash
# D:/MPV/default.conf (默认)
# D:/MPV/hd.conf (高清视频)
-f "bestvideo[height<=1080]+bestaudio/best[height<=1080]"
-o "%(title)s.%(ext)s"
--merge-output-format mp4

# D:/MPV/audio.conf (仅音频)
-x
--audio-format mp3
--audio-quality 0
-o "%(title)s.%(ext)s"
```

### 使用 Cookie 文件

- 浏览器登录油管，点击 [Get cookies.txt LOCALLY](https://chromewebstore.google.com/detail/cclelndahbckbenkjhflpdbgdldlbecc) 扩展 - Export ，下载 `cookies.txt` 文件
- 使用命令引入 `yt-dlp -F url --cookies T:\cookies.txt`