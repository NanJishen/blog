---
title: MPV 播放器使用方法教程指南
date: 2026-04-03T19:59:00
draft: false
categories:
  - 软件
tags:
  - mpy
  - 播放器
---

## 开始

[MPV](https://mpv.io) 开源多媒体播放器，现代简洁高效，且可以便携化，目录结构：
```bash
path/to/MPV
 ├─updater.bat # 升级版本
 ├─installer
 │   └─mpv-install.bat # 设为默认播放器
 └─portable_config # 便携版的路径
    ├─mpv.conf # 主配置文件
    ├─input.conf # 自定义快捷键
    ├─scripts # 脚本目录 .lua
    ├─script-opts # 脚本配置目录 .conf
    ├─fonts # 字体目录
    └─shaders # 着色器目录
    
# 安装版配置目录路径
C:/Users/用户名/AppData/Roaming/mpv/ # Windows
~/.config/mpv/ # Linux
```

播放视频只需将文件拖动到窗口中添加到播放列表，也可以命令行跳转到目录后执行 `mpv .` 也支持多个图片拖入后以1秒显示一张的方式进行幻灯片播放

## 配置

**mpv.conf** 主配置文件，[官方手册](https://mpv.io/manual/master/#configuration-files)
```bash
## 说明：注释中，<默认值|可选项>，默认值无需配置只是为说明其作用，大部分的默认是 auto 自动判断

## 视频输出
# vo=gpu-next # 视频输出驱动，<gpu-next|gpu>
gpu-context=winvk # GPU渲染方案 <d3d11|winvk>，Linux <auto|wayland|waylandvk>
# gpu-api=auto # GPUT渲染API <d3d11|vulkan>，只设置 gpu-context，该设置会自动判断
hwdec=auto # 解码方式，<auto|no（软解）|yes（硬解）>，播放时可用 Ctrl+H 切换
profile=high-quality # 启用内置的高质量预设 <默认平衡|high-quality>

# 渲染算法
cale=ewa_lanczossharp # 高质量亮度
cscale=ewa_lanczossharp # 高质量色度
deband=yes # 减少可能的色带（可选）
# dither-depth=auto # 显示器颜色深度，<10|12> bit

# 开启插帧（适合低帧率视频，如 24fps 平滑播放）
interpolation
video-sync=display-resample # 确保视频与显示器刷新率同步，必须，不然会有音画不同步

# 高质量反光晕/抗锯齿
# sigmoid-upscaling=yes # 启用 Sigmoid 曲线，减少高对比度边缘的光晕
# linear-upscaling=yes # 启用线性光照，改善缩放画质
 
## HDR
target-colorspace-hint=auto # 自动 HDR（向显示器发送 HDR 元数据）
# target-trc=pq # 指定色彩空间（PQ 为 HDR10 标准，HLG 为广播）
# target-peak=auto # 显示器峰值亮度
# target-prim=bt.2020 # 色域，通常为 HDR
# target-colorspace=hdr # 强制 HDR（需先开启系统 HDR 开关)

# sub-hdr-peak=100 # HDR 下的字幕亮度
# image-subs-hdr-peak=10000 # HDR 下的图像字幕亮度
# blend-subtitles=no # 字幕以其原始颜色和亮度独立渲染

## HDR 映射 SDR
# tone-mapping=auto # 默认值
# hdr-compute-lut=yes # 启用 HDR 查表（LUT）计算，这是高质量色调映射的基础
# hdr-compute-peak=yes # 启用计算机而不是视频文件自带 HDR 元数据
# vf=format=colorlevels=full # 输出色彩范围设为全范围，保留更多色彩信息，减少色阶损失

# target-contrast=1000
# target-prim=dci-p3
# allow-delayed-peak-detect=no # 默认 yes ，禁止延迟检测峰值亮度（高质量渲染）
# tone-mapping=reinhard # 色调映射算法，reinhard 算法为 HDR 转换 SDR

## 音频输出
volume-max=200 # 最大音量
ao=wasapi # Windows 音频API
audio-device=auto # 指定音频输出色别
audio-channels=stereo,7.1,5.1 # 需要与实际设备相符

## 播放
title=${?pause==yes:⏸ }${?mute==yes:🔇}${?ontop==yes:📌 }${?demuxer-via-network==yes:${media-title}}${?demuxer-via-network==no:${filename}} # 自定义窗口标题
geometry=60% # 启动时窗口大小（原视频的百分比）
snap-window=yes # 屏幕边缘吸附
keep-open=yes # 播放结束后不退出
volume=0 # 启动后的默认音量
# ontop=yes # 始终置顶
# border=no # 无边框
save-position-on-quit=yes # 记忆上次播放位置
autocreate-playlist=same # 自动加载同目录中的视频到播放列表
directory-mode=ignore # 忽略子目录被加载到播放列表
directory-filter-types=video # 指定仅播放的文件类型
# priority=high # 如果需要高优先级

## 屏显
osc=no # 是否使用原生屏控，使用第三方需设为 no
osd-bar=no # 是否禁用原生播放进度条，使用第三方需设为 no
no-osd-bar # 去掉快进时的进度栏
osd-playing-msg="${filename}" # 开始播放时短暂显示文件名
# osd-font-size=25 # 文本大小
# osd-color="#FFF500" # 文本颜色

## 字幕
sub-auto=fuzzy # 自动加载同名外置字幕
slang=chs,cht,zh,eng,en,english,jp,ja # 字幕语言优先级
alang=eng,en,ja,jp # 音频语言载入优先级
# sub-margin-y=20 # 距离底部的像素数

## 字幕样式
sub-font=阿里巴巴普惠体 3.0 75 SemiBold # 字体，默认 sans-serif
sub-font-size=65 # 尺寸 40，默认 55
# sub-bold=yes # 粗体
sub-color="#FFE5A0" # 颜色，ass 为 &H00A0E5FF
sub-border-size=3 # 边框，默认 3
# sub-ass-override=force # 强制 ass 字幕为自定义样式
# sub-shadow-offset=5 # 阴影距离
# sub-shadow-color="#000000" # 阴影颜色

## 截图
screenshot-dir=T:/Downloads # 截图保存路径
screenshot-format=jpg # 截屏图片格式

## 缓存与日志
cache=yes # 开启缓存
cache-on-disk=no # 用内存缓存而不用硬盘
## cache-secs=20 # 缓存时间
demuxer-cache-dir="T:/cache/mpv" # 指定缓存路径，需先创建好目录
gpu-shader-cache-dir="T:/cache/mpv" # 已编译的GLSL着色器缓存
icc-cache-dir="T:/cache/mpv" # 保存缓存加速启动
watch-later-dir="T:/cache/mpv/watch_later" # 保存稍后观看的记录
log-file="T:/cache/mpv/mpv.log" # 日志记录
```

## 快捷键

| 快捷键              | 功能                                |
| ---------------- | --------------------------------- |
| F8               | 显示播放列表，或鼠标右击播放控制栏左右三角箭头           |
| F9               | 显示视频/音频/字幕轨道信息（按住持久显示）            |
| q                | 退出，按 Shfit + q 保存进度并退出            |
| i                | 显示视频信息（按住或加 Shift 保持显示，1 和 2 键翻页） |
| o                | 显示播放进度                            |
| 播放控制             |                                   |
| Space 或 鼠标右击     | 播放/暂停                             |
| ← →              | 倒退/快进                             |
| ,（逗号）.（句号）       | 逐帧倒退/快进                           |
| [   ]            | 减速/加速播放（Backspace 还原）             |
| Shift+,（逗号）.（句号） | 上一集/下一集跳转（可指定 PgUp PgDn ）         |
| 9 0              | 增减音量（可指定 ↑ ↓ ）                    |
| m                | 静音                                |
| # （Shift + 3）    | 切换音轨                              |
|                  |                                   |
| 窗口控制             |                                   |
| f 或 鼠左双击         | 切换全屏                              |
| t                | 置顶窗口                              |
| Alt+0 1 2        | 窗口缩放，缩小一半 / 原尺寸 / 两倍              |
| w e              | 画面平铺范围                            |
| Ctrl+鼠标滚轮        | 缩放窗口                              |
| s                | 截图（Shift + S 无字幕）                 |
|                  |                                   |
| 字幕控制             |                                   |
| j                | 切换字幕                              |
| v                | 显隐字幕                              |
| x z              | 增减字幕延迟 0.1 秒                      |
| r R              | 上下移动字幕位置                          |
| Ctrl + ↑ ↓       | 字幕大小（需自定义）                        |

**input.conf**  自定义快捷键，可以[参考](https://github.com/mpv-player/mpv/blob/master/etc/input.conf)

```bash
## 键盘
Ctrl+Shift+c script_binding commands/open
ENTER cycle fullscreen # 全屏切换
n set window-minimized yes # 最小化
UP add volume 5 # 键盘上键增加音量
DOWN add volume -5 # 键盘下键减少音量
HOME seek -2000 # 向开始跳转 2000 用来从头播放
RIGHT seek 3 exact # 快进3秒，精确的
LEFT seek -3 exact # 后退3秒，精确的
Ctrl+RIGHT seek 30 # 快进30秒
Ctrl+LEFT seek -30 # 后退30秒
PGUP playlist-prev # 播放列表上一个
PGDWN playlist-next # 播放列表下一个
Ctrl+ALT+= add video-zoom 0.1 # 放大视频
Ctrl+ALT+- add video-zoom -0.1 # 放大视频
Ctrl+ALT+0 set video-zoom 0 ; set panscan 0 # 重设视频缩放与裁剪
Ctrl+UP add sub-scale +0.05 # 字幕放大5%
Ctrl+DOWN add sub-scale -0.05 # 字幕缩小5%
Ctrl+z set sub-delay 0 # 字幕延时复位
Ctrl+F11 cycle-values gpu-api d3d11 vulkan # 快捷键切换渲染器 API

# 快捷键开关解决多声道音频声音太小的问题
F1 af toggle "lavfi=[loudnorm=I=-16]"
F2 af toggle 'pan="stereo|FL=0.707*FC+0.3*FL+0.1*BL+0.1*LFE|FR=0.707*FC+0.3*FR+0.1*BR+0.1*LFE"'
F3 cycle-values sub-ass-override force no

## 鼠标
MBTN_RIGHT cycle pause; show-text "${?pause==yes:暂停}${!pause==yes:播放}"
MBTN_MID cycle mute # 鼠标点击滚轮静音
WHEEL_UP add volume 5 # 滚轮向上增加音量5
WHEEL_DOWN add volume -5 # 滚轮向下减少音量5
MBTN_FORWARD seek 2 # 侧键前进2秒
MBTN_BACK seek -2 # 侧键后退2秒
```

## 脚本

[用户脚本库](https://github.com/mpv-player/mpv/wiki/User-Scripts)，脚本 `.lua` 文件 放在 `/scripts` 目录中，脚本配置 `.conf` 配置文件放在 `/script-opts` 目录中

**常用脚本**

[recent](https://github.com/hacel/recent)：最近播放列表
```bash
display_bind= # 设定调出快捷键，例如数字1键左面的反点
log_path=T:/cache/history.log # 自定义历史文件记录位置
```

[thumbfast](https://github.com/po5/thumbfast)：播放进度显示缩略图

最小化并自动暂停播放
```lua
-- 编写 auto-pause.lua 脚本
mp.observe_property("window-minimized", "bool", function(name, value)
    if value then
        mp.set_property("pause", "yes")
    else
        mp.set_property("pause", "no")
    end
end)
```

清除播放历史记录
```lua
-- 编写 clear-history.lua 脚本
local u = require 'mp.utils'
mp.add_key_binding("Ctrl+Shift+H", "clear-history", function()
    local p = "T:/cache/mpv/watch_later"
    for _, f in ipairs(u.readdir(p) or {}) do os.remove(u.join_path(p, f)) end
    mp.osd_message("播放历史已清除")
end)
```

[Navigator](https://github.com/jonniek/mpv-filenavigator)：文件浏览器，f 在收藏目录间切换，↑↓ 上下选择，←→ 进入返回目录  
```bash
# 修改 navigator.lua 文件，搜索字段： 
defaultpath = 默认路径 "T:/Videos"  
navigator_mainkey = 快捷键 Ctrl+o
favorites = 想收藏的目录
ignorePaths = 忽略路径
ignorePatterns = 忽略文件名
visible_item_count = 显示条目数
style_ass_tags = "{\\fs12}" 字体大小
name_prefix = "{\\c&FFFFFF&}□ " 条目颜色
selection_prefix = "{\\c&00BFFF&}■ " 选择条目颜色
```

[Playlistmanager](https://github.com/jonniek/mpv-playlistmanager)：操作播放列表

[autosubsync-mpv](https://github.com/joaquintorres/autosubsync-mpv)：自动同步字幕，解决音频字幕不同步

[mpv-copyTime](https://github.com/Arieleg/mpv-copyTime)：复制当前播放位置时间

## OSC

OSC（On-Screen Controller），图形化界面控制器，目前最受欢迎的是 [uosc](https://github.com/tomasklaen/uosc) 让屏控支持鼠标，菜单支持 Ctrl + F 搜索

在 GitHub 分别下载并放到配置目录中对应目录
- uosc.zip 将其 `fonts` 和 `scripts` 目录放到 `portable_config` 目录中
- uosc.conf 放入 `/script-opts/` 目录
- 编辑 `mpv.conf`
```bash
## 添加如下避免冲突
osc=no # 不使用原生屏控
osd-bar=no # 不使用原生播放进度条
```
- 编辑 `script-opts/uosc.conf`
```bash
languages=zh-hans # 设置语言
font_scale=1.3 # 字体大小
controls_size=45 # 进度条大小
destination_time=total # 进度条右侧显示总时间
menu_item_height=36 # 所有菜单条目高度
menu_min_width=300 # 所有菜单最小宽度
top_bar=always # 是否使用顶部控制栏，如果没有使用默认标题栏可打开
thumbnail=yes # 支持时间线缩略图，需要安装 thumbnail 脚本
```
- 编辑 `input.conf` 配置快捷键
```bash
MBTN_RIGHT_DBL  script-binding uosc/menu # 右键双击显示主菜单
F8 script-binding uosc/playlist # 打开播放列表

# 滚轮时调节音量时显示右侧音量条
wheel_up    no-osd add volume  5; script-binding uosc/flash-volume
wheel_down  no-osd add volume -5; script-binding uosc/flash-volume
m           no-osd cycle mute; script-binding uosc/flash-volume
```

## i 键信息说明

```css
File: 文件名
  Size: 文件大小与格式
  Total Cache: 总缓存

Display: 播放器渲染方式，而非原文件质量 Context：GPU-API
  Refresh Rate: 刷新率（显示器自身）
  Dropped Frames: 是否丢帧
  Frame Timings: 帧时序
  Resolution: 分辨率和比例
  Format: 格式 rgb10a2（RGB10）Levels: full（全色彩）
  Colormatrix: rgb（色彩方式），bt.709（Primaries 初选），bt.1886（Transfer 转移）（能看出是否HDR）

Video: 视频自身编码（视频文件自身质量）HW：如有这个表示硬解
  Frame Rate：帧率
  Resolution: 分辨率和比例
  Format: 编码格式，级别与色度（翻译可能有误）
  Colormatrix: rgb（色彩方式），bt.709（Primaries），bt.1886（Transfer）（能看出是否HDR）
  Bitrate：码率

Audio: 播放器音频呈现方式
  Device: 设备选择和音量
  Channels：声道 Format: 格式
  Sample Rate: 采样率（质量）
  Bitrate: 码率
```

## 现成项目

如果觉得配置麻烦可以用基于 MPV 的现成项目
- [mpv.net](https://github.com/mpvnet-player/mpv.net)：适合 Windows 带现代图形界面 
- [ImPlay](https://github.com/tsl0922/ImPlay)：跨平台配合 ImGui 构建
- [Celluloid](https://github.com/celluloid-player/celluloid)：适合 Linux，通过 libmpv API 访问 MPV 强大的播放功能

## 参考资料

[mpv_PlayKit](https://github.com/hooke007/mpv_PlayKit)、[mpv_fruit](https://github.com/redomCL/mpv_fruit/tree/main)、[mpv_config](https://github.com/dyphire/mpv-config)、[HDR 配置](https://www.reddit.com/r/mpv/comments/snlazo/mpv_and_hdr)

[中文指南](https://hooke007.github.io/unofficial/mpv_start.html)、[FinnR的教程](https://www.bilibili.com/read/readlist/rl502769)