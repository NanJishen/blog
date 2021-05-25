---
title: "图片防盗链解决方案"
date: 2021-03-12T20:50:06+08:00
draft: flase
tags: ["方法"]
categories: ["图床"]
---

很多时候，图片镜像缓存服务有不错的用途：

- 将有防盗链的图片引用到网页，使其能显示出来
- 将 http 图片引用到 https 页面，以绕过证书验证
- 加载无法显示的图片（X号的图）
- 加快显示，加载较慢的图片

图片镜像缓存服务：

```
https://search.pstatic.net/common?src=
https://imageproxy.pimg.tw/resize?url=
https://images.weserv.nl/?url=
https://pic1.xuehuaimg.com/proxy/
```

部分服务链接头可以不添加 `http(s)://` 协议:

```
https://imageproxy.pimg.tw/resize?url=https://i.imgur.com/hWghm6oh.jpg
https://images.weserv.nl/?url=i.imgur.com/hWghm6oh.jpg
https://pic1.xuehuaimg.com/proxy/i.imgur.com/hWghm6oh.jpg
```

首推 [images.weserv.nl](http://images.weserv.nl) ，不仅可以作为图像缓存，还有多种参数可选，例如修改图片尺寸，旋转图片等。

防盗链图片演示：

```
http://pic1.zhimg.com/v2-8b657dff159debf1cff463d61b7dcafd_r.jpg
```

该图片是知乎的图片，存在防盗链，在图片外链前面加上图片镜像服务后就可以正常显示了。

```
https://i.imgur.com/hWghm6oh.jpg
```

这是知名图床 imgur 上的图片，其不限制上传的图片类型，所以国内无法打开，但在外链前加上图片镜像服务后即可正常显示。

[免费图床推荐](https://hao.su/pic.html)

![](https://gitee.com/nanjishen/Npic/raw/master/img/gzh-end.png)