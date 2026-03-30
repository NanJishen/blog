---
title: "给Win10右键菜单加上校验文件功能"
date: 2021-03-14T16:50:37+08:00
draft: flase
tags: ["校验哈希值"]
categories: ["方法"]
---

有时候，我们需要校验文件的哈希值，以确保该文件是否有损坏，或者被篡改。比如 Win10 或 Ubuntu 系统的安装镜像。若哈希值错误，则表示不适合重装系统，否则重装失败的话，原来的系统也进不去了。

哈希值就好像是文件的身份证号码，基本是无法伪造的。日常中主要使用两种哈希值校验码：**MD5**和**SHA1**。

很多人会选择安装第三方软件来校验下载回来的文件的哈希值是否和站长提供的匹配。不过我今天要说的是，不用任何软件，给 Win10 右键添加“文件校验”（哈希值）的功能。这样以后校验某个文件的时候，直接右键该文件即可。

## 第一步

首先，右键**桌面** - **新建** - **文本文件**，接着重命名该文件名为“校验Hash.reg”（这里要注意，必须包括扩展名，因为我们需要建立的是一个注册表文件）。

## 第二步

**右键刚刚建立好的“校验Hash.reg”文件** - 点**编辑**，这时候便会用记事本打开该文件，然后将如下内容复制并粘贴到该文件里，保存退出：

```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\hash]
"MUIVerb"="校验 Hash"
"SubCommands"=""
"Icon"="PowerShell.exe"

; SHA1
[HKEY_CLASSES_ROOT\*\shell\hash\shell\01menu]
"MUIVerb"="SHA1"

[HKEY_CLASSES_ROOT\*\shell\hash\shell\01menu\command]
@="powershell -noexit get-filehash -literalpath '%1' -algorithm SHA1 | format-list"

; SHA256
[HKEY_CLASSES_ROOT\*\shell\hash\shell\02menu]
"MUIVerb"="SHA256"

[HKEY_CLASSES_ROOT\*\shell\hash\shell\02menu\command]
@="powershell -noexit get-filehash -literalpath '%1' -algorithm SHA256 | format-list"

; MD5
[HKEY_CLASSES_ROOT\*\shell\hash\shell\03menu]
"MUIVerb"="MD5"

[HKEY_CLASSES_ROOT\*\shell\hash\shell\03menu\command]
@="powershell -noexit get-filehash -literalpath '%1' -algorithm MD5 | format-list"

; Allget-filehash -literalpath '%1' -algorithm RIPEMD160 | format-list
[HKEY_CLASSES_ROOT\*\shell\hash\shell\04menu]
"CommandFlags"=dword:00000020
"MUIVerb"="ALL"

[HKEY_CLASSES_ROOT\*\shell\hash\shell\04menu\command]
@="powershell -noexit get-filehash -literalpath '%1' -algorithm SHA1 | format-list;get-filehash -literalpath '%1' -algorithm SHA256 | format-list;get-filehash -literalpath '%1' -algorithm MD5 | format-list"
```

只是这样还不行，我们还需要将该文件保存为 UTF-16LE 编码：点击左上角的**文件** - **另存为** - **编码选 UTF-16LE** - **保存**。

## 最后

最后一步了，你只要**双击校验 Hash.reg 文件** 即可，这时就会将文件的内容导入到你系统的注册表相应的键值。那么也就生成了右键菜单条目。接着你只要右键你需要校验的文件就能看到“校验 Hash ”的选项了。

原理实际上很简单，通过调用系统自带的 Powershell 命令，来对选中的文件进行校验，因此该方法也不适合 Win7 系统。

## 还有一件事

没错，这个时候你或许会问，要如何取消这个菜单呢？很简单了，只要和刚才一样，再建立一个“删除校验.reg”的文件，然后将内容如下写入：

```
Windows Registry Editor Version 5.00

[-HKEY_CLASSES_ROOT\*\shell\hash]
```

保存退出并双击执行，系统就会删除掉对应的注册表键值，那么“校验 Hash”条目就不复存在了。

![](https://testingcf.jsdelivr.net/gh/nanjishen/nanjishen/img/gzh-end.png)