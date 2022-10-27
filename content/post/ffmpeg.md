---
title: "开源免费音视频处理神器 FFmpeg"
date: 2020-09-26T16:04:00+08:00
draft: flase
tags: ["ffmpeg"]
categories: ["软件"]
---

**FFmpeg 是一款免费开源（LGPL、GPL 许可证），且领先的全能型多媒体处理软件**，可以处理视频、音乐及图片，它采用了非常先进的音频/视频编解码库 libavcodec，能够进行采集、编码、解码、转码、压缩、合并、流化、音视频分离等操作。

不过呢，对于一般电脑用户来说很少会用，因为它是基于命令行的，但是很多软件都使用了它的开源框架，比如：QQ 影音、KMPlayer、暴风影音，以及早期的 Potplayer。

可以说 FFmpeg 是音视频处理界的神器，然而对于小白来说看起来非常难，导致上手困难，但其实操作并没有那么复杂，为了帮助小白打开这扇门，于是就有了这篇文章... 不点个赞吗？

## FFmpeg 的安装

首先就是去[官网下载](http://ffmpeg.org)了，在下面选择 Windows 已经构建好的版本，下载后将压缩包解压，其中 bin 文件夹中的程序就是我们要的。

我个人通常会将 bin 文件夹重命名为 FFmpeg，然后将其移动到个人的软件目录中，我的个人软件目录 `C:\Users\nanji\OneDrive\Apps\FFmpeg`，当然你也可以放到任意目录。

将上面的路径添加到添加环境变量，以便可以在命令行中直接调用：按 [Win]键，输入 env ，点击“编辑系统环境变量”，在下方点击“环境变量”，之后在系统变量中双击 Path ，添加上面的路径即可。加入环境变量后就算完成了，在终端中执行：
```bash
ffmpeg 或 ffmpeg -version # 查看版本，以确认否安装成功
```

## FFmpeg 的使用

这里说说简单的日常使用，如果你是更专业的用户，可以参考官方帮助，了解更高级的用法，不过一般来说，这些对普通用户就足够了~

### 视频信息

```bash
ffmpeg -i video.avi # 查看本地视频信息
ffmpeg -i http://..file1.mp4 # 查看远程 Web 网络视频信息
```

### 格式转换

最常用的就是一个文件的格式转换成另一个：
```bash
ffmpeg -i filename.flv filename.mp4
# 反之
ffmpeg -i filename.mp4 filename.flv

# 拷贝转换，即保持原样的编码不变，只转换格式
ffmpeg -i filename.ts -vcodec copy -acodec copy filename.mp4

# 中文名音乐转换
ffmpeg -i '.\下辈子不一定遇见.m4a' -f mp3 '.\下辈子不一定遇见.mp3'

# WAV 转换到 MP3
ffmpeg -i a.wav -vn -ar 48000 -ac 2 -b:a 256 output-b.mp3

# 选项：
-i # 输入的视频
-f # 输出的视频（格式）
-vn # 有时音频文件有图片，指定不在输出中出现图像
-ar # 设置要转换的音频文件的音频频率，可以使用 8kHz、44.1kHz 或 48kHz 等值调整音质和频率
-ac # 设置音频通道的数量
-b:a # 设置每秒的音频比特率，千位越高，音质越高
```

### 编码并转换格式

用 `-vcodec` 参数来手动指定格式：
```bash
ffmpeg -i filename.wmv -vcodec h264 filename.mp4
ffmpeg -i filename.mp4 -vcodec wmv1 filename.wmv

ffmpeg -i filename.wmv -s 640x480 -b 500k -vcodec h264 -r 30 -acodec libfaac -ab 48k -ac 2 filename.mp4 # 设定更多选项，说明如下

# 选项
-r ：指定帧率
-s ：指定分辨率
-b ：指定比特率；于此同时可以对声道进行转码
-acodec ：指定音频编码
-ab ：指定音频比特率
-ac ：指定声道数
```

H264 为最佳，当然你还可以指定 mpeg4 、libxvid ，不过呢 FFmpeg 默认会根据文件格式选择最合适的容器格式与编码格式，一般不用指定的。

### 压缩视频

```bash
# 降低fps和音频码率以减少大小，同时视频清晰度不变
ffmpeg -i filename.mp4 -r 10 -b:a 32k filename.mp4

# 采用H.264算法压缩视频，并指定10fps，以AAC算法压缩音频，码率32k
ffmpeg -i filename.mp4 -vcodec libx264 -crf 20 filename.mp4 #

# 再比如
ffmpeg -i filename.mp4 -crf 30 filename.mp4
ffmpeg -i 480p.mp4 480p.webm
```

### 转成 GIF 动图

可以将视频转成 Gif 动图：

```bash
# 将视频前 30 帧转成 Gif 动图
ffmpeg -i filename.mp4 -vframes 30 -y -f gif filename.gif

# 将视频转成 Gif 并指定时间和帧率
ffmpeg -ss 00:00:00.000 -i filename.mp4 -pix_fmt rgb24 -r 10 -s 320x240 -t 00:00:10.000 filename.gif
# 上面的参数说明：
-ss 指定了开始时间
-r 指定了以 10 帧频率
-s 指定了输出 320x240 大小
-t 指定了时间长度

# 将视频转为 gif，用 -pix_fmt 指定编码
ffmpeg -i filename.mp4 -ss 0:0:30 -t 10 -s 320x240 -pix_fmt rgb24 filename.gif
```

### 选项与参数

```bash
-i ：输入的文件，即文件的全面（filename）
-vcodec ：编码格式，支持主流的 H.264和H.265（默认值：xvid）
-preset ：编码速率控制，编码越快，信息丢失越多，即视频质量变差
-crt ：输出质量的（0-51）0 为最高质量，默认值 23，建议值 18-28
-y ：不经提示的覆盖输出文件
-vf ：视频过滤器
-acodec ：音频编码方式
-ab ：音频数据流量，一般选择 32，64，96，128（推荐）
```
注：-crt 会直接影响到输出视频的码率，之后再设置－b 指定码率将不会生效；-preset 例如 x264 编码的预设值可以通过该参数指定。它主要影响编码的速度，并不会很大的影响编码出来的结果的质量。

### 合并 MP4 视频

将多个视频合并：

```bash
# mp4 最好是先转成无损的 ts 后再进行合并
ffmpeg -i file1.mp4 -vcodec copy -acodec copy -vbsf h264_mp4toannexb file1.ts
ffmpeg -i file2.mp4 -vcodec copy -acodec copy -vbsf h264_mp4toannexb file2.ts
ffmpeg -i "concat:file1.ts|file2.ts" -acodec copy -vcodec copy -absf aac_adtstoasc filename.mp4
```

### 更改分辨率大小

```bash
ffmpeg -i filename.mp4 -filter:v scale=1280:720 -c:a copy filename.mp4
# 又或者
ffmpeg -i filename.mp4 -s 1280x720 -c:a copy filename.mp4
```

也可以调整视频的宽高比：

```bash
ffmpeg -i filename.mp4 -aspect 16:9 filename.mp4
```

### 转换视频码率

```bash
# 将视频转换成 3 Mbps 码率的视频
ffmpeg -i filename.mp4 -b:v 3000k filename.mp4

# 官方建议用 -b:v 时，应同时加上 -bufsize 用于设置码率控制缓冲器大小
ffmpeg -i filename.mp4 -b:v 3000k -bufsize 3000k filename.mp4

# 指定码率阈值，-minrate（别低于）和 -maxrate（别高于）
ffmpeg -i filename.mp4 -b:v 3000k -bufsize 3000k -maxrate 3500k filename.mp4
```

### 剪辑视频

```bash
# 从 00:00:21 开始剪辑，时间为 10 秒钟
ffmpeg -i filename.mov -ss 00:00:21 -t 00:00:10 -acodec aac -vcodec h264 -strict -2 filename.mp4

# 从 00:01:30 开始剪辑，持续时间为 20秒，编码原样不变
ffmpeg -ss 0:1:30 -t 0:0:20 -i filename.avi -vcodec copy -acodec copy filename.avi

# 从 10秒 开始剪辑，持续15秒（比上面更简洁）
ffmpeg -i filename.mp4 -ss 10 -t 15 -codec copy filename.mp4
ffmpeg -ss 10 -t 15 -i filename.mp4 -codec copy filename.mp4 #（相比上面解决第一帧黑屏问题）

# 裁剪参数 crop=width:height:x:y 说明：
# width 和 height 表示剪裁后的宽和高的尺寸，
# x:y 表示裁剪区域的左上角坐标

# 截取视频局部
ffmpeg -i filename.mp4 -filter:v "crop=width:height:x:y" filename.mp4

# 将竖向的视频 1080 x 1920，保留中间 1080×1080 部分
ffmpeg -i filename.mp4 -strict -2 -vf crop=1080:1080:0:420 filename.mp4

# 截取部分视频，从[80,60]的位置开始，截取宽200，高100的视频
ffmpeg -i filename.mp4 -filter:v "crop=80:60:200:100" -c:a copy filename.mp4

# 截取右下角的四分之一
ffmpeg -i filename.mp4 -filter:v "crop=in_w/2:in_h/2:in_w/2:in_h/2" -c:a copy filename.mp4

# 截去底部40像素高度
ffmpeg -i filename.mp4 -filter:v "crop=in_w:in_h-40" -c:a copy filename.mp4
```

### 视频旋转

```bash
# 旋转 90 度
ffmpeg -i filename.mp4 -metadata:s:v rotate="90" -codec copy filename.mp4

# 顺时针旋转 90 度
ffmpeg -i filename.mp4 -vf "transpose=1" filename.mp4

# 逆时针旋转 90 度
ffmpeg -i filename.mp4 -vf "transpose=2" filename.mp4

# 顺时针旋转 90 度后再水平翻转
ffmpeg -i filename.mp4 -vf "transpose=3" filename.mp4

# 逆时针旋转 90 度后再水平翻转
ffmpeg -i filename.mp4 -vf "transpose=0" filename.mp4

# 水平翻转视频
ffmpeg -i filename.mp4 -vf hflip filename.mp4

# 垂直翻转视频
ffmpeg -i filename.mp4 -vf vflip filename.mp4
```

### 加减速与倒放

```bash
# 视频倒放：无音频
ffmpeg -i filename.mp4 -filter_complex [0:v]reverse[v] -map [v] -preset superfast filename.mp4

# 视频倒放：音频不变
ffmpeg -i filename.mp4 -vf reverse filename.mp4

# 音频倒放：视频不变
ffmpeg -i filename.mp4 -map 0 -c:v copy -af "areverse" reversed_audio.mp4

# 音视频同时倒放
ffmpeg -i filename.mp4 -vf reverse -af areverse -preset superfast filename.mp4

# 视频加速：帧速率变为 2 倍，调整倍速范围（0.25，4）
1ffmpeg -i filename.mp4 -vf setpts=PTS/2 -af atempo=2 filename.mp4

# 视频减速播放
ffmpeg -i filename.mkv -an -filter:v "setpts=0.5*PTS" filename.mkv
```

### 图片与视频转换

```bash
# 将图片序列合成视频
ffmpeg -f image2 -i image%d.jpg filename.mp4

# 将视频分解成图片序列
ffmpeg -i filename.mp4 image%d.jpg
ffmpeg –i test.avi –r 1 –f image2 image-%3d.jpeg # -r 表示频率，-ss 开始时间，-t 持续时间

# 将视频的 8.01 秒处截取 800*600 的缩略图
ffmpeg -i filename.mp4 -y -f image2 -ss 08.010 -t 0.001 -s 800x600 jt.jpg
ffmpeg -r 0.5 -i c:/tmp/image%04d.jpg -i c:/time.mp3 -vcodec mpeg4 c:/filename.mp4

# 添加图片水印
ffmpeg -i filename.mp4 -i logo.png -filter_complex overlay filename.mp4

# 添加 GIF 文件
ffmpeg -y -i filename.mp4 -ignore_loop 0 -i filename.gif -filter_complex overlay=0:H-h filename.mp4
```

### 分离与合并音视频

```bash
ffmpeg -i filename.mp4 -vn filename.mp3 # 从视频分离出音频
ffmpeg -i filename.mp4 -an output-mute.mp4 # 从视频分离出视频

# 从视频中去除音频，使用 -an 参数去掉音频，使用 -vcodec copy 表示拷贝视频原样
ffmpeg -i filename.mp4 -vcodec copy -an filename.mp4

# 提取视频中的音频，使用 -vn 参数去掉视频，-acodec copy 表示拷贝音频原样
ffmpeg -i filename.mp4 -acodec copy -vn filename.mp3

# 音频与视频合成，使用 -y 参数表示覆盖输出文件
ffmpeg -y –i filename.mp4 –i filename.mp3 –vcodec copy –acodec copy filename.mp4

# 选项
-ar # 设置采样率
-ac # 设置声音的声道数
-acodec # 设置声音编解码器，未设定则采用输入流相同的编解码器，一般后面加 copy 表示拷贝，-an 不处理音频
```

### 对视频进行操作

```bash
# 剪切视频，-ss 表示开始时间; -t 表示持续时间
ffmpeg -ss 0:2:50 -t 0:0:20 -i filename.mp4 -vcodec copy -acodec copy filename.mp4

# 视频截图，-s 设置分辨率; -f 强迫采用格式 fmt
ffmpeg –i filename.mp4 –f image2 -t 0.001 -s 320x240 image-%3d.jpg

# 视频分解为图片，-r 指定截屏频率
ffmpeg –i filename.mp4 –r 1 –f image2 image-%3d.jpg

# 视频拼接
ffmpeg -f concat -i filelist.txt -c copy filename.mp4

# 旋转视频
ffmpeg -i filename.mp4 -vf rotate=PI/2 filename.mp4

# 缩放视频，iw 表示输入的宽度，iw/2 就是一半; -1 为保持宽高比
ffmpeg -i filename.mp4 -vf scale=iw/2:-1 filename.mp4

# 视频变速
ffmpeg -i filename.mp4 -filter:v setpts=0.5*PTS filename.mp4

# 音频变速
ffmpeg -i filename.mp3 -filter:a atempo=2.0 filename.mp3

# 音视频同时变速，但音视频为互倒关系
ffmpeg -i filename.mp4 -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2.0[a]" -map "[v]" -map "[a]" filename.mp4
```

### 合并图片为视频

将要合并的图片放在同一个文件夹中，并重命名为：`img001.png` , `img002.png` , `img003.png`：
```bash
ffmpeg -framerate 24 -i img%03d.png filename.mp4
# 或者
ffmpeg -r 0.5 -i img%03d.jpg filename.mp4

# 将图片合成视频
ffmpeg -f image2 -i img%d.jpg filename.mp4
```

### 视频添加水印

```bash
# 视频添加水印，main_w-overlay_w-10 表示视频的宽度-水印的宽度-水印边距
ffmpeg -i filename.mp4 -i logo.jpg -filter_complex [0:v][1:v]overlay=main_w-overlay_w-10:main_h-overlay_h-10[out] -map [out] -map 0:a -codec:a copy filename.mp4

# 添加文本水印
ffmpeg -i filename.flv -vf "drawtext=fontfile=simhei.ttf: text='文本':x=100:y=10:fontsize=24:fontcolor=yellow:shadowy=2" filename.mp4
```

**FFmpeg** 这个神器非常值得学习，因为视频在今天来说是很主流的内容载体，虽然对小白来来说，看起来很复杂，但其实只要掌握几个基本命令就足够了，同时它在 Windows 和 Linux 上都可以使用。

## 更多参考
[在 Linux 上用 FFmpeg 命令进行音频和视频处理](https://www.linuxmi.com/linux-ffmpeg.html)

![](https://testingcf.jsdelivr.net/gh/nanjishen/nanjishen/img/gzh-end.png)