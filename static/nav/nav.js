// nav.js — 导航数据（原 webstack.yml 转换而来）
// 结构与原 webstack.yml 基本一致，直接编辑本文件即可增删分类/站点：
//
// { taxonomy: '分类名', icon: 'fa-图标名',
//   links: [ { name, url, desc }, ... ] }
//   —— 或者，分类下再分小节时用 list 代替 links：
// { taxonomy: '分类名', icon: 'fa-图标名',
//   list: [ { term: '小节名', links: [ {...}, ... ] }, ... ] }
//
// 修改后直接刷新 index.html 即可生效，无需构建、无需网络请求。

const NAV_DATA = [
  {
    "taxonomy": "常用置顶",
    "icon": "fa-star",
    "links": [
      {
        "name": "极限博客",
        "url": "https://ttti.cc",
        "desc": "极限玩家博客主页"
      },
      {
        "name": "极限搜索",
        "url": "https://so.ttti.cc",
        "desc": "极限玩家快捷搜索集合"
      },
      {
        "name": "极限软件",
        "url": "https://app.ttti.cc",
        "desc": "极限玩家软件推荐"
      },
      {
        "name": "Github",
        "url": "https://github.com",
        "desc": "全球主流代码托管平台"
      },
      {
        "name": "淘宝网",
        "url": "https://www.taobao.com",
        "desc": "最大的网络购物平台"
      },
      {
        "name": "京东购物",
        "url": "https://www.jd.com",
        "desc": "最大的电商购物平台"
      },
      {
        "name": "哔哩哔哩",
        "url": "https://www.bilibili.com",
        "desc": "国内年轻人的视频平台"
      },
      {
        "name": "抖音",
        "url": "https://www.douyin.com",
        "desc": "国内主流短视频平台"
      }
    ]
  },
  {
    "taxonomy": "网络服务",
    "icon": "fa-search",
    "list": [
      {
        "term": "搜索引擎",
        "links": [
          {
            "name": "百度搜索",
            "url": "https://www.baidu.com",
            "desc": "国内最大的搜索引擎"
          },
          {
            "name": "Google",
            "url": "https://www.google.com/ncr",
            "desc": "全球最好的搜索引擎"
          },
          {
            "name": "Bing",
            "url": "https://www.bing.com",
            "desc": "微软的搜索引擎"
          },
          {
            "name": "DuckGo",
            "url": "https://duckduckgo.com",
            "desc": "知名的隐私保护搜索引擎"
          },
          {
            "name": "Yandex",
            "url": "https://yandex.com",
            "desc": "俄罗斯最大的搜索引擎"
          },
          {
            "name": "SimilarSite",
            "url": "https://www.similarsites.com",
            "desc": "根据网址搜索同类网站"
          },
          {
            "name": "Searx",
            "url": "https://searx.space",
            "desc": "基于Searx保护隐私的搜索引擎"
          },
          {
            "name": "Tineye",
            "url": "https://www.tineye.com",
            "desc": "根据链接或图像搜索图像"
          },
          {
            "name": "ImgOps",
            "url": "https://www.imgops.com",
            "desc": "根据链接或图像搜索图像"
          }
        ]
      },
      {
        "term": "翻译查询",
        "links": [
          {
            "name": "Bing 翻译",
            "url": "https://cn.bing.com/translator",
            "desc": "微软出品速度快的在线互译"
          },
          {
            "name": "Google 翻译",
            "url": "https://translate.google.cn",
            "desc": "谷歌出品全球最好的翻译"
          },
          {
            "name": "Deepl 翻译",
            "url": "https://www.deepl.com/translator",
            "desc": "不错的自然语义翻译"
          },
          {
            "name": "彩云翻译",
            "url": "https://fanyi.caiyunapp.com",
            "desc": "国内专注翻译的服务"
          },
          {
            "name": "腾讯交互翻译",
            "url": "https://transmart.qq.com",
            "desc": "腾讯出品的交互翻译"
          },
          {
            "name": "Mirai",
            "url": "https://miraitranslate.com/en/trial",
            "desc": "来自日本 Mirai 的翻译服务"
          },
          {
            "name": "火山翻译",
            "url": "https://translate.volcengine.com",
            "desc": "新的不错的翻译服务"
          },
          {
            "name": "搜狗翻译",
            "url": "https://fanyi.sogou.com",
            "desc": "老牌的翻译服务"
          },
          {
            "name": "欧路词典",
            "url": "https://dict.eudic.net",
            "desc": "好用快速的英文词典"
          },
          {
            "name": "繁化姬",
            "url": "https://zhconvert.org",
            "desc": "简繁转换"
          },
          {
            "name": "中文转换",
            "url": "https://www.chineseconverter.com/zh-cn",
            "desc": "中文转换器"
          }
        ]
      },
      {
        "term": "电子邮箱",
        "links": [
          {
            "name": "Outlook",
            "url": "https://outlook.com",
            "desc": "全球主流的电子邮箱"
          },
          {
            "name": "Gmail",
            "url": "https://mail.google.com",
            "desc": "全球最好的电子邮箱"
          },
          {
            "name": "Yandex",
            "url": "https://mail.yandex.com",
            "desc": "俄罗斯最好的电子邮箱"
          },
          {
            "name": "QQ",
            "url": "https://mail.qq.com",
            "desc": "国内腾讯的电子邮箱"
          },
          {
            "name": "163",
            "url": "https://mail.163.com",
            "desc": "国内最早的电子邮箱"
          },
          {
            "name": "88 完美邮箱",
            "url": "https://www.88.com",
            "desc": "完美世界的邮箱"
          }
        ]
      },
      {
        "term": "网络存储",
        "links": [
          {
            "name": "百度网盘",
            "url": "https://pan.baidu.com",
            "desc": "国内知名网盘"
          },
          {
            "name": "百度网盘青春版",
            "url": "https://pan.baidu.com/youth/pan/main",
            "desc": "国内知名网盘"
          },
          {
            "name": "阿里云盘",
            "url": "https://www.aliyundrive.com",
            "desc": "阿里自家的云盘"
          },
          {
            "name": "腾讯微云",
            "url": "https://www.weiyun.com",
            "desc": "腾讯出品的网盘"
          },
          {
            "name": "天翼网盘",
            "url": "https://cloud.189.cn",
            "desc": "目前可以代替百度网盘"
          },
          {
            "name": "夸克网盘",
            "url": "https://pan.quark.cn",
            "desc": "目前可以代替百度网盘"
          },
          {
            "name": "蓝奏云",
            "url": "https://www.lanzou.com",
            "desc": "下载高速的网盘适合分享"
          },
          {
            "name": "坚果云",
            "url": "https://www.jianguoyun.com",
            "desc": "国内支持 WebDAV 的网盘"
          },
          {
            "name": "迅雷网盘",
            "url": "https://pan.xunlei.com",
            "desc": "迅雷自家的网盘"
          },
          {
            "name": "Terabox",
            "url": "https://www.terabox.com",
            "desc": "免费网盘"
          },
          {
            "name": "Dropbox",
            "url": "https://www.dropbox.com",
            "desc": "全球最好的网盘之一"
          },
          {
            "name": "MEGA",
            "url": "https://mega.nz",
            "desc": "非常好的私密网盘"
          },
          {
            "name": "TeraCloud",
            "url": "https://teracloud.jp/en/",
            "desc": "日本的网盘支持Webdav"
          },
          {
            "name": "Koofr",
            "url": "https://app.koofr.net",
            "desc": "德国的网盘支持Webdav"
          },
          {
            "name": "PikPak",
            "url": "https://drive.mypikpak.com",
            "desc": "国外网盘支持离线下载播放"
          },
          {
            "name": "InfiniCLOUD",
            "url": "https://infini-cloud.net/en/",
            "desc": "日本网盘支持Webdav"
          },
          {
            "name": "Filen",
            "url": "https://drive.filen.io",
            "desc": "端到端加密云存储平台"
          },
          {
            "name": "MultCloud",
            "url": "https://www.multcloud.com",
            "desc": "网盘对网盘互传"
          }
        ]
      },
      {
        "term": "网盘搜索",
        "links": [
          {
            "name": "大圣盘",
            "url": "https://www.dashengpan.com",
            "desc": "综合的网盘搜索"
          },
          {
            "name": "盘搜",
            "url": "http://www.pansoso.com",
            "desc": "网盘搜索"
          },
          {
            "name": "阿里盘搜",
            "url": "https://upyunso3.com",
            "desc": "阿里云盘搜索"
          },
          {
            "name": "喵狸盘搜",
            "url": "https://www.alipansou.com",
            "desc": "阿里云盘搜索"
          },
          {
            "name": "阿里盘盘",
            "url": "https://alipanpan.com",
            "desc": "阿里云盘搜索"
          },
          {
            "name": "UP云搜",
            "url": "https://www.upyunso.com",
            "desc": "综合的网盘搜索"
          },
          {
            "name": "千帆搜索",
            "url": "https://tg.qianfan.app",
            "desc": "网盘资源搜索"
          },
          {
            "name": "盘搜",
            "url": "https://pansou.jkai.de",
            "desc": "网盘资源搜索"
          },
          {
            "name": "盘库吧",
            "url": "https://panku8.com",
            "desc": "网盘资源搜索"
          },
          {
            "name": "小云盘搜",
            "url": "https://www.yunso.net",
            "desc": "网盘资源搜索"
          },
          {
            "name": "SSGo",
            "url": "https://ssgo.app",
            "desc": "网盘资源搜索"
          },
          {
            "name": "小兔搜搜",
            "url": "https://xiaotusoso.com",
            "desc": "网盘资源搜索"
          },
          {
            "name": "夸克小站",
            "url": "https://kkxz.vip",
            "desc": "夸克网盘资源搜索"
          },
          {
            "name": "毕方铺",
            "url": "https://www.iizhi.cn",
            "desc": "网盘资源搜索"
          },
          {
            "name": "盘友圈",
            "url": "https://panyq.com",
            "desc": "网盘资源搜索"
          },
          {
            "name": "秒搜",
            "url": "https://miaosou.fun",
            "desc": "快速网盘资源搜索引擎，即搜即得高效检索"
          },
          {
            "name": "学霸盘",
            "url": "https://www.xuebapan.com",
            "desc": "专注于学习资料和课程资源的网盘搜索平台"
          },
          {
            "name": "易搜",
            "url": "https://yiso.eu.org",
            "desc": "综合的网盘搜索"
          },
          {
            "name": "小白盘",
            "url": "http://www.xiaobaipan.com",
            "desc": "不错的网盘搜索"
          }
        ]
      },
      {
        "term": "隔空传输",
        "links": [
          {
            "name": "Sharedrop",
            "url": "https://www.sharedrop.io",
            "desc": "P2P文件传输"
          },
          {
            "name": "Transfer.zip",
            "url": "http://transfer.zip",
            "desc": "P2P文件传输"
          },
          {
            "name": "rDrop",
            "url": "https://rdrop.link",
            "desc": "P2P文件传输"
          },
          {
            "name": "Snapdrop",
            "url": "https://snapdrop.net",
            "desc": "局域网浏览器P2P文件传输"
          },
          {
            "name": "Drop lol",
            "url": "https://drop.lol",
            "desc": "浏览器P2P文件传输"
          },
          {
            "name": "Netcut",
            "url": "https://netcut.cn",
            "desc": "在线剪切板和7天文件分享"
          },
          {
            "name": "云剪切板",
            "url": "https://cv.yi2a.com",
            "desc": "在线剪切板支持命令行"
          },
          {
            "name": "微信文件传输助手",
            "url": "https://filehelper.weixin.qq.com",
            "desc": "微信文件传输助手网页版"
          },
          {
            "name": "奶牛快传",
            "url": "https://cowtransfer.com",
            "desc": "临时文件传输分享"
          },
          {
            "name": "文叔叔",
            "url": "https://www.wenshushu.cn",
            "desc": "分享大文件不过期"
          },
          {
            "name": "钛盘",
            "url": "https://app.tmp.link",
            "desc": "无需注册的大文件传输"
          },
          {
            "name": "AirPortal",
            "url": "https://airportal.cn",
            "desc": "简单好用的临时文件分享"
          },
          {
            "name": "File.io",
            "url": "https://www.file.io",
            "desc": "匿名的临时传输文件"
          },
          {
            "name": "Ufile",
            "url": "https://ufile.io",
            "desc": "临时文件分享"
          },
          {
            "name": "Transfer",
            "url": "https://transfer.it",
            "desc": "临时文件分享Mega出品"
          },
          {
            "name": "Filebin",
            "url": "https://filebin.net",
            "desc": "临时文件分享"
          },
          {
            "name": "Tg-Imge",
            "url": "https://dash.cecily.eu.org",
            "desc": "临时文件分享"
          },
          {
            "name": "GrosFichiers",
            "url": "https://www.grosfichiers.com/zh/",
            "desc": "临时文件分享10GB"
          },
          {
            "name": "SendBig",
            "url": "https://www.sendbig.com",
            "desc": "支持大文件临时文件分享"
          },
          {
            "name": "Zaix",
            "url": "https://zaix.ru",
            "desc": "俄罗斯临时文件分享支持外链"
          },
          {
            "name": "Upload.ee",
            "url": "https://www.upload.ee",
            "desc": "临时文件分享支持外链"
          },
          {
            "name": "Gofile",
            "url": "https://gofile.io",
            "desc": "老牌无限制的临时分享"
          },
          {
            "name": "File Doge",
            "url": "https://filedoge.com",
            "desc": "不限制容量临时分享"
          },
          {
            "name": "Internxt Send",
            "url": "https://send.internxt.com",
            "desc": "加密文件传输临时分享"
          },
          {
            "name": "File.coffee",
            "url": "https://file.coffee",
            "desc": "不用注册的临时分享"
          },
          {
            "name": "pCloud",
            "url": "https://transfer.pcloud.com",
            "desc": "5GB大文件临时分享"
          },
          {
            "name": "Sendfile",
            "url": "https://sendfileonline.com",
            "desc": "支持1GB的临时分享文件"
          },
          {
            "name": "Filetransfer",
            "url": "https://filetransfer.io",
            "desc": "支持6GB文件分享"
          },
          {
            "name": "WeTransfer",
            "url": "https://wetransfer.com",
            "desc": "支持3GB文件分享"
          },
          {
            "name": "TransferNow",
            "url": "https://www.transfernow.net",
            "desc": "大文件的临时分享工具"
          },
          {
            "name": "SendGB",
            "url": "https://www.sendgb.com",
            "desc": "长达1年存储期的文件分享"
          },
          {
            "name": "ACdata",
            "url": "https://ac-data.info",
            "desc": "加密且无需注册的文件传输"
          },
          {
            "name": "Jetdrop",
            "url": "https://www.jetdrop.net",
            "desc": "加密且无需注册的文件传输"
          },
          {
            "name": "Wormhole",
            "url": "https://wormhole.app",
            "desc": "加密且无需注册的文件传输"
          },
          {
            "name": "Mirrored.to",
            "url": "https://www.mirrored.to",
            "desc": "上传多个空间并生成链接"
          },
          {
            "name": "Decentrafile",
            "url": "https://decentrafile.com",
            "desc": "匿名永久星链分享文件"
          },
          {
            "name": "Saturn",
            "url": "https://misty-meadow-6745.on.fleek.co",
            "desc": "匿名分享文件"
          },
          {
            "name": "TransferKit",
            "url": "https://transferkit.io",
            "desc": "去中心化分享文件"
          },
          {
            "name": "TransferEasy",
            "url": "https://transfereasy.in",
            "desc": "大文件分享"
          },
          {
            "name": "TransferBigFiles",
            "url": "https://www.transferbigfiles.com",
            "desc": "老牌临时文件分享"
          },
          {
            "name": "Streamtape",
            "url": "https://streamtape.com",
            "desc": "免费影音空間分享"
          },
          {
            "name": "New.Space",
            "url": "https://new.space",
            "desc": "临时文件分享空间"
          },
          {
            "name": "upload",
            "url": "https://upload.express",
            "desc": "简单易用的文件临时分享"
          },
          {
            "name": "Copyp",
            "url": "https://copypaste.me",
            "desc": "加密可扫码的设备互传工具"
          },
          {
            "name": "PPlink",
            "url": "https://www.ppzhilian.com",
            "desc": "综合的点对点直连工具"
          },
          {
            "name": "Blaze",
            "url": "https://blaze.now.sh",
            "desc": "通过现代浏览器API设备互传"
          },
          {
            "name": "FilePizza",
            "url": "https://file.pizza",
            "desc": "浏览器点对点传输文件"
          },
          {
            "name": "Blymp",
            "url": "https://blymp.io",
            "desc": "4位数号码浏览器传输工具"
          },
          {
            "name": "ToffeeShare",
            "url": "https://toffeeshare.com",
            "desc": "私密安全的传输分享文件"
          },
          {
            "name": "HackChat",
            "url": "https://hack.chat",
            "desc": "匿名聊天室加文件分享"
          },
          {
            "name": "Volafile",
            "url": "https://volafile.org",
            "desc": "创建聊天室加文件分享"
          },
          {
            "name": "FileRoom",
            "url": "https://fileroom.io",
            "desc": "本地网络聊天室加文件互传"
          },
          {
            "name": "SaladRoom",
            "url": "https://saladroom.net",
            "desc": "网络房间互传文件"
          },
          {
            "name": "QSyncme",
            "url": "https://quicksync.me",
            "desc": "创建多人链接的传输文件房间"
          },
          {
            "name": "Safer.chat",
            "url": "https://safer.chat",
            "desc": "创建多人链接的传输文件房间"
          },
          {
            "name": "Pin.gl",
            "url": "https://pin.gl",
            "desc": "屏幕分享共享"
          }
        ]
      },
      {
        "term": "图床服务",
        "links": [
          {
            "name": "图壳",
            "url": "http://imgkr.com",
            "desc": "新的不错图床"
          },
          {
            "name": "Freeimage",
            "url": "https://freeimage.host",
            "desc": "免费图床"
          },
          {
            "name": "IM.GE",
            "url": "https://im.ge",
            "desc": "不错图床带管理"
          },
          {
            "name": "路过图床",
            "url": "https://imgtu.com",
            "desc": "老牌稳定图床"
          },
          {
            "name": "聚合图床",
            "url": "https://www.superbed.cn",
            "desc": "聚合型图床"
          },
          {
            "name": "笑果图床",
            "url": "https://imagelol.com",
            "desc": "很不错图床"
          },
          {
            "name": "图仓图床",
            "url": "https://www.imagehub.cc",
            "desc": "很不错图床"
          },
          {
            "name": "传个图",
            "url": "https://chuangetu.com",
            "desc": "免费图床"
          },
          {
            "name": "跬步图床",
            "url": "https://img.kuibu.net",
            "desc": "很不错图床"
          },
          {
            "name": "鸡霸图床",
            "url": "https://gejiba.com",
            "desc": "很不错图床"
          },
          {
            "name": "流浪图床",
            "url": "https://p.sda1.dev",
            "desc": "没有服务器图床"
          },
          {
            "name": "白熊图床",
            "url": "https://pic.baixiongz.com",
            "desc": "新开图床"
          },
          {
            "name": "去不图床",
            "url": "https://7bu.top",
            "desc": "新开图床"
          },
          {
            "name": "薄荷图床",
            "url": "https://riyugo.com",
            "desc": "新开图床"
          },
          {
            "name": "酷Java",
            "url": "https://kjava.com",
            "desc": "新开图床"
          },
          {
            "name": "IPFS图床",
            "url": "https://ipfs.xkx.me",
            "desc": "IPFS技术图床"
          },
          {
            "name": "SM.SM",
            "url": "https://sm.ms",
            "desc": "老牌稳定图床"
          },
          {
            "name": "Snappable",
            "url": "https://snappable.media",
            "desc": "免费不限量图床"
          },
          {
            "name": "imgBee",
            "url": "https://imgbee.com",
            "desc": "支持编辑图像分享类图床"
          },
          {
            "name": "Postimg",
            "url": "https://postimages.org",
            "desc": "老牌图床"
          },
          {
            "name": "Pasteboard",
            "url": "https://pasteboard.co",
            "desc": "支持10M图像图床"
          },
          {
            "name": "如优图床",
            "url": "https://img.rruu.net",
            "desc": "不错图床"
          },
          {
            "name": "ImgBB",
            "url": "https://imgbb.com",
            "desc": "支持定时删除和32M大文件图床"
          },
          {
            "name": "ImgURL",
            "url": "https://imgurl.org",
            "desc": "ftp方式存储图床"
          },
          {
            "name": "Upload.cc",
            "url": "https://upload.cc",
            "desc": "简单好用图床(fq)"
          },
          {
            "name": "Img.onl",
            "url": "https://img.onl",
            "desc": "简单的国外图床"
          },
          {
            "name": "Fghrsh",
            "url": "https://img.fghrsh.net",
            "desc": "需注册的大图图床"
          },
          {
            "name": "ZA4",
            "url": "https://z4a.net",
            "desc": "海外服务器无需注册图床"
          },
          {
            "name": "Catbox",
            "url": "https://catbox.moe",
            "desc": "美国服务器无需注册图床"
          },
          {
            "name": "Imgur",
            "url": "https://imgur.com",
            "desc": "全球最知名图床(fq)"
          },
          {
            "name": "Folio.ink",
            "url": "https://folio.ink",
            "desc": "上传图像可以形成相册的浏览"
          },
          {
            "name": "PiXhost",
            "url": "https://pixhost.to",
            "desc": "免费图床支持成年人内容"
          }
        ]
      },
      {
        "term": "海外媒体",
        "links": [
          {
            "name": "YouTube",
            "url": "https://www.youtube.com",
            "desc": "全球最大视频分享平台"
          },
          {
            "name": "X",
            "url": "https://x.com",
            "desc": "全球知名社交平台原推特"
          },
          {
            "name": "TikTok",
            "url": "https://www.tiktok.com",
            "desc": "全球热门短视频平台"
          },
          {
            "name": "Bluesky",
            "url": "https://bsky.app",
            "desc": "去中心化社交媒体"
          },
          {
            "name": "Lemmy",
            "url": "https://lemmy.ml",
            "desc": "去中心化社区论坛"
          },
          {
            "name": "Reddit",
            "url": "https://www.reddit.com",
            "desc": "全球最大兴趣社区论坛"
          },
          {
            "name": "Facebook",
            "url": "https://www.facebook.com",
            "desc": "全球最大社交网络平台"
          },
          {
            "name": "Instagram",
            "url": "https://www.instagram.com",
            "desc": "图像和短视频分享社交平台"
          },
          {
            "name": "Threads",
            "url": "https://www.threads.net",
            "desc": "Meta旗下文字社交平台"
          },
          {
            "name": "Mastodon",
            "url": "https://joinmastodon.org",
            "desc": "去中心化联邦宇宙式社交平台"
          },
          {
            "name": "Spotify",
            "url": "https://www.spotify.com",
            "desc": "全球最大音乐流媒体平台"
          },
          {
            "name": "Netflix",
            "url": "https://www.netflix.com",
            "desc": "全球领先流媒体影视平台"
          },
          {
            "name": "DTube",
            "url": "https://d.tube",
            "desc": "去中心化视频分享平台"
          },
          {
            "name": "Twitch",
            "url": "https://www.twitch.tv",
            "desc": "全球最大游戏直播平台"
          },
          {
            "name": "Kick",
            "url": "https://kick.com",
            "desc": "游戏和娱乐直播平台"
          },
          {
            "name": "9GAG",
            "url": "https://9gag.com",
            "desc": "全球知名搞笑图像视频分享平台"
          },
          {
            "name": "Onlyfans",
            "url": "https://onlyfans.com",
            "desc": "独家付费内容服务平台"
          }
        ]
      },
      {
        "term": "社区论坛",
        "links": [
          {
            "name": "微博",
            "url": "https://weibo.com",
            "desc": "国内主流微博平台"
          },
          {
            "name": "百度贴吧",
            "url": "https://tieba.baidu.com",
            "desc": "百度的兴趣小社区"
          },
          {
            "name": "虫部落",
            "url": "https://www.chongbuluo.com",
            "desc": "搜索聚合还有论坛"
          },
          {
            "name": "小不点",
            "url": "http://xiaoso.net",
            "desc": "极简资源分享论坛"
          }
        ]
      },
      {
        "term": "磁力搜索",
        "links": [
          {
            "name": "kitty",
            "url": "https://cn.torrentkitty.tv/search",
            "desc": "种子和磁力搜索引擎"
          },
          {
            "name": "BTsow",
            "url": "https://tellme.pw/btsow",
            "desc": "种子和磁力资源搜索"
          },
          {
            "name": "Kickass",
            "url": "https://katcr.to",
            "desc": "知名BT种子资源站"
          },
          {
            "name": "Aio Search",
            "url": "https://www.aiosearch.com",
            "desc": "多平台资源聚合搜索"
          },
          {
            "name": "聚BT",
            "url": "https://jubt.fun",
            "desc": "种子和磁力聚合搜索"
          },
          {
            "name": "Nyaa",
            "url": "https://nyaa.si",
            "desc": "动漫类磁力资源搜索站"
          },
          {
            "name": "Bthub",
            "url": "https://github.com/fwonggh/Bthub",
            "desc": "磁力资源聚合"
          },
          {
            "name": "种子搜",
            "url": "https://www.zhongzilou.com",
            "desc": "种子资源搜索"
          },
          {
            "name": "磁力猫",
            "url": "https://clmclm.com",
            "desc": "磁力资源搜索"
          },
          {
            "name": "磁力天堂",
            "url": "https://xn--tfrq9jjzak83g.com",
            "desc": "磁力资源聚合搜索"
          },
          {
            "name": "0Magnet",
            "url": "https://0mag.net",
            "desc": "磁力链接索引和搜索工具"
          },
          {
            "name": "种子转磁链",
            "url": "https://www.wqtool.com/magnetlink",
            "desc": "种子文件转磁力链接"
          },
          {
            "name": "Webtor",
            "url": "https://webtor.io",
            "desc": "种子与磁力链接解析和播放"
          }
        ]
      },
    ]
  },
  {
    "taxonomy": "软件硬件",
    "icon": "fa-laptop",
    "list": [
      {
        "term": "项目发掘",
        "links": [
          {
            "name": "Product Hunt",
            "url": "https://www.producthunt.com",
            "desc": "全球知名的创意作品分享"
          },
          {
            "name": "倾城之链",
            "url": "https://nicelinks.site",
            "desc": "很多资源推荐"
          },
          {
            "name": "新趣集",
            "url": "https://xinquji.com",
            "desc": "好产品推荐"
          },
          {
            "name": "创造者日报",
            "url": "https://creatorsdaily.com",
            "desc": "好产品推荐"
          },
          {
            "name": "Fancycrave",
            "url": "https://fancycrave.com",
            "desc": "好产品和方法推荐"
          },
          {
            "name": "Uneed",
            "url": "https://www.uneed.best",
            "desc": "找到最好用的工具"
          },
          {
            "name": "FMHY",
            "url": "https://fmhy.net",
            "desc": "很全面的免费资源库"
          },
          {
            "name": "开软软件趋势",
            "url": "https://trend.quickso.cn",
            "desc": "开源软件趋势与评分"
          },
          {
            "name": "HelloGithub",
            "url": "https://hellogithub.com",
            "desc": "发现和分享入门级开源项目"
          },
          {
            "name": "Slant",
            "url": "https://www.slant.co",
            "desc": "查找最佳软件排名"
          },
          {
            "name": "Free",
            "url": "https://free.com.tw",
            "desc": "来自台湾个人博主的分享"
          },
          {
            "name": "Alternative",
            "url": "https://alternativeto.net",
            "desc": "寻找代替品"
          },
          {
            "name": "OpenAlternative",
            "url": "https://openalternative.co",
            "desc": "寻找开源代替品"
          },
          {
            "name": "Builders",
            "url": "https://opensource.builders",
            "desc": "寻找开源代替方案"
          },
          {
            "name": "Switching",
            "url": "https://switching.software",
            "desc": "寻找在线软件服务代替品"
          }
        ]
      },
      {
        "term": "项目合集",
        "links": [
          {
            "name": "在线工具合集",
            "url": "https://github.com/zhaoolee/OnlineToolsBook",
            "desc": "在线工具合集项目"
          },
          {
            "name": "开源在线工具合集",
            "url": "https://tiny-helpers.dev",
            "desc": "开源在线工具导航"
          },
          {
            "name": "设计工具合集",
            "url": "https://github.com/LisaDziuba/Awesome-Design-Tools",
            "desc": "设计工具合集项目"
          },
          {
            "name": "优秀工具箱集合",
            "url": "https://github.com/bestxtools/awesome-toolbox-chinese",
            "desc": "优秀工具箱集合项目"
          },
          {
            "name": "Awesome-free-apps",
            "url": "https://github.com/Axorax/awesome-free-apps",
            "desc": "自由软件合集"
          },
          {
            "name": "Awesome_docker_cn",
            "url": "https://github.com/coracoo/awesome_docker_cn",
            "desc": "Docker资源和教程"
          },
          {
            "name": "自部署应用合集",
            "url": "https://selfh.st/apps",
            "desc": "自托管服务推荐网站"
          },
          {
            "name": "自部署合集",
            "url": "https://github.com/songtianlun/selfhost-hub",
            "desc": "自托管服务合集项目"
          },
          {
            "name": "自部署合集",
            "url": "https://github.com/awesome-selfhosted/awesome-selfhosted",
            "desc": "全球自托管开源应用列表"
          },
          {
            "name": "Docker合集",
            "url": "https://github.com/itgoyo/awesome-docker",
            "desc": "Docker资源精选列表"
          },
          {
            "name": "Awesome LinuxDo",
            "url": "https://github.com/SunWuyuan/awesome-linuxdo",
            "desc": "LinuxDo精选集合"
          },
          {
            "name": "Linux软件合集",
            "url": "https://github.com/luong-komorebi/Awesome-Linux-Software/blob/master/README_zh-CN.md",
            "desc": "Linux软件精选列表"
          },
          {
            "name": "发现优秀开源项目",
            "url": "https://github.com/dubinc/oss-gallery",
            "desc": "发现高质量开源项目"
          },
          {
            "name": "tech-stack",
            "url": "https://github.com/tobyglei/tech-stack-china",
            "desc": "中国技术栈资源汇总"
          },
          {
            "name": "MacOS软件合集",
            "url": "https://github.com/jaywcjlove/awesome-mac/blob/master/README-zh.md",
            "desc": "MacOS软件精选列表"
          },
          {
            "name": "攻防武器项目",
            "url": "https://github.com/flygon2018/All-Defense-Tool",
            "desc": "网络安全攻防工具资源合集"
          },
          {
            "name": "Chrome扩展英雄榜",
            "url": "https://github.com/zhaoolee/ChromeAppHeroes",
            "desc": "浏览器插件合集项目"
          },
          {
            "name": "AboutRSS",
            "url": "https://github.com/AboutRSS/ALL-about-RSS",
            "desc": "RSS相关合集项目"
          },
          {
            "name": "树莓派防吃灰",
            "url": "https://github.com/zhaoolee/pi",
            "desc": "树莓派防吃灰项目"
          },
          {
            "name": "Privacytool",
            "url": "https://cybermagicsec.github.io/privacytools-zh",
            "desc": "隐私工具相关"
          },
          {
            "name": "学习快捷键",
            "url": "https://shortcut.so",
            "desc": "学习软件快捷键操作"
          }
        ]
      },
      {
        "term": "软件资讯",
        "links": [
          {
            "name": "IT之家",
            "url": "https://www.ithome.com",
            "desc": "综合资讯新闻"
          },
          {
            "name": "蓝点网",
            "url": "https://www.landiannews.com",
            "desc": "综合资讯新闻"
          },
          {
            "name": "Readhub",
            "url": "https://readhub.cn",
            "desc": "综合资讯新闻"
          },
          {
            "name": "致美化",
            "url": "https://zhutix.com",
            "desc": "系统和软件美化"
          }
        ]
      },
      {
        "term": "软件推荐",
        "links": [
          {
            "name": "小众软件",
            "url": "http://www.appinn.com",
            "desc": "不错的软件评选推荐"
          },
          {
            "name": "少数派",
            "url": "https://sspai.com",
            "desc": "知名的软件使用分享平台"
          },
          {
            "name": "异次元软件",
            "url": "http://www.iplaysoft.com",
            "desc": "软件使用分享平台"
          },
          {
            "name": "电脑玩物",
            "url": "https://www.playpcesor.com",
            "desc": "知名的效率生活工具分享"
          },
          {
            "name": "V1TX",
            "url": "https://www.v1tx.com",
            "desc": "分享实用工具软件合集"
          },
          {
            "name": "文件鹰软件推荐",
            "url": "https://www.fileeagle.com/software",
            "desc": "软件推荐和资源导航站"
          },
          {
            "name": "酷软清单",
            "url": "https://www.coolist.net",
            "desc": "个人推荐的精选软件"
          },
          {
            "name": "爱好论坛",
            "url": "https://www.aihao.cc",
            "desc": "系统和软件相关下载"
          },
          {
            "name": "系统迷",
            "url": "https://www.xitmi.com",
            "desc": "系统和软件相关下载"
          }
        ]
      },
      {
        "term": "软件下载",
        "links": [
          {
            "name": "果核剥壳",
            "url": "https://www.ghxi.com",
            "desc": "知名软件下载站"
          },
          {
            "name": "吾爱破解",
            "url": "https://www.52pojie.cn",
            "desc": "知名软件分享论坛"
          },
          {
            "name": "绿软小站",
            "url": "https://www.gndown.com",
            "desc": "软件下载站"
          },
          {
            "name": "爱纯净",
            "url": "https://www.aichunjing.com",
            "desc": "第三方系统和软件下载"
          },
          {
            "name": "软件No1",
            "url": "https://www.rjno1.com",
            "desc": "软件分享和推荐"
          },
          {
            "name": "大眼仔旭",
            "url": "http://www.dayanzai.me",
            "desc": "软件分享和技术博客"
          },
          {
            "name": "易破解",
            "url": "http://www.ypojie.com",
            "desc": "破解软件下载"
          },
          {
            "name": "MEFCL",
            "url": "https://www.mefcl.com",
            "desc": "破解软件下载"
          },
          {
            "name": "423down",
            "url": "https://www.423down.com",
            "desc": "破解软件下载"
          },
          {
            "name": "殁漂遥",
            "url": "https://www.mpyit.com",
            "desc": "分享软件下载（fq）"
          },
          {
            "name": "羽兔网",
            "url": "https://www.yutu.cn",
            "desc": "设计软件与资源下载平台"
          },
          {
            "name": "Portableapps",
            "url": "https://portableapps.com",
            "desc": "便携软件集合平台"
          },
          {
            "name": "Portablek",
            "url": "https://portableappk.com",
            "desc": "便携软件下载站"
          },
          {
            "name": "Softonic",
            "url": "https://www.softonic.com",
            "desc": "全球知名软件下载站"
          },
          {
            "name": "FossHub",
            "url": "https://www.fosshub.com",
            "desc": "开源软件下载平"
          },
          {
            "name": "Softwareok",
            "url": "http://www.softwareok.com",
            "desc": "系统工具实用小软件"
          },
          {
            "name": "Nirsoft",
            "url": "http://www.nirsoft.net",
            "desc": "系统工具和实用小工具"
          },
          {
            "name": "Mazterize",
            "url": "https://www.mazterize.com",
            "desc": "提供教程和软件下载"
          },
          {
            "name": "Sadeempc",
            "url": "https://www.sadeempc.com",
            "desc": "软件下载和技术博客"
          },
          {
            "name": "Repack",
            "url": "https://repack.me",
            "desc": "，精简优化版和便携版"
          },
          {
            "name": "Sourceforge",
            "url": "https://sourceforge.net",
            "desc": "全球最大开源软下载平台"
          }
        ]
      },
      {
        "term": "安卓应用",
        "links": [
          {
            "name": "开源安卓软件合集",
            "url": "https://github.com/xlucn/oh-my-foss-android",
            "desc": "开源安卓软件合集"
          },
          {
            "name": "酷安市场",
            "url": "https://coolapk.com/apk/",
            "desc": "国内应用市场平台"
          },
          {
            "name": "异星软件空间",
            "url": "https://www.yxssp.com",
            "desc": "软件推荐分享平台"
          },
          {
            "name": "找应用",
            "url": "https://findappweb.com",
            "desc": "找安卓应用和下载"
          },
          {
            "name": "最美应用",
            "url": "http://zuimeia.com",
            "desc": "小而美的安卓应用分享"
          },
          {
            "name": "安卓果酱",
            "url": "https://cn.apkjam.com",
            "desc": "安卓应用发掘"
          },
          {
            "name": "APKCombo",
            "url": "https://apkcombo.com/zh/apk-downloader/",
            "desc": "安卓应用下载"
          },
          {
            "name": "ApkPure",
            "url": "https://apkpure.com",
            "desc": "能代替谷歌第三方应用商店"
          },
          {
            "name": "Apkfab",
            "url": "https://apkfab.com/zh",
            "desc": "第三方下载 apk"
          },
          {
            "name": "APKMirror",
            "url": "https://www.apkmirror.com",
            "desc": "第三方下载 apk"
          },
          {
            "name": "APK Downloader",
            "url": "http://apps.evozi.com/apk-downloader",
            "desc": "第三方下载 apk"
          },
          {
            "name": "APK-DL",
            "url": "https://apk-dl.com",
            "desc": "第三方下载 apk"
          }
        ]
      },
      {
        "term": "Linux相关",
        "links": [
          {
            "name": "Linux-cmd",
            "url": "https://wangchujiang.com/linux-command/",
            "desc": "Linux命令搜索引擎"
          },
          {
            "name": "信息流",
            "url": "https://www.myfreax.com",
            "desc": "Linux爱好者技术"
          },
          {
            "name": "Crontab",
            "url": "https://crontab.guru",
            "desc": "cron计划任务编辑器"
          },
          {
            "name": "CMDhelp",
            "url": "https://cmdhelp.com",
            "desc": "Linux命令查询"
          }
        ]
      },
      {
        "term": "硬件相关",
        "links": [
          {
            "name": "数字尾巴",
            "url": "http://www.dgtle.com",
            "desc": "分享数码设备"
          },
          {
            "name": "超能网",
            "url": "http://www.expreview.com",
            "desc": "硬件综合类网站"
          },
          {
            "name": "Guru3D",
            "url": "https://www.guru3d.com",
            "desc": "硬件评测综合平台"
          },
          {
            "name": "Chiphell",
            "url": "https://www.chiphell.com",
            "desc": "很不错的分享硬件论坛"
          },
          {
            "name": "外设堂",
            "url": "http://www.weistang.com",
            "desc": "很不错的硬件分享社区"
          },
          {
            "name": "天梯榜",
            "url": "http://topic.expreview.com/GPU/",
            "desc": "CPU 和 GPU 天梯榜"
          },
          {
            "name": "移动端芯片排行",
            "url": "https://www.socpk.com",
            "desc": "移动端芯片天梯榜"
          },
          {
            "name": "Versus",
            "url": "https://versus.com/cn",
            "desc": "各种产品对比万物皆可对比"
          },
          {
            "name": "TestUfo",
            "url": "https://testufo.com",
            "desc": "显示器刷新率测试"
          },
          {
            "name": "Dieshot",
            "url": "http://dieshot.com",
            "desc": "芯片高清图"
          },
          {
            "name": "Userbenchmark",
            "url": "https://www.userbenchmark.com",
            "desc": "硬件基准对比"
          },
          {
            "name": "存储容量计算",
            "url": "容量计算：https://whatsabyte.com/P1/byteconverter.htm",
            "desc": "电脑存储容量计算"
          },
          {
            "name": "模拟装机",
            "url": "http://zj.zol.com.cn",
            "desc": "在线模拟装机配置单"
          },
          {
            "name": "装机配置推荐",
            "url": "https://zhuanlan.zhihu.com/p/217881116",
            "desc": "Gyusang装机配置单"
          },
          {
            "name": "LDTools",
            "url": "https://ldt.pc.wiki",
            "desc": "硬件工具箱和驱动合集"
          },
          {
            "name": "Key-test",
            "url": "https://key-test.com/cn/",
            "desc": "键盘测试按键"
          },
          {
            "name": "Gamepad",
            "url": "https://hardwaretester.com/gamepad",
            "desc": "手柄测试"
          },
          {
            "name": "Complete Controller Testing",
            "url": "https://controllertest.io",
            "desc": "手柄测试"
          },
          {
            "name": "屏幕测试",
            "url": "https://test.screamingline.com",
            "desc": "屏幕测试"
          }
        ]
      },
      {
        "term": "其它设备",
        "links": [
          {
            "name": "恩山无线",
            "url": "http://www.right.com.cn",
            "desc": "路由器固件下载"
          },
          {
            "name": "AcWifi",
            "url": "https://www.acwifi.net",
            "desc": "专注路由器评测"
          },
          {
            "name": "酷友社",
            "url": "https://www.koolcenter.com",
            "desc": "iStoreOS软路由论坛"
          },
          {
            "name": "隔壁网",
            "url": "http://www.gebi1.com",
            "desc": "专注NAS的论坛"
          },
          {
            "name": "瀚思彼岸",
            "url": "https://bbs.hassbian.com",
            "desc": "HomeAssistant的热门论坛"
          }
        ]
      }
    ]
  },
  {
    "taxonomy": "音乐影视",
    "icon": "fa-video-camera",
    "list": [
      {
        "term": "音乐天堂",
        "links": [
          {
            "name": "MusicSource",
            "url": "https://music.creasource.app",
            "desc": "在线音乐播放器"
          },
          {
            "name": "MyFree",
            "url": "http://tool.liumingye.cn/music",
            "desc": "在线播放加下载"
          },
          {
            "name": "Fangpi",
            "url": "https://www.fangpi.net",
            "desc": "在线播放加下载"
          },
          {
            "name": "SpotifyMate",
            "url": "https://spotifymate.com",
            "desc": "下载 Spotify 歌曲只需输入连接"
          },
          {
            "name": "艾木微",
            "url": "https://www.mehdmv.com",
            "desc": "MTV播放加下载"
          },
          {
            "name": "MVBOX",
            "url": "https://www.mvbox.net",
            "desc": "韩国MV播放加下载"
          },
          {
            "name": "铜钟",
            "url": "https://tonzhon.com",
            "desc": "在线听歌和云音乐歌单"
          },
          {
            "name": "无损生活",
            "url": "https://flac.life",
            "desc": "音乐搜索和下载"
          },
          {
            "name": "AeKun",
            "url": "http://aekun.com",
            "desc": "小众音乐分享"
          },
          {
            "name": "51下载器",
            "url": "http://www.at38.cn",
            "desc": "在线音乐下载"
          },
          {
            "name": "咪咕音乐",
            "url": "https://music.migu.cn",
            "desc": "音乐在线试听"
          },
          {
            "name": "Audiomack",
            "url": "https://audiomack.com",
            "desc": "新音乐共享下载"
          },
          {
            "name": "街声",
            "url": "https://streetvoice.cn",
            "desc": "为音乐人提供平台"
          },
          {
            "name": "一起听音乐",
            "url": "http://music.jsososo.com",
            "desc": "极简好用的在线听歌"
          },
          {
            "name": "超高无损",
            "url": "https://www.sq688.com",
            "desc": "网友无损音乐分享"
          },
          {
            "name": "高清伴奏",
            "url": "http://5sing.kugou.com",
            "desc": "高清音乐伴奏"
          },
          {
            "name": "享乐音乐论坛",
            "url": "https://www.xlebbs.com",
            "desc": "网友音乐分享"
          },
          {
            "name": "炫音音乐论坛",
            "url": "https://bbs.musicool.cn",
            "desc": "网友音乐分享"
          },
          {
            "name": "漫音社",
            "url": "http://www.acgjc.com",
            "desc": "动漫音乐相关"
          },
          {
            "name": "TunemyMusic",
            "url": "https://www.tunemymusic.com/zh-cn/",
            "desc": "在不同的音乐服务平台之间传送播放列表"
          }
        ]
      },
      {
        "term": "影视评分",
        "links": [
          {
            "name": "豆瓣电影",
            "url": "https://movie.douban.com",
            "desc": "国内较好的电影资料评分查看"
          },
          {
            "name": "NeoDB",
            "url": "https://neodb.social",
            "desc": "国内较好的电影资料评分查看"
          },
          {
            "name": "IMDb",
            "url": "http://www.imdb.com",
            "desc": "互联网电影资料库"
          },
          {
            "name": "TMDB",
            "url": "https://www.themoviedb.org",
            "desc": "互联网电影资料库"
          },
          {
            "name": "烂番茄",
            "url": "https://www.rottentomatoes.com",
            "desc": "知名的评分网站"
          },
          {
            "name": "Metacritic",
            "url": "https://www.metacritic.com",
            "desc": "专业的评分网站"
          },
          {
            "name": "时光网",
            "url": "http://www.mtime.com",
            "desc": "电影媒体资讯平台"
          },
          {
            "name": "茶杯狐",
            "url": "https://cupfox.love",
            "desc": "电影剧集影视推荐片单"
          }
        ]
      },
      {
        "term": "流媒体",
        "links": [
          {
            "name": "Netflix",
            "url": "https://www.netflix.com",
            "desc": "全球最好的在线流媒体服务"
          },
          {
            "name": "爱奇艺",
            "url": "https://www.iqiyi.com",
            "desc": "国内主流的在线视频"
          },
          {
            "name": "腾讯视频",
            "url": "https://v.qq.com",
            "desc": "腾讯的在线视频"
          },
          {
            "name": "优酷",
            "url": "http://www.youku.com",
            "desc": "在线视频平台"
          },
          {
            "name": "爱奇艺海外",
            "url": "https://www.iq.com",
            "desc": "爱奇艺海外版"
          },
          {
            "name": "腾讯视频海外",
            "url": "https://wetv.vip",
            "desc": "腾讯视频海外版"
          }
        ]
      },
      {
        "term": "高清下载",
        "links": [
          {
            "name": "RARBG",
            "url": "https://rargb.to",
            "desc": "知名电影下载站"
          },
          {
            "name": "Uindex",
            "url": "https://uindex.org",
            "desc": "知名电影下载站"
          },
          {
            "name": "TheRarbg",
            "url": "https://therarbg.com",
            "desc": "知名的电影下载"
          },
          {
            "name": "迷客电影",
            "url": "https://www.mini4k.com",
            "desc": "高清电影下载"
          },
          {
            "name": "蓝光网",
            "url": "http://www.languang.co",
            "desc": "高清电影下载"
          },
          {
            "name": "蓝光电影网",
            "url": "http://www.languangdy.com",
            "desc": "高清电影下载"
          },
          {
            "name": "深影译站",
            "url": "https://sub.shinybbs.vip",
            "desc": "高清电影下载"
          },
          {
            "name": "电影4K",
            "url": "https://dianying4k.com",
            "desc": "高清电影下载"
          },
          {
            "name": "影网",
            "url": "http://vrfilmlink.com",
            "desc": "高清电影下载"
          },
          {
            "name": "海盗湾",
            "url": "https://thepiratebay.org",
            "desc": "知名的电影下载"
          },
          {
            "name": "1337X",
            "url": "https://1337x.to",
            "desc": "不错的电影种子下载"
          },
          {
            "name": "TorrentDownload",
            "url": "https://www.torrentdownload.info",
            "desc": "不错的电影种子下载"
          },
          {
            "name": "EZTV",
            "url": "https://eztv.re",
            "desc": "不错的电影种子下载"
          },
          {
            "name": "ACG.RIP",
            "url": "https://acg.rip",
            "desc": "不错的动漫类下载"
          },
          {
            "name": "Bitsearch",
            "url": "https://bitsearch.to",
            "desc": "影视种子下载"
          },
          {
            "name": "Proxyninja",
            "url": "https://extratorrent.proxyninja.org",
            "desc": "影视种子下载"
          },
          {
            "name": "Rlsbb",
            "url": "https://rlsbb.cc",
            "desc": "影视种子下载"
          },
          {
            "name": "Kickasstorrents",
            "url": "https://kickasstorrents.pw",
            "desc": "影视种子下载"
          },
          {
            "name": "Torrentbay",
            "url": "https://kickass.torrentbay.net",
            "desc": "影视种子下载"
          }
        ]
      },
      {
        "term": "压制下载",
        "links": [
          {
            "name": "SeedHub",
            "url": "https://www.seedhub.cc",
            "desc": "电影下载"
          },
          {
            "name": "6V电影网",
            "url": "http://www.hao6v.com",
            "desc": "电影下载"
          },
          {
            "name": "电影天堂",
            "url": "https://www.dy2018.com",
            "desc": "电影下载"
          },
          {
            "name": "电影天堂",
            "url": "https://www.dygod.net",
            "desc": "电影下载"
          },
          {
            "name": "两个BT",
            "url": "https://www.bttwo.vip",
            "desc": "电影在线播放和下载"
          },
          {
            "name": "电影港",
            "url": "https://www.dygang.cc",
            "desc": "电影下载"
          },
          {
            "name": "飘花电影",
            "url": "https://www.piaohua.com",
            "desc": "影视剧下载"
          }
        ]
      },
      {
        "term": "在线观看",
        "links": [
          {
            "name": "低端影视",
            "url": "https://ddys.io",
            "desc": "在线影视剧平台"
          },
          {
            "name": "网飞猫",
            "url": "https://www.ncat30.com",
            "desc": "在线影视剧平台"
          },
          {
            "name": "磁力熊",
            "url": "https://www.cilixiong.com",
            "desc": "在线影视剧平台"
          },
          {
            "name": "剧迷影视",
            "url": "https://gmtv1.top/iui",
            "desc": "在线影视剧平台"
          },
          {
            "name": "悟空视频",
            "url": "https://dogechan.com",
            "desc": "站长分享的资源不错"
          },
          {
            "name": "蛋蛋赞影院",
            "url": "https://www.dandanzan.cc",
            "desc": "在线影视高清播放"
          },
          {
            "name": "欧乐影院",
            "url": "https://www.olevod.com",
            "desc": "在线影视播放"
          },
          {
            "name": "PDORO",
            "url": "https://www.miyotv.com/zh-cn",
            "desc": "在线影视播放"
          },
          {
            "name": "HDmoli",
            "url": "https://www.hdmoli.com",
            "desc": "在线影视播放"
          },
          {
            "name": "看片狂人",
            "url": "https://kpkuang.com",
            "desc": "在线影视播放平台"
          },
          {
            "name": "破晓电影",
            "url": "https://www.poxiao.com",
            "desc": "在线影视播放"
          },
          {
            "name": "团长资源",
            "url": "https://trex.tzfile.com",
            "desc": "下载播放"
          },
          {
            "name": "美剧迷",
            "url": "https://www.meijumi.net",
            "desc": "美剧下载"
          },
          {
            "name": "TV花园",
            "url": "https://tv.garden",
            "desc": "全球电视直播聚合"
          },
          {
            "name": "电视眼",
            "url": "http://www.tvyan.com",
            "desc": "电视直播源分享"
          },
          {
            "name": "Naver TV",
            "url": "https://tv.naver.com",
            "desc": "韩国Naver旗下视频平台"
          }
        ]
      },
      {
        "term": "影视字幕",
        "links": [
          {
            "name": "字幕库",
            "url": "https://zimuku.org",
            "desc": "很不错的字幕下载"
          },
          {
            "name": "字幕库新",
            "url": "http://zmk.pw",
            "desc": "很不错的字幕下载"
          },
          {
            "name": "SubHD",
            "url": "https://subhd.tv",
            "desc": "YYeTs 字幕组"
          },
          {
            "name": "A4k字幕网",
            "url": "https://www.a4k.net",
            "desc": "不错的字幕组"
          },
          {
            "name": "伪射手",
            "url": "https://assrt.net",
            "desc": "老射手字幕"
          },
          {
            "name": "R3字幕网",
            "url": "https://r3sub.com",
            "desc": "不错的字幕网站"
          },
          {
            "name": "点点字幕",
            "url": "http://www.ddzimu.com",
            "desc": "不错的字幕网站"
          },
          {
            "name": "Subtitlecat",
            "url": "https://www.subtitlecat.com",
            "desc": "不错的字幕网站"
          },
          {
            "name": "Translate Sub",
            "url": "https://translatesubtitles.co",
            "desc": "字幕文件翻译"
          }
        ]
      }
    ]
  },
  {
    "taxonomy": "在线工具",
    "icon": "fa-wrench",
    "list": [
      {
        "term": "文字分享",
        "links": [
          {
            "name": "Leaflet",
            "url": "https://leaflet.pub",
            "desc": "轻量级在线笔记记事本"
          },
          {
            "name": "Notetab",
            "url": "https://notepadtab.com",
            "desc": "快速记录笔记记事本"
          },
          {
            "name": "CoverView",
            "url": "https://github.com/rutikwankhade/CoverView",
            "desc": "为博客创建封面图"
          },
          {
            "name": "Bubble",
            "url": "https://bubble.ilioslabs.dev",
            "desc": "文字下载为TXT"
          },
          {
            "name": "Itty bitty",
            "url": "https://itty.bitty.site",
            "desc": "写html的文字分享，支持二维码"
          },
          {
            "name": "ParseUrl",
            "url": "https://parseurlonline.com",
            "desc": "编辑url链接，修改url"
          },
          {
            "name": "Notepin",
            "url": "https://notepin.co",
            "desc": "无需注册的笔记本"
          },
          {
            "name": "P-email",
            "url": "https://www.publishthis.email/zh/",
            "desc": "发内容到邮箱创建网页页面"
          },
          {
            "name": "鸡毛信",
            "url": "https://cmd.im",
            "desc": "文字匿名分享"
          },
          {
            "name": "Verybin",
            "url": "https://www.verybin.com",
            "desc": "阅后即焚支持多种文本格式"
          },
          {
            "name": "ControlC",
            "url": "http://pasted.co",
            "desc": "加密码后分享文本"
          },
          {
            "name": "SafeNote",
            "url": "https://safenote.co",
            "desc": "加密可设置时间的阅后即焚"
          },
          {
            "name": "vua.sh",
            "url": "http://www.vua.sh",
            "desc": "有链接的人才能打开"
          },
          {
            "name": "阅后即焚",
            "url": "https://yhjf.cc",
            "desc": "阅后即焚服务"
          },
          {
            "name": "Privnote",
            "url": "https://privnote.com",
            "desc": "阅后即焚文字传输"
          },
          {
            "name": "Note.ms",
            "url": "https://note.ms",
            "desc": "记事本传输文字"
          },
          {
            "name": "Note.mk",
            "url": "https://note.mk",
            "desc": "记事本传输文字"
          },
          {
            "name": "Telegraph",
            "url": "https://telegra.ph",
            "desc": "TG的无账号轻量级文章分享"
          },
          {
            "name": "Notevibes",
            "url": "https://notevibes.com",
            "desc": "文字内容转语音需登录"
          },
          {
            "name": "网易见外",
            "url": "https://jianwai.youdao.com",
            "desc": "音视频转写翻译等"
          }
        ]
      },
      {
        "term": "文字卡片",
        "links": [
          {
            "name": "Marked",
            "url": "https://marked.cc",
            "desc": "文字转便笺图"
          },
          {
            "name": "Memonotepad",
            "url": "https://www.memonotepad.com",
            "desc": "文字转书写备忘录图片"
          },
          {
            "name": "流光卡片",
            "url": "https://fireflycard.shushiai.com/zh",
            "desc": "文字转图片卡片分享"
          },
          {
            "name": "OneIMG",
            "url": "https://oneimgai.com",
            "desc": "排版文字转图片"
          },
          {
            "name": "MD2Card",
            "url": "https://md2card.cn",
            "desc": "md文字转图片卡片"
          },
          {
            "name": "3MinTop",
            "url": "https://card.3min.top",
            "desc": "AI生成文本图片卡片"
          },
          {
            "name": "卡片工坊",
            "url": "https://cardify.aivaded.com",
            "desc": "md文字转图片卡片"
          },
          {
            "name": "MarkCardStudio",
            "url": "https://github.com/pangxiaobin/MarkCardStudio",
            "desc": "md文字转图片卡片"
          }
        ]
      },
      {
        "term": "二 维 码",
        "links": [
          {
            "name": "TQRCG",
            "url": "https://www.the-qrcode-generator.com",
            "desc": "国外二维码生成服务"
          },
          {
            "name": "QR.io",
            "url": "https://qr.io",
            "desc": "生成完全自定义的二维码"
          },
          {
            "name": "QRMonkey",
            "url": "https://www.qrcode-monkey.com",
            "desc": "可以色彩的二维码生成服务"
          },
          {
            "name": "Qrframe",
            "url": "https://qrframe.kylezhe.ng",
            "desc": "可以色彩的二维码生成服务"
          },
          {
            "name": "Y.GY",
            "url": "https://app.y.gy",
            "desc": "简单缩短网址与二维码创建"
          },
          {
            "name": "草料二维码",
            "url": "http://cli.im",
            "desc": "国内知名的二维码生成"
          },
          {
            "name": "联图网",
            "url": "http://liantu.com",
            "desc": "不错的二维码生成服务"
          },
          {
            "name": "9点二维码",
            "url": "https://qrcode.jiudian.link",
            "desc": "可调节样式的二维码生成"
          },
          {
            "name": "微微二维码",
            "url": "https://jiema.wwei.cn",
            "desc": "可调节样式的二维码生成"
          },
          {
            "name": "二维码梦工厂",
            "url": "https://www.qrdream.com",
            "desc": "多样式的二维码生成"
          },
          {
            "name": "QRBTF",
            "url": "https://qrbtf.com",
            "desc": "可调节样式的二维码生成"
          },
          {
            "name": "Logaster",
            "url": "https://www.logaster.com/qr-code-generator/",
            "desc": "很好的二维码生成"
          },
          {
            "name": "Linktoqr",
            "url": "https://link-to-qr.com",
            "desc": "带样式能调色的二维码生成"
          },
          {
            "name": "WifiSign",
            "url": "https://www.mywifisign.com",
            "desc": "将Wifi账户密码转二维码"
          },
          {
            "name": "WiFi Card",
            "url": "https://wificard.io",
            "desc": "将Wifi账户密码转二维码"
          }
        ]
      },
      {
        "term": "截图录制",
        "links": [
          {
            "name": "网页截屏大师",
            "url": "https://www.screenshotmaster.com",
            "desc": "网页在线截屏页转图像"
          },
          {
            "name": "Screen Guru",
            "url": "https://screen.guru",
            "desc": "捕获网站为带背景色的MAC样式图"
          },
          {
            "name": "Web-Capture",
            "url": "https://web-capture.net",
            "desc": "捕获某网站的长截图"
          },
          {
            "name": "FullpageSC",
            "url": "https://fullpagescreencapture.com",
            "desc": "捕获某网站的长截图"
          },
          {
            "name": "Screenshot",
            "url": "https://www.screenshotmachine.com",
            "desc": "按设备捕获某网站截图"
          },
          {
            "name": "Browserfrm",
            "url": "https://browserframe.com",
            "desc": "给图像添加浏览器边框(fq)"
          },
          {
            "name": "Shar.ec",
            "url": "https://shar.ec",
            "desc": "在线屏幕录制"
          },
          {
            "name": "Rec-Screen",
            "url": "https://recordscreen.io",
            "desc": "录制屏幕和摄像头"
          },
          {
            "name": "ScreenRec",
            "url": "https://screenapp.io",
            "desc": "在线录制屏幕或窗口"
          },
          {
            "name": "Loom",
            "url": "https://www.loom.com",
            "desc": "在线录制屏幕带摄像头像"
          },
          {
            "name": "Shareit",
            "url": "https://shareit.video",
            "desc": "在线录制屏幕或窗口并分享"
          },
          {
            "name": "Scrnrcrd",
            "url": "https://scrnrcrd.com",
            "desc": "在线录制屏幕或窗口"
          },
          {
            "name": "Recordit",
            "url": "https://recordit.co",
            "desc": "在线录制并生成连接"
          },
          {
            "name": "RecordCast",
            "url": "https://www.recordcast.com",
            "desc": "在线录制并下载"
          }
        ]
      },
      {
        "term": "临时邮箱",
        "links": [
          {
            "name": "10m-Email",
            "url": "https://10minutemail.com",
            "desc": "一次性10分钟邮箱"
          },
          {
            "name": "Temp-Mail",
            "url": "https://temp-mail.org/zh/",
            "desc": "临时的免费邮箱有APP"
          },
          {
            "name": "SnapMail",
            "url": "https://www.snapmail.cc",
            "desc": "24小时临时邮箱"
          },
          {
            "name": "Yopmail",
            "url": "http://www.yopmail.com/zh/",
            "desc": "随机生成临时邮箱"
          },
          {
            "name": "Tempinbox",
            "url": "http://www.tempinbox.com",
            "desc": "非常不错的临时邮箱"
          },
          {
            "name": "Guerrilla Mail",
            "url": "https://www.guerrillamail.com/zh/",
            "desc": "临时邮箱"
          },
          {
            "name": "Fake Mail",
            "url": "http://www.fakemailgenerator.com",
            "desc": "临时邮箱"
          },
          {
            "name": "Email-G",
            "url": "https://generator.email",
            "desc": "临时邮箱"
          },
          {
            "name": "Emailfake",
            "url": "https://emailfake.com",
            "desc": "临时邮箱"
          },
          {
            "name": "EmailDeck",
            "url": "https://www.emailondeck.com",
            "desc": "临时邮箱"
          },
          {
            "name": "TempMailP",
            "url": "https://tempmail.plus/zh/",
            "desc": "临时邮箱"
          },
          {
            "name": "Mailnator",
            "url": "https://www.mailinator.com",
            "desc": "临时邮箱"
          },
          {
            "name": "Throwaway",
            "url": "https://www.throwawaymail.com",
            "desc": "临时邮箱"
          },
          {
            "name": "临时邮箱",
            "url": "https://linshiyouxiang.net",
            "desc": "临时邮箱"
          }
        ]
      },
      {
        "term": "短信接码",
        "links": [
          {
            "name": "SMS-Man",
            "url": "https://sms-man.com/cn",
            "desc": "在线短信接码平台"
          },
          {
            "name": "HeroSMS",
            "url": "https://hero-sms.com",
            "desc": "在线短信接码平台"
          },
          {
            "name": "SMS-Activate",
            "url": "https://sms-activate.ru",
            "desc": "在线短信接码平台"
          },
          {
            "name": "Grizzly SMS",
            "url": "https://grizzlysms.com",
            "desc": "在线短信接码平台"
          },
          {
            "name": "AnonymSMS",
            "url": "https://anonymsms.com",
            "desc": "在线短信接码平台"
          },
          {
            "name": "TemporaryNumber",
            "url": "https://temporarynumber.com",
            "desc": "在线短信接码平台"
          },
          {
            "name": "SMS24",
            "url": "https://sms24.me/en",
            "desc": "在线短信接码平台"
          },
          {
            "name": "Receive-SMS",
            "url": "https://receive-sms.com",
            "desc": "SMS 短信接码平台"
          },
          {
            "name": "云短信",
            "url": "https://www.storytrain.info",
            "desc": "在线短信接码平台"
          },
          {
            "name": "云短信",
            "url": "https://www.pdflibr.com",
            "desc": "在线短信接码平台"
          },
          {
            "name": "免费接码",
            "url": "https://mianfeijiema.com",
            "desc": "国内接码平台"
          },
          {
            "name": "在线短信接收",
            "url": "http://www.114sim.com",
            "desc": "国内接码平台"
          },
          {
            "name": "在线接受短信",
            "url": "https://yunduanxin.net",
            "desc": "国内接码平台"
          },
          {
            "name": "在线短信接收",
            "url": "http://www.shejiinn.com",
            "desc": "国内接码平台"
          },
          {
            "name": "接码号",
            "url": "https://jiemahao.com",
            "desc": "国内接码平台"
          },
          {
            "name": "Free Phone",
            "url": "https://www.freeonlinephone.org",
            "desc": "在线短信接码平台"
          },
          {
            "name": "SMS Online",
            "url": "https://www.receivesmsonline.net",
            "desc": "在线短信接码平台"
          },
          {
            "name": "Sellaite SMS",
            "url": "http://sms.sellaite.com",
            "desc": "在线短信接码平台"
          },
          {
            "name": "FreePNum",
            "url": "https://ch.freephonenum.com",
            "desc": "国外接码平台"
          },
          {
            "name": "mytrashm",
            "url": "https://zh.mytrashmobile.com",
            "desc": "国外接码平台"
          },
          {
            "name": "ReSMSol",
            "url": "https://smsreceivefree.com",
            "desc": "国外接码平台"
          },
          {
            "name": "RSOI",
            "url": "https://www.receive-sms-online.info",
            "desc": "国外接码平台"
          },
          {
            "name": "ReSMS",
            "url": "https://receiveasms.com",
            "desc": "国外接码平台"
          },
          {
            "name": "ReSMSolfree",
            "url": "https://sms-online.co/receive-free-sms",
            "desc": "国外接码平台"
          },
          {
            "name": "ReSMSFree",
            "url": "https://us-phone-number.com",
            "desc": "国外接码平台"
          },
          {
            "name": "TempSMSS",
            "url": "https://tempsmss.com",
            "desc": "国外接码平台"
          }
        ]
      },
      {
        "term": "OCR识别",
        "links": [
          {
            "name": "FreeOCR",
            "url": "https://www.newocr.com",
            "desc": "ORC 识别图像"
          },
          {
            "name": "DeepSeek OCR",
            "url": "https://deepseekocr.app",
            "desc": "ORC 识别图像"
          },
          {
            "name": "OCR-PWA",
            "url": "https://github.com/plantree/ocr-pwa",
            "desc": "离线OCR识别图像"
          },
          {
            "name": "OCRify",
            "url": "https://ocrify.com",
            "desc": "ORC 识别图像"
          },
          {
            "name": "OLOCR",
            "url": "https://olocr.com/chinese_simplified",
            "desc": "简单易用的在线 OCR"
          },
          {
            "name": "OCRSpace",
            "url": "https://ocr.space",
            "desc": "在线识别并提供免费API"
          },
          {
            "name": "PearOCR",
            "url": "https://pearocr.com",
            "desc": "ORC 识别图像"
          },
          {
            "name": "白描",
            "url": "https://web.baimiaoapp.com",
            "desc": "ORC 识别服务"
          },
          {
            "name": "OCR表格转Excel",
            "url": "https://zhiyakeji.com/freg/",
            "desc": "OCR 表格转 Excel"
          },
          {
            "name": "EasyScreen",
            "url": "http://online.easyscreenocr.com/ZH",
            "desc": "易用的 OCR 还有软件下载"
          },
          {
            "name": "OnlineOCR",
            "url": "https://www.onlineocr.net/zh_hans",
            "desc": "OCR 识别并转换成文件"
          },
          {
            "name": "DuGuang",
            "url": "https://duguang.aliyun.com/experience",
            "desc": "多种物体图像 OCR 识别"
          },
          {
            "name": "TextConv",
            "url": "https://ocr.wdku.net",
            "desc": "在线文字识别转换"
          }
        ]
      },
      {
        "term": "生成工具",
        "links": [
          {
            "name": "Fakepersongenerator",
            "url": "https://www.fakepersongenerator.com",
            "desc": "多国身份生成"
          },
          {
            "name": "多国身份生成器",
            "url": "https://addressgenerator.top/zh",
            "desc": "多国身份生成"
          },
          {
            "name": "Meiguodizhi",
            "url": "https://www.meiguodizhi.com",
            "desc": "美国身份地址生成器"
          },
          {
            "name": "Roman Name Generator",
            "url": "https://www.namegenerator.co/fantasy/roman-name-generator",
            "desc": "随机英文名称生成"
          },
          {
            "name": "Roman Word Generator",
            "url": "https://randomwordgenerator.com",
            "desc": "随机英文单词生成"
          },
          {
            "name": "美国地址生成器",
            "url": "https://www.usaddrgen.com",
            "desc": "假的美国身份生成器"
          },
          {
            "name": "Fake-Name-generator",
            "url": "https://toolfig.com/fake-name-generator",
            "desc": "假的美国身份生成器"
          },
          {
            "name": "随机英文姓名生成器",
            "url": "https://www.dute.org/fake-name-generator",
            "desc": "假的美国身份生成器"
          },
          {
            "name": "AddressCopy",
            "url": "https://www.addresscopy.com",
            "desc": "多国地址生成器"
          },
          {
            "name": "网名生成器",
            "url": "https://www.qmsjmfb.com",
            "desc": "多种生成模式生成网名"
          },
          {
            "name": "Username-Generator",
            "url": "https://www.lastpass.com/features/username-generator",
            "desc": "网名生成器"
          },
          {
            "name": "Passwrd",
            "url": "https://passwrd.in",
            "desc": "随机密码生成"
          },
          {
            "name": "dashlane",
            "url": "https://www.dashlane.com/features/password-generator",
            "desc": "随机密码生成"
          },
          {
            "name": "Strongpsd",
            "url": "https://www.strongpasswordgenerator.org",
            "desc": "随机密码生成"
          },
          {
            "name": "Lastpass",
            "url": "https://www.lastpass.com/password-generator",
            "desc": "随机密码生成"
          }
        ]
      },
      {
        "term": "文件扫描",
        "links": [
          {
            "name": "Virustotal",
            "url": "https://www.virustotal.com",
            "desc": "恶意文件或病毒扫描"
          },
          {
            "name": "Jotti",
            "url": "https://virusscan.jotti.org",
            "desc": "恶意文件或病毒扫描"
          }
        ]
      },
      {
        "term": "缩短网址",
        "links": [
          {
            "name": "tyn.im",
            "url": "http://tny.im",
            "desc": "缩短链接服务"
          },
          {
            "name": "Bitly",
            "url": "https://bitly.com",
            "desc": "缩短链接服务"
          },
          {
            "name": "Urlify",
            "url": "https://urlify.cn",
            "desc": "缩短链接服务"
          },
          {
            "name": "MergeURL",
            "url": "https://mergeurl.com",
            "desc": "多个网址拼合为单个短网址"
          },
          {
            "name": "Mork.ro",
            "url": "https://mork.ro",
            "desc": "短网址服务支持图像视频"
          },
          {
            "name": "厘短链",
            "url": "https://dlj.li",
            "desc": "短网址生成"
          },
          {
            "name": "Offf.to",
            "url": "https://offf.to",
            "desc": "短网址生成"
          },
          {
            "name": "Ji.hn",
            "url": "https://ji.hn",
            "desc": "短网址生成追踪和转换"
          },
          {
            "name": "TinyURL",
            "url": "https://tinyurl.com",
            "desc": "缩短链接服务"
          },
          {
            "name": "T2M",
            "url": "https://t2mio.com",
            "desc": "缩短链接服务"
          },
          {
            "name": "Rebrandly",
            "url": "https://www.rebrandly.com",
            "desc": "缩短链接服务"
          },
          {
            "name": "AdFly",
            "url": "https://adf.ly",
            "desc": "缩短链接服务"
          }
        ]
      },
      {
        "term": "效率小工具",
        "links": [
          {
            "name": "在线记事本",
            "url": "https://memotalk.hamsterbase.com",
            "desc": "可以在线写作共享的待办看板"
          },
          {
            "name": "To-Do Board",
            "url": "https://todoboard.ca",
            "desc": "可以在线写作共享的待办看板"
          },
          {
            "name": "Juicy Timer",
            "url": "https://justpomodoro.com",
            "desc": "3D立体又简洁的番茄钟"
          },
          {
            "name": "Tomodoro",
            "url": "https://github.com/lazy-guy/tomodoro",
            "desc": "可以浮动的番茄钟"
          },
          {
            "name": "Pomofocus",
            "url": "https://pomofocus.io",
            "desc": "多功能番茄钟"
          },
          {
            "name": "Pomotimer",
            "url": "https://pomotimer.com",
            "desc": "简单番茄钟"
          },
          {
            "name": "WebSSH",
            "url": "https://ssh.mtab.cc",
            "desc": "在线SSH终端"
          },
          {
            "name": "Keep Screen On",
            "url": "https://www.keepscreenon.com",
            "desc": "屏保时钟与屏幕常亮"
          },
          {
            "name": "Flipclocker",
            "url": "https://flipclocker.com",
            "desc": "屏保时钟"
          }
        ]
      },
      {
        "term": "图像获取",
        "links": [
          {
            "name": "Image Downloader",
            "url": "https://imgdownloader.com",
            "desc": "从网站下载图像工具"
          }
        ]
      },
      {
        "term": "视频获取",
        "links": [
          {
            "name": "SaveBilibili",
            "url": "https://savebilibili.com/zh-CN",
            "desc": "哔哩哔哩视频下载"
          },
          {
            "name": "Mtotech",
            "url": "https://v.mtotech.com",
            "desc": "微信视频号下载"
          },
          {
            "name": "SaveXR",
            "url": "https://savexr.com",
            "desc": "多平台视频下载"
          },
          {
            "name": "Easydown",
            "url": "https://www.easydown.org/zh",
            "desc": "多平台视频下载"
          },
          {
            "name": "Ytd.app",
            "url": "https://ytd.app/zh-CN/",
            "desc": "油管视频下载"
          },
          {
            "name": "DLBunny",
            "url": "https://dlbunny.com/zh-CN",
            "desc": "多平台视频下载tiktok"
          },
          {
            "name": "OFA Downloader",
            "url": "https://oneforalldownloader.com/zh/",
            "desc": "多视频平台下载"
          },
          {
            "name": "Best Video",
            "url": "https://www.bestvideow.com",
            "desc": "多视频平台下载"
          },
          {
            "name": "Zeemo",
            "url": "https://zeemo.ai/cn/",
            "desc": "在线视频下载并添加字幕"
          },
          {
            "name": "Downr",
            "url": "https://downr.org",
            "desc": "多平台视频下载"
          },
          {
            "name": "Naver",
            "url": "https://naver.online-downloader.com/index-Chinese",
            "desc": "在线视频下载"
          },
          {
            "name": "GreenVideo",
            "url": "https://greenvideo.cc",
            "desc": "在线视频下载"
          },
          {
            "name": "SavePlays",
            "url": "https://www.saveplays.com/zh/",
            "desc": "在线视频下载"
          },
          {
            "name": "Loader.fo",
            "url": "https://loader.fo/zh/",
            "desc": "油管视频下载"
          },
          {
            "name": "yt2k",
            "url": "https://yt2k.com/zh3",
            "desc": "油管视频下载"
          },
          {
            "name": "SliceTube",
            "url": "https://www.slicetube.io",
            "desc": "剪辑并下载油管视频"
          },
          {
            "name": "Cobalt",
            "url": "https://github.com/imputnet/cobalt",
            "desc": "剪辑并下载油管视频"
          },
          {
            "name": "Anydownloader",
            "url": "https://anydownloader.com/en/",
            "desc": "支持多平台视频下载"
          },
          {
            "name": "DmSave",
            "url": "https://dmsave.top",
            "desc": "支持多平台视频下载"
          },
          {
            "name": "igDown",
            "url": "https://igdown.cc",
            "desc": "支持多平台视频下载"
          },
          {
            "name": "SSYouTube",
            "url": "https://ssyoutube.com",
            "desc": "支持多平台视频下载"
          },
          {
            "name": "CatchV",
            "url": "https://catchv.fooish.com",
            "desc": "支持多平台视频下载"
          },
          {
            "name": "Y2meta",
            "url": "https://www.y2meta.com/zh-cn63",
            "desc": "支持多平台视频下载"
          },
          {
            "name": "Ingramer",
            "url": "https://ingramer.com/downloader",
            "desc": "国外平台视频下载"
          },
          {
            "name": "KeepPost",
            "url": "https://keeppost.com",
            "desc": "Instagram视频下载"
          },
          {
            "name": "Savieo",
            "url": "https://savieo.com/zh/",
            "desc": "老牌多平台视频下载"
          },
          {
            "name": "Dirpy",
            "url": "https://dirpy.link",
            "desc": "多平台视频下载"
          },
          {
            "name": "Twitter-dl",
            "url": "http://twittervideodownloader.com",
            "desc": "获取推特视频和GIF"
          },
          {
            "name": "TWDown",
            "url": "https://twdown.net",
            "desc": "推特视频下载"
          },
          {
            "name": "Tweeload",
            "url": "https://tweeload.com",
            "desc": "推特视频下载"
          },
          {
            "name": "XDownload",
            "url": "https://xdownload.top/zh-cn",
            "desc": "推特视频下载"
          },
          {
            "name": "TwitterDown",
            "url": "https://www.twitterdown.com/zh",
            "desc": "推特视频下载"
          },
          {
            "name": "Xunlangbot",
            "url": "https://xunlangbot.com/download",
            "desc": "推特视频下载"
          },
          {
            "name": "TWDownload",
            "url": "https://twdownload.com",
            "desc": "推特视频下载"
          },
          {
            "name": "GetMyTweet",
            "url": "https://www.getmytweet.com",
            "desc": "推特视频下载"
          },
          {
            "name": "sssTwitter",
            "url": "https://ssstwitter.com",
            "desc": "推特视频下载"
          },
          {
            "name": "SaveTweetVid",
            "url": "https://www.savetweetvid.com",
            "desc": "获取推特的视频"
          },
          {
            "name": "SaveTik",
            "url": "https://savetik.co",
            "desc": "TikTok视频下载"
          },
          {
            "name": "Qload",
            "url": "https://qload.info/zh/",
            "desc": "TikTok视频下载"
          },
          {
            "name": "Proxitok",
            "url": "https://proxitok.pabloferreiro.es",
            "desc": "TikTok搜索下载和RSS订阅"
          },
          {
            "name": "X2Download",
            "url": "https://x2download.com",
            "desc": "油管视频下载"
          },
          {
            "name": "SnapSave",
            "url": "https://snapsave.io",
            "desc": "油管视频下载"
          },
          {
            "name": "SaveMedia.Website",
            "url": "https://savemedia.website",
            "desc": "油管视频下载"
          },
          {
            "name": "SaveYT",
            "url": "https://saveyt.cc/cn",
            "desc": "TikTok油管视频下载"
          },
          {
            "name": "SaveTT",
            "url": "https://savett.cc",
            "desc": "TikTok视频下载"
          },
          {
            "name": "YouTube4KDL",
            "url": "https://youtube4kdownloader.com",
            "desc": "油管视频下载"
          },
          {
            "name": "YouTubeDLD",
            "url": "https://www.youtubedld.com",
            "desc": "油管视频下载"
          },
          {
            "name": "AllTubeDL",
            "url": "https://alltubedownload.net",
            "desc": "油管脸书等平台视频下载"
          },
          {
            "name": "YTCutter",
            "url": "https://ytcutter.net",
            "desc": "油管视频剪辑后下载需注册"
          },
          {
            "name": "YTGoConverter",
            "url": "https://ytgoconverter.com",
            "desc": "油管下载转档音频和视频"
          },
          {
            "name": "Keepvid",
            "url": "https://keepvid.pw/zh/",
            "desc": "支持多个平台视频下载"
          },
          {
            "name": "Yout",
            "url": "https://yout.com",
            "desc": "多平台视频下载"
          },
          {
            "name": "Cut YouTube",
            "url": "https://www.cutyt.com",
            "desc": "油管视频剪辑后下载无需注册"
          },
          {
            "name": "Mp3converter",
            "url": "https://mp3convert.cc",
            "desc": "支持多个平台视频下载并转码"
          },
          {
            "name": "Backupmp3",
            "url": "https://www.backupmp3.com/zh-cn",
            "desc": "将油管下载为MP4或MP3"
          },
          {
            "name": "Loader.to",
            "url": "https://loader.to",
            "desc": "油管视频下载并转换格式"
          },
          {
            "name": "ddownr",
            "url": "https://ddownr.com",
            "desc": "油管视频或播放清单下载"
          },
          {
            "name": "Fdown",
            "url": "https://www.fdown.net",
            "desc": "脸书视频下载"
          },
          {
            "name": "Ontiva",
            "url": "https://ontiva.com",
            "desc": "油管视频下载"
          },
          {
            "name": "Insta",
            "url": "https://instaer.app",
            "desc": "Ins视频下载"
          },
          {
            "name": "BigConverter",
            "url": "https://www.bigconverter.com/v1/",
            "desc": "油管音乐下载"
          },
          {
            "name": "Parsevideo",
            "url": "https://www.parsevideo.com",
            "desc": "基于开源项目的视频获取"
          },
          {
            "name": "ClipConverter",
            "url": "https://www.clipconverter.cc",
            "desc": "获取视频并可以转成各种格式"
          },
          {
            "name": "VideoFk",
            "url": "https://www.videofk.com",
            "desc": "可以获取多平台的视频"
          },
          {
            "name": "SocialSnapper",
            "url": "https://socialsnapper.net",
            "desc": "多平台视频下载"
          },
          {
            "name": "You-Tldr",
            "url": "https://you-tldr.com",
            "desc": "获取油管的视频"
          },
          {
            "name": "Converto.io",
            "url": "https://www.converto.io",
            "desc": "获取油管的视频和音频"
          },
          {
            "name": "Download4",
            "url": "https://www.download4.cc",
            "desc": "多平台视频或音频下载"
          },
          {
            "name": "odownloader",
            "url": "https://odownloader.com",
            "desc": "获取油管的视频和音频"
          },
          {
            "name": "OnlyMP3",
            "url": "https://en.onlymp3.to",
            "desc": "油管视频下载为MP3音频"
          },
          {
            "name": "YTSmp3",
            "url": "https://ytsmp3.com",
            "desc": "油管视频下载为MP3音频"
          },
          {
            "name": "SnapAny",
            "url": "https://bilibili.iiilab.com",
            "desc": "哔哩哔哩视频下载"
          },
          {
            "name": "蜜蜂去水印",
            "url": "https://video.ciding.cc",
            "desc": "视频下载去水印"
          },
          {
            "name": "Image Extraction",
            "url": "https://www.imageextraction.com",
            "desc": "网站图像获取"
          },
          {
            "name": "Image Extractor",
            "url": "https://extract.pics",
            "desc": "批量下载图像"
          }
        ]
      },
      {
        "term": "字幕处理",
        "links": [
          {
            "name": "Downsub",
            "url": "https://downsub.com",
            "desc": "油管字幕下载"
          },
          {
            "name": "Savesubs",
            "url": "https://savesubs.com",
            "desc": "下载字幕并转换"
          },
          {
            "name": "AiTranscript",
            "url": "https://aiyoutubetranscript.com",
            "desc": "油管字幕下载"
          },
          {
            "name": "Dlytsubtitles",
            "url": "https://www.downloadyoutubesubtitles.com",
            "desc": "下载字幕并转换"
          },
          {
            "name": "YouTube CS",
            "url": "https://ytbcomments.com",
            "desc": "油管评论下载"
          },
          {
            "name": "YTG",
            "url": "https://transcriptgenerator.org/zh-TW",
            "desc": "下載油管字幕与生成AI摘要"
          },
          {
            "name": "字幕翻译",
            "url": "https://tools.newzone.top/zh/subtitle-translator",
            "desc": "AI字幕翻译"
          }
        ]
      },
      {
        "term": "工具箱",
        "links": [
          {
            "name": "RTHTool",
            "url": "https://rthsoftware.cn",
            "desc": "实用工具合集"
          },
          {
            "name": "偷懒工具",
            "url": "https://toolight.cn",
            "desc": "效率工具合集"
          },
          {
            "name": "67tool",
            "url": "https://www.67tool.com",
            "desc": "实用工具合集"
          },
          {
            "name": "MikuTools",
            "url": "https://tools.miku.ac",
            "desc": "二次元风格实用工具合集"
          },
          {
            "name": "UUtool",
            "url": "https://uutool.cn",
            "desc": "实用工具合集"
          },
          {
            "name": "一个木函",
            "url": "https://woobx.cn",
            "desc": "实用工具合集"
          },
          {
            "name": "爱资料工具箱",
            "url": "https://www.toolnb.com",
            "desc": "效率工具合集"
          },
          {
            "name": "Youtils",
            "url": "https://youtils.cc",
            "desc": "轻量级实用工具合集"
          },
          {
            "name": "独特工具箱",
            "url": "https://www.dute.org",
            "desc": "实用工具合集"
          },
          {
            "name": "Toolfun",
            "url": "https://tools.fun",
            "desc": "实用工具箱"
          },
          {
            "name": "蛙蛙工具",
            "url": "https://www.iamwawa.cn",
            "desc": "日常办公工具箱"
          },
          {
            "name": "优工具",
            "url": "https://toolbon.com",
            "desc": "实用工具箱"
          },
          {
            "name": "迷你工具箱",
            "url": "http://www.lizibuluo.com",
            "desc": "小巧实用的工具箱"
          }
        ]
      }
    ]
  },
  {
    "taxonomy": "办公文档",
    "icon": "fa-briefcase",
    "list": [
      {
        "term": "白板画图",
        "links": [
          {
            "name": "Excalidraw",
            "url": "https://excalidraw.com",
            "desc": "手绘白板在线画板"
          },
          {
            "name": "Koboyo",
            "url": "https://koboyo.com",
            "desc": "手绘白板在线画板"
          },
          {
            "name": "Tldraw",
            "url": "https://www.tldraw.com",
            "desc": "流畅的白板"
          },
          {
            "name": "Drawnix",
            "url": "https://drawnix.com",
            "desc": "白板带思维导图"
          },
        ]
      },
      {
        "term": "脑图大纲",
        "links": [
          {
            "name": "幕布",
            "url": "https://mubu.com",
            "desc": "列表并支持简单脑图"
          },
          {
            "name": "Workflowy",
            "url": "http://www.workflowy.com",
            "desc": "国外知名的文档列表"
          },
          {
            "name": "GitMind",
            "url": "https://gitmind.cn",
            "desc": "非常好的免费思维导图"
          },
          {
            "name": "AmyMind",
            "url": "https://amymind.com",
            "desc": "即开即用的思维导图和流程图"
          },
          {
            "name": "ProcessOn",
            "url": "https://processon.com",
            "desc": "国内早期专业的脑图"
          },
          {
            "name": "Markmap",
            "url": "https://markmap.js.org",
            "desc": "Markdown 生成脑图"
          },
          {
            "name": "知犀",
            "url": "https://www.zhixi.com",
            "desc": "免费的思维脑图"
          },
          {
            "name": "百度脑图",
            "url": "https://naotu.baidu.com",
            "desc": "免费的思维脑图"
          },
          {
            "name": "迅捷画图",
            "url": "https://www.liuchengtu.com",
            "desc": "免费的思维脑图"
          },
          {
            "name": "Coggle",
            "url": "https://coggle.it",
            "desc": "精美个性的国外脑图"
          },
          {
            "name": "Whimsical",
            "url": "https://whimsical.com",
            "desc": "多种文档类型的脑图"
          },
          {
            "name": "Mapify",
            "url": "https://mapify.so/cn",
            "desc": "基于AI的思维导图"
          },
          {
            "name": "Dynalist",
            "url": "https://dynalist.io",
            "desc": "很好的文档列表"
          },
          {
            "name": "Manifest：",
            "url": "https://www.manifest.app",
            "desc": "网格的针板便笺"
          },
          {
            "name": "Drawio",
            "url": "https://www.diagrams.net",
            "desc": "很专业的在线绘图"
          },
          {
            "name": "Wireflow",
            "url": "https://wireflow.co",
            "desc": "很不错的流程图"
          },
          {
            "name": "Asciiflow",
            "url": "http://asciiflow.com",
            "desc": "有趣的 Ascll 码绘图"
          },
          {
            "name": "TreeMD",
            "url": "https://tree.nathanfriend.io",
            "desc": "markdown 生成树型目录"
          },
          {
            "name": "TextKool",
            "url": "https://textkool.com",
            "desc": "Ascll 文字生成图"
          }
        ]
      },
      {
        "term": "文档在线",
        "links": [
          {
            "name": "语雀",
            "url": "https://www.yuque.com",
            "desc": "阿里出品专业的知识库"
          },
          {
            "name": "腾讯文档",
            "url": "https://docs.qq.com",
            "desc": "腾讯出品的在线文档"
          },
          {
            "name": "石墨文档",
            "url": "https://shimo.im",
            "desc": "专业好用的在线文档"
          },
          {
            "name": "Miro",
            "url": "https://miro.com",
            "desc": "不错的团队在线合作"
          },
          {
            "name": "Microsoft Loop",
            "url": "https://loop.microsoft.com",
            "desc": "微软推出的智能笔记"
          },
          {
            "name": "Notion",
            "url": "https://www.notion.so",
            "desc": "全球知名的在线笔记"
          },
          {
            "name": "SeaTable",
            "url": "https://seatable.cn",
            "desc": "在线表格协同工具"
          },
          {
            "name": "Baklib",
            "url": "https://www.baklib.com",
            "desc": "建立企业知识库"
          },
          {
            "name": "印象笔记",
            "url": "https://app.yinxiang.com",
            "desc": "知识笔记手册"
          },
          {
            "name": "钉钉项目",
            "url": "https://www.teambition.com",
            "desc": "项目协同工具"
          },
          {
            "name": "OfficePlus",
            "url": "http://www.officeplus.cn",
            "desc": "微软官方 Office 模板"
          },
          {
            "name": "Excelhome",
            "url": "https://www.excelhome.net",
            "desc": "Excel教程和下载"
          },
          {
            "name": "CSVInk",
            "url": "https://csv.ink",
            "desc": "在线编辑CSV文件"
          },
          {
            "name": "第1PPT",
            "url": "https://www.1ppt.com",
            "desc": "PPT 模板素材"
          },
          {
            "name": "比格PPT",
            "url": "http://www.tretars.com",
            "desc": "PPT 模板素材"
          },
          {
            "name": "优品PPT",
            "url": "https://www.ypppt.com",
            "desc": "PPT 模板素材"
          },
          {
            "name": "小米PPT",
            "url": "https://www.xiaomippt.com",
            "desc": "PPT 模板素材"
          },
          {
            "name": "PPT超级市场",
            "url": "https://ppt.sotary.com",
            "desc": "很多不错的 PPT 模板"
          },
          {
            "name": "嗨文库",
            "url": "http://hiwenku.com",
            "desc": "下载百度文库文档"
          },
          {
            "name": "办公资源网",
            "url": "https://www.bangongziyuan.com",
            "desc": "办公相关资源文档"
          },
          {
            "name": "香当网",
            "url": "https://www.xiangdang.net",
            "desc": "范文模板，保证书什么的"
          }
        ]
      },
      {
        "term": "文件转换",
        "links": [
          {
            "name": "VERT",
            "url": "https://vert.sh",
            "desc": "使用本机的文件转换器"
          },
          {
            "name": "ConvertIO",
            "url": "http://convertio.co/zh",
            "desc": "专业的在线文件转换器"
          },
          {
            "name": "FileConverto",
            "url": "https://www.fileconverto.com",
            "desc": "多文件格式转换和编辑"
          },
          {
            "name": "Word.to",
            "url": "https://word.to",
            "desc": "Word转成其它格式或反之"
          },
          {
            "name": "MarkItDown",
            "url": "https://markitdown.pro",
            "desc": "各种文件格式转Markdown"
          },
          {
            "name": "Doc2X",
            "url": "https://doc2x.noedgeai.com/markdownEdit",
            "desc": "Markdown转各种格式"
          },
          {
            "name": "TinyWow",
            "url": "https://tinywow.com",
            "desc": "多种格式转换"
          },
          {
            "name": "Aconvert",
            "url": "https://www.aconvert.com/cn/",
            "desc": "多种格式文件在线转换"
          },
          {
            "name": "ConvertTool",
            "url": "https://converttool.org/zh-cn/",
            "desc": "在线转换支持300+小工具"
          },
          {
            "name": "OL-Convert",
            "url": "https://www.online-convert.com",
            "desc": "多种格式转换还有扩展"
          },
          {
            "name": "Convertr",
            "url": "https://convertr.org",
            "desc": "视频音频格式转换"
          },
          {
            "name": "CloudConvert",
            "url": "https://cloudconvert.com",
            "desc": "200+格式的转换(fq)"
          },
          {
            "name": "Files-Conversion",
            "url": "https://www.files-conversion.com",
            "desc": "多种文件格式转换"
          },
          {
            "name": "CDKM",
            "url": "https://cdkm.com",
            "desc": "多种文件格式转换"
          },
          {
            "name": "Zamzar",
            "url": "https://www.zamzar.com",
            "desc": "多格式文件转换"
          },
          {
            "name": "AnyConv",
            "url": "https://anyconv.com",
            "desc": "多格式文件转换"
          },
          {
            "name": "FileZigZag",
            "url": "https://www.filezigzag.com/online-converter",
            "desc": "多格式文件转换"
          },
          {
            "name": "Video Converter",
            "url": "https://www.videoconverter.com/zh/",
            "desc": "在线视频格式转换"
          },
          {
            "name": "Video Converter",
            "url": "https://compressmp4.org",
            "desc": "浏览器本地视频压缩"
          },
          {
            "name": "All to Alll",
            "url": "http://www.alltoall.net",
            "desc": "200+格式的文件转换"
          },
          {
            "name": "Office Converter",
            "url": "https://cn.office-converter.com",
            "desc": "超多文件格式的转换"
          },
          {
            "name": "Archive Ext",
            "url": "https://extract.me/cn/",
            "desc": "压缩包在线解压缩转档"
          },
          {
            "name": "FileUNZIP",
            "url": "https://cn.fileunzip.com",
            "desc": "压缩包在线解压缩"
          },
          {
            "name": "EzyZip",
            "url": "https://www.ezyzip.com/cn.html",
            "desc": "浏览器压缩包在线解压"
          },
          {
            "name": "b1",
            "url": "https://online.b1.org/online",
            "desc": "在线解压缩"
          },
          {
            "name": "YouCompress",
            "url": "https://www.youcompress.com/zh-cn/",
            "desc": "文件压缩"
          },
          {
            "name": "WebArchive",
            "url": "https://web.archive.org",
            "desc": "互联网档案馆"
          },
          {
            "name": "Archive Forever",
            "url": "https://www.archiveforever.xyz",
            "desc": "永久存档保存网页"
          },
          {
            "name": "Rename",
            "url": "https://github.com/JasonGrass/rename",
            "desc": "批量重命名"
          }
        ]
      },
      {
        "term": "PDF处理",
        "links": [
          {
            "name": "SmallPDF",
            "url": "http://smallpdf.com",
            "desc": "专业的PDF转换支持扩展"
          },
          {
            "name": "QuicklyPDF",
            "url": "https://quicklypdf.com/zh",
            "desc": "快捷便捷简单的PDF工具"
          },
          {
            "name": "AvePDF",
            "url": "https://avepdf.com/zh",
            "desc": "快捷便捷简单的PDF工具"
          },
          {
            "name": "Pdf.to",
            "url": "https://pdf.to",
            "desc": "PDF转成其它格式或反之"
          },
          {
            "name": "CleverPDF",
            "url": "https://www.cleverpdf.com/cn",
            "desc": "在线的 PDF 工具集"
          },
          {
            "name": "LightPDF",
            "url": "https://lightpdf.com/tw",
            "desc": "来自台湾的PDF编辑器"
          },
          {
            "name": "PDF2Go",
            "url": "https://www.pdf2go.com/zh",
            "desc": "不错的PDF工具有浏览器扩展"
          },
          {
            "name": "PDFtool",
            "url": "https://www.pdftool.org/zh",
            "desc": "支持离线的PDF工具"
          },
          {
            "name": "PDF.Online",
            "url": "https://pdf.online",
            "desc": "不错的在线PDF工具"
          },
          {
            "name": "PDFtoImg",
            "url": "https://pdfconvertfree.com",
            "desc": "PDF转换为图像文件"
          },
          {
            "name": "PDF Candy",
            "url": "https://pdfcandy.com/cn",
            "desc": "不错的PDF工具合集"
          },
          {
            "name": "iLovePDF",
            "url": "https://www.ilovepdf.com/zh-cn",
            "desc": "不错的PDF工具合集"
          },
          {
            "name": "PDF24",
            "url": "https://tools.pdf24.org/zh/",
            "desc": "易用的PDF工具"
          },
          {
            "name": "HiPDF",
            "url": "https://www.hipdf.cn",
            "desc": "易用的PDF工具"
          },
          {
            "name": "Pdfcrowd",
            "url": "https://pdfcrowd.com",
            "desc": "将某网站转成html并下载"
          },
          {
            "name": "Printfriendly",
            "url": "https://www.printfriendly.com",
            "desc": "网页生成为 PDF 文档"
          },
          {
            "name": "PDFescape",
            "url": "https://www.pdfescape.com",
            "desc": "免费的PDF编辑器"
          },
          {
            "name": "Sejda PDF Editor",
            "url": "https://www.sejda.com/pdf-editor",
            "desc": "免费的PDF编辑器"
          },
          {
            "name": "OakPDF",
            "url": "https://oakpdf.com",
            "desc": "PDF 转扫描效果"
          }
        ]
      },
      {
        "term": "音频处理",
        "links": [
          {
            "name": "Wavvy",
            "url": "https://wavvy.app",
            "desc": "像 Audacity 的音频编辑器"
          },
          {
            "name": "Ringer",
            "url": "https://ringer.org",
            "desc": "音频截取做为铃声"
          },
          {
            "name": "Audio Cutter Online",
            "url": "https://clideo.com/cut-audio",
            "desc": "音频剪辑"
          },
          {
            "name": "Audio Cutter",
            "url": "https://audiocutter.online",
            "desc": "音频剪辑"
          },
          {
            "name": "Cut MP3 Online",
            "url": "https://cutmp3.net",
            "desc": "MP3截取做为铃声"
          },
          {
            "name": "Mp3 Cut",
            "url": "https://mp3cut.foxcom.su/en/",
            "desc": "MP3截取做为铃声"
          },
          {
            "name": "MyEdit",
            "url": "https://myedit.online/cn",
            "desc": "音频编辑器还能编辑图像"
          },
          {
            "name": "MazMazika",
            "url": "https://www.mazmazika.com/vocalremover",
            "desc": "人声分离并支持调用油管"
          },
          {
            "name": "UVR5",
            "url": "https://uvr5.online",
            "desc": "人声分离"
          },
          {
            "name": "Vocalremover",
            "url": "https://vocalremover.org/zh",
            "desc": "音频编辑人声分离伴奏"
          },
          {
            "name": "Notta Online Vocal Remover",
            "url": "https://www.notta.ai/en/tools/online-vocal-remover",
            "desc": "AI将分离声音与音乐"
          },
          {
            "name": "Aoqiv",
            "url": "https://www.aoqiv.com",
            "desc": "在线音乐编辑器"
          },
          {
            "name": "Mycassette",
            "url": "https://www.mycassette.app",
            "desc": "将音乐做成磁带视频"
          },
          {
            "name": "Audiomass",
            "url": "https://audiomass.co",
            "desc": "在线音乐编辑器"
          },
          {
            "name": "Speechlogger",
            "url": "https://speechlogger.appspot.com/zh/",
            "desc": "自动语音识别和即时翻译软件"
          },
          {
            "name": "Turboscribe",
            "url": "https://turboscribe.ai/zh-CN/",
            "desc": "AI录音转文字"
          },
          {
            "name": "悦录",
            "url": "http://www.voiceclub.cn",
            "desc": "录音转文字"
          },
          {
            "name": "TTSMaker",
            "url": "https://ttsmaker.com/zh-cn",
            "desc": "文字转语音"
          },
          {
            "name": "oTranscribe",
            "url": "https://otranscribe.com",
            "desc": "摆脱听写录音稿的痛苦"
          },
          {
            "name": "Notevibes",
            "url": "https://notevibes.com",
            "desc": "文字转语音"
          },
          {
            "name": "Vocaroo",
            "url": "https://vocaroo.com",
            "desc": "在线录音机"
          },
          {
            "name": "Good Tape",
            "url": "https://www.mygoodtape.com",
            "desc": "将音频转换为逐字稿"
          },
          {
            "name": "Speakpipe",
            "url": "https://www.speakpipe.com/voice-recorder",
            "desc": "在线录音机"
          }
        ]
      },
      {
        "term": "数据图表",
        "links": [
          {
            "name": "文图",
            "url": "http://wentu.io",
            "desc": "制作可视化图表"
          },
          {
            "name": "Make Graph",
            "url": "https://makegraph.app",
            "desc": "免费数据图表制作"
          },
          {
            "name": "AI Graph Maker",
            "url": "https://aigraphmaker.net/zh-hans",
            "desc": "AI快速生成图表"
          },
          {
            "name": "Tier List",
            "url": "https://tiermaker.com",
            "desc": "层级表排名天梯图制作"
          },
          {
            "name": "Data GIF",
            "url": "https://graphy.app",
            "desc": "数据GIF制作"
          },
          {
            "name": "Graphy",
            "url": "https://datagifmaker.withgoogle.com",
            "desc": "制作可视化图表"
          },
          {
            "name": "Raycharts",
            "url": "https://raycharts.raykite.com",
            "desc": "可视化制作图表"
          },
          {
            "name": "Taskade",
            "url": "https://www.taskade.com",
            "desc": "制作精美的列表图"
          },
          {
            "name": "百度图说",
            "url": "https://tushuo.baidu.com",
            "desc": "百度出品制作各种图表"
          },
          {
            "name": "ChartCube",
            "url": "https://chartcube.alipay.com",
            "desc": "快速制作数据图表"
          },
          {
            "name": "镝数图表",
            "url": "https://dycharts.com",
            "desc": "很多的数据图表制作"
          },
          {
            "name": "图标秀",
            "url": "https://www.tubiaoxiu.com",
            "desc": "轻松制作可视化图表"
          },
          {
            "name": "花火Hanabi",
            "url": "https://hanabi.data-viz.cn",
            "desc": "轻松制作可视化图表"
          },
          {
            "name": "Line Graph Maker",
            "url": "https://linegraphmaker.co",
            "desc": "轻松制作可视化图表"
          },
          {
            "name": "Pixel Map",
            "url": "https://pixelmap.amcharts.com",
            "desc": "自定义色块地图"
          },
          {
            "name": "Tinychart",
            "url": "http://tinychart.co",
            "desc": "轻松制作曲线图表"
          },
          {
            "name": "LiziBuluo",
            "url": "http://www.lizibuluo.com/bar",
            "desc": "多种数据图表制作"
          },
          {
            "name": "Chart Factory",
            "url": "https://chartsfactory.com",
            "desc": "好用但要收费的数据图表"
          },
          {
            "name": "Flourish",
            "url": "https://flourish.studio",
            "desc": "数据跑分效果图制作"
          }
        ]
      },
      {
        "term": "Markdown",
        "links": [
          {
            "name": "StackEdit",
            "url": "https://stackedit.io",
            "desc": "Markdown编辑器"
          },
          {
            "name": "Defuddle",
            "url": "https://defuddle.md",
            "desc": "网页转Markdown"
          },
          {
            "name": "Markdown.new",
            "url": "https://markdown.new",
            "desc": "网页转Markdown"
          },
          {
            "name": "Arya",
            "url": "https://markdown.lovejade.cn/",
            "desc": "支持各种图表，还可以转换的md编辑器"
          },
          {
            "name": "Hackmd",
            "url": "https://hackmd.io",
            "desc": "团队合作的md编辑器"
          },
          {
            "name": "Dillinger",
            "url": "http://dillinger.io",
            "desc": "很好用的md编辑器"
          },
          {
            "name": "Dingus",
            "url": "https://daringfireball.net/projects/markdown/dingus",
            "desc": "适合学习markdown语法"
          },
          {
            "name": "Paste to MD",
            "url": "https://euangoddard.github.io/clipboard2markdown",
            "desc": "粘贴转换为Markdown"
          },
          {
            "name": "Mermaid",
            "url": "https://mermaidjs.github.io/mermaid-live-editor",
            "desc": "用Markdown写流程图"
          },
          {
            "name": "作业部落",
            "url": "https://www.zybuluo.com",
            "desc": "md在线编辑器"
          },
          {
            "name": "小书匠",
            "url": "http://xiaoshujiang.com",
            "desc": "md在线编辑器"
          }
        ]
      },
      {
        "term": "写公众号",
        "links": [
          {
            "name": "MDhere",
            "url": "https://md.doocs.org",
            "desc": "Markdown复制到公众号编辑器"
          },
          {
            "name": "mdEditor",
            "url": "https://markdown.com.cn/editor",
            "desc": "Markdown复制到公众号"
          },
          {
            "name": "WeFormat",
            "url": "https://lab.lyric.im/wxformat",
            "desc": "Markdown复制到公众号"
          },
          {
            "name": "OpenWrite",
            "url": "https://md.openwrite.cn",
            "desc": "Markdown复制到公众号"
          },
          {
            "name": "可能吧",
            "url": "https://knb.im/mp",
            "desc": "Markdown复制到公众号"
          },
          {
            "name": "壹伴",
            "url": "https://yiban.io",
            "desc": "公众号编辑用浏览器插件"
          },
          {
            "name": "微信广告",
            "url": "https://ad.weixin.qq.com",
            "desc": "微信官方广告"
          },
          {
            "name": "公众号辅助",
            "url": "http://www.wxmarkdown.com",
            "desc": "公众号辅助助手"
          },
          {
            "name": "原牛",
            "url": "https://mihoyonb.com",
            "desc": "一站式自媒体工具平台"
          },
          {
            "name": "写作猫",
            "url": "https://xiezuocat.com",
            "desc": "很不错的错别字检查"
          },
          {
            "name": "无错字",
            "url": "https://wucuozi.com",
            "desc": "很不错的错别字检查"
          },
          {
            "name": "IP签名档",
            "url": "https://ip.ntrqq.net",
            "desc": "IP地址签名图片卡片"
          },
          {
            "name": "Wechat2pdf",
            "url": "http://wechat2pdf.com",
            "desc": "微信公众号文章转PDF"
          },
          {
            "name": "微信集赞",
            "url": "https://wejizan.com",
            "desc": "生成集赞截图"
          },
          {
            "name": "Pixpark",
            "url": "https://picprose.pixpark.net",
            "desc": "生成封面图"
          },
          {
            "name": "考拉新媒体导航",
            "url": "https://www.kaolamedia.com",
            "desc": "自媒体导航"
          }
        ]
      }
    ]
  },
  {
    "taxonomy": "书籍课堂",
    "icon": "fa-graduation-cap",
    "list": [
      {
        "term": "知道综合",
        "links": [
          {
            "name": "知乎",
            "url": "https://www.zhihu.com",
            "desc": "知识问答平台"
          },
          {
            "name": "简书",
            "url": "https://www.jianshu.com",
            "desc": "留空"
          },
          {
            "name": "WikiHow",
            "url": "http://zh.wikihow.com",
            "desc": "留空"
          },
          {
            "name": "Topbook",
            "url": "https://topbook.cc",
            "desc": "留空"
          }
        ]
      },
      {
        "term": "阅读书籍",
        "links": [
          {
            "name": "鸠摩搜书",
            "url": "http://jiumodiary.com",
            "desc": "很不错的搜书网站"
          },
          {
            "name": "SaltyLeo的书架",
            "url": "https://tstrs.me",
            "desc": "很不错的搜书网站"
          },
          {
            "name": "24H搜书",
            "url": "https://daohangxie.com/sites/2016.html",
            "desc": "很不错的搜书网站"
          },
          {
            "name": "ZLibary",
            "url": "https://zh.z-library.sk",
            "desc": "最给力的书籍下载"
          },
          {
            "name": "TheFuture",
            "url": "https://bks.thefuture.top",
            "desc": "很不错的搜书引擎"
          },
          {
            "name": "淘链客",
            "url": "https://www.toplinks.cc",
            "desc": "聚合搜书引擎"
          },
          {
            "name": "Neat Reader",
            "url": "https://www.neat-reader.cn/webapp",
            "desc": "Web版电子书阅读器"
          },
          {
            "name": "Flowoss",
            "url": "https://github.com/pacexy/flow",
            "desc": "ePub电子书阅读器"
          },
          {
            "name": "Lota",
            "url": "https://app.lotareader.com",
            "desc": "VSCode风格的 EPUB 电子书阅读器"
          },
          {
            "name": "GetFreeEBooks",
            "url": "https://www.getfreeebooks.com",
            "desc": "英文图书推荐合集"
          },
          {
            "name": "书伴",
            "url": "https://bookfere.com",
            "desc": "电子书综合类网站"
          },
          {
            "name": "苦瓜书盘",
            "url": "https://kgbook.com",
            "desc": "电子书下载"
          },
          {
            "name": "小小书库",
            "url": "https://xxskvip.ctfile.com/dir/4015388-26932121-b2aa31",
            "desc": "网盘分享电子书"
          },
          {
            "name": "免费编程书籍",
            "url": "https://ebookfoundation.github.io/free-programming-books",
            "desc": "计算机编程书籍"
          },
          {
            "name": "Free Computer Books",
            "url": "http://freecomputerbooks.com",
            "desc": "计算机技术书籍"
          },
          {
            "name": "走读派读书导航",
            "url": "http://zoudupai.com",
            "desc": "书籍导航"
          }
        ]
      },
      {
        "term": "在线课堂",
        "links": [
          {
            "name": "AI星踪岛",
            "url": "https://aixzd.com",
            "desc": "AI自学教程"
          },
          {
            "name": "Doyoudo",
            "url": "https://www.doyoudo.com",
            "desc": "设计软件教程网站"
          },
          {
            "name": "网易公开课",
            "url": "http://open.163.com",
            "desc": "网易出品的公开课"
          },
          {
            "name": "学堂在线",
            "url": "http://xuetangx.com",
            "desc": "综合学习平台"
          },
          {
            "name": "蓝桥云课",
            "url": "https://www.lanqiao.cn",
            "desc": "综合学习平台"
          },
          {
            "name": "网易云课堂",
            "url": "http://study.163.com",
            "desc": "网易出品的云课堂"
          },
          {
            "name": "MBAlib",
            "url": "http://wiki.mbalib.com",
            "desc": "MBA智库百科"
          },
          {
            "name": "51自学网",
            "url": "http://www.51zxw.net",
            "desc": "一个初级的自学网站"
          },
          {
            "name": "MyEnglishPages",
            "url": "https://www.myenglishpages.com",
            "desc": "非常不错的自学英语"
          },
          {
            "name": "TED",
            "url": "https://www.ted.com",
            "desc": "著名的TED演讲"
          },
          {
            "name": "单词森林",
            "url": "https://wordforest.cn",
            "desc": "简洁实用英语学习"
          },
          {
            "name": "Earthworm",
            "url": "https://github.com/cuixueshe/earthworm",
            "desc": "在线学习英语"
          }
        ]
      },
      {
        "term": "前端课堂",
        "links": [
          {
            "name": "慕课网",
            "url": "http://www.imooc.com",
            "desc": "程序员的课堂"
          },
          {
            "name": "MDN Web",
            "url": "https://developer.mozilla.org/zh-CN",
            "desc": "最专业Web开发学习文档"
          },
          {
            "name": "九章算法",
            "url": "https://www.jiuzhang.com",
            "desc": "课程教程"
          },
          {
            "name": "现代JS教程",
            "url": "https://zh.javascript.info",
            "desc": "现代 JavaScript 教程"
          },
          {
            "name": "W3School",
            "url": "https://www.w3schools.com",
            "desc": "国外很不错的前端课堂"
          },
          {
            "name": "菜鸟教程",
            "url": "http://www.runoob.com",
            "desc": "简单的菜鸟入门教程"
          },
          {
            "name": "w3cplus",
            "url": "http://www.w3cplus.com",
            "desc": "前端教程"
          },
          {
            "name": "阿西河",
            "url": "https://www.axihe.com",
            "desc": "公益的前端教程"
          }
        ]
      }
    ]
  },
  {
    "taxonomy": "网络购物",
    "icon": "fa-shopping-cart",
    "list": [
      {
        "term": "大型平台",
        "links": [
          {
            "name": "淘宝网",
            "url": "https://www.taobao.com",
            "desc": "国内主流的购物平台"
          },
          {
            "name": "京东购物",
            "url": "https://www.jd.com",
            "desc": "国内主流的购物平台"
          },
          {
            "name": "唯品会",
            "url": "https://www.vip.com",
            "desc": "国内的购物平台"
          },
          {
            "name": "苏宁易购",
            "url": "https://www.suning.com",
            "desc": "国内的购物平台"
          },
          {
            "name": "亚马逊",
            "url": "https://www.amazon.cn",
            "desc": "全球最主流的购物平台"
          },
          {
            "name": "亚马逊（美国）",
            "url": "https://www.amazon.com",
            "desc": "全球最主流的购物平台"
          },
          {
            "name": "小米商城",
            "url": "https://www.mi.com",
            "desc": "小米旗下官方商城"
          },
          {
            "name": "PayPal（贝宝）",
            "url": "https://www.paypal.com",
            "desc": "全球知名的支付平台"
          }
        ]
      },
      {
        "term": "优惠信息",
        "links": [
          {
            "name": "什么值得买",
            "url": "https://www.smzdm.com",
            "desc": "主流的优惠信息平台"
          },
          {
            "name": "喵喵折",
            "url": "https://www.miaomiaozhe.com",
            "desc": "有浏览器扩展可以查价格"
          },
          {
            "name": "购物党",
            "url": "https://www.gwdang.com",
            "desc": "有浏览器扩展的比价网站"
          },
          {
            "name": "慢慢买",
            "url": "http://www.manmanbuy.com",
            "desc": "优惠信息"
          },
          {
            "name": "值值值",
            "url": "https://www.zhizhizhi.com",
            "desc": "优惠信息"
          }
        ]
      },
      {
        "term": "快递物流",
        "links": [
          {
            "name": "快递100",
            "url": "https://www.kuaidi100.com",
            "desc": "综合快递查询"
          },
          {
            "name": "顺丰快递",
            "url": "http://www.sf-express.com",
            "desc": "最好快递"
          },
          {
            "name": "京东物流",
            "url": "http://www.jdl.cn",
            "desc": "最好的快递"
          },
          {
            "name": "申通快递",
            "url": "http://www.sto.cn",
            "desc": "老牌快递"
          },
          {
            "name": "圆通快递",
            "url": "http://www.yto.net.cn",
            "desc": "老牌快递"
          },
          {
            "name": "中通快递",
            "url": "http://www.zto.cn",
            "desc": "老牌快递"
          },
          {
            "name": "韵达快递",
            "url": "http://www.yundaex.com",
            "desc": "老牌快递"
          },
          {
            "name": "极兔快递",
            "url": "http://www.jtexpress.com.cn",
            "desc": "快递公司"
          },
          {
            "name": "邮政EMS",
            "url": "https://www.ems.com.cn",
            "desc": "快递公司"
          },
          {
            "name": "德邦快递",
            "url": "http://www.deppon.com",
            "desc": "物流快递公司"
          },
          {
            "name": "丰网快递",
            "url": "http://www.fwx-network.com",
            "desc": "顺丰旗下的快递公司"
          },
          {
            "name": "壹米滴答",
            "url": "https://www.yimidida.com",
            "desc": "物流快递公司"
          }
        ]
      },
      {
        "term": "海淘转运",
        "links": [
          {
            "name": "转中转运",
            "url": "https://www.uszcn.com",
            "desc": "海淘用海运服务"
          },
          {
            "name": "中环转运",
            "url": "https://www.zhonghuanus.com",
            "desc": "海淘用海运服务"
          },
          {
            "name": "铭宣海淘",
            "url": "https://www.mxhaitao.com",
            "desc": "海淘用海运服务"
          }
        ]
      }
    ]
  },
  {
    "taxonomy": "编程开发",
    "icon": "fa-code",
    "list": [
      {
        "term": "编程相关",
        "links": [
          {
            "name": "Gitee",
            "url": "https://gitee.com",
            "desc": "码云国内代码托管平台"
          },
          {
            "name": "GitLab",
            "url": "https://gitlab.com",
            "desc": "国外极狐代码托管平台"
          },
          {
            "name": "极狐",
            "url": "https://jihulab.com",
            "desc": "国内GitLab"
          },
          {
            "name": "阿里云效",
            "url": "https://codeup.aliyun.com",
            "desc": "阿里云的代码托管平台"
          },
          {
            "name": "DevBuilder",
            "url": "https://mytemplate.xyz",
            "desc": "开发介绍网页页面生成"
          },
          {
            "name": "readMD",
            "url": "https://readmd.itsvg.in",
            "desc": "自述文件快速生成"
          },
          {
            "name": "gh.ttti",
            "url": "https://ghdl.ttti.cc",
            "desc": "GitHub加速下载文件"
          },
          {
            "name": "Githubhosts",
            "url": "https://hosts.gitcdn.top",
            "desc": "加速GitHub的hosts"
          },
          {
            "name": "Coding",
            "url": "https://coding.net",
            "desc": "团队项目合作代码托管"
          }
        ]
      },
      {
        "term": "JSON 文件",
        "links": [
          {
            "name": "JSON Hero",
            "url": "https://jsonhero.io",
            "desc": "强大的 JSON 可视化工具"
          },
          {
            "name": "JSON Crack",
            "url": "https://jsoncrack.com",
            "desc": "可以将 JSON 文件数据转成树状图"
          },
          {
            "name": "jsons",
            "url": "http://www.jsons.cn",
            "desc": "Json解析格式化工具"
          },
          {
            "name": "sojson",
            "url": "https://www.sojson.com",
            "desc": "Json解析格式化工具"
          },
          {
            "name": "kjson",
            "url": "http://www.kjson.com",
            "desc": "Json解析格式化工具"
          }
        ]
      },
      {
        "term": "论坛相关",
        "links": [
          {
            "name": "V2EX",
            "url": "https://www.v2ex.com",
            "desc": "中文比较好的创意社区"
          },
          {
            "name": "Linux.do",
            "url": "https://linux.do",
            "desc": "中文比较好的创意社区"
          },
          {
            "name": "Nodeseek",
            "url": "https://www.nodeseek.com",
            "desc": "网络免费资源VPS相关"
          },
          {
            "name": "Geekhub",
            "url": "https://geekhub.com",
            "desc": "不错的创意社区论坛"
          },
          {
            "name": "IDC Flare",
            "url": "https://idcflare.com",
            "desc": "域名主机等社区论坛"
          },
          {
            "name": "影子论坛",
            "url": "https://www.shadow-forum.com",
            "desc": "资源共享平台"
          },
          {
            "name": "屌丝论坛",
            "url": "https://assbbs.com",
            "desc": "建站相关讨论"
          },
          {
            "name": "VPS社区",
            "url": "https://www.qqvps.com",
            "desc": "VPS相关讨论"
          },
          {
            "name": "CSDN",
            "url": "https://www.csdn.net",
            "desc": "开发者博客社区"
          },
          {
            "name": "极客分享",
            "url": "https://hackershare.dev",
            "desc": "分享专业的工具和教程"
          },
          {
            "name": "兴趣小组",
            "url": "https://www.xqxz.cn",
            "desc": "各种兴趣爱好的小社区"
          },
          {
            "name": "掘金",
            "url": "https://juejin.im",
            "desc": "帮助开发者成长的论坛"
          },
          {
            "name": "站长之家",
            "url": "http://www.chinaz.com",
            "desc": "帮助站长的老牌平台"
          },
          {
            "name": "思否",
            "url": "https://segmentfault.com",
            "desc": "开发者知识问答平台"
          },
          {
            "name": "HelloWorld",
            "url": "https://www.helloworld.net",
            "desc": "不错的开发者社区"
          },
          {
            "name": "奇客谷",
            "url": "https://www.qikegu.com",
            "desc": "开发教程文章支持搜索"
          },
          {
            "name": "开源中国",
            "url": "https://www.oschina.net",
            "desc": "国内开源技术交流社区"
          },
          {
            "name": "黑客新闻",
            "url": "https://www.heikewan.com",
            "desc": "hacker news 中文版"
          },
          {
            "name": "InfoQ",
            "url": "https://www.infoq.cn",
            "desc": "促进软件开发的平台"
          },
          {
            "name": "Carbon",
            "url": "https://carbon.now.sh",
            "desc": "代码转图像(fq)"
          },
          {
            "name": "Codeimage",
            "url": "https://app.codeimage.dev",
            "desc": "代码转图像(fq)"
          },
          {
            "name": "Ray.so",
            "url": "https://ray.so",
            "desc": "代码转图像"
          },
          {
            "name": "Chalk.ist",
            "url": "https://chalk.ist",
            "desc": "代码转图像"
          },
          {
            "name": "Codeimg",
            "url": "https://codeimg.io",
            "desc": "代码转图像(fq)"
          },
          {
            "name": "Showcode",
            "url": "https://showcode.app",
            "desc": "代码转图像"
          },
          {
            "name": "Kod.so",
            "url": "https://kod.so",
            "desc": "代码转图像"
          },
          {
            "name": "Code to Image Converter",
            "url": "https://codetoimg.com",
            "desc": "代码转图像"
          },
          {
            "name": "Codekeep",
            "url": "https://codekeep.io/screenshot",
            "desc": "代码转图像"
          },
          {
            "name": "Snappify",
            "url": "https://snappify.com",
            "desc": "代码转图像并可以标注"
          },
          {
            "name": "10015.io",
            "url": "https://10015.io",
            "desc": "代码转图像"
          },
          {
            "name": "Shields",
            "url": "https://shields.io",
            "desc": "代码转图像"
          },
          {
            "name": "Purple Photo Editor",
            "url": "https://purple-photo.web.app/code-editor",
            "desc": "代码转图像"
          },
          {
            "name": "脚本之家",
            "url": "http://www.jb51.net",
            "desc": "各类脚本的平台"
          },
          {
            "name": "Integrately",
            "url": "https://integrately.com",
            "desc": "很多自动化任务"
          },
          {
            "name": "PHP 中文网",
            "url": "http://www.php.cn",
            "desc": "专注PHP的网站"
          }
        ]
      },
      {
        "term": "前端相关",
        "links": [
          {
            "name": "CodePen",
            "url": "https://codepen.io",
            "desc": "很不错的在线测试前端代码"
          },
          {
            "name": "Glitch",
            "url": "https://glitch.com",
            "desc": "在线测试构建代码"
          },
          {
            "name": "Sendbox",
            "url": "https://codesandbox.io",
            "desc": "沙箱运行代码测试"
          },
          {
            "name": "Plunker",
            "url": "https://next.plnkr.co",
            "desc": "在线测试构建代码"
          },
          {
            "name": "JSBin",
            "url": "https://jsbin.com",
            "desc": "在线测试构建代码"
          },
          {
            "name": "JSRun",
            "url": "https://jsrun.net",
            "desc": "多种代码在线测试"
          },
          {
            "name": "Riju",
            "url": "https://riju.codes",
            "desc": "多种代码在线运行"
          },
          {
            "name": "Text Cleaner",
            "url": "https://textcleaner.net",
            "desc": "很不错的文本的各种处理工具"
          },
          {
            "name": "Littlediffer",
            "url": "https://www.littlediffer.com",
            "desc": "文件内容对比，文本对比"
          },
          {
            "name": "Diffchecker",
            "url": "https://www.diffchecker.com",
            "desc": "文件内容对比，文本对比"
          },
          {
            "name": "Diffsuite",
            "url": "https://diffsuite.com",
            "desc": "文件内容对比，文本对比"
          },
          {
            "name": "HtmlWash",
            "url": "https://www.htmlwasher.com",
            "desc": "还原干净的 html 代码"
          },
          {
            "name": "HtmlCafe",
            "url": "https://html.cafe",
            "desc": "HTML 在线编辑器"
          },
          {
            "name": "MarkdownDown",
            "url": "https://markdowndown.vercel.app",
            "desc": "网页转markdown"
          },
          {
            "name": "Html Minifier",
            "url": "https://kangax.github.io/html-minifier",
            "desc": "html 和 css 压缩"
          },
          {
            "name": "Wallace",
            "url": "https://www.projectwallace.com",
            "desc": "CSS 分析仪"
          },
          {
            "name": "Css.Js",
            "url": "https://www.css-js.com",
            "desc": "css和js格式化处理等"
          },
          {
            "name": "Mega Tags",
            "url": "https://megatags.co",
            "desc": "社交媒体元数据生成"
          },
          {
            "name": "Placeholder",
            "url": "https://placeholder.com",
            "desc": "图像占位图服务"
          },
          {
            "name": "PicsumPhoto",
            "url": "https://picsum.photos",
            "desc": "随机或指定占位图服务"
          },
          {
            "name": "Picsum",
            "url": "https://placeimg.com",
            "desc": "随机或指定占位图服务"
          },
          {
            "name": "PlaceIMG",
            "url": "https://placekitten.com",
            "desc": "随机或指定占位图服务"
          },
          {
            "name": "Dummyimg",
            "url": "https://dummyimage.com",
            "desc": "自定义图像占位图"
          },
          {
            "name": "ipsm.io",
            "url": "https://ipsm.io",
            "desc": "生产力工具目前有视频占位符"
          },
          {
            "name": "Tables Gen",
            "url": "http://www.tablesgenerator.com",
            "desc": "多种表格生成器"
          },
          {
            "name": "TableConvert",
            "url": "https://tableconvert.com/zh-CN/",
            "desc": "多种表格转换生成器"
          },
          {
            "name": "Mergely",
            "url": "http://www.mergely.com",
            "desc": "不错的文本比较工具(fq)"
          },
          {
            "name": "Flickr 随机图",
            "url": "https://loremflickr.com",
            "desc": "随机 Flickr 图像服务"
          },
          {
            "name": "Pixel 随机图",
            "url": "https://lorempixel.com",
            "desc": "随机 Pixel 图像服务"
          },
          {
            "name": "Unsplash 随机图",
            "url": "https://source.unsplash.com",
            "desc": "随机 Unsplash 图像服务"
          },
          {
            "name": "Gtmetrix",
            "url": "https://gtmetrix.com",
            "desc": "网站性能测试"
          },
          {
            "name": "Webptest",
            "url": "https://www.webpagetest.org",
            "desc": "网站性能测试"
          },
          {
            "name": "Pingdom",
            "url": "https://tools.pingdom.com",
            "desc": "网站性能测试"
          }
        ]
      },
      {
        "term": "前端素材",
        "links": [
          {
            "name": "踏得网",
            "url": "http://techbrood.com",
            "desc": "源码模板分享平台"
          },
          {
            "name": "Yourware",
            "url": "https://www.yourware.so",
            "desc": "前端代码共享平台"
          },
          {
            "name": "Web-tools",
            "url": "https://devtooly.com",
            "desc": "前端开发工具合集"
          },
          {
            "name": "Griddy",
            "url": "https://griddy.io",
            "desc": "在线生成 Grid 布局"
          },
          {
            "name": "Buttons-generator",
            "url": "https://markodenic.com/tools/buttons-generator",
            "desc": "CSS按钮生成"
          },
          {
            "name": "metaSEO",
            "url": "https://metaseo.itsvg.in",
            "desc": "为网站设置SEO"
          },
          {
            "name": "HtmlUP",
            "url": "https://html5up.net",
            "desc": "不错的免费的静态网页模板"
          },
          {
            "name": "CpoyCSS",
            "url": "https://copy-paste-css.com",
            "desc": "快速复制粘贴CSS效果"
          },
          {
            "name": "CSS_Tricks",
            "url": "https://github.com/QiShaoXuan/css_tricks",
            "desc": "常用CSS效果实例"
          },
          {
            "name": "CSS Effect",
            "url": "https://cssfx.lovejade.cn",
            "desc": "CSS动画效果实例"
          },
          {
            "name": "CSS Shadow",
            "url": "https://getcssscan.com/css-box-shadow-examples",
            "desc": "CSS 阴影盒效果实例"
          },
          {
            "name": "Uiverse",
            "url": "https://uiverse.io",
            "desc": "HTML和CSS制作的UI组件库"
          },
          {
            "name": "Checklist",
            "url": "https://www.checklist.design",
            "desc": "表单列表生成(fq)"
          },
          {
            "name": "Bootsnipp",
            "url": "https://bootsnipp.com",
            "desc": "前端框架交互组件"
          },
          {
            "name": "ESnippets",
            "url": "https://emilkowalski.github.io/css-effects-snippets",
            "desc": "CSS按钮链接动画"
          },
          {
            "name": "Favicon",
            "url": "https://favicon.io",
            "desc": "好用的网站图标生成"
          },
          {
            "name": "Geticon",
            "url": "https://geticon.cn",
            "desc": "上传图像生成图标下载"
          },
          {
            "name": "Realfavico",
            "url": "https://realfavicongenerator.net",
            "desc": "多平台图标生成带检测网站图标"
          },
          {
            "name": "Loading",
            "url": "https://loading.io",
            "desc": "加载动画效果生成"
          },
          {
            "name": "Loaders",
            "url": "https://uiball.com/loaders",
            "desc": "加载动画效果生成"
          },
          {
            "name": "Whirl",
            "url": "https://whirl.netlify.app",
            "desc": "加载动画效果生成"
          },
          {
            "name": "Card-logo",
            "url": "https://card-logo.com",
            "desc": "各类付款卡图标下载"
          },
          {
            "name": "Olplayer",
            "url": "https://onelineplayer.com",
            "desc": "播放器样式代码生成"
          },
          {
            "name": "GlassUI",
            "url": "https://ui.glass/generator",
            "desc": "创造玻璃效果的CSS界面"
          },
          {
            "name": "17素材",
            "url": "http://www.17sucai.com",
            "desc": "各类模板素材"
          },
          {
            "name": "Echart",
            "url": "https://echarts.apache.org",
            "desc": "开源的数据图标"
          },
          {
            "name": "Fffuel",
            "url": "https://fffuel.co",
            "desc": "各种有趣的图形生成"
          },
          {
            "name": "Visiwig",
            "url": "https://www.visiwig.com",
            "desc": "图标背景纹理一键复制代码"
          },
          {
            "name": "Soft-UI",
            "url": "https://neumorphism.io",
            "desc": "UI按钮效果生成"
          },
          {
            "name": "SShadow",
            "url": "https://shadows.brumm.af",
            "desc": "多段阴影效果生成"
          },
          {
            "name": "9elements",
            "url": "https://9elements.github.io/fancy-border-radius/",
            "desc": "个性形状边角生成"
          },
          {
            "name": "Easing",
            "url": "https://larsenwork.com/easing-gradients/",
            "desc": "渐变蒙版生成"
          },
          {
            "name": "Data Color",
            "url": "https://learnui.design/tools/data-color-picker.html",
            "desc": "拼接色块颜色生成"
          },
          {
            "name": "Gridgen",
            "url": "https://cssgrid-generator.netlify.app",
            "desc": "Grid 布局生成"
          },
          {
            "name": "Accordion",
            "url": "https://accordionslider.com",
            "desc": "响应式文章块生成"
          },
          {
            "name": "ButtonX",
            "url": "https://www.bestcssbuttongenerator.com",
            "desc": "按钮外观生成"
          },
          {
            "name": "Waves",
            "url": "https://getwaves.io",
            "desc": "波浪效果生生"
          },
          {
            "name": "Clip-path",
            "url": "https://bennettfeely.com/clippy",
            "desc": "剪辑背景生成"
          },
          {
            "name": "color-Schemes",
            "url": "https://observablehq.com/@d3/color-schemes",
            "desc": "色彩主题条点击复制"
          },
          {
            "name": "Cool BG",
            "url": "https://coolbackgrounds.io",
            "desc": "色彩背景图生成"
          },
          {
            "name": "Haikei",
            "url": "https://haikei.app",
            "desc": "生成独特的SVG设计资源工具"
          },
          {
            "name": "Uigradient",
            "url": "https://uigradients.com",
            "desc": "渐变色背景图生成"
          },
          {
            "name": "Color-Morph",
            "url": "https://www.color-morph.com",
            "desc": "随机渐变色背景生成"
          },
          {
            "name": "Grabient",
            "url": "https://www.grabient.com",
            "desc": "渐变色生成CSS"
          },
          {
            "name": "Gradienta",
            "url": "https://gradienta.io",
            "desc": "生成多色梯度CSS背景"
          },
          {
            "name": "SVG-Bg",
            "url": "https://www.svgbackgrounds.com",
            "desc": "色彩缤纷的SVG背景图生成"
          },
          {
            "name": "AnimatedBG",
            "url": "https://animatedbackgrounds.me",
            "desc": "动画背景"
          },
          {
            "name": "WebGradient",
            "url": "https://webgradients.com",
            "desc": "很多渐变色背景生成CSS"
          },
          {
            "name": "CoolHue",
            "url": "https://webkul.github.io/coolhue",
            "desc": "很多渐变色背景生成CSS"
          },
          {
            "name": "SVGWaves",
            "url": "https://www.svgwaves.io",
            "desc": "生成波浪形背景SVG"
          },
          {
            "name": "Hero Pattern",
            "url": "http://www.heropatterns.com",
            "desc": "各类图案的背景生成"
          },
          {
            "name": "CSS HD Gen",
            "url": "https://gradient.style",
            "desc": "渐变背景色生成CSS"
          },
          {
            "name": "css-gradient",
            "url": "https://www.bestvist.com/css-gradient",
            "desc": "很多渐变色背景生成CSS"
          },
          {
            "name": "Wicked",
            "url": "https://wickedbackgrounds.com",
            "desc": "波浪背景生成"
          },
          {
            "name": "Gradient",
            "url": "https://gra.dient.art",
            "desc": "渐变色生成CSS"
          },
          {
            "name": "渐变图生成",
            "url": "https://xiaomingtang.github.io/colorful-wallpaper/dist/",
            "desc": "倾斜渐变色背景生成"
          },
          {
            "name": "Magicpattern",
            "url": "https://www.magicpattern.design/tools/css-backgrounds",
            "desc": "CSS 背景图生成"
          },
          {
            "name": "TPL",
            "url": "http://thepatternlibrary.com",
            "desc": "滚动鼠标滚轮背景素材"
          },
          {
            "name": "Noisegt",
            "url": "https://www.noiseandgradient.com",
            "desc": "时尚的颜色过度的背景生成CSS"
          },
          {
            "name": "Design Gradients",
            "url": "https://www.designgradients.com",
            "desc": "CSS背景渐变色生成"
          },
          {
            "name": "Shader Gradient",
            "url": "https://www.shadergradient.co",
            "desc": "轻松生成动态渐变效果"
          },
          {
            "name": "Iconfont",
            "url": "http://www.iconfont.cn",
            "desc": "阿里出品的图标库"
          },
          {
            "name": "Lucide",
            "url": "https://lucide.dev",
            "desc": "开源图标库，支持svg"
          },
          {
            "name": "css.gg",
            "url": "https://css.gg",
            "desc": "很不错的图标库"
          },
          {
            "name": "FreeIcons",
            "url": "https://www.freeicons.org",
            "desc": "免费开源图标并支持搜索"
          },
          {
            "name": "Yesicon",
            "url": "https://yesicon.app",
            "desc": "支持中文搜索的免费图标库"
          },
          {
            "name": "Fluenticons",
            "url": "https://fluenticons.co",
            "desc": "微软开源了图标库"
          },
          {
            "name": "iconfinder",
            "url": "https://www.iconfinder.com",
            "desc": "有免费图标分类"
          },
          {
            "name": "Iconpark",
            "url": "https://iconpark.oceanengine.com",
            "desc": "抖音出品的图标库"
          },
          {
            "name": "FontAwesome",
            "url": "https://fontawesome.com/search",
            "desc": "非常好的CSS字体图标"
          },
          {
            "name": "LineAwesome",
            "url": "https://icons8.com/line-awesome",
            "desc": "一套线条的CSS字体图标"
          },
          {
            "name": "Potlab Icon",
            "url": "http://www.potlabicons.com",
            "desc": "一套不错的动画图标"
          },
          {
            "name": "BlendIcons",
            "url": "https://blendicons.com",
            "desc": "十几万可免费商用图示"
          },
          {
            "name": "Phospicons",
            "url": "https://phosphoricons.com",
            "desc": "一套不错的线条图标"
          },
          {
            "name": "icon-flt",
            "url": "https://icons8.com/l/fluent-system",
            "desc": "一套不错的线条图标"
          },
          {
            "name": "Craftwork",
            "url": "https://icons.craftwork.design",
            "desc": "一套不错的开源图标"
          },
          {
            "name": "Iconhub",
            "url": "https://iconhub.io",
            "desc": "一套不错的线条图标"
          },
          {
            "name": "Lineicons",
            "url": "https://lineicons.com",
            "desc": "一套不错的线条图标"
          },
          {
            "name": "Zwicon",
            "url": "https://www.zwicon.com",
            "desc": "一套不错的线条图标"
          },
          {
            "name": "Iconsvg",
            "url": "https://iconsvg.xyz",
            "desc": "SVG按钮图标生成器"
          },
          {
            "name": "Modulz",
            "url": "https://icons.modulz.app",
            "desc": "不错的SVG图标生成器"
          },
          {
            "name": "Ikonate",
            "url": "https://www.ikonate.com",
            "desc": "可选你要的SVG图标下载"
          },
          {
            "name": "Simpleicons",
            "url": "https://simpleicons.org",
            "desc": "上前的流行图标logo下载"
          },
          {
            "name": "Iconer",
            "url": "https://iconer.app",
            "desc": "非常多的免费图标"
          },
          {
            "name": "Boxicons",
            "url": "https://boxicons.com",
            "desc": "一套可商用的字体图标"
          },
          {
            "name": "Bytedance",
            "url": "https://cdn.bytedance.com",
            "desc": "字节跳动维护的CDN加速服务"
          },
          {
            "name": "Quicklink",
            "url": "https://getquick.link",
            "desc": "加速网站网页载入速度"
          },
          {
            "name": "75CDN",
            "url": "https://cdn.baomitu.com",
            "desc": "前端项目CDN加速服务"
          },
          {
            "name": "Staticfile",
            "url": "https://staticfile.org",
            "desc": "七牛云维护的CDN加速服务"
          },
          {
            "name": "BootCDN",
            "url": "http://www.bootcdn.cn",
            "desc": "前端项目CDN加速服务"
          },
          {
            "name": "LOLI",
            "url": "https://sb.sb/blog/css-cdn/",
            "desc": "自建前端CDN加速服务"
          },
          {
            "name": "CDNJS",
            "url": "https://cdnjs.com",
            "desc": "全球知名的CDN加速库,国内慢"
          },
          {
            "name": "Fontmin",
            "url": "http://ecomfe.github.io/fontmin",
            "desc": "字体压缩"
          },
          {
            "name": "有字库",
            "url": "https://www.webfont.com",
            "desc": "中文字体压缩前端引用"
          },
          {
            "name": "Manypixels",
            "url": "https://gallery.manypixels.co",
            "desc": "SVG 插图"
          },
          {
            "name": "DrawKit",
            "url": "https://www.drawkit.io",
            "desc": "很不错的插画图资源"
          },
          {
            "name": "Blush",
            "url": "https://blush.design",
            "desc": "很不错的插画图资源"
          },
          {
            "name": "Pixiv",
            "url": "https://www.pixiv.net",
            "desc": "很好的插画图分享社区"
          },
          {
            "name": "Undraw",
            "url": "https://undraw.co",
            "desc": "简单易用的插画图下载"
          },
          {
            "name": "Vector",
            "url": "https://icons8.com/vector-creator/",
            "desc": "在线插画图创建"
          },
          {
            "name": "IRADesign",
            "url": "https://iradesign.io",
            "desc": "不错的风格插图自己建立"
          },
          {
            "name": "Humaaans",
            "url": "https://www.humaaans.com",
            "desc": "可以调整人物的插图图库"
          },
          {
            "name": "illl.co",
            "url": "https://illlustrations.co",
            "desc": "免费好用的插图分享"
          },
          {
            "name": "Freeillustration",
            "url": "https://freeillustrations.xyz",
            "desc": "免费自由的插图分享"
          },
          {
            "name": "OUCH",
            "url": "https://icons8.cn/illustrations",
            "desc": "免费自由的插图分享"
          },
          {
            "name": "Pixeltrue",
            "url": "https://www.pixeltrue.com/illustrations",
            "desc": "免费自由的插图分享"
          },
          {
            "name": "Manufactory",
            "url": "https://manufactory.craftwork.design",
            "desc": "在丰富的场景中的插图"
          },
          {
            "name": "Logosearch",
            "url": "http://instantlogosearch.com",
            "desc": "各大品牌 Logo 图"
          },
          {
            "name": "Weareskribbl",
            "url": "https://weareskribbl.com",
            "desc": "免费手绘黑白效果插图"
          },
          {
            "name": "PassionHacks",
            "url": "https://passionhacks.com/gradient-isometric-illustrations",
            "desc": "免费的170个插图"
          }
        ]
      },
      {
        "term": "前端其它",
        "links": [
          {
            "name": "前端导航",
            "url": "http://nav.web-hub.cn",
            "desc": "前端导航"
          },
          {
            "name": "前站导航",
            "url": "https://www.frontendjs.com",
            "desc": "前端导航"
          },
          {
            "name": "Similarweb",
            "url": "https://www.similarweb.com/top-websites",
            "desc": "网站排名"
          },
          {
            "name": "一为亿",
            "url": "https://www.iowen.cn",
            "desc": "前端学习，支持网站logo获取"
          },
          {
            "name": "Downfor",
            "url": "https://downforeveryoneorjustme.com",
            "desc": "检查网站是否正常，是否可以打开"
          },
          {
            "name": "Carrd.co",
            "url": "https://carrd.co",
            "desc": "简单快速响应的一个页面的网站"
          },
          {
            "name": "Fly63",
            "url": "http://www.fly63.com",
            "desc": "前端资源分享"
          },
          {
            "name": "Vipbic",
            "url": "https://www.vipbic.com",
            "desc": "前端开发导航学习"
          },
          {
            "name": "Montastic",
            "url": "https://www.montastic.com",
            "desc": "检测网站是否能正常打开"
          },
          {
            "name": "Geek books",
            "url": "https://xjq.icu/books",
            "desc": "关于前端的个人博客"
          },
          {
            "name": "AllMyLinks",
            "url": "https://allmylinks.com",
            "desc": "将个人社交媒体链接放在一起"
          },
          {
            "name": "Clink",
            "url": "https://clink.bio",
            "desc": "将个人社交媒体链接放在一起"
          },
          {
            "name": "Capture My Tweet",
            "url": "https://capturemytweet.in",
            "desc": "推文转精美图像"
          },
          {
            "name": "How Big Is My Browser",
            "url": "http://howbigismybrowser.com",
            "desc": "测量当前浏览器窗口尺寸"
          },
          {
            "name": "Qualys SSL Labs",
            "url": "https://www.ssllabs.com/ssltest",
            "desc": "测试站点的SSL配置"
          },
          {
            "name": "Bookmark",
            "url": "https://www.bookmark.style",
            "desc": "个人主页转精美图像分享"
          }
        ]
      },
      {
        "term": "开发工具",
        "links": [
          {
            "name": "Devtool",
            "url": "https://1024tools.com",
            "desc": "程序员开发工具箱"
          },
          {
            "name": "DevFun",
            "url": "https://devfun.org",
            "desc": "开发者工具箱"
          },
          {
            "name": "OnesAPK",
            "url": "https://onesapk.com/zh",
            "desc": "程序员开发工具箱"
          },
          {
            "name": "Coding.Tools",
            "url": "https://coding.tools/cn",
            "desc": "程序员开发工具箱"
          },
          {
            "name": "Tab.tools",
            "url": "https://tab.tools",
            "desc": "程序员开发工具箱"
          },
          {
            "name": "ssstab-bar",
            "url": "https://bar.ssstab.com",
            "desc": "在线搜索工具箱"
          },
          {
            "name": "FreeCodeTools",
            "url": "https://freecodetools.org",
            "desc": "常用的开发者工具"
          },
          {
            "name": "Tool.lu",
            "url": "http://tool.lu",
            "desc": "开发工具箱"
          },
          {
            "name": "开发者武器库",
            "url": "https://devtool.tech",
            "desc": "程序员开发工具箱"
          },
          {
            "name": "猿奋工具箱",
            "url": "https://tools.yuanfen.net",
            "desc": "程序员开发工具箱"
          },
          {
            "name": "菜鸟工具",
            "url": "https://c.runoob.com",
            "desc": "各种工具"
          },
          {
            "name": "奇Q工具",
            "url": "https://qqe2.com",
            "desc": "各种工具"
          },
          {
            "name": "Fetoolkit",
            "url": "https://www.fetoolkit.io",
            "desc": "前端开发工具箱"
          },
          {
            "name": "Regex101",
            "url": "https://regex101.com",
            "desc": "正则表达式测试"
          },
          {
            "name": "Regexper",
            "url": "https://regexper.com",
            "desc": "正则表达式测试(fq)"
          },
          {
            "name": "RegexLearn",
            "url": "https://regexlearn.com/zh-cn",
            "desc": "学习正则表达式"
          },
          {
            "name": "正则大全",
            "url": "https://any86.github.io/any-rule",
            "desc": "各种正则表达式匹配"
          },
          {
            "name": "iHateRegex",
            "url": "https://github.com/geongeorge/i-hate-regex",
            "desc": "为不熟悉正则表达式准备的"
          },
          {
            "name": "Hash 算法",
            "url": "https://haxi.im",
            "desc": "哈希值相关"
          },
          {
            "name": "Base64C",
            "url": "https://www.base64decode.org",
            "desc": "Base64 加密解密"
          },
          {
            "name": "Base64.us",
            "url": "https://base64.us",
            "desc": "Base64 加密解密"
          },
          {
            "name": "Encrypt",
            "url": "http://tool.oschina.net/encrypt",
            "desc": "在线加密解密"
          },
          {
            "name": "UUIDgr",
            "url": "https://www.uuidgenerator.net",
            "desc": "UUID 在线生成"
          },
          {
            "name": "Commands.dev",
            "url": "https://www.commands.dev",
            "desc": "流行的终端命令片段精选"
          },
          {
            "name": "Cheet",
            "url": "https://cheet.dev",
            "desc": "命令代码片段备忘单"
          },
          {
            "name": "IT Tools",
            "url": "https://it-tools.tech",
            "desc": "开发者工具箱"
          },
          {
            "name": "Free Tools",
            "url": "https://free.tools",
            "desc": "开发者工具箱"
          },
          {
            "name": "ThiscodeWorks",
            "url": "https://www.thiscodeworks.com",
            "desc": "代码片段图书馆"
          },
          {
            "name": "Codeset.io",
            "url": "https://codeset.io",
            "desc": "分享代码片段"
          },
          {
            "name": "Devhints",
            "url": "https://devhints.io",
            "desc": "开源的命令表单查阅"
          },
          {
            "name": "Explainshell",
            "url": "https://explainshell.com",
            "desc": "输入命令解释参数"
          },
          {
            "name": "SQL Online Compiler",
            "url": "https://sqliteonline.com",
            "desc": "数据库在线管理器"
          },
          {
            "name": "SQLook",
            "url": "https://sqlook.com",
            "desc": "数据库在线管理器"
          }
        ]
      }
    ]
  },
  {
    "taxonomy": "网络主机",
    "icon": "fa-globe",
    "list": [
      {
        "term": "VPS 主机",
        "links": [
          {
            "name": "搬瓦工",
            "url": "https://bandwagonhost.com",
            "desc": "知名的VPS"
          },
          {
            "name": "CloudCone",
            "url": "https://www.cloudcone.com",
            "desc": "性价比线路VPS"
          },
          {
            "name": "DMIT",
            "url": "https://www.dmit.io",
            "desc": "精品线路VPS"
          },
          {
            "name": "VMRack",
            "url": "https://www.vmrack.net/zh-CN",
            "desc": "精品线路VPS"
          },
          {
            "name": "ClawCloud",
            "url": "https://claw.cloud",
            "desc": "优化中国线路VPS"
          },
          {
            "name": "Vultr",
            "url": "https://www.vultr.com",
            "desc": "知名的VPS"
          },
          {
            "name": "Linode",
            "url": "https://www.linode.com",
            "desc": "老牌的VPS"
          },
          {
            "name": "Contabo",
            "url": "https://contabo.com",
            "desc": "不错的VPS"
          },
          {
            "name": "Olink",
            "url": "https://www.olink.cloud",
            "desc": "不错的VPS"
          },
          {
            "name": "DigitalOcean",
            "url": "https://www.digitalocean.com",
            "desc": "老牌的VPS"
          },
          {
            "name": "Sugarhosts",
            "url": "https://www.sugarhosts.com",
            "desc": "老牌的VPS"
          },
          {
            "name": "HostUS",
            "url": "https://hostus.us",
            "desc": "不错的年付VPS"
          },
          {
            "name": "VirMach",
            "url": "https://virmach.com",
            "desc": "美国低价的VPS"
          },
          {
            "name": "RackNerd",
            "url": "https://racknerd.com",
            "desc": "低价的VPS"
          },
          {
            "name": "Justhost",
            "url": "https://justhost.ru",
            "desc": "俄罗斯低价的VPS"
          },
          {
            "name": "HostYun",
            "url": "https://www.hostyun.com",
            "desc": "运营很久的适合外贸的"
          },
          {
            "name": "HostKVM",
            "url": "https://www.hostkvm.com",
            "desc": "老牌香港的VPS"
          },
          {
            "name": "Hosteons",
            "url": "https://hosteons.com",
            "desc": "VPS主机供应商"
          },
          {
            "name": "DigitalVM",
            "url": "https://digital-vm.com",
            "desc": "VPS主机供应商"
          },
          {
            "name": "Greencloud",
            "url": "https://greencloudvps.com",
            "desc": "VPS主机供应商"
          },
          {
            "name": "云更易",
            "url": "http://www.vps2ez.com",
            "desc": "云主机供应商"
          },
          {
            "name": "DogYun",
            "url": "https://www.dogyun.com",
            "desc": "国内不错的VPS"
          },
          {
            "name": "莱卡云",
            "url": "https://www.lcayun.com",
            "desc": "国内不错的VPS"
          },
          {
            "name": "咖啡主机",
            "url": "https://www.cfhost.cn",
            "desc": "低价的VPS"
          },
          {
            "name": "UCloud",
            "url": "https://www.ucloud.cn",
            "desc": "云主机供应商"
          },
          {
            "name": "80VPS",
            "url": "http://www.80vps.com",
            "desc": "云主机供应商"
          },
          {
            "name": "七牛云",
            "url": "http://www.qiniu.com",
            "desc": "云服务商"
          },
          {
            "name": "青云",
            "url": "https://www.qingcloud.com",
            "desc": "云主机供应商"
          },
          {
            "name": "AppOnFly",
            "url": "https://vps.apponfly.com",
            "desc": "运行Windows实例通过浏览器体验"
          },
          {
            "name": "Onworks",
            "url": "https://www.onworks.net",
            "desc": "运行Linux系统通过浏览器体验"
          },
          {
            "name": "Hyperbeam",
            "url": "https://hyperbeam.com",
            "desc": "一个房间使用浏览器浏览"
          },
          {
            "name": "Distrosea",
            "url": "https://distrosea.com",
            "desc": "浏览器使用Linux发行版"
          },
          {
            "name": "Lowendaff",
            "url": "https://lowendaff.com",
            "desc": "VPS评测测试"
          }
        ]
      },
      {
        "term": "域名相关",
        "links": [
          {
            "name": "Cloudflare",
            "url": "https://cloudflare.com",
            "desc": "免费的域名解析管理服务"
          },
          {
            "name": "Namesilo",
            "url": "https://namesilo.com",
            "desc": "性价比高的域名服务商"
          },
          {
            "name": "Netcup",
            "url": "https://netcup.com",
            "desc": "性价比高的域名服务商"
          },
          {
            "name": "Squarespace",
            "url": "https://squarespace.com",
            "desc": "谷歌域名转给的服务商"
          },
          {
            "name": "Spaceship",
            "url": "https://spaceship.com",
            "desc": "性价比可以续费10年"
          },
          {
            "name": "Godaddy",
            "url": "https://godaddy.com",
            "desc": "知名的域名服务商"
          },
          {
            "name": "Namecheap",
            "url": "https://namecheap.com",
            "desc": "知名的域名服务商"
          },
          {
            "name": "Freenom",
            "url": "hhttps://www.freenom.com",
            "desc": "可以申请免费域名"
          },
          {
            "name": "FreeSSL",
            "url": "https://freessl.cn",
            "desc": "免费SSL证书申请"
          },
          {
            "name": "SSL For Free",
            "url": "https://sslforfree.com",
            "desc": "免费SSL证书申请"
          },
          {
            "name": "ZeroSSL",
            "url": "https://zerossl.com",
            "desc": "免费SSL证书IP证书"
          },
          {
            "name": "Lookssl",
            "url": "https://lookssl.com",
            "desc": "免费 SSL 证书申请"
          },
          {
            "name": "NameBeta",
            "url": "https://namebeta.com",
            "desc": "域名比价"
          },
          {
            "name": "Improvmx",
            "url": "https://improvmx.com",
            "desc": "域名别名邮箱代理"
          }
        ]
      },
      {
        "term": "静态项目",
        "links": [
          {
            "name": "EdgeOne",
            "url": "https://edgeone.ai/products/pages",
            "desc": "静态项目开发托管"
          },
          {
            "name": "Netlify",
            "url": "https://www.netlify.com",
            "desc": "静态项目开发托管"
          },
          {
            "name": "Vercel",
            "url": "https://vercel.com",
            "desc": "静态项目开发托管"
          },
          {
            "name": "Sevalla",
            "url": "https://sevalla.com/static-site-hosting",
            "desc": "静态项目开发托管"
          },
          {
            "name": "Freehostia",
            "url": "https://www.freehostia.com",
            "desc": "免费续期静态空间"
          },
          {
            "name": "Static",
            "url": "https://static.app",
            "desc": "静态项目部署"
          },
          {
            "name": "StaticR",
            "url": "https://static.run",
            "desc": "静态项目部署"
          },
          {
            "name": "Jsdelivr",
            "url": "https://www.jsdelivr.com",
            "desc": "CDN 加速服务"
          },
          {
            "name": "Staticdn",
            "url": "https://cdn.staticdn.net",
            "desc": "静态反代加速服务"
          },
          {
            "name": "Neocities",
            "url": "https://neocities.org",
            "desc": "1GB的免费静态空间"
          },
          {
            "name": "Wulihub",
            "url": "https://www.wulihub.com.cn",
            "desc": "免费50M静态空间适合演示"
          },
          {
            "name": "Sxl",
            "url": "https://www.sxl.cn",
            "desc": "小白都可以制作网站空间"
          },
          {
            "name": "Brizy",
            "url": "https://www.brizy.cloud",
            "desc": "可视化建立个人网站"
          }
        ]
      },
      {
        "term": "动态项目",
        "links": [
          {
            "name": "奶爸建站",
            "url": "https://blog.naibabiji.com/step",
            "desc": "不错的新手建站指南"
          },
          {
            "name": "挖站否",
            "url": "https://wzfou.com",
            "desc": "很适合新手建站"
          },
          {
            "name": "Railway",
            "url": "https://railway.app",
            "desc": "GitHub 项目部署"
          },
          {
            "name": "Pikapods",
            "url": "https://www.pikapods.com",
            "desc": "低资费的开源应用托管平台"
          },
          {
            "name": "Render",
            "url": "https://render.com",
            "desc": "免费部署服务平台"
          },
          {
            "name": "Fly.io",
            "url": "https://fly.io",
            "desc": "免费部署 Docker 服务平台"
          }
        ]
      },
      {
        "term": "IP工具",
        "links": [
          {
            "name": "MyIP",
            "url": "https://ipcheck.ing",
            "desc": "查询主机IP或域"
          },
          {
            "name": "IP.im",
            "url": "https://ip.im",
            "desc": "查询IP地理位置"
          },
          {
            "name": "IP.me",
            "url": "https://ip.me",
            "desc": "查询IP地理位置"
          },
          {
            "name": "IP.network",
            "url": "https://ip.network",
            "desc": "查询IP地理位置"
          },
          {
            "name": "IPAddress",
            "url": "https://www.ipaddress.com",
            "desc": "查询主机IP或域"
          },
          {
            "name": "IPv6-test",
            "url": "https://test-IPv6.com",
            "desc": "是否具备 IPv6 测试"
          },
          {
            "name": "Testipv6",
            "url": "https://www.testipv6.net/cn/",
            "desc": "检测 IPv6"
          },
          {
            "name": "ipw",
            "url": "https://ipw.cn",
            "desc": "检测 IPv6"
          },
          {
            "name": "IP111",
            "url": "http://www.ip111.cn",
            "desc": "测试与外网连通性"
          },
          {
            "name": "TCP.mk",
            "url": "https://tcp.mk",
            "desc": "检测是否被墙包括端口批量"
          },
          {
            "name": "IPSKK",
            "url": "https://ip.skk.moe",
            "desc": "全面测试与外网连通性"
          },
          {
            "name": "Ipstack",
            "url": "https://ipstack.com",
            "desc": "获取IP的地区等详细信息"
          },
          {
            "name": "站长Ping",
            "url": "https://ping.chinaz.com",
            "desc": "比较全面的IP和端口检测"
          },
          {
            "name": "Ping.pe",
            "url": "https://ping.pe",
            "desc": "比较全面的IP和端口检测"
          },
          {
            "name": "ping0",
            "url": "https://ping0.cc",
            "desc": "查询IP线路归属地纯净度"
          },
          {
            "name": "Checkhost",
            "url": "https://check-host.net",
            "desc": "检查IP或域名的详细信息"
          },
          {
            "name": "IPinfo.CV",
            "url": "https://ipinfo.cv",
            "desc": "检查IP详细信息和专业网络工具箱"
          },
          {
            "name": "Yougetsignal",
            "url": "https://www.yougetsignal.com",
            "desc": "网络IP端口测试等"
          },
          {
            "name": "IP.sb",
            "url": "https://ip.sb",
            "desc": "查询指定IP的信息"
          },
          {
            "name": "IP8",
            "url": "https://ip8.com",
            "desc": "检测IP工具"
          },
          {
            "name": "CIP",
            "url": "https://www.cip.cc",
            "desc": "检测IP工具"
          },
          {
            "name": "ipinfo",
            "url": "https://ipinfo.io",
            "desc": "能查询IP的位置主机名运营商"
          },
          {
            "name": "Scamalytics",
            "url": "https://scamalytics.com/ip",
            "desc": "检测IP欺诈值"
          },
          {
            "name": "ipleak",
            "url": "https://ipleak.net",
            "desc": "检测你访问网站其能探测到的你的信息"
          },
          {
            "name": "Whoer",
            "url": "https://whoer.net/zh",
            "desc": "检测IP及所在地"
          },
          {
            "name": "openGPS",
            "url": "https://www.opengps.cn",
            "desc": "IP 位置定位服务"
          },
          {
            "name": "DNS.ip",
            "url": "https://dns.ip.cn",
            "desc": "公共DNS汇总"
          },
          {
            "name": "OpenNIC",
            "url": "https://www.opennic.org",
            "desc": "自由无审查的DNS"
          },
          {
            "name": "Hop.js",
            "url": "https://hopjs.bunny.net",
            "desc": "免费的CDN加速服务"
          },
          {
            "name": "Boce",
            "url": "https://www.boce.com",
            "desc": "网站测速与检测"
          },
          {
            "name": "阿里云自检",
            "url": "https://zijian.aliyun.com",
            "desc": "在线 ping 工具"
          },
          {
            "name": "17CE",
            "url": "https://www.17ce.com",
            "desc": "在线 ping 工具"
          },
          {
            "name": "ITDog",
            "url": "https://www.itdog.cn",
            "desc": "在线 ping 工具"
          },
          {
            "name": "AliceNoc",
            "url": "https://ipcheck.alice.ws",
            "desc": "检测IP是否被封锁"
          },
          {
            "name": "Ping.sx",
            "url": "https://ping.sx/ping",
            "desc": "在线 ping 工具"
          },
          {
            "name": "Coolaf",
            "url": "http://coolaf.com",
            "desc": "网络测试工具接口API等"
          }
        ]
      },
      {
        "term": "网络测速",
        "links": [
          {
            "name": "Speedtest",
            "url": "http://www.speedtest.net",
            "desc": "全球主流的网络测速工具"
          },
          {
            "name": "Fast",
            "url": "https://fast.com",
            "desc": "网速测速服务"
          },
          {
            "name": "Flying TTFB",
            "url": "https://flyingttfb.com",
            "desc": "从全球测试网速"
          },
          {
            "name": "测速网",
            "url": "https://www.speedtest.cn",
            "desc": "国内的网络测速"
          },
          {
            "name": "Speedcheck",
            "url": "https://www.speedcheck.org",
            "desc": "网速测速有历史比照"
          },
          {
            "name": "Librespeed",
            "url": "https://librespeed.org",
            "desc": "网速测速服务"
          },
          {
            "name": "Cloudflare-Speed",
            "url": "https://speed.cloudflare.com",
            "desc": "网速测速服务"
          }
        ]
      },
      {
        "term": "VPN",
        "links": [
          {
            "name": "ExpressVPN",
            "url": "https://www.expressvpn.com",
            "desc": "首选的付费VPN"
          },
          {
            "name": "Urban",
            "url": "https://www.urban-vpn.com",
            "desc": "免费VPN"
          },
          {
            "name": "Surfshark",
            "url": "https://surfshark.com",
            "desc": "付费VPN"
          },
          {
            "name": "ProtonVPN",
            "url": "https://protonvpn.com",
            "desc": "免费VPN"
          },
          {
            "name": "Nordvpn",
            "url": "https://nordvpn.com/zh/",
            "desc": "付费VPN"
          },
          {
            "name": "VPNBook",
            "url": "https://www.vpnbook.com/freevpn",
            "desc": "免费VPN获取"
          },
          {
            "name": "justmysocks",
            "url": "https://justmysocks.net",
            "desc": "搬瓦工出品适合VPN用的VPS"
          },
          {
            "name": "FlyVPN",
            "url": "https://www.flyvpn.com",
            "desc": "付费VPN"
          },
          {
            "name": "VyprVPN",
            "url": "https://www.vyprvpn.com",
            "desc": "付费VPN"
          }
        ]
      }
    ]
  },
  {
    "taxonomy": "艺术设计",
    "icon": "fa-pencil",
    "list": [
      {
        "term": "作品赏析",
        "links": [
          {
            "name": "Dribbble",
            "url": "https://dribbble.com",
            "desc": "全球知名的设计创意交流平台"
          },
          {
            "name": "大作",
            "url": "http://www.bigbigwork.com",
            "desc": "国内的寻找灵感的平台"
          },
          {
            "name": "码力全开",
            "url": "https://design.maliquankai.com",
            "desc": "汇集高质量设计资源"
          },
          {
            "name": "MiniPaint",
            "url": "https://viliusle.github.io/miniPaint",
            "desc": "就像Windows的画图"
          },
          {
            "name": "Vectr",
            "url": "https://vectr.com",
            "desc": "矢量图编辑和logo制作"
          },
          {
            "name": "在线输入法",
            "url": "https://www.google.com/intl/zh-CN/inputtools/try/",
            "desc": "谷歌在线输入法"
          }
        ]
      },
      {
        "term": "色彩搭配",
        "links": [
          {
            "name": "Adobe Color",
            "url": "https://color.adobe.com",
            "desc": "知名的在线色彩调配工具"
          },
          {
            "name": "Kolr",
            "url": "https://kolr-app.vercel.app",
            "desc": "色彩工具箱"
          },
          {
            "name": "Kigen Color",
            "url": "https://kigen.design/color",
            "desc": "在线配色并生成css"
          },
          {
            "name": "AI Colors",
            "url": "https://aicolors.co",
            "desc": "根据关键词AI生成配色"
          },
          {
            "name": "Pigments",
            "url": "https://pigmentsapp.com",
            "desc": "随机生成配色取色"
          },
          {
            "name": "fffuel",
            "url": "https://fffuel.co",
            "desc": "调色板色彩渐变等生成"
          },
          {
            "name": "Coolors",
            "url": "https://coolors.co",
            "desc": "调色板色彩生成"
          },
          {
            "name": "Encycolor",
            "url": "https://encycolorpedia.cn",
            "desc": "颜色代码表，图表及调色板"
          },
          {
            "name": "Veranda",
            "url": "https://verandacolor.com",
            "desc": "好用的在线随机配色工具"
          },
          {
            "name": "PaletteMaker",
            "url": "https://palettemaker.com",
            "desc": "好用的在线配色工具"
          },
          {
            "name": "ColorDrop",
            "url": "https://colordrop.io",
            "desc": "推荐4种颜色搭配"
          },
          {
            "name": "ColorHunt",
            "url": "https://colorhunt.co",
            "desc": "推荐4种颜色搭配"
          },
          {
            "name": "ColorMind",
            "url": "http://colormind.io",
            "desc": "产生色彩搭配给你灵感"
          },
          {
            "name": "ColorKit",
            "url": "https://colorkit.co",
            "desc": "很不错的调色板"
          },
          {
            "name": "Colourco",
            "url": "https://colourco.de",
            "desc": "移动鼠标寻找色彩"
          },
          {
            "name": "Eav Colors",
            "url": "https://colors.eva.design",
            "desc": "通过深度学习生成颜色"
          },
          {
            "name": "Material",
            "url": "https://www.materialui.co",
            "desc": "一些色彩搭配色板"
          },
          {
            "name": "MPalette",
            "url": "https://www.materialpalette.com",
            "desc": "调色盘寻找色彩灵感"
          },
          {
            "name": "Palettegenerator",
            "url": "https://palettegenerator.colorion.co",
            "desc": "5颜色搭配随机配色"
          },
          {
            "name": "Brandcolor",
            "url": "http://brandcolors.net",
            "desc": "了解各大品牌的用色"
          },
          {
            "name": "Ninja",
            "url": "https://palette.ninja",
            "desc": "CSS生成随机5种颜色并能固定"
          },
          {
            "name": "Coolors",
            "url": "https://coolors.co/generate",
            "desc": "很不错的多功能颜色工具"
          },
          {
            "name": "Flat UI",
            "url": "https://flatuicolors.com",
            "desc": "可以浏览很多色彩搭配"
          },
          {
            "name": "Imgpicker",
            "url": "https://imagecolorpicker.com",
            "desc": "在线获取图像色彩"
          },
          {
            "name": "Colordot",
            "url": "https://color.hailpixel.com",
            "desc": "逐步移动鼠标选择色彩"
          },
          {
            "name": "Colorie.web",
            "url": "https://colorie.web.app",
            "desc": "制定调色板并保存为图像"
          },
          {
            "name": "毒蘑菇",
            "url": "https://color.dumogu.top",
            "desc": "推荐几个配色给你"
          },
          {
            "name": "Alwane",
            "url": "https://alwane.io",
            "desc": "输入网址获取配色"
          }
        ]
      },
      {
        "term": "图像编辑",
        "links": [
          {
            "name": "Photopea",
            "url": "https://www.photopea.com",
            "desc": "在线的图像编辑器"
          },
          {
            "name": "RevizePic",
            "url": "https://revizepic.toolooz.com",
            "desc": "一站式图像化工具"
          },
          {
            "name": "Vectorpea",
            "url": "https://www.vectorpea.com",
            "desc": "在线的图像编辑器"
          },
          {
            "name": "图改改",
            "url": "https://tugaigai.com",
            "desc": "在线的图像编辑器"
          },
          {
            "name": "CFStudio",
            "url": "https://studio.creativefabrica.com/studio",
            "desc": "在线的图像编辑器"
          },
          {
            "name": "Edit.photo",
            "url": "https://edit.photo",
            "desc": "简单的图像编辑"
          },
          {
            "name": "Pixlr",
            "url": "https://pixlr.com/cn/",
            "desc": "在线的 PS 编辑器"
          },
          {
            "name": "改图神器",
            "url": "https://img.logosc.cn",
            "desc": "简单好用的改图"
          },
          {
            "name": "HitPaw",
            "url": "https://online.hitpaw.tw",
            "desc": "一站式影音图像在线编辑"
          },
          {
            "name": "UUPoop",
            "url": "https://www.uupoop.com",
            "desc": "稿定设计出品的在线PS"
          },
          {
            "name": "Webp2jpg",
            "url": "https://renzhezhilu.github.io/webp2jpg-online/",
            "desc": "多功能图像调整支持批量"
          },
          {
            "name": "Mark My Images",
            "url": "https://www.markmyimages.com",
            "desc": "图像加水印重设尺寸重命名"
          },
          {
            "name": "Ctrl.vi",
            "url": "https://ctrl.vi",
            "desc": "使用 Ctrl+V 粘贴图像后编辑"
          },
          {
            "name": "Colorcinch",
            "url": "https://www.cartoonize.net",
            "desc": "在线的图像编辑器"
          },
          {
            "name": "Adobe Express",
            "url": "https://www.adobe.com/tw/express",
            "desc": "在线图像和影片编辑"
          },
          {
            "name": "3Dimg",
            "url": "https://www.3dimg.com/editor/",
            "desc": "在线的图像后编辑"
          },
          {
            "name": "Fotor",
            "url": "https://www.fotor.com.cn",
            "desc": "在线设计工具提供模板"
          },
          {
            "name": "Dimmy.Club",
            "url": "https://dimmy.club",
            "desc": "截图生成设备边框"
          },
          {
            "name": "TT0",
            "url": "https://tt0.top",
            "desc": "剪裁和压缩图像及Gif"
          },
          {
            "name": "BeFunky",
            "url": "https://www.befunky.com",
            "desc": "在线的图像编辑器"
          },
          {
            "name": "泼辣修图",
            "url": "https://photoeditor.polarr.com",
            "desc": "在线的图像编辑器"
          },
          {
            "name": "改图宝",
            "url": "https://www.gaitubao.com",
            "desc": "简单实用的快速改图"
          },
          {
            "name": "Photokit",
            "url": "https://photokit.com",
            "desc": "AI一键处理图像"
          },
          {
            "name": "LunaPic",
            "url": "https://lunapic.com/editor",
            "desc": "有一些图像编辑"
          },
          {
            "name": "Photo Watermark",
            "url": "https://cuijianzhuang.github.io/photo-watermark",
            "desc": "离线图像加水印"
          },
          {
            "name": "Placeit",
            "url": "https://placeit.net",
            "desc": "提供很多OBS模板"
          },
          {
            "name": "可画",
            "url": "https://www.canva.cn",
            "desc": "很不错的在线图像设计"
          },
          {
            "name": "PicProse",
            "url": "https://github.com/gezhaoyou/picprose",
            "desc": "在线快速制作博客封面"
          },
          {
            "name": "Motionelements-banner",
            "url": "https://www.motionelements.com/zh-hant/banner",
            "desc": "免费的广告横幅生成器"
          },
          {
            "name": "PixStudio",
            "url": "https://ps.wondershare.com",
            "desc": "很不错的在线图像视频编辑"
          },
          {
            "name": "稿定设计",
            "url": "https://www.gaoding.com",
            "desc": "很不错的在线图像视频编辑"
          },
          {
            "name": "Figma",
            "url": "https://www.figma.com",
            "desc": "在线协作的设计工具"
          },
          {
            "name": "创客贴",
            "url": "https://www.chuangkit.com",
            "desc": "新媒体首图海报等"
          },
          {
            "name": "图怪兽",
            "url": "https://818ps.com",
            "desc": "提供素材模板和编辑工具"
          },
          {
            "name": "做好图",
            "url": "http://www.zuohaotu.com",
            "desc": "简单的图像编辑还带拼图"
          },
          {
            "name": "Designcap",
            "url": "https://www.designcap.com",
            "desc": "很不错的在线图像视频编辑"
          },
          {
            "name": "Coverview",
            "url": "https://github.com/rutikwankhade/CoverView",
            "desc": "为博客文章生成头图"
          },
          {
            "name": "太美工具",
            "url": "https://tiomg.org",
            "desc": "提供了日常很多实用工具"
          },
          {
            "name": "ImagesTool",
            "url": "https://imagestool.com",
            "desc": "图像工具"
          },
          {
            "name": "Omnifile",
            "url": "https://omnifile.co/zh-cn",
            "desc": "通用图像转换格式"
          },
          {
            "name": "Imageol",
            "url": "https://imageonline.co/cn/",
            "desc": "在线图像处理编辑工具"
          },
          {
            "name": "iLoveIMG",
            "url": "https://www.iloveimg.com/zh-cn",
            "desc": "专注图像在线编辑工具"
          },
          {
            "name": "Vector Magic",
            "url": "https://zh.vectormagic.com",
            "desc": "专注将位图转换为矢量图"
          },
          {
            "name": "Vectorizer",
            "url": "https://www.vectorizer.io",
            "desc": "专注将位图转换为矢量图"
          },
          {
            "name": "Pixer.us",
            "url": "https://pixer.us",
            "desc": "调整图像剪裁加模糊等"
          },
          {
            "name": "Picflow",
            "url": "https://picflow.com/image-converter",
            "desc": "图像格式转换"
          },
          {
            "name": "图像转换大师",
            "url": "https://jpg2.cn",
            "desc": "浏览器执行图像格式转换"
          },
          {
            "name": "ConvertFiles.ai",
            "url": "https://www.convertfiles.ai",
            "desc": "浏览器图像格式转换"
          },
          {
            "name": "WebptoPng",
            "url": "https://magicstudio.com/zh/webp-to-png/",
            "desc": "Webp转PNG格式"
          },
          {
            "name": "WEBPtoPNG",
            "url": "https://webptopng.com/cn",
            "desc": "Webp转PNG等多种格式"
          },
          {
            "name": "SVGtoPNG",
            "url": "https://iconscout.com/converter/svg-to-png",
            "desc": "SVG转PNG等多种格式"
          },
          {
            "name": "AnyWebP",
            "url": "https://anywebp.com",
            "desc": "WebP图像格式互转"
          },
          {
            "name": "HEICFile",
            "url": "https://heicfile.com",
            "desc": "多种图像格式互转"
          },
          {
            "name": "Pixelied",
            "url": "https://pixelied.com/convert/",
            "desc": "图像格式批量互转"
          },
          {
            "name": "shutterstock",
            "url": "https://www.shutterstock.com/zh/file-converter",
            "desc": "快捷拖放转换图像"
          },
          {
            "name": "Scannerd",
            "url": "https://scannerd.co/zh",
            "desc": "PDF转扫描效果"
          },
          {
            "name": "Look Scanned",
            "url": "https://lookscanned.io/scan",
            "desc": "PDF转扫描效果"
          },
          {
            "name": "Imgsli",
            "url": "https://imgsli.com",
            "desc": "滑动图像对比"
          },
          {
            "name": "智能证件照",
            "url": "https://id.zhengzhaopai.com",
            "desc": "自动制作证件照"
          },
          {
            "name": "Idify",
            "url": "https://github.com/zhbhun/idify",
            "desc": "证件照制作"
          },
          {
            "name": "EXIF Viewer",
            "url": "https://onlineexifviewer.com",
            "desc": "查看图像EXIF信息"
          },
          {
            "name": "截图拼接",
            "url": "https://ttti.cc/minitools/stitching",
            "desc": "拼接图像可实现台词拼图"
          },
          {
            "name": "Keepmot",
            "url": "https://ps.keepmot.com/zh/",
            "desc": "快速拼图多种布局"
          },
          {
            "name": "免费拼图",
            "url": "https://img.ops-coffee.com/photo",
            "desc": "快速拼图多种布局"
          },
          {
            "name": "Collage",
            "url": "https://www.collaigo.com/zh/collage-maker",
            "desc": "快速拼图多种布局"
          },
          {
            "name": "Collage87",
            "url": "https://collage87.com/zh-CN",
            "desc": "快速拼图多种布局"
          },
          {
            "name": "SideIt",
            "url": "https://sideit.app",
            "desc": "快速拼图支持横向纵向"
          },
          {
            "name": "做好图拼图",
            "url": "http://www.zuohaotu.com/image-merge.aspx",
            "desc": "快速拼图支持横向纵向"
          },
          {
            "name": "Fotor",
            "url": "https://www.fotor.com/cn/features/collage.html",
            "desc": "快速拼图支持多种图案"
          },
          {
            "name": "PicCollages",
            "url": "https://piccollages.com/zh/pic",
            "desc": "快速拼图"
          },
          {
            "name": "33台词",
            "url": "https://33.agilestudio.cn",
            "desc": "通过台词找素材"
          },
          {
            "name": "字幕截图生成器",
            "url": "https://disksing.com/fake-screenshot/",
            "desc": "给图添加自定义字幕"
          },
          {
            "name": "4in1crop",
            "url": "https://4in1crop.com",
            "desc": "快速调整图像尺寸适用于社交媒体"
          },
          {
            "name": "ImageResizer",
            "url": "https://imageresizer.com",
            "desc": "整合各种图像调整工具"
          },
          {
            "name": "Image-Resizer",
            "url": "https://promo.com/tools/image-resizer",
            "desc": "图像缩放调整"
          },
          {
            "name": "Photo Resizer",
            "url": "https://www.photoresizer.com",
            "desc": "图像调整缩放剪裁"
          },
          {
            "name": "EasyResizer",
            "url": "https://easyresizer.com/zh-cn",
            "desc": "批量调整图像尺寸"
          },
          {
            "name": "ImageSplitter",
            "url": "https://imagesplitter.pro",
            "desc": "图像分割九宫图"
          },
          {
            "name": "ResizeNow",
            "url": "https://www.resizenow.com/zh-CN",
            "desc": "快速的调整图像尺寸"
          },
          {
            "name": "png-corners",
            "url": "https://onlinepngtools.com/round-png-corners/",
            "desc": "图像加圆角"
          },
          {
            "name": "Socialsizes",
            "url": "https://socialsizes.io",
            "desc": "将图像剪裁到社交网络用的尺寸"
          },
          {
            "name": "Batchimg",
            "url": "https://www.birme.net",
            "desc": "批量调整图像尺寸"
          },
          {
            "name": "Webresizer",
            "url": "http://webresizer.com",
            "desc": "图像快速调整尺寸旋转等"
          },
          {
            "name": "Picresize",
            "url": "https://picresize.com/cn",
            "desc": "批量调整图像尺寸"
          },
          {
            "name": "Resizeimage.net",
            "url": "https://resizeimage.net",
            "desc": "图像快速调整尺寸旋转等"
          },
          {
            "name": "Resizing.app",
            "url": "https://resizing.app",
            "desc": "快速调整尺寸剪裁"
          },
          {
            "name": "Landscape",
            "url": "https://sproutsocial.com/landscape/",
            "desc": "适配社交媒体剪裁"
          },
          {
            "name": "OnlineImgR",
            "url": "https://www.onlineimageresize.com",
            "desc": "简单的按照宽度批量调整图像"
          },
          {
            "name": "Imagator",
            "url": "https://imagator.co",
            "desc": "在本机调整图像"
          },
          {
            "name": "SIRT",
            "url": "https://www.internetmarketingninjas.com/seo-tools/favicon-generator-crop-images/",
            "desc": "按照社交网站缩放图像"
          },
          {
            "name": "Redacted",
            "url": "https://redacted.app",
            "desc": "超快速的打遮挡码工具"
          },
          {
            "name": "Redact.photo",
            "url": "https://redact.photo",
            "desc": "快速剪裁镜像旋转图像"
          },
          {
            "name": "Watermarkly",
            "url": "https://watermarkly.com",
            "desc": "文字和水印工具"
          },
          {
            "name": "imgtools",
            "url": "https://www.imgtools.co/face-privacy",
            "desc": "隐藏你的脸部打码"
          },
          {
            "name": "软件快捷键",
            "url": "https://shortcuts.design",
            "desc": "设计师软件快捷键"
          }
        ]
      },
      {
        "term": "Mockup",
        "links": [
          {
            "name": "Mockup Photos",
            "url": "https://mockup.photos",
            "desc": "给图像生成 Mockup"
          },
          {
            "name": "Smartmockup",
            "url": "https://smartmockups.com",
            "desc": "给图像生成 Mockup"
          },
          {
            "name": "Mockdown",
            "url": "https://epic.ai/mockdown",
            "desc": "截图转素描快样式产品图"
          },
          {
            "name": "Deviceshots",
            "url": "https://deviceshots.com",
            "desc": "带壳截图生成设备边框"
          },
          {
            "name": "Screenshot",
            "url": "https://screenshot.rocks",
            "desc": "带浏览器边框截图"
          },
          {
            "name": "Mockdrop",
            "url": "https://mockdrop.io",
            "desc": "生成 Mockup"
          },
          {
            "name": "Mockmagic",
            "url": "https://www.mockmagic.com",
            "desc": "手机边框图生成"
          },
          {
            "name": "Magicmockup",
            "url": "https://magicmockups.com",
            "desc": "图像放到笔记本手机场景生成"
          },
          {
            "name": "Pixeltrue",
            "url": "https://mockups.pixeltrue.com",
            "desc": "给图像生成 Mockup"
          }
        ]
      },
      {
        "term": "视频编辑",
        "links": [
          {
            "name": "123Apps",
            "url": "https://123apps.com/cn/",
            "desc": "音视频编辑工具合集"
          },
          {
            "name": "Clipchamp",
            "url": "https://clipchamp.com/zh-hans/",
            "desc": "视频制作工具"
          },
          {
            "name": "FreeCut",
            "url": "https://www.freecut.net",
            "desc": "视频制作工具"
          },
          {
            "name": "Pickfrom",
            "url": "https://zh.pickfrom.net",
            "desc": "一站式视频在线剪辑"
          },
          {
            "name": "Video Candy",
            "url": "https://videocandy.com",
            "desc": "视频在线编辑工具"
          },
          {
            "name": "Kapwing",
            "url": "https://www.kapwing.com",
            "desc": "视频在线剪辑"
          },
          {
            "name": "FlexClip",
            "url": "https://www.flexclip.com",
            "desc": "视频片头制作"
          },
          {
            "name": "Unscreen",
            "url": "https://www.unscreen.com",
            "desc": "移除视频背景"
          },
          {
            "name": "智影",
            "url": "https://zenvideo.qq.com",
            "desc": "字幕配音等多功能"
          },
          {
            "name": "爱幕",
            "url": "https://online.aimu-app.com",
            "desc": "在线视频编辑加字幕"
          },
          {
            "name": "字幕酱",
            "url": "https://www.zimujiang.com",
            "desc": "在线语音视频生成字幕"
          },
          {
            "name": "突字幕",
            "url": "https://2zimu.com",
            "desc": "在线视频生成字幕"
          },
          {
            "name": "文本配音",
            "url": "https://www.mu-yan.net",
            "desc": "在线文本转语音"
          },
          {
            "name": "配音娃",
            "url": "http://www.peiyinwa.com",
            "desc": "在线文本转语音"
          },
          {
            "name": "文字转语音",
            "url": "https://www.text-to-speech.online",
            "desc": "在线文本转语音"
          }
        ]
      },
      {
        "term": "图像压缩",
        "links": [
          {
            "name": "TinyPng",
            "url": "http://tinypng.com",
            "desc": "在线压缩图像"
          },
          {
            "name": "ICompressImg",
            "url": "https://www.icompressimg.com/zh-CN",
            "desc": "在线压缩图像"
          },
          {
            "name": "Zippic",
            "url": "https://www.zippic.cn/zh",
            "desc": "在线压缩图像"
          },
          {
            "name": "Pic Smaller",
            "url": "https://github.com/joye61/pic-smaller",
            "desc": "浏览器本地压缩图像"
          },
          {
            "name": "imgsmall",
            "url": "https://imgsmall.com",
            "desc": "压缩图像"
          },
          {
            "name": "MozJpeg",
            "url": "https://mozjpeg.com",
            "desc": "压缩图像"
          },
          {
            "name": "Compress jpg",
            "url": "https://compressjpg.io/zh-CN",
            "desc": "压缩图像"
          },
          {
            "name": "Tanpok",
            "url": "https://tool.tanpok.com",
            "desc": "快速的无需上传的图像压缩"
          },
          {
            "name": "CompressImage",
            "url": "https://compressimage.io",
            "desc": "快速的图像压缩"
          },
          {
            "name": "img.top",
            "url": "https://img.top",
            "desc": "图像格式压缩"
          },
          {
            "name": "WebPlanet",
            "url": "https://www.websiteplanet.com/zh-hans/webtools/imagecompressor/",
            "desc": "图像格式压缩"
          },
          {
            "name": "Optimizeimages",
            "url": "https://www.optimizeimages.com/tool",
            "desc": "压缩图像和转换格式"
          },
          {
            "name": "Recompressor",
            "url": "https://zh.recompressor.com",
            "desc": "专业的各种图像格式压缩"
          },
          {
            "name": "Picdiet",
            "url": "https://www.picdiet.com/zh-cn",
            "desc": "使用 JS 算法图像压缩"
          },
          {
            "name": "Squoosh",
            "url": "https://squoosh.app",
            "desc": "谷歌出品的图像压缩服务"
          },
          {
            "name": "Docsmall",
            "url": "https://docsmall.com",
            "desc": "易用的图像压缩还支持PDF"
          },
          {
            "name": "图好快",
            "url": "https://www.tuhaokuai.com",
            "desc": "易用的图像压缩还支持表情"
          },
          {
            "name": "智图",
            "url": "http://zhitu.isux.us",
            "desc": "图像压缩优化支持客户端"
          },
          {
            "name": "Jpeg.io",
            "url": "https://www.jpeg.io",
            "desc": "将任何图像压缩为jpeg"
          },
          {
            "name": "Compress JPEG",
            "url": "https://compressjpeg.com",
            "desc": "将任何图像压缩为jpeg"
          },
          {
            "name": "Optimizilla",
            "url": "https://imagecompresiosor.com/zh/",
            "desc": "待验证"
          },
          {
            "name": "Bench",
            "url": "https://bench.tanpok.com",
            "desc": "批量压缩图像且不使用网络"
          },
          {
            "name": "Shrink.media",
            "url": "https://www.shrink.media",
            "desc": "免费图像压缩"
          }
        ]
      },
      {
        "term": "背景消除",
        "links": [
          {
            "name": "Remove.bg",
            "url": "https://www.remove.bg",
            "desc": "好用的图像背景消除"
          },
          {
            "name": "Remove.pictures",
            "url": "https://remove.pictures",
            "desc": "好用的图像背景消除"
          },
          {
            "name": "Remove.photos",
            "url": "https://remove.photos/zh-cn/",
            "desc": "图像背景消除ocr识别多种工具"
          },
          {
            "name": "BG Remaker",
            "url": "https://remaker.ai/cn/ai-tools",
            "desc": "AI 图像背景消除"
          },
          {
            "name": "RemoveBG",
            "url": "https://www.removebg.dev",
            "desc": "好用的图像背景消除"
          },
          {
            "name": "Pixian.AI",
            "url": "https://pixian.ai",
            "desc": "好用的图像背景消除"
          },
          {
            "name": "SnapEdit Remove BG",
            "url": "https://snapedit.app/remove-bg",
            "desc": "好用的图像背景消除"
          },
          {
            "name": "BgSub",
            "url": "https://bgsub.com",
            "desc": "支持4K分辨率的去背景"
          },
          {
            "name": "Extractbg.com",
            "url": "https://extractbg.com",
            "desc": "自动化去除背景"
          },
          {
            "name": "Adobe Remove Background",
            "url": "https://express.adobe.com/tools/remove-background",
            "desc": "Adobe出品的图像背景消除"
          },
          {
            "name": "Removal",
            "url": "https://removal.ai",
            "desc": "简单快速的背景消除"
          },
          {
            "name": "ZapBG",
            "url": "https://www.zapbg.com",
            "desc": "简单快速的背景消除"
          },
          {
            "name": "BackgroundCut",
            "url": "https://backgroundcut.co",
            "desc": "简单快速的背景消除"
          },
          {
            "name": "PS Express",
            "url": "https://photoshop.adobe.com",
            "desc": "Adobe 出品的背景消除"
          },
          {
            "name": "Aipix",
            "url": "https://aipix.net",
            "desc": "简单快速的背景消除"
          },
          {
            "name": "Clipping Magic",
            "url": "https://zh.clippingmagic.com",
            "desc": "魔术般的消除图像背景"
          },
          {
            "name": "PhotoScissors",
            "url": "https://photoscissors.com",
            "desc": "简单易用的图像背景消除"
          },
          {
            "name": "Autoclipping",
            "url": "https://autoclipping.com",
            "desc": "快速自动消除图像背景"
          },
          {
            "name": "Burner",
            "url": "https://burner.bonanza.com",
            "desc": "快速自动消除图像背景"
          },
          {
            "name": "Trace",
            "url": "https://www.stickermule.com/trace",
            "desc": "删除背景并添加背景图或纯色"
          },
          {
            "name": "UnScreen",
            "url": "https://www.unscreen.com",
            "desc": "视频消除背景"
          },
          {
            "name": "BGEraser",
            "url": "https://bgeraser.com",
            "desc": "AI 消除背景图像"
          },
          {
            "name": "Socialbook",
            "url": "https://socialbook.io/remove-background",
            "desc": "很强大的背景消除"
          },
          {
            "name": "Slazzer",
            "url": "https://www.slazzer.com",
            "desc": "快速自动消除图像背景"
          },
          {
            "name": "ImgCleaner",
            "url": "https://imgcleaner.com",
            "desc": "去除图像中的物体"
          },
          {
            "name": "去去去水印",
            "url": "https://quququ.cn",
            "desc": "图像去水印"
          },
          {
            "name": "WatermarkZero",
            "url": "https://watermarkzero.com",
            "desc": "图像去水印"
          },
          {
            "name": "Dewatermark",
            "url": "https://dewatermark.ai",
            "desc": "图像AI去水印"
          },
          {
            "name": "Cleanup Photos",
            "url": "https://cleanupphotos.com",
            "desc": "去除图像中的东西物体"
          },
          {
            "name": "Theinpaint",
            "url": "https://theinpaint.com",
            "desc": "图像去水印"
          },
          {
            "name": "inpixio",
            "url": "https://www.inpixio.com/remove-background/",
            "desc": "很不错的背景去除"
          },
          {
            "name": "PurePhotos",
            "url": "https://purephotos.app",
            "desc": "背景去除并图像矫正输出PSD图层"
          },
          {
            "name": "Bgremover",
            "url": "https://icons8.com/bgremover",
            "desc": "图像去除背景"
          },
          {
            "name": "Erase.bg",
            "url": "https://www.erase.bg",
            "desc": "图像去除背景"
          },
          {
            "name": "Picwish",
            "url": "https://picwish.cn",
            "desc": "图像去除背景"
          },
          {
            "name": "Baseline",
            "url": "https://baseline.is/tools/background-remover",
            "desc": "图像去除背景"
          },
          {
            "name": "WatermarkR",
            "url": "https://www.watermarkremover.io",
            "desc": "快速去水印"
          },
          {
            "name": "Magic Eraser",
            "url": "https://www.magiceraser.io",
            "desc": "魔法擦除图像中不要的部分"
          },
          {
            "name": "Magic Retouch",
            "url": "https://www.photoroom.com/tools/remove-object-from-photo",
            "desc": "魔法擦除图像中不要的部分"
          },
          {
            "name": "ClipDrop",
            "url": "https://clipdrop.co/remove-background",
            "desc": "免费的图像去除背景"
          },
          {
            "name": "jpgRM",
            "url": "https://jpgrm.com",
            "desc": "AI水印去除"
          },
          {
            "name": "Kaze.ai",
            "url": "https://kaze.ai/watermark-removal",
            "desc": "AI水印去除"
          }
        ]
      },
      {
        "term": "图像放大",
        "links": [
          {
            "name": "BigJpg",
            "url": "http://bigjpg.com",
            "desc": "专注图像放大"
          },
          {
            "name": "Img-Upscaling",
            "url": "https://image-upscaling.net",
            "desc": "图像放大"
          },
          {
            "name": "清图",
            "url": "https://qingtu.cn",
            "desc": "图像放大"
          },
          {
            "name": "AIImgUpscaler",
            "url": "https://imgupscaler.com",
            "desc": "专注图像放大"
          },
          {
            "name": "BigMp4",
            "url": "https://bigmp4.com",
            "desc": "视频无损放大和补帧"
          },
          {
            "name": "Bulkre",
            "url": "https://bulkresizephotos.com/zh",
            "desc": "图像缩放调整大小"
          },
          {
            "name": "LetsEnhance",
            "url": "https://letsenhance.io",
            "desc": "非常好用的图像放大"
          },
          {
            "name": "Waifu2x",
            "url": "http://waifu2x.udp.jp",
            "desc": "专注图像放大(fq)"
          },
          {
            "name": "Upscale",
            "url": "https://upscalepics.com",
            "desc": "图像放大降噪"
          },
          {
            "name": "Upscale.media",
            "url": "https://www.upscale.media",
            "desc": "图像放大降噪"
          },
          {
            "name": "Imglarger",
            "url": "http://imglarger.com",
            "desc": "AI 算法放大图像"
          },
          {
            "name": "Upscaler",
            "url": "https://icons8.com/upscaler",
            "desc": "icons8推出的图像放大"
          },
          {
            "name": "Pixfix",
            "url": "https://pixfix.com",
            "desc": "消除噪点提升图像质量"
          },
          {
            "name": "ImageUpscalerAi",
            "url": "https://imageupscalerai.com",
            "desc": "AI 算法放大图像"
          },
          {
            "name": "imgUpscaler",
            "url": "https://imageupscaler.com",
            "desc": "AI 算法放大图像"
          },
          {
            "name": "Deep-image",
            "url": "https://deep-image.ai",
            "desc": "深度算法的图像放大(fq)"
          },
          {
            "name": "Upscale",
            "url": "https://www.stickermule.com/upscale",
            "desc": "图像放大两倍不失真"
          },
          {
            "name": "Upscaler",
            "url": "https://upscaler.stockphotos.com",
            "desc": "图像放大两倍不失真"
          },
          {
            "name": "Vance AI Enlarge",
            "url": "https://vanceai.com/image-enlarger",
            "desc": "AI的图像放大"
          },
          {
            "name": "Clipdrop Image Upscaler",
            "url": "https://clipdrop.co/image-upscaler",
            "desc": "免费的图像放大"
          }
        ]
      },
      {
        "term": "图像特效",
        "links": [
          {
            "name": "pho.to",
            "url": "https://makeup.pho.to/zh",
            "desc": "照片润色添加趣味效果"
          },
          {
            "name": "Image Recolor AI",
            "url": "https://create.pixelcut.ai",
            "desc": "多种工具支持图像重新涂色变装"
          },
          {
            "name": "Productshot",
            "url": "https://productshot.app",
            "desc": "截图或给图像添加聚焦"
          },
          {
            "name": "Photolab",
            "url": "https://photolab.me",
            "desc": "给人物照片添加精美效果"
          },
          {
            "name": "EasyMoza",
            "url": "http://www.easymoza.com",
            "desc": "生成马赛克图像效果"
          },
          {
            "name": "Background Blur",
            "url": "https://magicstudio.com/zh/backgroundblur",
            "desc": "自动虚化模糊照片背景"
          },
          {
            "name": "PicTiler",
            "url": "https://pictiler.com",
            "desc": "制作晶格效果图像"
          },
          {
            "name": "Photofunia",
            "url": "https://photofunia.com/cn/",
            "desc": "给照片添加外框场景等"
          },
          {
            "name": "PhotoMosh",
            "url": "https://photomosh.com",
            "desc": "给图像添加抖动特效"
          },
          {
            "name": "Image to Pixel",
            "url": "https://pixelartvillage.com",
            "desc": "图像转换像素画"
          },
          {
            "name": "ImageToPixel",
            "url": "https://imagetopixel.art",
            "desc": "图像转换各种效果"
          },
          {
            "name": "The Pixel Art",
            "url": "https://32comic.com/Pixel_Art_Converter/",
            "desc": "图像生成像素画"
          },
          {
            "name": "ShapeFactory",
            "url": "https://shapefactory.co",
            "desc": "给照片添加着色模板"
          },
          {
            "name": "Textify",
            "url": "http://textify.it",
            "desc": "照片生成为油画"
          },
          {
            "name": "Colourise",
            "url": "https://colourise.sg",
            "desc": "为旧照片着色"
          },
          {
            "name": "Imagecolorizer",
            "url": "https://imagecolorizer.com",
            "desc": "AI 为黑白照片上色"
          },
          {
            "name": "Petalica paint",
            "url": "https://petalica-paint.pixiv.dev",
            "desc": "AI 给画涂色"
          },
          {
            "name": "Colorize-photo",
            "url": "https://demos.algorithmia.com/colorize-photos",
            "desc": "为黑白照片着色"
          },
          {
            "name": "Myheritage",
            "url": "https://www.myheritage.cn",
            "desc": "为黑白照片着色"
          },
          {
            "name": "Wangyasai",
            "url": "https://wangyasai.github.io/designtools.html",
            "desc": "一些动效可以截成视频做素材"
          },
          {
            "name": "Geektyper",
            "url": "http://geektyper.com",
            "desc": "模拟黑客屏幕可以做视频素材"
          },
          {
            "name": "Pika",
            "url": "https://pika.style",
            "desc": "截图美化编辑器"
          },
          {
            "name": "Pixzens",
            "url": "https://pixzens.com/zh",
            "desc": "截图美化编辑器"
          },
          {
            "name": "Shotzio",
            "url": "https://shotzio.com",
            "desc": "截图美化编辑器"
          },
          {
            "name": "Shot Sleek",
            "url": "https://pretty-snap.iwhy.dev",
            "desc": "截图美化工具"
          },
          {
            "name": "Photor",
            "url": "https://www.photor.fun/editor",
            "desc": "截图美化编辑器"
          },
          {
            "name": "SuperBlog",
            "url": "https://superblog.ai/supershots/app",
            "desc": "截图美化"
          },
          {
            "name": "Jellylade",
            "url": "https://app.jellylade.com",
            "desc": "截图美化还代设备边框"
          },
          {
            "name": "Picyard",
            "url": "https://picyard.ubout.in",
            "desc": "截图美化编辑器"
          },
          {
            "name": "FabPic",
            "url": "https://www.fabpic.app",
            "desc": "截图美化编辑器"
          },
          {
            "name": "xxbiji",
            "url": "https://xxbiji.gitee.io/logo-frame-web",
            "desc": "截图或照片加边框及相机 LOGO"
          },
          {
            "name": "Pretty-snap",
            "url": "https://github.com/kangabru/pretty-snap",
            "desc": "截图添加边框花边"
          },
          {
            "name": "Blurmatic",
            "url": "https://www.blurmatic.com",
            "desc": "截图添加景深效果"
          }
        ]
      },
      {
        "term": "Gif 工具",
        "links": [
          {
            "name": "EzGif",
            "url": "https://ezgif.com",
            "desc": "GIF 在线编辑器"
          },
          {
            "name": "Gifsuper",
            "url": "https://gifsuper.com",
            "desc": "IF 在线编辑器"
          },
          {
            "name": "闪萌",
            "url": "http://www.weshineapp.com",
            "desc": "专业的 GIF 搜索"
          },
          {
            "name": "SooGIF",
            "url": "https://www.soogif.com",
            "desc": "搜索和制作 GIF"
          },
          {
            "name": "SosoGIF",
            "url": "https://www.sosogif.com/tool",
            "desc": "GIF 搜索和工具"
          },
          {
            "name": "GIF Compressor",
            "url": "https://gifcompressor.com",
            "desc": "专注 GIF 压缩"
          },
          {
            "name": "GIF Tool",
            "url": "https://tool.gifhome.com",
            "desc": "GIF 压缩与合成"
          },
          {
            "name": "动次",
            "url": "https://dongci.kawo.com",
            "desc": "视频截取转GIF"
          },
          {
            "name": "tt0Gif",
            "url": "https://tt0.top",
            "desc": "多图合成 Gif"
          },
          {
            "name": "Easygif",
            "url": "https://www.easygif.tools",
            "desc": "纯前端实现的GIF在线编辑"
          },
          {
            "name": "YouCompress",
            "url": "https://www.youcompress.com",
            "desc": "Gif压缩也包括MP4"
          },
          {
            "name": "GIFGIFS",
            "url": "http://gifgifs.com",
            "desc": "多种gif工具服务"
          },
          {
            "name": "GIF Reducer",
            "url": "http://www.gifreducer.com",
            "desc": "简单易用的gif压缩"
          }
        ]
      },
      {
        "term": "LOGO 制作",
        "links": [
          {
            "name": "Designevo",
            "url": "https://www.designevo.com/cn/",
            "desc": "LOGO 在线设计"
          },
          {
            "name": "标点狗",
            "url": "https://www.logoko.com.cn",
            "desc": "LOGO 在线设计"
          },
          {
            "name": "标小志",
            "url": "https://www.logosc.cn",
            "desc": "LOGO 在线设计"
          },
          {
            "name": "Bingolcon",
            "url": "http://bingoicon.com",
            "desc": "快速生成文字图标"
          },
          {
            "name": "Ucraft",
            "url": "https://www.ucraft.com/free-logo-maker",
            "desc": "LOGO 在线设计"
          },
          {
            "name": "Logodesign",
            "url": "https://www.logodesign.net",
            "desc": "LOGO 在线设计"
          },
          {
            "name": "Logomyway",
            "url": "https://www.logomyway.com/logo-maker",
            "desc": "LOGO 在线设计"
          },
          {
            "name": "Shopify",
            "url": "https://hatchful.shopify.com",
            "desc": "LOGO 在线设计"
          },
          {
            "name": "LogoGarden",
            "url": "https://www.logogarden.com",
            "desc": "LOGO 在线设计"
          },
          {
            "name": "GraphicS",
            "url": "https://www.graphicsprings.com",
            "desc": "LOGO 在线设计"
          },
          {
            "name": "DesignMantic",
            "url": "https://www.designmantic.com",
            "desc": "LOGO 在线设计"
          },
          {
            "name": "LogoCreator",
            "url": "https://logocreator.io",
            "desc": "LOGO 在线设计"
          },
          {
            "name": "Mi Style Logo Maker",
            "url": "https://mi-logo.lvwzhen.com",
            "desc": "小米风格 LOGO 生成"
          },
          {
            "name": "U钙网",
            "url": "https://www.uugai.com",
            "desc": "LOGO 在线生成"
          },
          {
            "name": "Worldvectorlogo",
            "url": "https://worldvectorlogo.com",
            "desc": "世界知名品牌 LOGO 素材"
          },
          {
            "name": "印章生成",
            "url": "https://www.logosc.cn/logo/badge",
            "desc": "标小志出品的印章生成"
          },
          {
            "name": "给PDF盖章",
            "url": "https://pdf.zhheo.com",
            "desc": "给PDF盖章"
          }
        ]
      },
      {
        "term": "文字成图",
        "links": [
          {
            "name": "WordArt",
            "url": "https://wordart.com",
            "desc": "制作文字艺术图"
          },
          {
            "name": "Word2Art",
            "url": "http://www.word2art.com",
            "desc": "制作文字艺术图"
          },
          {
            "name": "WordClouds",
            "url": "https://www.wordclouds.com",
            "desc": "制作文字艺术图"
          },
          {
            "name": "Logoly",
            "url": "https://www.logoly.pro",
            "desc": "快速制作P站风格图"
          },
          {
            "name": "美寄",
            "url": "https://www.moage.cn",
            "desc": "多种文字艺术生成"
          },
          {
            "name": "微词云",
            "url": "https://www.weiciyun.com",
            "desc": "制作文字艺术图"
          },
          {
            "name": "易词云",
            "url": "http://yciyun.com",
            "desc": "制作文字艺术图"
          },
          {
            "name": "Cooltext",
            "url": "https://zh-cn.cooltext.com",
            "desc": "透明背景效果文字生成"
          },
          {
            "name": "Makepic",
            "url": "http://www.makepic.com",
            "desc": "邮件图条形码印章生成"
          }
        ]
      },
      {
        "term": "设计导航",
        "links": [
          {
            "name": "设计导航",
            "url": "http://hao.shejidaren.com",
            "desc": "设计师导航"
          },
          {
            "name": "UISET",
            "url": "https://uiset.com",
            "desc": "设计师导航"
          },
          {
            "name": "设计达人",
            "url": "https://www.shejidaren.com",
            "desc": "设计师导航"
          },
          {
            "name": "优设导航",
            "url": "https://hao.uisdc.com",
            "desc": "设计师导航"
          },
          {
            "name": "创造狮",
            "url": "http://chuangzaoshi.com",
            "desc": "设计师导航"
          },
          {
            "name": "UI设计师",
            "url": "http://so.uigreat.com",
            "desc": "设计师导航"
          },
          {
            "name": "Boss设计",
            "url": "http://www.bossdesign.cn/designnav/",
            "desc": "设计师导航"
          }
        ]
      }
    ]
  },
  {
    "taxonomy": "图库素材",
    "icon": "fa-images",
    "list": [
      {
        "term": "精美壁纸",
        "links": [
          {
            "name": "Wallhaven",
            "url": "https://alpha.wallhaven.cc",
            "desc": "很好的精美壁纸"
          },
          {
            "name": "超宽壁纸",
            "url": "https://ultrawidewallpapers.net",
            "desc": "为21:9等超宽壁纸"
          },
          {
            "name": "Pixground",
            "url": "https://www.pixground.com",
            "desc": "很好的精美壁纸"
          },
          {
            "name": "Desktophut",
            "url": "https://www.desktophut.com",
            "desc": "视频壁纸动态壁纸"
          },
          {
            "name": "Wallpaper",
            "url": "https://wallpaperstudio10.com",
            "desc": "很好的4K高清壁纸"
          },
          {
            "name": "Goodfon",
            "url": "https://www.goodfon.com",
            "desc": "很好的精美壁纸"
          },
          {
            "name": "AURA壁纸",
            "url": "https://gallery.wallaura.cn",
            "desc": "精美壁纸还有App可以下载"
          },
          {
            "name": "Backiee",
            "url": "https://backiee.com",
            "desc": "精美壁纸还有App可以下载"
          },
          {
            "name": "Wallpaperscraft",
            "url": "https://wallpaperscraft.com",
            "desc": "大量高清壁纸"
          },
          {
            "name": "Wallwidgy",
            "url": "https://www.wallwidgy.app",
            "desc": "2D高清壁纸"
          },
          {
            "name": "2dwallpapers",
            "url": "https://www.2dwallpapers.com",
            "desc": "2D高清壁纸"
          },
          {
            "name": "Wallpapers",
            "url": "https://newevolutiondesigns.com/wallpapers",
            "desc": "4K高清壁纸"
          },
          {
            "name": "Wallpaperup",
            "url": "https://www.wallpaperup.com",
            "desc": "稍很好的支持搜索壁纸"
          },
          {
            "name": "Shome",
            "url": "https://wallpapershome.com",
            "desc": "高清壁纸"
          },
          {
            "name": "Tag",
            "url": "https://wallpapertag.com",
            "desc": "以标签分类的壁纸"
          },
          {
            "name": "Wallhere",
            "url": "https://wallspic.com/cn",
            "desc": "用户上传高质量壁纸"
          },
          {
            "name": "WallpaperCave",
            "url": "https://wallpapercave.com",
            "desc": "国外知名壁纸社区分享"
          },
          {
            "name": "Wallpaperswide",
            "url": "https://wallpaperswide.com",
            "desc": "很多高清壁纸下载"
          },
          {
            "name": "Wallroom",
            "url": "https://wallroom.io",
            "desc": "很多不错的壁纸"
          },
          {
            "name": "SooHub",
            "url": "https://www.soohub.com",
            "desc": "很好的高清壁纸搜索"
          },
          {
            "name": "微软设计壁纸",
            "url": "https://wallpapers.microsoft.design",
            "desc": "微软设计壁纸"
          },
          {
            "name": "Konachan",
            "url": "https://konachan.com",
            "desc": "你懂的卡通壁纸"
          },
          {
            "name": "彼岸图库",
            "url": "http://www.netbian.com",
            "desc": "分类详细的壁纸"
          },
          {
            "name": "Simpledesktops",
            "url": "http://simpledesktops.com",
            "desc": "极其简单的壁纸"
          },
          {
            "name": "必应壁纸",
            "url": "http://bimg.top",
            "desc": "必应每日壁纸"
          },
          {
            "name": "壁纸湖",
            "url": "http://bizihu.com",
            "desc": "不错的壁纸网站"
          },
          {
            "name": "Wallabyss",
            "url": "https://wall.alphacoders.com",
            "desc": "不错的壁纸网站"
          },
          {
            "name": "hqWallpaper",
            "url": "https://www.wallpapermaiden.com",
            "desc": "不错的壁纸网站"
          },
          {
            "name": "36壁纸",
            "url": "https://www.3gbizhi.com",
            "desc": "不错的壁纸网站"
          },
          {
            "name": "美图集",
            "url": "https://photo.ihansen.org",
            "desc": "来自unsp可商用的图像"
          },
          {
            "name": "GameWallpaper",
            "url": "https://www.gamewallpapers.com",
            "desc": "游戏壁纸"
          },
          {
            "name": "Everia",
            "url": "https://everia.club",
            "desc": "阳光正妹壁纸"
          },
          {
            "name": "哲风壁纸",
            "url": "https://haowallpaper.com",
            "desc": "很好的精美壁纸"
          },
          {
            "name": "Alpha Coders",
            "url": "https://alphacoders.com",
            "desc": "为创作者的素材"
          }
        ]
      },
      {
        "term": "图库搜索",
        "links": [
          {
            "name": "Unsplash",
            "url": "https://unsplash.com",
            "desc": "知名的摄影图像图库"
          },
          {
            "name": "Pexels",
            "url": "http://www.pexels.com",
            "desc": "知名的摄影图像视频图库"
          },
          {
            "name": "Pixabay",
            "url": "https://pixabay.com",
            "desc": "知名的图库搜索"
          },
          {
            "name": "Unreal Images",
            "url": "https://unrealimages.com",
            "desc": "AI 生成的图库"
          },
          {
            "name": "MMTStock",
            "url": "https://mmtstock.com",
            "desc": "免费用于商业的图像视频(fq)"
          },
          {
            "name": "YayImages",
            "url": "https://yayimages.com",
            "desc": "很不错的免费图库"
          },
          {
            "name": "ImgFinder",
            "url": "https://imagefinder.co",
            "desc": "高清免费摄影图像搜索"
          },
          {
            "name": "StockSnap",
            "url": "https://stocksnap.io",
            "desc": "非常多的图像素材搜索"
          },
          {
            "name": "Freepik",
            "url": "https://www.freepik.com",
            "desc": "高质量图库"
          },
          {
            "name": "PikWizard",
            "url": "https://pikwizard.com",
            "desc": "免费CC0授权的图库"
          },
          {
            "name": "Freephotos",
            "url": "https://freephotos.cc/zh",
            "desc": "非常多的图像素材搜索"
          },
          {
            "name": "PxHere",
            "url": "https://pxhere.com",
            "desc": "非常多的图像素材搜索"
          },
          {
            "name": "ISO Republic",
            "url": "https://isorepublic.com",
            "desc": "很多的免费图像视频素材"
          },
          {
            "name": "Piqsels",
            "url": "https://www.piqsels.com/zh",
            "desc": "很多的图像素材搜索"
          },
          {
            "name": "Jeshoots",
            "url": "https://jeshoots.com",
            "desc": "根据主题寻找图像素材"
          },
          {
            "name": "kisscc0",
            "url": "https://www.kisscc0.com",
            "desc": "很多的图像素材搜索"
          },
          {
            "name": "Burst",
            "url": "https://burst.shopify.com",
            "desc": "根据主题寻找图像素材"
          },
          {
            "name": "SkitterPhoto",
            "url": "https://skitterphoto.com",
            "desc": "CC0 授权的图库"
          },
          {
            "name": "Barnimages",
            "url": "https://barnimages.com",
            "desc": "摄影精美的背景图库"
          },
          {
            "name": "Wunderstock",
            "url": "https://wunderstock.com",
            "desc": "授权图像下载并带编辑器"
          },
          {
            "name": "NegativeSpace",
            "url": "https://negativespace.co",
            "desc": "授权分类图像"
          },
          {
            "name": "GAHAG",
            "url": "http://gahag.net",
            "desc": "授权分类图像"
          },
          {
            "name": "Captionn",
            "url": "https://captionn.me",
            "desc": "免费图像添加文字"
          },
          {
            "name": "Blackwhite",
            "url": "https://blackwhite.pictures",
            "desc": "黑白图库"
          },
          {
            "name": "LibreStock",
            "url": "https://librestock.com",
            "desc": "免费授权图像"
          },
          {
            "name": "Freerange",
            "url": "https://freerangestock.com",
            "desc": "免费授权图像"
          },
          {
            "name": "Freeimages",
            "url": "https://www.freeimages.com",
            "desc": "免费授权图像"
          },
          {
            "name": "Skuawk",
            "url": "https://skuawk.com",
            "desc": "免费授权图像"
          },
          {
            "name": "Hippopx",
            "url": "https://www.hippopx.com",
            "desc": "免费授权图像"
          },
          {
            "name": "Rgbstock",
            "url": "https://www.rgbstock.com",
            "desc": "免费授权图像"
          },
          {
            "name": "CC Search",
            "url": "https://ccsearch.creativecommons.org",
            "desc": "聚合素材图像影音搜索"
          },
          {
            "name": "Pixel Mob",
            "url": "https://pixelmob.co",
            "desc": "搜索数百万免费照片"
          },
          {
            "name": "CanvaImg",
            "url": "https://www.canva.com/photos/free",
            "desc": "知名的图像素材搜索"
          },
          {
            "name": "Visual Hunt",
            "url": "https://visualhunt.com",
            "desc": "可以根据颜色搜索图像"
          },
          {
            "name": "ImgCyborg",
            "url": "https://imagecyseborg.com",
            "desc": "待验证"
          },
          {
            "name": "Logosc",
            "url": "https://www.logosc.cn/so/",
            "desc": "很好的搜图神器"
          },
          {
            "name": "搜图导航",
            "url": "https://www.91sotu.com",
            "desc": "聚合搜索"
          },
          {
            "name": "Dreamtime",
            "url": "https://www.dreamstime.com/free-photos",
            "desc": "不错的图库还可以搜索视频"
          },
          {
            "name": "Picjumbo",
            "url": "https://picjumbo.com",
            "desc": "免费的图库"
          },
          {
            "name": "DesignSpics",
            "url": "http://www.designerspics.com",
            "desc": "免费的图库"
          },
          {
            "name": "Reshot",
            "url": "https://www.reshot.com",
            "desc": "有插图图标图库"
          },
          {
            "name": "沙沙野",
            "url": "https://www.ssyer.com",
            "desc": "不错的无版权图库库"
          },
          {
            "name": "高图网",
            "url": "http://www.gaoimg.com",
            "desc": "不错的无版权图库库"
          },
          {
            "name": "FootageCrate",
            "url": "https://footagecrate.com",
            "desc": "音乐视频素材"
          },
          {
            "name": "TheStocks",
            "url": "http://thestocks.im",
            "desc": "不错的图像和图标集合"
          },
          {
            "name": "Lummi.ai",
            "url": "https://www.lummi.ai",
            "desc": "AI图库素材"
          },
          {
            "name": "Colorhub",
            "url": "https://colorhub.me",
            "desc": "不错的小型免费商业图库"
          },
          {
            "name": "Gratisography",
            "url": "https://gratisography.com",
            "desc": "搞怪无厘头的图分享"
          },
          {
            "name": "Morguefile",
            "url": "https://morguefile.com",
            "desc": "很多的图像素材搜索"
          },
          {
            "name": "Pakutaso",
            "url": "https://www.pakutaso.com",
            "desc": "来自日本的图像素材"
          },
          {
            "name": "Magdeleine",
            "url": "https://magdeleine.co",
            "desc": "每日免费的摄影图像"
          },
          {
            "name": "Freebies",
            "url": "https://freebies.bypeople.com",
            "desc": "为设计师助力不只是图像素材"
          },
          {
            "name": "Travel",
            "url": "http://travelcoffeebook.com",
            "desc": "关于旅行的图库"
          },
          {
            "name": "Foodies",
            "url": "https://foodiesfeed.com",
            "desc": "关于食物的图库"
          },
          {
            "name": "Houzz",
            "url": "http://www.houzz.com",
            "desc": "关于家居的图库(fq)"
          },
          {
            "name": "LALA",
            "url": "https://233.fi",
            "desc": "美少女图库"
          },
          {
            "name": "XiuRen",
            "url": "http://www.xiuren.org",
            "desc": "美少女图库"
          },
          {
            "name": "CupCake",
            "url": "http://cupcake.nilssonlee.se",
            "desc": "个人摄影爱好者提供的免费图"
          },
          {
            "name": "Jeffrey Betts",
            "url": "http://moveast.me",
            "desc": "个人摄影爱好者提供的免费图"
          }
        ]
      },
      {
        "term": "视频图库",
        "links": [
          {
            "name": "Mixkit",
            "url": "https://mixkit.co",
            "desc": "很好的视频素材库"
          },
          {
            "name": "Motion Elements",
            "url": "https://www.motionelements.com/zh-hans/",
            "desc": "视频音乐图标素材模板"
          },
          {
            "name": "Free-stock.video",
            "url": "https://free-stock.video",
            "desc": "免费商用视频素材库"
          },
          {
            "name": "Coverr",
            "url": "https://coverr.co",
            "desc": "很好的视频素材库"
          },
          {
            "name": "Videvo",
            "url": "https://www.videvo.net",
            "desc": "很好的视频音乐素材库"
          },
          {
            "name": "Mazwai",
            "url": "http://mazwai.com",
            "desc": "免费摄影视频素材库"
          },
          {
            "name": "Distill",
            "url": "https://www.wedistill.io",
            "desc": "免费的高清视频素材"
          },
          {
            "name": "Videezy",
            "url": "https://www.videezy.com",
            "desc": "免费视频素材库"
          },
          {
            "name": "Life Vids",
            "url": "https://lifeofvids.com",
            "desc": "免费视频剪辑循环素材"
          },
          {
            "name": "Dareful",
            "url": "https://dareful.com",
            "desc": "免费4K视频素材"
          },
          {
            "name": "pond5",
            "url": "https://www.pond5.com",
            "desc": "免费视频素材和音乐素材"
          },
          {
            "name": "IgniteMotion",
            "url": "https://www.ignitemotion.com",
            "desc": "太空背景居多的视频素材"
          },
          {
            "name": "Vecteezy",
            "url": "https://www.vecteezy.com/free-videos",
            "desc": "免费视频素材"
          },
          {
            "name": "做视频网",
            "url": "https://www.zuoshipin.com",
            "desc": "很多素材模板"
          },
          {
            "name": "新CG儿",
            "url": "https://www.newcger.com",
            "desc": "很多CG视频素材"
          },
          {
            "name": "凌晨亮点",
            "url": "https://www.2amok.com",
            "desc": "很多视频素材"
          }
        ]
      },
      {
        "term": "素材模板",
        "links": [
          {
            "name": "Envato Elements",
            "url": "Envato：https://elements.envato.com",
            "desc": "全球综合型设计素材"
          },
          {
            "name": "Pinterest",
            "url": "https://www.pinterest.com",
            "desc": "全球最好的设计师灵感来源"
          },
          {
            "name": "花瓣网",
            "url": "http://huaban.com",
            "desc": "国内不错的素材网站"
          },
          {
            "name": "ZCOOL",
            "url": "http://www.zcool.com.cn",
            "desc": "不错的素材模板搜索"
          },
          {
            "name": "包图网",
            "url": "https://ibaotu.com",
            "desc": "不错的素材模板搜索"
          },
          {
            "name": "千库网",
            "url": "http://www.588ku.com",
            "desc": "抠图素材"
          },
          {
            "name": "千图网",
            "url": "http://www.58pic.com",
            "desc": "各类模板素材"
          },
          {
            "name": "90设计",
            "url": "http://90sheji.com",
            "desc": "各类模板素材"
          },
          {
            "name": "昵图网",
            "url": "http://www.nipic.com",
            "desc": "各类模板素材"
          },
          {
            "name": "摄图网",
            "url": "http://699pic.com",
            "desc": "各类模板素材"
          },
          {
            "name": "站酷海洛",
            "url": "https://www.hellorf.com",
            "desc": "高质量售卖素材"
          }
        ]
      },
      {
        "term": "图标素材",
        "links": [
          {
            "name": "Easyicon",
            "url": "https://www.easyicon.cc",
            "desc": "专注的图标搜索"
          },
          {
            "name": "Icons",
            "url": "https://ico.bytecook.io",
            "desc": "图标合集带CDN加速"
          },
          {
            "name": "IconKitchen",
            "url": "https://icon.kitchen/",
            "desc": "可以生成各种应用图标"
          },
          {
            "name": "Findicons",
            "url": "http://www.findicons.com",
            "desc": "国外不错的图标搜索"
          },
          {
            "name": "IconArchive",
            "url": "http://www.iconarchive.com",
            "desc": "比较老的图标搜索"
          },
          {
            "name": "icons8",
            "url": "https://icons8.cn",
            "desc": "很好的图标搜索"
          },
          {
            "name": "Iconhunt",
            "url": "https://www.iconhunt.site",
            "desc": "开源图标合集搜索引擎"
          },
          {
            "name": "Icones",
            "url": "https://icones.js.org",
            "desc": "开源免费图标目录合集"
          },
          {
            "name": "Vectoricons",
            "url": "https://www.iconshock.com/vectoricons",
            "desc": "很多可定制图标"
          },
          {
            "name": "Flaticon",
            "url": "https://www.flaticon.com",
            "desc": "很好的图标搜索"
          },
          {
            "name": "igoutu-windows",
            "url": "https://igoutu.cn/app/windows",
            "desc": "用本地应用程序和插件的图标"
          },
          {
            "name": "3dicons",
            "url": "https://3dicons.co",
            "desc": "很好的3D图标"
          },
          {
            "name": "Iconpark",
            "url": "https://iconpark.bytedance.com/official",
            "desc": "字节跳动官方免费图标库"
          },
          {
            "name": "IFN icons",
            "url": "https://illustration-free.net",
            "desc": "日本的图标库黑白图标"
          },
          {
            "name": "Stocks2",
            "url": "http://thestocks.im",
            "desc": "非常不错的综合搜索"
          },
          {
            "name": "FluentIcon",
            "url": "https://icons8.com/l/fluent",
            "desc": "Fluent 风格的图标"
          },
          {
            "name": "Iconduck",
            "url": "https://iconduck.com",
            "desc": "超多的开源图标"
          },
          {
            "name": "iconmonstr",
            "url": "https://iconmonstr.com",
            "desc": "非常不错的图标自定义"
          },
          {
            "name": "Iconic",
            "url": "https://iconic.app",
            "desc": "非常不错的免费图标"
          },
          {
            "name": "Tabler SVG",
            "url": "https://tablericons.com",
            "desc": "非常不错的图标自定义"
          },
          {
            "name": "Share Icon",
            "url": "https://www.shareicon.net",
            "desc": "很多免费图示"
          },
          {
            "name": "IconGo",
            "url": "https://icongo.github.io",
            "desc": "SVG 图标搜索"
          },
          {
            "name": "Svgrepo",
            "url": "https://www.svgrepo.com",
            "desc": "SVG 图标库"
          },
          {
            "name": "Flaticons",
            "url": "https://flaticons.net",
            "desc": "免费矢量图和图标"
          },
          {
            "name": "Iconstore",
            "url": "https://iconstore.co",
            "desc": "免费矢量图和图标"
          },
          {
            "name": "Vectorportal",
            "url": "https://vectorportal.com",
            "desc": "免费矢量图和图标"
          },
          {
            "name": "Toicon",
            "url": "https://www.toicon.com",
            "desc": "免费矢量图和图标"
          },
          {
            "name": "Games",
            "url": "https://game-icons.net",
            "desc": "免费游戏图标"
          },
          {
            "name": "Iconscout",
            "url": "https://iconscout.com",
            "desc": "免费矢量图和图标"
          },
          {
            "name": "NasIcon",
            "url": "https://gitee.com/heizicao/my-icon",
            "desc": "适用于自部署服务图标"
          },
          {
            "name": "VectorWiki",
            "url": "https://vectorwiki.com",
            "desc": "SVG与PNG的LOGO下载"
          },
          {
            "name": "AhaIcon",
            "url": "https://ahaicon.com/zh",
            "desc": "网站logo图标生成器"
          }
        ]
      },
      {
        "term": "符号表情",
        "links": [
          {
            "name": "Copychar",
            "url": "https://copychar.cc",
            "desc": "在线拷贝字体符号"
          },
          {
            "name": "EmojiAll",
            "url": "https://www.emojiall.com/zh-hans",
            "desc": "Emoji表情符号大全"
          },
          {
            "name": "GetEmoji",
            "url": "https://www.getemoji.com",
            "desc": "Emoji表情拷贝粘贴"
          },
          {
            "name": "Emojipedia",
            "url": "https://emojipedia.org/zh",
            "desc": "Emoji表情搜索"
          },
          {
            "name": "Cool Symbol",
            "url": "https://coolsymbol.com",
            "desc": "在线拷贝字体符号"
          },
          {
            "name": "Html Arrows",
            "url": "https://www.toptal.com/designers/htmlarrows",
            "desc": "在线拷贝字体符号"
          },
          {
            "name": "Copy Arrows",
            "url": "https://copyarrow.com",
            "desc": "拷贝方向箭头符号"
          },
          {
            "name": "Qwerty",
            "url": "https://qwerty.dev",
            "desc": "有趣的操作文字如生成日历"
          },
          {
            "name": "Hotsymbol",
            "url": "https://www.hotsymbol.com",
            "desc": "Emoji表情符号大全"
          },
          {
            "name": "Emoji to image",
            "url": "https://emoji.aranja.com",
            "desc": "Emoji 表情转 PNG"
          },
          {
            "name": "Emoji SVG",
            "url": "https://alohe.github.io/emojicloud",
            "desc": "SVG 格式的 Emoji 表情"
          }
        ]
      },
      {
        "term": "头像生成",
        "links": [
          {
            "name": "Avatar Generator",
            "url": "https://getavataaars.com",
            "desc": "头像生成器"
          },
          {
            "name": "Ava Maker",
            "url": "https://avamake.com",
            "desc": "卡通头像生成"
          },
          {
            "name": "Artbreeder",
            "url": "https://artbreeder.com",
            "desc": "换脸特效可与做头像"
          },
          {
            "name": "HashAvatar",
            "url": "https://thehashavatars.com",
            "desc": "头像生成器"
          },
          {
            "name": "PFPMaker",
            "url": "https://pfpmaker.com",
            "desc": "上传头像生成多种带背景的"
          },
          {
            "name": "Toonme",
            "url": "https://toonme.com",
            "desc": "头像生成器"
          },
          {
            "name": "Cvbox",
            "url": "https://cvbox.org",
            "desc": "自己调整 Notion 风格头像"
          },
          {
            "name": "锦鲤头像",
            "url": "http://www.liaotiantu.com/customd/2567",
            "desc": "锦鲤头像生成"
          },
          {
            "name": "团长头像",
            "url": "https://h5.moo-e.com/roomis",
            "desc": "根据楼号户号生成的开团头像"
          },
          {
            "name": "虎年头像",
            "url": "https://hu.lvwzhen.com",
            "desc": "老年过年用的头像装饰"
          },
          {
            "name": "Bingdwun",
            "url": "https://bdd2022.com",
            "desc": "冰墩墩表情生成器"
          },
          {
            "name": "Thus",
            "url": "https://thuscn.com/lab/",
            "desc": "Clubhouse 风格头像和简介生成器"
          },
          {
            "name": "举牌小人生成器",
            "url": "https://small-upup.upuptoyou.com",
            "desc": "举牌小人生成器"
          },
          {
            "name": "举牌小人生成器",
            "url": "https://www.jiuwa.net/jupai",
            "desc": "举牌小人生成器"
          }
        ]
      },
      {
        "term": "字体素材",
        "links": [
          {
            "name": "FontShow",
            "url": "https://www.fontshow.com/zh",
            "desc": "快速预览已安装字体"
          },
          {
            "name": "字客网",
            "url": "https://www.fontke.com",
            "desc": "免费字体下载"
          },
          {
            "name": "100font",
            "url": "https://www.100font.com",
            "desc": "很好的免费商业字体"
          },
          {
            "name": "免费商用字体库",
            "url": "https://github.com/wordshub/free-font",
            "desc": "收集了免费的中文字体仓库"
          },
          {
            "name": "自由字体",
            "url": "https://ziyouziti.com",
            "desc": "收集了免费字体"
          },
          {
            "name": "iFonts",
            "url": "https://51ifonts.com",
            "desc": "字体管理平台"
          },
          {
            "name": "字由",
            "url": "http://www.hellofont.cn",
            "desc": "专业的字体平台"
          },
          {
            "name": "字体天下",
            "url": "https://www.fonts.net.cn",
            "desc": "专业的字体平台"
          },
          {
            "name": "字体传奇网",
            "url": "http://www.ziticq.com",
            "desc": "寻找字体的平台"
          },
          {
            "name": "Wordmark",
            "url": "http://wordmark.it",
            "desc": "显示你电脑的字体"
          },
          {
            "name": "猫啃网",
            "url": "http://www.maoken.com",
            "desc": "免费商业字体平台"
          },
          {
            "name": "识字体",
            "url": "https://www.likefont.com",
            "desc": "在线识别字体"
          },
          {
            "name": "求字体",
            "url": "http://www.qiuziti.com",
            "desc": "字体识别与寻找"
          },
          {
            "name": "艺术字体",
            "url": "https://www.qt86.com",
            "desc": "生成手写或艺术字体"
          },
          {
            "name": "萝卜工坊",
            "url": "http://www.beautifulcarrot.com",
            "desc": "上传文档转成手写样子"
          },
          {
            "name": "FontSpace",
            "url": "https://www.fontspace.com",
            "desc": "很多免费字体可用于设计"
          },
          {
            "name": "Fontshare",
            "url": "https://www.fontshare.com",
            "desc": "高品质免费英文字体"
          },
          {
            "name": "uncut",
            "url": "https://uncut.wtf",
            "desc": "开源现代字体免费个人或商用"
          }
        ]
      },
      {
        "term": "音频素材",
        "links": [
          {
            "name": "爱给音效",
            "url": "http://www.aigei.com/sound",
            "desc": "不只是音效素材资源"
          },
          {
            "name": "淘声网",
            "url": "https://www.tosound.com",
            "desc": "直接搜索你要的音效"
          },
          {
            "name": "FreePD",
            "url": "https://freepd.com",
            "desc": "很不错的按照表情分类的音乐"
          },
          {
            "name": "耳聆网",
            "url": "https://www.ear0.com",
            "desc": "由网友上传得各种音效资源"
          },
          {
            "name": "Audio Trimmer",
            "url": "https://audiotrimmer.com/cn/royalty-free-music/",
            "desc": "免费商用背景音乐"
          },
          {
            "name": "Fesliyan Studios",
            "url": "https://www.fesliyanstudios.com",
            "desc": "免费商用背景音乐"
          },
          {
            "name": "Pixabay-Music",
            "url": "https://pixabay.com/zh/music",
            "desc": "免费授权MP3"
          },
          {
            "name": "Sampld",
            "url": "https://open.sampld.app",
            "desc": "免费商用音乐"
          },
          {
            "name": "Kongano",
            "url": "https://kongano.com",
            "desc": "免费音乐素材，需标注作者"
          },
          {
            "name": "Filmmusic",
            "url": "https://filmmusic.io",
            "desc": "上千配音可商用"
          },
          {
            "name": "Soundcloud",
            "url": "https://soundcloud.com",
            "desc": "很多不错的免费商用音乐"
          },
          {
            "name": "Bensound",
            "url": "https://www.bensound.com",
            "desc": "不错的免版权背景音乐"
          },
          {
            "name": "Tunefind",
            "url": "https://www.tunefind.com",
            "desc": "定位电影或游戏的背景音乐"
          },
          {
            "name": "Audionautix",
            "url": "https://audionautix.com",
            "desc": "分类清楚的背景音乐"
          },
          {
            "name": "Mixkit Sound",
            "url": "https://mixkit.co/free-stock-music/",
            "desc": "背景音乐和音效资源"
          },
          {
            "name": "Audiolib",
            "url": "https://www.youtube.com/audiolibrary",
            "desc": "油管提供的免费背景音乐"
          },
          {
            "name": "Audiohub",
            "url": "https://audiohub.com",
            "desc": "音乐素材免费商用"
          },
          {
            "name": "Videvo-Music",
            "url": "https://www.videvo.net/royalty-free-music",
            "desc": "音乐素材网站"
          },
          {
            "name": "Incompetech",
            "url": "https://musopen.org",
            "desc": "音乐素材网站"
          },
          {
            "name": "Freesfx",
            "url": "https://freesfx.co.uk",
            "desc": "各种音效资源"
          },
          {
            "name": "cchound",
            "url": "https://cchound.com",
            "desc": "各种音效资源"
          },
          {
            "name": "小森平免费音效",
            "url": "https://taira-komori.jpn.org/freesoundcn.html",
            "desc": "免费音效素材下载"
          },
          {
            "name": "dig.ccMixter",
            "url": "http://dig.ccmixter.org",
            "desc": "免费音乐素材可商用"
          },
          {
            "name": "蝉妈妈",
            "url": "https://www.chanmama.com/musicRank",
            "desc": "抖音网红们用的音效"
          },
          {
            "name": "Whyp",
            "url": "https://whyp.it",
            "desc": "音效共享平台"
          }
        ]
      },
      {
        "term": "其它素材",
        "links": [
          {
            "name": "Pngimg",
            "url": "http://pngimg.com",
            "desc": "免费素材透明图像"
          },
          {
            "name": "PNGDirs",
            "url": "https://www.pngdirs.com",
            "desc": "免费素材透明图像"
          },
          {
            "name": "ImgBin",
            "url": "https://imgbin.com",
            "desc": "免费素材透明图像"
          },
          {
            "name": "Kcaps",
            "url": "https://kcaps.app",
            "desc": "生成键盘快捷键图像"
          },
          {
            "name": "Shotki",
            "url": "https://shotki.app",
            "desc": "生成键盘快捷键图像"
          },
          {
            "name": "Cleanpng",
            "url": "https://www.cleanpng.com",
            "desc": "能搜索很多透明PNG素材"
          },
          {
            "name": "国旗图",
            "url": "https://github.com/hampusborgos/country-flags",
            "desc": "各个国家国旗图下载"
          },
          {
            "name": "Line",
            "url": "https://flmg.guychienll.dev",
            "desc": "Line 聊天对话生成器"
          },
          {
            "name": "图鱼纹理",
            "url": "http://www.hituyu.com",
            "desc": "纹理贴图素材"
          },
          {
            "name": "Textures",
            "url": "https://www.textures.com",
            "desc": "材质贴图素材"
          },
          {
            "name": "AmbientCG",
            "url": "https://ambientcg.com",
            "desc": "3D纹理材质 CC0 授权"
          }
        ]
      },
      {
        "term": "寻找文案",
        "links": [
          {
            "name": "梅花网",
            "url": "https://www.meihua.info",
            "desc": "寻找营销作品"
          },
          {
            "name": "TOPYS",
            "url": "https://www.topys.cn",
            "desc": "创意内容平台"
          },
          {
            "name": "译学馆",
            "url": "https://www.yxgapp.com",
            "desc": "译制知识视频的平台"
          },
          {
            "name": "易撰",
            "url": "https://www.yizhuan5.com",
            "desc": "自媒体工具和导航"
          },
          {
            "name": "文案狗",
            "url": "http://www.wenangou.com",
            "desc": "谐音找句和个性网名"
          },
          {
            "name": "热搜榜",
            "url": "https://article.xmt.cn",
            "desc": "新媒体工具"
          }
        ]
      },
      {
        "term": "简历模板",
        "links": [
          {
            "name": "Flowcv",
            "url": "https://flowcv.io",
            "desc": "建立模板和在线制作"
          },
          {
            "name": "五百丁",
            "url": "http://www.500d.me",
            "desc": "建立模板和在线制作"
          },
          {
            "name": "极简简历",
            "url": "https://www.polebrief.com",
            "desc": "可视化在线编辑制作"
          },
          {
            "name": "CakeResume",
            "url": "https://www.cakeresume.com/zh-CN",
            "desc": "建立模板和在线制作"
          },
          {
            "name": "Enhancv",
            "url": "https://enhancv.com",
            "desc": "建立模板和在线制作"
          },
          {
            "name": "Osjobs",
            "url": "https://tool.osjobs.net",
            "desc": "建立模板和在线制作"
          },
          {
            "name": "橙子简历",
            "url": "https://wonderfulcv.com",
            "desc": "建立模板和在线制作"
          },
          {
            "name": "白熊简历",
            "url": "https://cv.ftqq.com",
            "desc": "用 Markdown 写简历"
          },
          {
            "name": "程序员简历",
            "url": "https://www.1024.cool",
            "desc": "程序员简历模板"
          },
          {
            "name": "平社区",
            "url": "https://pingshequ.com/new",
            "desc": "一键生成海报"
          },
          {
            "name": "方格纸",
            "url": "http://www.printfreegraphpaper.com",
            "desc": "易用快速的生成方格纸"
          },
          {
            "name": "纸由我",
            "url": "https://paperme.toolooz.com",
            "desc": "易用快速的生成方格纸"
          },
          {
            "name": "印章生成",
            "url": "https://onepage.czl.net/tools/seal_generation",
            "desc": "印章生成"
          },
          {
            "name": "GraphPaper",
            "url": "https://www.mygraphpaper.com",
            "desc": "易用快速的生成方格纸"
          },
          {
            "name": "Gridzzly",
            "url": "http://gridzzly.com",
            "desc": "易用快速的生成方格纸"
          }
        ]
      }
    ]
  },
  {
    "taxonomy": "快乐生活",
    "icon": "fa-heart",
    "list": [
      {
        "term": "游戏时光",
        "links": [
          {
            "name": "斗鱼直播",
            "url": "https://www.douyu.com",
            "desc": "专业直播网站"
          },
          {
            "name": "虎牙",
            "url": "https://www.huya.com",
            "desc": "专业直播网站"
          },
          {
            "name": "Steam",
            "url": "https://store.steampowered.com",
            "desc": "全球知名的游戏发售平台"
          },
          {
            "name": "Epic",
            "url": "https://www.epicgames.com",
            "desc": "全球知名的游戏发售平台"
          },
          {
            "name": "Uplay",
            "url": "https://ubisoftconnect.com",
            "desc": "全球知名的游戏开发商育碧"
          },
          {
            "name": "Xbox",
            "url": "https://www.xbox.com",
            "desc": "微软游戏平添"
          },
          {
            "name": "GOG",
            "url": "https://www.gog.com",
            "desc": "巫师3官方的数字商店"
          },
          {
            "name": "暴雪网易",
            "url": "http://www.battlenet.com.cn",
            "desc": "暴雪中国官方"
          },
          {
            "name": "暴雪台服",
            "url": "https://www.blizzard.com/zh-tw",
            "desc": "暴雪中国官方"
          },
          {
            "name": "WeGame",
            "url": "http://wegame.com",
            "desc": "腾讯官方游戏平添"
          },
          {
            "name": "Origin",
            "url": "https://www.origin.com",
            "desc": "EA的游戏发售平台"
          },
          {
            "name": "GMG",
            "url": "https://www.greenmangaming.com/zh",
            "desc": "优惠购买游戏"
          },
          {
            "name": "凤凰游戏",
            "url": "https://gamersky3.fhyx.hk",
            "desc": "专注游戏销售"
          },
          {
            "name": "杉果游戏",
            "url": "https://www.sonkwo.com",
            "desc": "专注游戏销售"
          },
          {
            "name": "盒心光环",
            "url": "https://xboxfan.com",
            "desc": "Xbox 比价助手社区"
          },
          {
            "name": "PSN中文站",
            "url": "http://psnine.com",
            "desc": "关注索尼PS游戏"
          },
          {
            "name": "PlayStation",
            "url": "https://store.playstation.com",
            "desc": "索尼主机官方商店"
          },
          {
            "name": "A9VG",
            "url": "https://www.a9vg.com",
            "desc": "专注游戏的综合"
          },
          {
            "name": "游民星空",
            "url": "http://www.gamersky.com",
            "desc": "国内著名的游戏综合"
          },
          {
            "name": "3dmGame",
            "url": "http://www.3dmgame.com",
            "desc": "国内著名的游戏综合"
          },
          {
            "name": "游侠网",
            "url": "https://www.ali213.net",
            "desc": "国内老牌的游戏综合"
          },
          {
            "name": "飞行宝",
            "url": "https://fsx.org.cn",
            "desc": "飞行游戏相关"
          },
          {
            "name": "Fitgirl",
            "url": "https://fitgirl-repacks.site",
            "desc": "游戏重新压制下载"
          },
          {
            "name": "Xatab",
            "url": "https://bl.otxataba.net",
            "desc": "国外知名的游戏下载"
          },
          {
            "name": "XD Game",
            "url": "https://www.xdgame.com",
            "desc": "国内游戏下载站"
          },
          {
            "name": "Discord",
            "url": "https://discordapp.com",
            "desc": "全球游戏语音平台"
          },
          {
            "name": "机核",
            "url": "https://www.gcores.com",
            "desc": "关注游戏内容"
          },
          {
            "name": "游戏时光",
            "url": "http://www.vgtime.com",
            "desc": "专注单机游戏和攻略"
          },
          {
            "name": "17173",
            "url": "https://www.17173.com",
            "desc": "国内老牌的游戏门户"
          },
          {
            "name": "电玩巴士",
            "url": "https://www.tgbus.com",
            "desc": "国内的游戏资讯综合"
          },
          {
            "name": "op.gg",
            "url": "https://www.op.gg/champion",
            "desc": "LOL 专业论坛"
          },
          {
            "name": "灰机wiki",
            "url": "https://www.huijiwiki.com",
            "desc": "动漫影视剧百科"
          },
          {
            "name": "SteamDB",
            "url": "https://steamdb.info",
            "desc": "Steam 第三方资料库"
          },
          {
            "name": "SteamCharts",
            "url": "https://steamcharts.com",
            "desc": "Steam玩家数统计"
          },
          {
            "name": "英雄联盟宇宙",
            "url": "https://yz.lol.qq.com/zh_CN/",
            "desc": "英雄联盟宇宙"
          },
          {
            "name": "UU898",
            "url": "https://www.uu898.com/newTrade.aspx?gm=95&area=2328&srv=25074&c=-3",
            "desc": "游戏币交易"
          }
        ]
      },
      {
        "term": "银行服务",
        "links": [
          {
            "name": "工商银行",
            "url": "https://www.icbc.com.cn",
            "desc": "主要大行"
          },
          {
            "name": "中国银行",
            "url": "https://www.boc.cn",
            "desc": "主要大行"
          },
          {
            "name": "农业银行",
            "url": "https://www.abchina.com/cn/",
            "desc": "主要大行"
          },
          {
            "name": "建设银行",
            "url": "http://www.ccb.com",
            "desc": "主要大行"
          },
          {
            "name": "招商银行",
            "url": "https://www.cmbchina.com",
            "desc": "主要大行"
          },
          {
            "name": "理财计算器",
            "url": "https://fc.frytea.com",
            "desc": "理财计算器"
          }
        ]
      },
      {
        "term": "金融经济",
        "links": [
          {
            "name": "雪球",
            "url": "https://xueqiu.com",
            "desc": "很不错的股票论坛"
          },
          {
            "name": "同花顺",
            "url": "http://www.10jqka.com.cn",
            "desc": "专注股票软件"
          },
          {
            "name": "UpSort",
            "url": "https://upsort.com",
            "desc": "行情查询"
          },
          {
            "name": "Xe-Converter",
            "url": "https://www.xe.com/zh-CN/",
            "desc": "汇率查询转换"
          },
          {
            "name": "和讯",
            "url": "http://www.hexun.com",
            "desc": "金融资讯类平台"
          },
          {
            "name": "东方财富",
            "url": "http://www.eastmoney.com",
            "desc": "财经综合门户"
          },
          {
            "name": "晨星网",
            "url": "http://cn.morningstar.com",
            "desc": "基金投资研究"
          },
          {
            "name": "MACD",
            "url": "http://www.macd.cn",
            "desc": "技术分析论坛"
          },
          {
            "name": "古道观海",
            "url": "http://lib.guhai66.com",
            "desc": "股票分析博客"
          },
          {
            "name": "淘股吧",
            "url": "https://www.taoguba.com.cn",
            "desc": "股票论坛"
          },
          {
            "name": "集思录",
            "url": "https://www.jisilu.cn",
            "desc": "股票相关网站"
          }
        ]
      },
      {
        "term": "加密货币",
        "links": [
          {
            "name": "Bybit",
            "url": "https://www.bybit.com",
            "desc": "加密货币信用卡"
          },
          {
            "name": "火币网",
            "url": "https://www.huobi.com",
            "desc": "加密货币交易所"
          },
          {
            "name": "欧易",
            "url": "https://www.okx.com",
            "desc": "主流加密货币交易所"
          },
          {
            "name": "Coinbase",
            "url": "https://www.coinbase.com",
            "desc": "主流加密货币交易所"
          },
          {
            "name": "Exchange",
            "url": "https://waves.exchange",
            "desc": "主流加密货币交易所"
          },
          {
            "name": "币安",
            "url": "https://www.binance.com",
            "desc": "区块链加密货币交易所"
          },
          {
            "name": "Gate",
            "url": "https://www.gate.io",
            "desc": "加密货币交易所"
          },
          {
            "name": "Bitfly",
            "url": "https://ethermine.org/start",
            "desc": "挖矿矿池平台"
          },
          {
            "name": "OKEx",
            "url": "https://www.okex.com",
            "desc": "加密货币交易所"
          },
          {
            "name": "Gate 芝麻开门",
            "url": "https://www.gatecn.io",
            "desc": "加密货币交易所"
          },
          {
            "name": "Bitget",
            "url": "https://www.bitget.com",
            "desc": "加密货币交易所"
          },
          {
            "name": "AICoin",
            "url": "https://www.aicoin.com",
            "desc": "加密货币行情"
          },
          {
            "name": "非小号",
            "url": "https://www.feixiaohao.com",
            "desc": "加密货币行情"
          },
          {
            "name": "CoinGecko",
            "url": "https://www.coingecko.com",
            "desc": "加密货币行情"
          }
        ]
      },
      {
        "term": "生活相关",
        "links": [
          {
            "name": "计算器",
            "url": "https://www.desmos.com/fourfunction",
            "desc": "在线计算器"
          },
          {
            "name": "度量衡转换器",
            "url": "https://metric-converter.com/zh/",
            "desc": "文件与单位转换器"
          },
          {
            "name": "计时器",
            "url": "https://minutetimers.net",
            "desc": "在线计时器闹钟"
          },
          {
            "name": "Time.is",
            "url": "https://time.is",
            "desc": "精确时钟"
          },
          {
            "name": "Datetime.app",
            "url": "https://datetime.app/zh-hans",
            "desc": "世界时钟全球时间"
          },
          {
            "name": "下厨房",
            "url": "http://www.xiachufang.com",
            "desc": "学习做菜菜谱"
          },
          {
            "name": "美团网",
            "url": "http://www.meituan.com",
            "desc": "点餐送餐服务"
          },
          {
            "name": "丁香医生",
            "url": "https://dxy.com",
            "desc": "医学医疗健康"
          },
          {
            "name": "就诊问问",
            "url": "https://ask.nocode.com",
            "desc": "就诊查询"
          },
          {
            "name": "120ask",
            "url": "https://www.120ask.com",
            "desc": "病情咨询"
          },
          {
            "name": "天眼查",
            "url": "https://www.tianyancha.com",
            "desc": "专业企业信息查询"
          },
          {
            "name": "企查查",
            "url": "https://www.qcc.com",
            "desc": "专业企业信息查询"
          },
          {
            "name": "经济指标",
            "url": "https://zh.tradingeconomics.com/china/indicators",
            "desc": "各国经济指标查询"
          },
          {
            "name": "Semrush",
            "url": "https://zh.semrush.com/trending-websites/global/all",
            "desc": "查询市场最热门的网站"
          },
          {
            "name": "Abbreviation",
            "url": "https://www.abbreviations.com",
            "desc": "英文缩写查询"
          },
          {
            "name": "今日诗词",
            "url": "https://www.jinrishici.com",
            "desc": "随机生成诗词并支持API"
          },
          {
            "name": "反向词典",
            "url": "https://wantwords.net",
            "desc": "随机生成诗词并支持API"
          },
          {
            "name": "Brainyquote",
            "url": "https://www.brainyquote.com",
            "desc": "一段带名人名言的背景图"
          },
          {
            "name": "古诗词网",
            "url": "https://www.gushici.com",
            "desc": "不错的古诗词"
          },
          {
            "name": "提词器",
            "url": "https://www.best-teleprompter.com/zh",
            "desc": "提词器工具"
          },
          {
            "name": "Tree.fm",
            "url": "https://www.tree.fm",
            "desc": "世界各地的森林声音帮你放松"
          },
          {
            "name": "Lofi FM",
            "url": "https://lofifm.vercel.app",
            "desc": "动画场景和声音让你保持专注"
          },
          {
            "name": "咖啡沙龙",
            "url": "http://coffeesalon.com",
            "desc": "咖啡相关网站"
          },
          {
            "name": "windy",
            "url": "https://www.windy.com",
            "desc": "可视化天气地图"
          },
          {
            "name": "Zoom Earth",
            "url": "https://zoom.earth",
            "desc": "可视化天气地图"
          },
          {
            "name": "Ventusky",
            "url": "https://www.ventusky.com",
            "desc": "可视化查看风雨气温图"
          },
          {
            "name": "生命倒计时",
            "url": "http://makelifecount.vicco.wang",
            "desc": "剩余电量各年代人的生命"
          },
          {
            "name": "随机轮盘",
            "url": "https://pickerwheel.com",
            "desc": "很不错的随机抽取轮盘"
          },
          {
            "name": "自由钢琴",
            "url": "https://www.autopiano.cn",
            "desc": "在线键盘钢琴弹奏"
          },
          {
            "name": "键盘测试",
            "url": "https://keyboard.afjs.dev",
            "desc": "键盘测试工具"
          },
          {
            "name": "MouseTester",
            "url": "https://mousetester.io",
            "desc": "鼠标测试工具"
          },
          {
            "name": "打字俱乐部",
            "url": "https://www.edclub.com/zh/",
            "desc": "学习打字练习"
          },
          {
            "name": "Ele types",
            "url": "https://www.eletypes.com",
            "desc": "优雅的打字测试"
          },
          {
            "name": "Qwerty Learner",
            "url": "https://qwerty.kaiyi.cool",
            "desc": "用键盘肌肉记忆背单词"
          },
          {
            "name": "田字格字帖",
            "url": "https://www.an2.net",
            "desc": "除了田字格还有很多生成工具"
          },
          {
            "name": "Keyboard",
            "url": "http://www.keyboard-layout-editor.com",
            "desc": "各种键盘还可以自定义生成图像"
          },
          {
            "name": "酷乐家",
            "url": "http://yun.kujiale.com",
            "desc": "3D装修在线设计"
          },
          {
            "name": "Homestyler",
            "url": "https://www.homestyler.com",
            "desc": "3D装修在线设计"
          },
          {
            "name": "Current Time UTC",
            "url": "https://currenttimeutc.com",
            "desc": "全球时区时间查询转换"
          },
          {
            "name": "仿桌面OS",
            "url": "https://periodic-table-pro.netlify.app",
            "desc": "仿桌面OS"
          },
          {
            "name": "元素周期表",
            "url": "https://github.com/DustinBrett/daedalOS",
            "desc": "元素周期表"
          }
        ]
      },
      {
        "term": "旅行相关",
        "links": [
          {
            "name": "携程旅行",
            "url": "https://www.ctrip.com",
            "desc": "旅游相关网站"
          },
          {
            "name": "马蜂窝",
            "url": "http://www.mafengwo.cn",
            "desc": "旅游相关网站"
          },
          {
            "name": "穷游",
            "url": "https://www.qyer.com",
            "desc": "旅游相关网站"
          },
          {
            "name": "猫途鹰",
            "url": "https://www.tripadvisor.cn",
            "desc": "旅游相关网站"
          },
          {
            "name": "缤客",
            "url": "https://www.booking.com",
            "desc": "旅游相关网站"
          },
          {
            "name": "乐途",
            "url": "http://www.lotour.com",
            "desc": "旅游相关网站"
          },
          {
            "name": "Airbnb",
            "url": "https://zh.airbnb.com",
            "desc": "旅游相关网站"
          },
          {
            "name": "大众点评",
            "url": "http://www.dianping.com",
            "desc": "大众点评评分网站"
          },
          {
            "name": "飞猪",
            "url": "https://www.fliggy.com",
            "desc": "旅行综合网站"
          }
        ]
      },
      {
        "term": "查询服务",
        "links": [
          {
            "name": "社保服务",
            "url": "http://si.12333.gov.cn",
            "desc": "社会保险服务"
          },
          {
            "name": "12315",
            "url": "https://www.12315.cn",
            "desc": "消费者权益保护"
          },
          {
            "name": "工信部",
            "url": "https://www.miit.gov.cn",
            "desc": "工信部门"
          },
          {
            "name": "天眼查",
            "url": "https://www.tianyancha.com",
            "desc": "企业查询"
          },
          {
            "name": "企查查",
            "url": "https://www.qcc.com",
            "desc": "企业查询"
          },
          {
            "name": "全球经济指标",
            "url": "https://zh.tradingeconomics.com/china/indicators",
            "desc": "全球经济指标排名"
          },
          {
            "name": "全球网站排名",
            "url": "https://zh.semrush.com/trending-websites/global/all",
            "desc": "全球热门网站排名"
          }
        ]
      }
    ]
  }
];
