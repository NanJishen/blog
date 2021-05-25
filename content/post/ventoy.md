---
title: "新一代多系统启动U盘 Ventoy 使用指南"
date: 2021-04-02T21:49:08+08:00
draft: flase
tags: ["Ventoy"]
categories: ["软件"]
---

如果你还在用过去的，制作安装系统U盘的方式，那你需要准备N个U盘，并且每次更新镜像都要解压或者用写盘软件重新写盘。同时在今天，可能需要多个系统的安装盘。

今天我介绍的 **Ventoy** 就是为了制作多系统安装U盘的一个非常方便的开源工具。使用它便可以在一个U盘上承载多个系统镜像，并且更新起来非常方便。

有了 Ventoy ，日后便无需反复地格式化U盘。只需将 ISO 系统镜像文件直接拷贝到U盘中，便可从它的多系统引导菜单中直接选择并引导启动。同时 Ventoy 支持常见的操作系统（Windows/WinPE/Linux/VMware 等）。

## 下载并运行

浏览器访问官网：`ventoy.net/cn/download.html`，然后点击页面中的 `ventoy-1.x.xx-windows.zip` 后会跳转到 GitHub 页面（实际上点任何版本都会跳转到 GitHub 下载页面）。

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2103/3101.png)

接着在 GitHub 下载页面，点击 Windows 版本的：`ventoy-1.0.39-windows.zip` 即可弹出下载（注：这个指的是当前你制作U盘的系统，不是安装的系统，我当前使用 Win10 来制作U盘，那么选择 Windows 系统），如下图所示：

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2103/3102.png)

Ventoy 是一个绿色免安装工具，因此将其解压后便可直接使用了。

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2103/3103.png)

## 制作启动U盘

双击 Ventoy2Disk.exe 运行，可以看到如下画面。其中*1.0.39*代表当前 Ventoy 的版本。设备处是空的，表示当前还没有插入U盘。我们可以先插入U盘再双击运行 Ventoy，也可以先运行，再插入U盘后点击下绿色的刷新按钮检测U盘。

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2103/3104.png)

现在将U盘插入电脑，接着点击下绿色的刷新按钮。如你所见，现在看到了U盘，并且显示了U盘中的 Ventoy 版本（这是我之前安装的版本）。然后我们来配置选项，如下图所示 ↓

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2103/3105.png)

配置选项 - 分区类型 - GPT，这个分区格式选择指的是U盘所使用的格式，它默认的是 MBR ，因为我个人不在使用老设备，所以选择了 GPT 。

如果你是首次安装，那么点击安装即可开始安装，这是会格式化这个U盘的。所以你要提前备份好U盘里面的数据。而如果你是升级U盘的 Ventoy 版本。则是不会影响到其中的 ISO 镜像文件的。

点击安装或升级后会弹出如下所示的提示，表示安装成功。

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2103/3106.png)

## 放入镜像

经过以上步骤 Ventoy 已成功安装到U盘。也就是说，该U盘现在已经可以引导启动系统了。但是它还不包含操作系统安装镜像。现在我们来将 ISO 镜像文件放入其中吧 ↓

![](https://cdn.jsdelivr.net/gh/nassets/imgp/posts/d2103/3107.png)

如你所见，我放了3个镜像，分别是：*Windows10*、*ArchLinux*、*WePE64*。

现在，当我用这个U盘引导系统启动后便可以选择这3个其中的一个系统镜像来安装系统了。日后更新系统只需替换这些镜像即可。你说方便不方便？简单不简单？

以上内容高手看起来可能觉得略长，但是对新手却是非常友好的，毕竟安装系统最好别出错。对新手来说，需要细节完善。

## Linux 系统中使用 Ventoy

那么接下来是在 Linux 系统中安装 Ventoy 的方法。由于 Linux 系统大多面向的是老用户了，所以在这里快速说明：
```
cd ~/Downloads # 进入下载文件夹
```
下载 Ventoy 压缩包：
```
wget https://github.com/ventoy/Ventoy/releases/download/v1.0.39/ventoy-1.0.39-linux.tar.gz 
```
解压压缩包：
```
tar xvf ventoy-1.0.39-linux.tar.gz
```
进入 Ventoy 目录后执行脚本：
```
cd ventoy-1.0.39 # 进入 Ventoy 目录
sudo sh VentoyWeb.sh # 执行脚本
```

脚本启动后，会出现如下提示：
```
Ventoy Server 1.0.39 已经启动 ...
请打开浏览器，访问 http://127.0.0.1:24680
 ----------------------------
### Press Ctrl + C to exit ###
```
浏览器访问：`http://127.0.0.1:24680` 确认U盘无误，通常默认安装即可。

## 最后

以上就是安装和使用 Ventoy 的指南。安装完成后，我们通过观察可以发现，U盘中包含一个小的引导分区和一个大的默认使用 exFAT 格式的分区。

而我们上面所说的直接将 ISO 镜像文件放进U盘的就是 exFAT 格式的分区。Ventoy 的方便之处在于它让你不必像以往那样，次次都要重新格式化U盘，这样一来既节省了时间，也减少了麻烦。

哦对了，由于 Ventoy 的特性，你可以在该分区下放入 mp3、mp4、电子书、绿色版软件等，升级也不会干扰到其中的内容，也就是说它还可以当作普通U盘一样日用。

![](https://gitee.com/nanjishen/Npic/raw/master/img/gzh-end.png)
