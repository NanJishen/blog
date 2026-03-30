---
title: "youtube-dl 下载视频使用指南"
date: 2020-08-05T20:56:03+08:00
draft: false
tags: ["YouTube"]
categories: ["软件"]
---

youtube-dl 需要安装 Python 环境，并需配置好系统变量（安装时勾选 Add Python to PATH）

### 安装 youtube-dl

从[官网](https://yt-dl.org)下载 youtube-dl.exe，然后放到任意目录下即可使用，同时视频默认会下载到它的同目录。

一个视频文件，包含视频和音频两样，不同质量的可以有多种组合。
> 假设要下载：https://www.youtube.com/watch?v=xxxxxxxx

### 下载最优视频（默认）

```bash
youtube-dl https://www.youtube.com/watch?v=xxxxxxxx
```

不带任何参数，则默认下载画质、音质最好的视频。

### 查看可选的音视频格式

```bash
youtube-dl -F https://www.youtube.com/watch?v=xxxxxxxx
```

呈现信息：
```bash
249          webm       audio only tiny   53k , opus @ 50k (48000Hz), 1.09MiB
251          webm       audio only tiny  127k , opus @160k (48000Hz), 2.48MiB
140          m4a        audio only tiny  130k , m4a_dash container, mp4a.40.2@128k (44100Hz), 2.99MiB
278          webm       256x144    144p   97k , webm container, vp9, 30fps, video only, 2.17MiB
160          mp4        256x144    144p  110k , avc1.4d400c, 30fps, video only, 1.58MiB
133          mp4        426x240    240p  205k , avc1.4d4015, 30fps, video only, 2.56MiB
243          webm       640x360    360p  409k , vp9, 30fps, video only, 5.54MiB
134          mp4        640x360    360p  427k , avc1.4d401e, 30fps, video only, 4.69MiB
244          webm       854x480    480p  757k , vp9, 30fps, video only, 8.39MiB
136          mp4        1280x720   720p 1142k , avc1.4d401f, 30fps, video only, 12.33MiB
247          webm       1280x720   720p 1417k , vp9, 30fps, video only, 14.22MiB
18           mp4        640x360    360p  529k , avc1.42001E, mp4a.40.2@ 96k (44100Hz), 12.22MiB (best)
```

### 自行组合方案

从返回的列出的信息中，挑选你想要视频，以及音频组合方案，填写对应序号即可，例如：

```
youtube-dl -f 136+140 https://www.youtube.com/watch?v=xxxxxxxx
youtube-dl -f 136 https://www.youtube.com/watch?v=xxxxxxxx
```

## 命令格式

* youtube-dl \[url\]（直接下载，最优视频）
* youtube-dl -F \[url\]（列出所有音频和视频）
* youtube-dl \[playlist_url\]（下载视频列表）

## 下载并合并音视频

```bash
youtube-dl -f 序号+bestaudio --merge-output-format mp4 [url]

# 注意：合并为 mp4 时，音频如果是 webm 格式则会出现错误，因此可以指定格式：
youtube-dl -f 'bestvideo+bestaudio[ext=m4a]' --merge-output-format mp4 [url]
```

### 下载音乐

```bash
youtube-dl -x --audio-format mp3 [url] # 指定下载 mp3 格式的音频（-x 为提取音频；--audio-format 指定格式：best（预设），aac，flac，mp3，m4a，opus（最高音质）等）

youtube-dl -x --audio-format mp3 --embed-thumbnail --add-metadata [url] # 嵌入缩略图并写入说明（--embed-thumbnail：嵌入影片缩图（仅限 mp3 和 m4a/mp4）；--add-metadata：加入影片资讯到 ID3 标签里）

youtube-dl --extract-audio --audio-format mp3 -o "%(title)s.%(ext)s" [playlist_url] # 下载播放列表，并指定用视频标题题和扩展名

youtube-dl -x --audio-format mp3 --embed-thumbnail --add-metadata --playlist-items 1-3 [playlist_url] # 下载该播放列表的 1~3 首歌，并存成 MP3
```

### 设定代理

```bash
youtube-dl --proxy 127.0.0.1:1080 [url] # 指定 HTTP 代理下载，IP 开头用 socks5:// 可以指定 Socks5 代理
```

## 字幕相关

以下命令能够实现，将视频带有的字幕一起下载下来

```bash
youtube-dl --list-subs [url] # 列出所有字幕
youtube-dl --write-sub --sub-format "ass/srt/best" --convert-subs "srt" "url"

# 选项
—write-sub # 写入字幕
--sub-format # 指定字幕格式，按顺序选，不存在则选下一个
--convert-subs # 转换字幕，格式有限制，通用为 srt ，若不转，某些字幕可能是 .vtt 的，如果有 ass 字幕可下载，则无须加此项
--list-subs # 列出所有字幕
--embed-sub # 将字幕合并至影片中，需搭配 --write-sub 使用
--all-subs # 下载所有字幕
--sub-lang # 指定字幕语言，多个语言用逗号分隔

# 实例
youtube-dl --sub-lang zh-CN,en --write-sub --embed-subs [url] # 下载中英字幕并写入到影片
youtube-dl --write-sub --sub-format "ass/srt/best" --convert-subs "srt" url # 一并下载字幕
youtube-dl --skip-download --all-subs url # 下载所有字幕
```

![](https://testingcf.jsdelivr.net/gh/nanjishen/nanjishen/img/gzh-end.png)