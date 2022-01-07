---
title: "威联通通过 Docker 安装 Transmission"
date: 2022-01-07T17:17:13+08:00
draft: flase
tags: ["transmission"]
categories: ["软件"]
---
Transmission 是著名又老牌的 PT/BT 下载软件。这里将说明使用威联通的 Docker 安装 Transmission（ Docker 真的香 ）。

首先，登陆威联通后启动 ContainerStation - 创建 - 搜索 Transmission - 选择结果中的第二进行安装，如图所示：

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2201/0601.jpg)

威联通使用 Docker 安装 Transmission 和 Aria2 基本相似，但注意挂载 /watch 目录。它非常方便。即你将种子文件丢到这个目录中后，便会自动开始下载并将种子文件标记为“已添加”，例如我这里挂载了 /Downloads/torrent 目录。

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2201/0602.jpg)

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2201/0603.jpg)

安装完成后你发现默认的 WebUI 比较简陋，且不是中文界面。当然，你可以就这么使用它，同时也可以弄的更舒适。我们可以安装 transmission-web-control。能让 Transmission 的 WebUI 更漂亮并支持中文。下面来说说如何安装。

在 ContainerStation 中点击 Transmission 镜像，再点击上面的“终端机”并输入 bin/sh，然后浏览器会打开一个新页面并进入终端，如图所示。

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2201/0604.jpg)

在打开的终端页面执行命令：
```
# 查找 web 目录
find / -name web # 结果为 /usr/share/transmission/web

# 下载 transmission-web-control 安装脚本
wget https://github.com/ronggang/transmission-web-control/raw/master/release/install-tr-control-cn.sh 

# 执行该脚本
bash install-tr-control-cn.sh

# 选择6（指定安装目录），输入上面得到的 /usr/share/transmission（注意，这里不包含 web）

# 接着选择1（安装最新的发布版本（release））
```

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2201/0605.jpg)

安装完成后使用浏览器访问 NAS-IP:9091 即可看到新的 WebUI 了。

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2201/0606.jpg)

最后，Transmission 和 Aria2 不同的地方在于它是专业的 bt 下载。我通常会使用 Aria2 下载热门 bt 资源，以及 http/ftp 资源。而不那么热门的资源，我会使用 Transmission 。

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2201/0607.jpg)