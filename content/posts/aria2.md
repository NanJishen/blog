---
title: "Aria2 软件教程使用指南"
date: 2026-01-13T10:36:03+08:00
draft: false
categories: ["软件"]
tags: ["aria2"]
---
## 安装

[Aria2](https://github.com/aria2/aria2) 是开源轻量的命令行下载工具，目前已经进入缓慢维护期，社区有开发者维护了新的[Aria2-next](https://github.com/AnInsomniacy/aria2-next)，尽管如此老牌的仍然值得使用

安装只需将 `aria2c.exe` 解压缩到你指定的路径中，例如 `D:\aria2`，并将其加入到环境变量中以快速调用

## 配置


配置文件为 `aria2.conf`
```bash
## RPC 相关设置 ##
enable-rpc=true
rpc-allow-origin-all=true
rpc-listen-all=true
rpc-max-request-size=10M
# RPC端口号
rpc-listen-port=6800

# 设置的 RPC 授权令牌, 取代 --rpc-user 和 --rpc-passwd 
#rpc-secret=P3TERX

## 文件保存相关 ##
dir=T:/Downloads
disk-cache=64M
daemon=true
remote-time=true
# 文件预分配方式，none 兼容性好，Windows+NTFS用falloc更快且减少碎片
file-allocation=none
no-file-allocation-limit=64M

# 断点续传
continue=true
always-resume=false
max-resume-failure-tries=0

## 下载连接相关 ##
max-file-not-found=10
retry-wait=10
connect-timeout=10
timeout=10
max-concurrent-downloads=5
max-connection-per-server=16
min-split-size=5M
split=16y
max-overall-upload-limit=1M
disable-ipv6=true
# 禁用 netrc 支持，默认:false
no-netrc=true
# GZip 支持，默认:false
http-accept-gzip=true
reuse-uri=false
allow-piece-length-change=true

## 进度保存相关 ##
input-file=D:/aria2/aria2.session
save-session=D:/aria2/aria2.session
save-session-interval=60

# 使用 UTF-8 处理 Content-Disposition ，默认:false
content-disposition-default-utf8=true

## BT/PT下载相关 ##

# BT 监听端口, 当端口被屏蔽时使用，默认:6881-6999
listen-port=51411
# DHT 网络监听端口(UDP), 默认:6881-6999
dht-listen-port=51411
# 打开DHT功能, PT需要禁用, 默认:true
enable-dht=true
dht-file-path=dht.dat
enable-dht6=false
dht-file-path6=dht6.dat
# IPv4 DHT 网络引导节点
dht-entry-point=dht.transmissionbt.com:6881
# IPv6 DHT 网络引导节点
dht-entry-point6=dht.transmissionbt.com:6881
# 本地节点查找, PT需要禁用, 默认:false
bt-enable-lpd=true
# 种子交换, PT需要禁用, 默认:true
enable-peer-exchange=true
# 期望下载速度，Aria2会临时提高连接数以提高下载速度，单位K或M，默认:50K
bt-request-peer-speed-limit=10M
bt-max-peers=128
seed-time=0
seed-ratio=1.0
# 保存磁力链接元数据为种子文件(.torrent文件), 默认:false
bt-save-metadata=true
# 加载已保存的元数据文件，默认:false
bt-load-saved-metadata=true
bt-force-encryption=true
# BT tracker 服务器连接超时时间（秒）。默认：60
# 建立连接后，此选项无效，将使用 bt-tracker-timeout 选项的值
bt-tracker-connect-timeout=10
# BT tracker 服务器超时时间（秒）。默认：60
bt-tracker-timeout=10
# BT 下载优先下载文件开头或结尾
bt-prioritize-piece=head=32M,tail=32M
# 保存通过 WebUI(RPC) 上传的种子文件(.torrent)，默认:true
# 所有涉及种子文件保存的选项都建议开启，不保存种子文件有任务丢失的风险。
# 通过 RPC 自定义临时下载目录可能不会保存种子文件。
rpc-save-upload-metadata=true
# 下载种子文件(.torrent)自动开始下载, 默认:true，可选：false|mem
# true：保存种子文件
# false：仅下载种子文件
# mem：将种子保存在内存中
follow-torrent=true
# 分离仅做种任务，默认：false
# 从正在下载的任务中排除已经下载完成且正在做种的任务，并开始等待列表中的下一个任务。
bt-detach-seed-only=true

# BT 客户端伪装
# PT 下载需要保持 user-agent 和 peer-agent 两个参数一致
# 自定义 User Agent
user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36
peer-agent=Transmission 2.94
peer-id-prefix=-TR2940-
show-console-readout=false
summary-interval=0
# 部分国内站点证书有问题可临时关闭
#check-certificate=false

# 日志相关，记得定期清理控制文件和过大的日志 #
log=D:/aria2/aria2.log
# 避免日志爆炸，或 error
log-level=warn

# 添加 tracker 服务器
bt-tracker=
```

## 启动

```bash
aria2c --conf-path=aria2.conf
```

如果想在后台运行，建立 `Start.vbs` 并放到 `shell:startup` 目录中
```bash
CreateObject("WScript.Shell").Run "D:\aria2\aria2c.exe --conf-path=D:\aria2\aria2.conf", 0
```

## 使用

在命令行中直接执行命令，也可以使用 [AriaNg](https://github.com/mayswind/AriaNg) WEB 图形前端
```bash
aria2c -x 8 -s 8 -d T:/ "T:\Downloads" "https://xx.zip"或"magnet:"
aria2c -i urls.txt -x 8 -s 8 # 以列表文件批量下载
aria2c "T:/Downloads/x.torrent" # 引用bt文件下载

aria2c "http://用户名:密码@ip或url" # 如果需要密码
aria2c -S x.torrent # 显示种子文件信息

# 控制
aria2c --pause # 暂停所有下载
aria2c --resume # 恢复暂停的下载
aria2c --stop # 停止所有下载

# 参数
-d "T:/Downloads" # 指定下载路径，建议加上引号
-s n # 以几个链接下载
-x n # 对同一服务器最多开几个链接
-c # 断点续传
--all-proxy=socks5://127.0.0.1:1070 # 指定代理
--max-download-limit=1024K # 限速
```

## 参考资料

[P3TERX 提供的完美配置](https://github.com/P3TERX/aria2.conf)