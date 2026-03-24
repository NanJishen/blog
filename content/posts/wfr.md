---
title: "微软推出文件恢复工具：Windows File Recovery"
date: 2020-06-30T10:11:07+08:00
draft: false
tags: ["文件恢复"]
categories: ["软件"]
---

微软推出了免费的文件恢复工具：Windows File Recovery。你可以在 Microsoft Store 中下载（即 Win10 商店中下载）。

同时，**该工具仅支持 Win10 version 19041.0 及以上版本**，也就是你要升级到最新版本 Win10 2004，才能使用它！

我们删除文件时，实际上只是将其在硬盘上标记为“可写入新数据”而已，这时，如果此时没有新的数据写入覆盖该区域的硬盘块，那么就可以轻松的将其恢复。

## 命令格式

结构上来说比较简单，命令格式为：

```
winfr source-drive: destination-drive: [/switches] 
```

**解释：**

- winfr（调用该工具的起始命令）
- source-drive（源驱动器）
- destination-drive（目标驱动器）
- /switches（调用的参数）

注意：我们指定的恢复到磁盘，目标的位置和原删除文件所在的磁盘不能是同一个。比如我们恢复C盘删除的文件不能选择恢复到C盘，可以选择恢复到D盘E盘，然后再移动到你要移动的位置即可。


## 实际操作

现在，我们来给 C 盘中刚刚删除的几个 mp3 文件恢复一下，将其恢复到 D 盘，输入命令：

```
winfr C: D: /r /n *.mp3
```

备注：`/r` 指定了分段模式  `/n` 指定了文件过滤器，即指定恢复了 mp3 文件

### 更多示例：

恢复 C 盘里某个具体的文件恢复到 E 盘：

```
winfr C: E: /n \Users\<username>\Documents\xxx.docx
```

恢复 C 盘某个具体图片至 E 盘：

```
winfr C: E: /n \Users\<username>\Pictures\.JPEG /n \Users\<username>\Pictures\.PNG
```

恢复 C 盘的文档文件夹至 E 盘：

```
winfr C: E: /n \Users\<username>\Documents\
```

**段模式下的使用语法（/r）：**

恢复 C 盘下已删除的 PDF 和 Word 文档至 E 盘：

```
winfr C: E: /r /n *.pdf /n *.docx
```

恢复 C 盘下包含 “invoice”文件名的文件至 E 盘：

```
winfr C: E: /r /n *invoice*
```

**签名模式下的使用语法（/x）：**

建议使用前请使用以下命令查看支持的扩展格式以及文件类型：

```
winfr /#
```

恢复 JPEG 和 PNG 文件至 E 盘：

```
winfr C: E: /x /y:JPEG,PNG
```

恢复 ZIP 文件至 E 盘：

```
winfr C: E:\RecoveryTest /x /y:ZIP
```

## Windows File Recovery 的文件恢复模式

默认：如果你的硬盘是 NTFS，用这个即可

签名：如果你的硬盘是 FAT 又或 FAT 和 exFAT 的U盘，就选这个

分段：如果要恢复比较久的文件，选这个

*注：如果发现文件误删，应该立刻恢复，这样成功率是最高的，如果被覆写了，则难以恢复！*

微软推出的自家的恢复文件工具目前是命令行工具，不知道日后会不会推出图形化工具，不过我个人认为，命令行也不错，只是对小白不太友好。最后附上官方帮助文档：

> [https://support.microsoft.com/zh-cn/help/4538642/windows-10-restore-lost-files](https://support.microsoft.com/zh-cn/help/4538642/windows-10-restore-lost-files)

![](https://testingcf.jsdelivr.net/gh/nanjishen/nanjishen/img/gzh-end.png)