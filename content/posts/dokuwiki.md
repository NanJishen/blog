---
title: DokuWiki 使用方法教程指南
date: 2018-06-018T19:00:00
draft: false
categories: ["自部署"]
tags: ["wiki"]
---

[DokuWiki](https://github.com/dokuwiki/dokuwiki) 是开源、轻量级的维基，特点是无需数据库，所有内容都保存在纯文本文件，安装和备份都非常简单
## 安装

下载解压到已经搭建好的 Web 环境中，需要支持 php，浏览器访问 `dokuwiki/install.php` 完成向导安装，也可以使用 Docker 版本

### 新建页面

只须将浏览器地址栏中的链接结尾指向一个不存在的页面 `域名/dokuwiki/doku.php?id=home:notes`，接着点击右边栏的“创建该页面”按钮，这会创建 `dokuwiki/data/pages/home/notes.txt` 页面，保存即可

### 刷新页面缓存

在页面的 `url` 后加 `&purge=true` 导出文件：以及加 `&do=export_xhtml` 支持 raw、xhtml、xhtmlbody

升级备份等需要备份此3个文件：
- 配置：conf/local.php
- 权限：conf/acl.auth.php
- 用户：conf/users.auth.php

如果将文件名保存成类似 `conf/local.protected.php` 每次在在管理后台保存配置时，就不会覆盖 `*.protected.php` 中的配置

## 配置

- fnencode 非 ASCII 文件名的编码方法：改为 utf-8 可以将 txt 保存为中文名
- showuseras 显示用户为：建议选用户全名，这就不会泄露用户登录帐号
- breadcrumbs 足迹数量：设为 0 不显示
- gzip_output 对 xhtml 使用 gzip 内容编码：开启
- send404 发送 "HTTP 404" 错误信息给不存在的页面：开启
- dnslookups 查询主机名：建议禁用

修改中国时区
```bash
# 在 conf 目录下添加 local.protected.php 文件并写入
date_default_timezone_set("Asia/Chongqing");?>
```

### 侧边栏

- 配置设置 - 基本设置 - sidebar 项写侧边栏使用的页面路径（默认：sidebar）
- 创建该页面（参考上面的创建新页面，dokuwiki/doku.php?id=sidebar），侧边栏就出来了
- 当同级命名空间下有相应的侧边栏页面时，则使用此页面

### 主题

设置默认主题样式，管理 - 模板样式设置：- 体的颜色：阴影颜色（纯白）
- 备选字体的颜色：边框阴影颜色（250，250，250）
- 备选背景的颜色：边框颜色（150，150，150）
- 特别背景的颜色：网站背景颜色（纯白）
- 边框颜色：按钮图标颜色（100，100，100）
- 全站的宽度：主体内容宽度（85em）
- 侧边栏的宽度：侧边栏宽度（12em）

更换第三方主题，右上角 - 管理 - 扩展管理器 -“搜索和安装”标签 - 搜索“Template”- 找到 Bootstrap3 - 安装后在管理 - 配置设置 - 模板 - 选择 “bootstrap3”- 保存

配置 Bootstrap3 主题（配置设置 - Bootstrap3）：选“Bootswatch.com 主题”；勾选“在导航栏中显示主题切换器”，勾选除了以下的主题以隐藏
- 亮色：Cerulean、Lumen、Spacelab、United、Yeti
- 深色：Cyborg、Solar、Slate

### 推荐插件

[树型目录导航](https://www.dokuwiki.org/plugin%3Aindexmenu)、[新建页面](https://www.dokuwiki.org/plugin:addnewpage)、[移动及重命名](https://www.dokuwiki.org/plugin:move)、[Markdown 支持](https://www.dokuwiki.org/plugin:mdpage)

### 替换或去掉 logo

例如主题 bootstrap3，只需替换掉 `\lib\tpl\bootstrap3\images` 目录中的 `favicon.ico` 和 `logo.png` ，如果要要删除
```bash
# 删除 \lib\tpl\dokuwiki\tpl_header.php 中的如下代码
$logoSize = array(); $logo = tpl_getMediaFile(array(':wiki:logo.png', ':logo.png', 'images/logo.png'), false $logoSize);
```

### 备份方法

由于不使用数据库，所以可以将整个根目录用于迁移
- conf：设定档
- lib/plugins：插件目录（备份你要的）
- lib/tpl：模板目录（备份你要的）

个人数据目录为 dokuwiki\data ，其中 cache、index、locks、tmp 目录可以忽略
- data/pages：文档目录（必须备份）
- data/media：多媒体档 （图片，PDF等）（必须备份）
- data/attic：旧版本页面
- data/media_attic：旧版本媒体档
- data/meta：页面描述档（如谁创建，谁修订）
- data/media_meta：多媒体描述档

### 升级版本

可用插件更新，但会有很多其它语言文件，手动升级方法是保留原来的 conf 、data/pages 、data/media 、lib/plugins 、 lib/tpl 目录；下载最新版，再将它们覆盖回去

