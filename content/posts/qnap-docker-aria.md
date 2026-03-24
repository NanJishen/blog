---
title: "威联通 QNAP 通过 Docker 部署 Aria2 下载神器"
date: 2021-12-22T01:01:34+08:00
draft: flase
tags: ["NAS"]
categories: ["软件"]
---

这是我的威联通 NAS 第一次使用 Docker 容器并安装镜像。我选择了一个我最常用的，也是所有达人都会使用的下载神器：Aria2。说它是神器，是因为它极为小巧并且强大。

威联通的 Docker 镜像也是走 DockerHub，所以一切都是通用的（ Linux Windows MacOS ）。因此你在 DockerHub 上只要在 Tag 中确认了它是支持 X86 架构（amd64）的便是都可以使用。

启动 ContainerStation（如果你没有安装，请去软件中心安装它），接着点创建，输入你要搜索的镜像名称，例如下图：

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2112/2101.jpg)

由 p3terx 大神制作的 aria2-pro 是公认最好的镜像。它提供了完美配置加自动更新 Tracker 服务器（ aria2 对小白来说上手很难，主要是因为小白不会修改配置文件和更新 Tracker ，但是修改配置文件是 Linux 最基础的东西）。

我之前在电脑上用的并没有使用 Docker 去部署，而是自行修改配置文件并运行的。现在在威联通上这一点就简单了，小白也可以轻松做到。但是 Docker 是有点学习成本的，放心不会太高（建议：比起照搬，最好是去了解下 Docker 的参数）。

## 开始安装流程

威联通安装 Docker 镜像和 DockerHub 上获取是一样的。首先选择你的版本，通常无脑 “latest” ，字面意思：“最新的”，然后下一步：

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2112/2102.jpg)

名称随意自定义，只是为了方便你识别。然后点“高级选项”，进行主要参数配置。先指定网络端口“主机=容器”（具体内容可以从 DockerHub 说明文档中查阅）。例如这里的是 6800 作为 RPC 端口（就是我们浏览器访问控制台的端口），然后指定 TCP+UDP 的 6888 端口，这个是下载时用的监听端口。

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2112/2103.jpg)

网络配置完成后，在左面点“共享文件夹”，现在来挂载所需的目录。挂载目录在威联通中是可以点选的。例如这个镜像需要配置两个目录，分别为 /config 和 /downloads，前者保存配置文件，后者保存下载的目录，之后就可以点击创建了。

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2112/2104.jpg)

创建完成后，威联通会自动启动并运行镜像，然后你就可以用浏览器的 AriaNG 访问了（ AriaNG 是什么？请自行百度）。

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2112/2105.jpg)

默认密码是大神的名字，我们可以修改成自己的密码。威联通提供了 Text Editor 作为文本编辑器，如图的修改，即可更改密码 ↓

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2112/2106.jpg)

容器运行后服务就已经部署好了，最后推荐个微信小程序，就叫：aria，使用起来比较方便，即便你人在外面，也可以直接通过小程序添加下载连接将你要下载的东西下载到家里的 NAS 中了。

![](https://testingcf.jsdelivr.net/gh/nanjishen/nanjishen/img/gzh-end.png)