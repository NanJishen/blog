---
title: "CopyQ 剪贴版使用教程指南"
date: 2026-04-15T21:58:03+08:00
draft: false
categories: ["软件"]
tags: ["CopyQ","剪贴板"]
---
## 开始

[CopyQ](https://github.com/hluk/CopyQ) 是剪贴板软件，功能强大且支持命令脚本
## 设置

主面板上 Ctrl + P 打开首选项
- 托盘 - 禁用托盘图标，显示剪贴板内容10条，选择“快捷”标签页  
- 条目 - 图片 - 图片编辑器命令：mspaint.exe %1  
- 条目 - 文本 - 取消“保存和现实 HTML 和 富文本”  
- 条目 - 标记：自定义标签，例如 todo，之后右键条目选添加标记  
- 快捷键 - 显示托盘菜单（Alt + , ），显示/隐藏主窗口（Alt + . ）  
## 主题

设置 - 外观 - 编辑主题：One-Dark 
- 字体：等距更纱黑体 SC SemiBold 12px
- 正常：1e2227，a8afbc
- 选中：161616，d0852e
- 发现：ffff7f，ff5500
- 交替：23272e
- 勾选：系统图标、消除锯齿、主题色用于标签页
- 可以进一步点底部的“编辑主题”
```bash
# 修改以下两项可以改变标签宽度
tab_bar_tab_selected_css=padding: 0.5em 1em
tab_bar_tab_unselected_css=padding: 0.5em 1em

# 修改以下两项可以去掉标签之间的空隙
tab_bar_tab_selected_css=padding: border: 0em solid
tab_bar_tab_unselected_css=padding: border: 0em solid
```

## 添加命令

在主界面按 F6 打开命令管理器，点左上角“添加”

### 自带命令

搜索自带的命令，下面几个常用及设置快捷键
- 固定（Ctrl+↑），解除固定（Ctrl+↓）
- 移动到指定标签页（Ctrl+→），高级 - 复制到标签页选你要的标签
- 在浏览器中打开（Ctrl+U ）：高级 - 内容中填写 `^(https?|ftps?|file)://`
- 粘贴当前日期和时间（Ctrl+Alt+F5，全局快捷键）
- 剪贴板粘贴为纯文本（Shift+V，全局快捷键）  
- 忽略“密码”窗口：高级 - 修改窗口为密码管理器窗口栏名称

### 创建命令

添加选“新建命令”在高级选项卡
- 名称：自动将 http 开头的内容移动到指定标签
- 类型：自动执行 
- 内容：`^(https?|ftp)://`  
- 格式：text/plain  
- 动作：复制到“你指定标签”并勾选“删除”

自己编写命令

删除所有非固定项目（Ctrl+Del，菜单中快捷键）
```bash
copyq:
var items = Array
.apply(0, Array(size()))
.map(function(_, i){ return i; })
.filter(function(row){ return !plugins.itempinned.isPinned(row) })

if (items.length > 0) {
remove.apply(this, items)
}
```
编辑并粘贴（Ctrl+Alt+Shift+V，全局快捷键）
```bash
copyq:
var text = dialog('paste', str(clipboard()))
if (text) {
copy(text)
copySelection(text)
paste()
}
```
清空指定标签，筛选器 `copyq: size() || fail()`
```bash
copyq:
tab(config('clipboard_tab'))
items = Array
.apply(0, Array(size()))
.map(function(x,i){return i})
remove.apply(this, items)
```

### 导入命令

在[用户社区](https://github.com/hluk/copyq-commands)能够找到很他人制作好并分享的命令，例如，下载[快速保存为文件](https://github.com/hluk/copyq-commands/blob/master/Application/QuickSave.ini)并修改其中 `currentPath('T:/Downloads')` 为你要保存的路径，然后在命令管理器底部点击“加载命令”导入该文件，设置快捷键 Ctrl+S，菜单中


