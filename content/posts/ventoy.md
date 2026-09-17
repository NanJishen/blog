---
title: Ventoy制作多系统启动U盘使用指南
date: 2022-05-02T21:49:08
draft: false
tags:
  - Ventoy
categories:
  - 软件
---

在今天，可能需要具备多个系统安装U盘。[Ventoy](https://www.ventoy.net) 就是为此的开源工具。它能在一个U盘上承载多个系统镜像，且更新无需重新格式化U盘。

只需将 ISO 系统镜像文件直接拷贝到U盘中，便可从它的多系统引导菜单中直接选择并引导启动。同时 Ventoy 支持常见的操作系统（Windows/WinPE/Linux 等）。

## 下载制作

从[发布页](https://github.com/ventoy/Ventoy/releases)下载对应系统的包，例如 Windows 的`ventoy-windows.zip`

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2103/3102.png)

它绿色免安装，只需将其解压后便可直接使用。

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2103/3103.png)

双击其中的 `Ventoy2Disk.exe` 启动，其中 1.0.39 代表当前版本。设备处是空的，表示当前还没插入U盘。

可以先插入U盘再启动 Ventoy，也可以先运行后插入U盘再点击下绿色的刷新按钮。

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2103/3104.png)

完成向导
- 点左上角“配置选项” -> 分区类型 -> GPT 新设备选这个，老设备选 MBR
- 安装：首次安装会格式化这个U盘并建立分区，因此要先备份好U盘数据
- 升级：日后升级则是不会影响到其中的 ISO 镜像文件的

## 添加镜像

给已经安装好后的 Ventoy 添加系统安装镜像是说，只需将 ISO 文件放入其中，例如我放了3个镜像：*Win10*、*ArchLinux*、*WePE64* ↓

![](https://testingcf.jsdelivr.net/gh/nassets/imgp/posts/d2103/3107.png)

现在用该U盘引导系统启动，便可以在这3个中选择一个来安装系统了。日后更新系统只需替换这些镜像即可。

## Linux 系统

```bash
# 进入下载目录
cd ~/Downloads
# 下载压缩包
wget https://github.com/ventoy/Ventoy/releases/download/v1.0.39/ventoy-1.0.39-linux.tar.gz
# 解开压缩包
tar xvf ventoy-1.0.39-linux.tar.gz

# 进入 Ventoy 目录后执行脚本
cd ventoy-1.0.39
chmod +x VentoyWeb.sh
sudo sh VentoyWeb.sh
```
启动脚本后提示如下
```bash
Ventoy Server 已经启动...
浏览器访问 http://127.0.0.1:24680
 ----------------------------
### Press Ctrl + C to exit ###
```
浏览器访问 `127.0.0.1:24680` 确认U盘无误后点击安装

## 使用U盘

U盘实际上被分成两个分区，引导分区和使用分区，在使用分区中不仅可以放入ISO镜像，也可以放入其它文件像日常U盘一样使用。每次更新都不会影响到使用分区里的数据。
