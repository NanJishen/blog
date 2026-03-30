---
title: "Google谷歌搜索方法和技巧"
date: 2022-10-05T00:37:56+08:00
draft: flase
tags: ["google"]
categories: ["方法"]
---

## 基础搜索

不管你要搜索什么，都应先用简单的字与词进行搜索，例如 `最近的停车场在哪里` 。你随时可以根据需要添加一些描述性字词。如果你要查找特定地点的某个场所或商品，可添加该地点名称。例如：`广州早茶`。不想打字？可以查看[如何使用语音搜索功能](https://support.google.com/websearch/answer/2940021)。

### 仔细选择措辞

在确定输入搜索框中的字词时，尽量选择要查找的网站上可能会出现的字词。 例如：不要使用`我的头很痛`，而要使用`头痛`这样的精确的关键词，因为医学网站上往往会使用后者。

### 快速查询

在你输入搜索字词后直接在搜索结果页上给出相关解答。当然并非所有功能在所有地区都提供。

- **天气：** 例如 `weather:本溪`、`广州天气`
- **股票：** 例如 `stocks:工商银行`
- **地图：** 例如 `map:本溪`
- **字典：** 例如 `define:apple`
- **计算：** 例如 `3\*9123` ，数学公式或求解复杂的图形公式。
- **电影：** 例如 `movie:CODA`
- **体育：** 搜索球队的名称，即可查看相关赛程和比赛得分等信息。
- **基本信息：** 搜索名人、地点、电影或歌曲的名称即可看到相关信息。
- **指定源：** 例如 `apple source:the_verge`，然后切换到新闻标签

### 单位换算

各种单位的换算可以使用 `in` 关键字，例如：
- **货币换算：** 例如 `$100 in CNY`
- **单位换算：** 例如 `毫米 in 厘米`
- **重量换算：** 例如 `500克 in 斤`
- **速度换算：** 例如 `10公里 in 英里`
- **时间换算：** 例如 `3小时 in 分钟`

### 各种操作符
- **" "**：引号括起能完整的搜索内容，例如 `"william gates"` 能排除 bill gates
- **OR，/，|**：逻辑“或”，例如 `jobs OR gates / jobs | gates`
- **AND**： 逻辑“和”，例如 `jobs AND gates`
- **-**： 逻辑“排除”，例如 `jobs -apple`
- **\***：“通配符”将匹配任何单词或短语，例如 `steve * apple `
- **()**：说个术语或操作符分组，例如  `(ipad OR iphone) apple`
- **$**：搜索价格，适用于欧元，但不适用于英镑，例如 `ipad $329`
- **+：** 强制对单个单词或短语进行精确匹配搜索，例如 `jobs +apple`

### 专家搜索提示
想了解更多有助于你成为搜索达人的提示和技巧？请点击以下链接，了解更多高级搜索技巧。

- [搜索运算符](https://support.google.com/websearch/answer/2466433)
- [逆向图片搜索](https://support.google.com/websearch/answer/1325808)
- [在 Google 上搜索图片](https://support.google.com/websearch/answer/112511)
- [过滤搜索结果](https://support.google.com/websearch/answer/142143)

---
## 指定标题和链接搜索

`intitle` 用来搜索标题中包含某个词(或词)的页面。例如 `intitle:apple`

`allintitle:` 与 intitle 类似，但只返回包含 title 标记中所有指定单词的结果。例如，allintitle:apple iphone

`inurl:` 查找 URL 中包含某个单词(或单词)的页面。例如 `inurl:apple`

`allinurl:` 与 inurl 类似，但只返回包含 URL 中所有指定单词的结果。例如 `allinurl:apple iphone`

inanchor: 查找链接到特定锚文本的页面，例如 `inanchor:apple iphone`

`allinanchor:` 与 inanchor 类似，但只返回包含入站锚文本中所有指定单词的结果。例如 `allinanchor:apple iphone`

## 指定日期搜索

`日期..日期` ，例如 `wwdc video 2010..2014`，这将搜索 2010年到2014年之间的 wwdc 视频。

## 指定网站进行搜索

`site:` 用来指定站点进行搜索，例如，`site:quchao.net`（注意：不能在其中加入空格，这是错误的：`site: quchao.net`），下面是一些实例：

- `site:yourblog.com/category` 搜索 WordPress 博客分类页面
- `site:yourblog.com inurl:tag` 搜索 WordPress“ tag”页面
- `site:asos.com -inurl:https` 搜索不安全的页面（即链接不包含 https 的页面）
- `-site:asos.com "搜索内容 & 搜索内容"` 搜索指定内容，但是不包括指定网站
- `intitle:"文章标题包含的内容" -ttti.cc -pinterest` 搜索我们的文章标题内容，但不包括我们的网站，用来看看有没有其它网站盗用了我们的文章

related: 用来查询相关网站，例如 `related:apple.com`

## 提高搜索的精确性

优化图片高级搜索（总体而言）

1. 转到[高级图片搜索](https://google.com/advanced_image_search)。
1. 使用地区或文件类型等过滤条件来缩小搜索结果范围。
1. 点击底部的**高级搜索**。

**搜索精确尺寸的图片**，在关键字后加上 `imagesize:<宽度>x<高度>` 来指定尺寸（以像素为单）：imagesize:500x400

**搜索社交媒体**，在关键字前加上 `@` 可用于搜索社交媒体：`@twitter`

**搜索特定价格**，在表示价格的数字前加上 `$` ，例如：`相机 $400`

**从搜索结果中排除特定字词**，在要排除的关键字前加上 `-`，例如：`中国美食 -麻辣`

**搜索完全匹配的结果**
为字词或短语加上引号。例如：`"最高的建筑"`。

**在某个数字范围内执行搜索**
在两个数字之间加上 `..`。例如：`相机 $50..$100`。

**组合搜索**
在各个搜索查询字词之间加上“`OR`”。例如：`马拉松 OR 比赛`。

**搜索特定网站**
在网站或网域前加上“`site:`”。例如：`site:youtube.com` 或 `site:.gov`。

**查看网站的 Google 缓存版本**
在网址前加上“`cache:`”。前提是已被索引过。

**重要提示：** 并非所有搜索运算符都能返回一个不漏的搜索结果。

**邻近搜索：** `AROUND(X)` 可以查找包含两个单词或短语的页面，例如 `apple AROUND(4) iphone`。表示，单词“ apple”和“ iphone”必须出现在内容中，而且不能超过4个单词的距离。

---

## 按文件的类型搜索

`filetype:` 用来搜索指定的文件类型的文件。例如：`apple filetype:pdf` 或者 `apple ext:pdf` ，这将搜索其中包含 “apple” 一词的 PDF 文件。下面是一些例子：
- `site:ahrefs.com filetype:pdf` 在指定网站搜索 pdf 文件
- `site:ahrefs.com (ext:PDF OR ext:docx OR ext:xls )` 在指定网站搜索多个类型的文件

Google 可将大多数类型的网页和文件内容编入索引。最常编入索引的文件类型包括：
- Adobe Flash (.swf)
- Adobe 便携式文档格式 (.pdf)
- Google 地球（.kml、.kmz）
- GPS 交换格式 (.gpx)
- Hancom Hanword (.hwp)
- HTML（.htm、.html）
- Microsoft Excel（.xls、.xlsx）
- Microsoft Word（.doc、.docx）
- OpenOffice 电子表格 (.ods)
- 富文本格式 (.rtf)
- 可缩放矢量图形 (.svg)
- TeX/LaTeX (.tex)
- 文本文件（.txt、.text、其他文件扩展名），包括采用常用编程语言的源代码：
   - Basic 源代码 (.bas)
   - C/C++ 源代码（.c、.cc、.cpp、.cxx、.h、.hpp）
   - C# 源代码 (.cs)
   - Java 源代码 (.java)
   - Perl 源代码 (.pl)
   - Python 源代码 (.py)
- 无线标记语言（.wml、.wap）
- XML (.xml)

[Google 编入索引的文件类型参考](https://support.google.com/webmasters/answer/35287?hl=zh-Hans)

## 搜索影片种子

`奇异博士2:torrent` 搜索电影
`"IPZ-919"`搜索车牌

## 指定内容进行搜索

`intext:` 搜索内容中某处包含某个单词(或词)的页面。例如 `intext:apple`

`allintext:` 与 intext”类似，但只返回包含页面上某处所有指定单词的结果。例如 `allintext:apple iphone`

## 索引搜索

索引搜索可以呈现一个网站的文件目录，将网站的资源以数据列表的形式呈现出来，用这个方法甚至可以突破一些网站的限制，用法：

- "index of/" 进击的巨人 filetype:mp4 -inurl:xxx，组合搜索
- "index of/" mp3 inurl:lib，配合 inurl: 搜索指定
- "index of/" 软件名，可以突破网站入口下载软件

## 以图搜图搜相关图片

你可以依据图片查找网上的相关图片。

- 类似图片
- 包含这些图片的网站
- 用作搜索依据的图片的其他尺寸版本

参考：[https://support.google.com/websearch/answer/1325808](https://support.google.com/websearch/answer/1325808)

**上传图片 / 拖放图片**

1. 转到 [Google 图片](https://images.google.com/)。
1. 点击“按图搜索”图标，上传一张图片
1. 或将文件管理器图片拖放到搜索窗口

**依据网址进行搜索**

1. 转到您想要用作搜索依据的图片所在的网站。
1. 要复制网址，请右键点击相应图片。
1. 点击**复制图片地址**。
1. 转到 [Google 图片](https://images.google.com/)。
1. 点击“按图搜索”图标。
1. 点击**粘贴图片网址**。
1. 将网址粘贴到文本框中。
1. 点击**按图搜索**。

用作搜索依据的网址不会保存在您的浏览记录中。不过，Google 可能会存储这些网址，以便改善产品和服务。

**依据网站中的图片进行搜索**

1. 转到您想要用作搜索依据的图片所在的网站。
1. 右键点击相应图片。
1. 点击**在 Google 上搜索这张图片**。系统随即会在新的标签页中显示搜索结果。

参考：[https://support.google.com/websearch/answer/1325808](https://support.google.com/websearch/answer/1325808)

Google 会如何使用您用作搜索依据的图片
Google 会将您在搜索时上传的图片存储 7 天。这些图片不会被纳入搜索记录中，仅会用以改善产品和服务。

## 一些复杂的实例

- `site:youtube.com "chicken soup"` 搜索到鸡汤，在结果页面点击“工具”，可以选择类型“素描画”
- `fitness intitle:"write for us" inurl:"write-for-us"` 搜索文章
- `fitness ("write for us" | inurl:"guest post guidelines" | inurl:"inurl:guest-post")` 搜索文章（加入博客）
- inurl:author/tim-soulo 搜索蒂姆做为作者发布的网站和帖子
- `(fitness | health) AND ("write for us" inurl:"guest-post") AND site:.co.uk` 更复杂的实例
- `seo intext:"ryan stewart" inurl:author -site:webris.org` 搜索每一个人写的网站
- `author:”tim soulo” -site:ahrefs.com -site:bloggerjet.com` 搜索 Tim Soulo 的帖子，但排除来自 ahrefs.com 和 bloggerjet.com (Tim 的个人博客)
- `allintitle:review (semrush OR moz OR majestic)` 查找竞争对手的评论
- `site:quora.com intitle:(SEO | "link building" | "keyword research")` 在提问网站搜索答案
- `site:ttti.cc/blog` 搜索指定网站页面的博客

---

## GoogleBot

Googlebot 是 Google 的网页抓取工具的通用名称。具体而言，Googlebot 是两种不同类型的抓取工具的通用名称：用于在桌面设备上模拟用户操作的桌面版抓取工具，以及用于在移动设备上模拟用户操作的移动版抓取工具。
[https://support.google.com/webmasters/answer/182072?hl=zh-Hans](https://support.google.com/webmasters/answer/182072?hl=zh-Hans)

---

## 参考资料

如果你想了解更多关于谷歌搜索的相关知识，也可以访问谷歌官方帮助文档进行加强学习。
[谷歌搜索中文帮助页面](https://support.google.com/websearch?hl=zh-Hans)、[运算符](https://sites.google.com/site/resourcesandsearchstrategies)

[如何使用高级搜索操作员使用 Google（9个可操作的提示）](https://www.youtube.com/watch?v=yWLD9139Ipc)

[Google搜索操作员：完整列表（42个高级操作员）](https://ahrefs.com/blog/google-advanced-search-operators/#find-resource-pages)

# DuckDuckGo

**快捷跳转**，搜索`!gh`，会直接跳转到 GitHub
**将文本转换成 ASCII 码**，搜索 `figlet nanji`
**查看社交没额题状态**，搜索 `@nanjishen`
**密码生成器**，搜索 `password 18`
**命令备忘单**，搜索 `vim cheatsheet`
**颜色与选择器**，搜索 `#99e3c9` 或 `color #99e3c9`，点击后有颜色选择器，也可以 `color picker`
**获取适合用于html的颜色**，搜索 `color codes`
**生成随机数**，搜索 `random number` ，默认从 1-0 之间随机取值
- `random number 50` 从50以内随机生成
- `random number 20 and 30` 从 20 和 30之间随机生成
**生成二维码**，搜索 `qr 任何文本` ，例如 `qr https://ttti.cc`
**获取特殊字符的 HTML 代码**，搜索 `html chars`
**获取一些CSS动画**，搜索 `css animations`
**查看短链接的实际网址**，搜索 `expand 短链接`
**缩短链接**，搜索 `shorten 原链接`
**大小写字母转换**，转换成小写搜索 `lowercase HELLO` ，转换成大写搜索 `uppercase hello`