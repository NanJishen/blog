---
title: "Youtube 详细统计信息测速指南"
date: 2021-03-04T14:45:18+08:00
draft: flase
tags: ["youtube"]
categories: ["方法"]
---

对于出海上网来说，无论是自架梯子还是购买机场，都需要测试网速，虽然可以使用 Speedtest 这样的标准测速网站，但实际不如直接观看 YouTube 视频“详细统计信息”来的实用高效。

因为，需求上来说，只要能满足视频流的播放，其他的也都满足了，在观看 YouTube 时，随时都可以**右键视频 - 详细统计信息，查看“Connection Speed”项来确认当前速度。**

公式：**Connection Speed÷(1024*8)=实际速度 MB/s**，当然，实际上不用去计算它，一般来说 15000-30000 的速度即可用方向键连续快进的观看1080P的视频了。

- **Video ID / sCPNY：** 每个视频都有的唯一 ID 号码
- **Viewport / Frames：** 当前播放视窗的大小 / 丢帧数据
- **Current / Optimal Res：** 当前视频 / 推荐分辨率大小
- **Volume / Normalized：** 当前播放音量大小 / 标准音量的差异值
- **Codecs：** 视频采用的编码器
- **Connection Speed：** 当前客户端到服务器的实时链接速率（1024×8）
- **Network Activity：** 实时的网络活动
- **Buffer Health：** 缓冲时间（断网后视频可以继续播放的时间）
- **Mystery Text：** 神秘代码
	- S：播放状态（4暂停、8播放、19快进或快退、14加载视频中 ...）
	- T：视频的时间轨道线
	- B：缓冲区间和缓冲区大小（缓冲区的第二数字 - T（时间轨道线）= 缓冲的时间）

![](https://gitee.com/nanjishen/Npic/raw/master/img/gzh-end.png)