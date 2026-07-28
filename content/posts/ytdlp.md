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
yt-dlp -f 137+bestaudio url --merge-output-format mp4 # 下载编号137的视频和最佳音频，并合并为 MP4 文件（需要 ffmpeg）

# 从多个播放列表下载 
nano playlists.txt # 创建文本文件并添加想下载的 url，每行一个
https://www.youtube.com/playlist?list=PLAYLIST_ID_1
https://www.youtube.com/playlist?list=PLAYLIST_ID_2
https://www.youtube.com/playlist?list=PLAYLIST_ID_3

yt-dlp -x --audio-format mp3 -i --batch-file='path/to/playlists.txt' # 然后引入并下载

# 从播放列表下载新视频
yt-dlp --download-archive downloaded.txt url # 会创建文件，记录已下载过的视频，之后再次运行将跳过它们

# 参数
--output T:/%(title)s-%(resolution)s.%(ext)s # 指定保存路径
--proxy socks5://127.0.0.1:1080 # 使用代理 socks5
--merge-output-format mp4 # 下载后合并为指定格式
--downloader aria2c --downloader-args "aria2c:-x 16 -k 1M" # 调用外部下载软件多线程下载（-x 16 线程，-k 1M 每个线程块大小为1M）
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
yt-dlp -f bestaudio url # 下载最佳音频
yt-dlp -x --audio-format mp3 url # 仅下载指定的音频格式，mp3 或 flac（无损）
yt-dlp -f 140 url # 下载编号为 140 的音频

# 参数
--embed-thumbnail # 同时下载封面
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

### 配置文件

可将参数写在同目录中名为 `yt-dlp.conf` 配置文件中，每次执行程序默认都会调用该文件中的参数进行下载

```bash
## 以下在不需要时注释掉，需要时取消注释即可
## 保存路径
--output T:/Downloads/%(title)s.%(ext)s # 绝对路径（Windows）
--output \\IP\dir\ # SMB 路径（（Windows））

## 下载内容
-f 137+bestaudio # 视频+最佳音频，编号137一般是1080p
# -f 137 # 仅视频，如要时取消注释并注释掉上面的切换

## 指定格式
# --merge-output-format mp4 # 合并为MP4
# -x --audio-format mp3 # 仅下载音频 mp3

## sub
--sub-langs zh-Hans # 同时下中文字幕
# --convert-subs srt # 并将字幕文件格式转为 srt
# --skip-download # 仅下字幕

# Cookies an Proxy（代理）
--cookies-from-browser chrome:'T:/Chromium/profile/Default'
# --cookies T:/cookies.txt # 或指定提出出的 cookies 文件
--proxy socks5://127.0.0.1:1080 # 指定代理

# 字幕处理
--write-subs # 下载字幕文件，如 .srt 
--embed-subs # 或将字幕嵌入视频
--sub-langs zh-Hans,en # 指定字幕语言
--convert-subs srt # 转换成 srt
--skip-download # 只下载字幕，不下载视频

# 是否保存元数据
--embed-thumbnail # 缩略图
--embed-metadata # 元数据

# 指定 ffmpeg 路径
--ffmpeg-location D:/ffmpeg.exe
```

### 调用不同配置文件

使用 `--config-location` 切换不同的配置文件能提高效率
```bash
yt-dlp --config-location /path/to/config/file.conf [URL] # 直接指定配置文件
yt-dlp --ignore-config --config-location /path/to/config/file.conf [URL] # 忽略默认配置文件并指定配置文件
```
创建多个配置文件，按需使用
```bash
# D:/MPV/default.conf (默认)
--output T:/Downloads/%(title)s.%(ext)s
# --output \\192.168.10.111\Downloads\dir\%(title)s.%(ext)s
--proxy socks5://192.168.10.1:18111
# --cookies T:/Downloads/www.youtube.com_cookies.txt
# --cookies-from-browser "chrome:D:\Chromium\profile\Defaul

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

 先用浏览器登录油管，点击 [Get cookies.txt LOCALLY](https://chromewebstore.google.com/detail/cclelndahbckbenkjhflpdbgdldlbecc) 扩展 - Export ，下载 cookies.txt 文件
```bash
# Chrome 或 Firefox 或 Edge
yt-dlp -F url --cookies-from-browser chrome:"D:\Chromium\profile\Default"
```

## 代替品

[Lux](https://github.com/iawia002/lux) 可能会用到的备用选项
```bash
lux url # 下载，也可以一次添加多个视频链接，空格分隔
lux -i url # 或先查看
lux -f 64-7 url # 从上面的结果中指定
lux -F links.txt # 从文件中读取下载链接（先将链接写入该文件）
lux -o ~/Videos/ URL # -o 参数指定保存的路径
annie URL # 不仅可用下载视频，还可用是播放列表链接，图片链接
annie -i ep12345 av12345 # B站可以用 av 和 ep 加数字下载

# 选项
-p # 下载视频列表
-start # 从视频列表的第几个开始下
-end # 下载到几个
-items # 指定要下载哪几个，比如 1,5,6,8-10
-eto # B站独有参数，用于没有标题只有文件名的播放列表
-j # 输出 JSON 格式结果
```