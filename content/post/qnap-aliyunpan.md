---
title: "威联通 QNAP 挂载阿里云盘简单明快教程"
date: 2021-12-13T17:46:13+08:00
draft: flase
tags: ["NAS"]
categories: ["软件"]
---

双11期间购入了威联通的NAS，而在今天挂载上了阿里云盘，以便进行HBS3同步作业的云备份，借此也顺便写个简单明快的教程，废话不多说，让我们开始。

### 开启 NAS 的 Web 服务

威联通 - 控制台 - Web 服务器 - 勾选“启用web服务器”- 应用。

### 安装阿里云盘套件
首先，下载并安装阿里云插件，访问项目网页地址：`github.com/iranee/qnap-aliyunpan-webdav` 。选择你对应的版本，例如我是 x86 构架的威联通，那么我选择下载：aliyunpan_1.0.08_x86_64.qpkg 。

下载完成后，在威联通中启动软件中心（ App Center）中，在软件中心的右上角点击“手动安装”按钮，浏览你刚刚下载的安装包后点击安装。

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2112/1301.jpg)

安装完成后，在桌面启动阿里云盘，填写 Token 和 账号密码并保存。
![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2112/1302.jpg)

通过浏览器访问 `NAS-IP:端口号`，来这是以下是否成功，如果能够成功访问就表示成功。

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2112/1303.jpg)

### 挂载为网络磁盘

接下来，我们来将其挂载为网络驱动器。启动文件总管，点击右上角的“远程挂载”按钮，然后选择 Webdav Cloud/Serve.. ，填入 NAS-IP:端口号。

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2112/1304.jpg)

结果看到如下提示便是成功。

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2112/1305.jpg)

打开文件总管，可以看到挂载成功后的阿里云盘。现在可以像管理本地磁盘一样在文件管理器中进行操作（还避免了安装阿里云盘臃肿的客户端）。

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2112/1306.jpg)

常规操作，来，测个速。

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2112/1307.jpg)

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2112/1308.jpg)

它同时支持 HBS 同步套件，比如我设置一个定时同步任务：每晚凌晨1点，将我 NAS 的 2号盘 和 阿里云盘 自动同步一次，这样就保证了数据安全。

由于阿里云盘不限速，所以基本可以20M速度下载（即运营商的200M），所以阿里云盘是目前首选的网盘，我们今天会更在乎成本吗？不会，我们更在乎速度！

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2112/1309.jpg)
