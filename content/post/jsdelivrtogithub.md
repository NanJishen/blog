---
title: "JSDelivr CDN 加速 GitHub"
date: 2020-06-19T16:49:13+08:00
draft: false
tags: ["Github"]
categories: ["方法"]
---

jsDelivr 提供了 Web 上常用静态资源的服务，不但有全球 CDN 加速，也采用了国内的 CDN 进行加速（有备案）

jsDelivr 确保每个地区的使用者都能获得最好的连接速度，它还可以可将不同的 JavaScript 或 CSS 集合在一起使用。

[官方网站](https://www.jsdelivr.com) | 加速地址：https://cdn.jsdelivr.net

### GitHub 使用镜像加速服务

很简单，比如，将仓库中的 DPlayer.min.js 文件利用 jsDelivr 加速，以下示例：

**原始链接：**
`https://github.com/sunpma/goIndex/tree/master/js/DPlayer.min.js`

**jsDelivr 加速链接：**
`https://cdn.jsdelivr.net/gh/sunpma/goIndex/js/DPlayer.min.js`

### 如果按版本分类，Releases 一个 v1.0 版本，

**原始链接：**
`https://github.com/sunpma/goIndex/blob/v1.0/js/DPlayer.min.js`

**jsDelivr 加速链接：**
`https://cdn.jsdelivr.net/gh/sunpma/goIndex@v1.0/js/DPlayer.min.js`

如果要直接加载最新版本，可以使用 latest 标签：
`https://cdn.jsdelivr.net/gh/sunpma/goIndex@latest/js/DPlayer.min.js`

**加载镜像连接的规则：**
- GitHub 镜像，为 gh
- WordPress 镜像，为 wp
- npm 镜像，为 npm

![](https://gitee.com/nanjishen/Npic/raw/master/img/gzh-end.png)