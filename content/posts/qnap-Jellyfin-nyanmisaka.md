---
title: "威联通通过 Docker 安装 Jellyfin"
date: 2022-01-08T00:54:10+08:00
draft: flase
tags: ["jellyfin"]
categories: ["软件"]
---

威联通通过 Docker 安装 Jellyfin 是很简单的。但是支持硬件解码对小白来说略难。不过其实采用  nyanmisaka 大神的 Docker 镜像，是默认支持硬件转码的。有效的减少了折腾。下面就来说说如何安装。

登陆威联通后，启动 ContainerStation（如果你没有安装可以先去 APP Center 中安装它），然后，点击创建 - 搜索 Jellyfin - 选择结果中的 nyanmisaka/Jellyfin 如图所示：

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2201/0701.jpg)

指定端口并挂载目录。这里的 Media 目录挂载到 NAS 上的你存放电影的目录，我是将电影和剧集都放在了我的威联通上的 Media 目录中的，因此我如下挂载，而你实际上要按照你的设置的目录挂载。

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2201/0702.jpg)

安装完成就可以通过 NAS-IP:端口号 访问了。让我们开始安装向导，第一步当然是先选择语言了。接着设置管理员账号。等一切都完成后你可以添加其他用户的账号，例如家里人的账号：

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2201/0703.jpg)

添加媒体库，这里我先添加个电影媒体库做为示例，之后你可以添加其他媒体库：

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2201/0704.jpg)

最后是设置元数据语言和远程访问，为了说明简洁，所以我没有说太多废话，你其实可以完全看图做选择：

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2201/0705.jpg)

至此，就全部完成了，现在可以愉快的使用了。搭建完后感觉太专业了，极度舒适。一次搭建就一直使用了，Docker 更新也方便。接下来设置一下，以开启硬件解码：

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2201/0707.jpg)

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2201/0708.jpg)

最后，感谢 nyanmisaka 大神的奉献，生活才这么酷炫！专业级流媒体系统能够自动识别所有影片文件，并自动添加海报和简介，再自动将漫威电影合并为合集。是的，全自动了...

话说，2021年时间太紧缺了，好多剧集都没时间看呢，一直被我推迟... 另外，今天搭建这个也是为了即将到来的假期，方便家里人观看或孩子看动画片用。要不我也不着急搭，我个人用SMB也能很舒服的播放。

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2201/0706.jpg)