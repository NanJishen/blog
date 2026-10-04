---
title: "Windows 调优指南"
date: 2026-08-01T13:56:03+08:00
draft: false
categories: ["系统"]
tags: ["Windows"]
---
以下调优内容根据最新版 Windows 11 撰写，运行指的是`Win+R`或在开始菜单输入；右键开始也可以按`Win+X`

##  新装系统

- 先检查 BitLocker 是否默认被开启：开始 - BitLocker，不用加密应该立刻关闭，避免解密太长
	- 关闭指定盘符：`manage-bde -off C`
	- 查看状态进度：`manage-bde -status C:`
- 硬盘分区规划：右键开始 - 磁盘管理（按你需求分区或改盘符）
- 关闭系统还原：右键开始 - 系统 - 系统保护 - 配置 - 删除并禁用
- 更新系统：右键开始 - 设置 - Windows 更新 - 检查更新
- 激活系统：下载并以管理员运行[极限激活](https://nanji.lanzouu.com/i48Cw2zvwych)
- 关闭 UAC：开始 - 输入“更改用户账户控制设置” - 拉到“从不通知”
- 安装驱动：访问[软件导航](https://ttti.cc/app) - 点“驱动环境” - 点选对应驱动到官网
- 关闭服务：运行 `services.msc`，找到如下服务停止并禁用
	- 搜索索引：Windows Search
	- 软件预载：SysMain
	- 兼容助手：Program Compatibility Assistant Service
- 设置免密登陆：运行 `netplwiz` - 去勾“要使用本机，必须输入密码”
	- 无勾选框？运行 `regedit` - 定位到`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\PasswordLess\Device`
	  将右侧 `DevicePasswordLessBuildVersion` 值改为 `0`
- 关闭网卡和蓝牙节约电源：右键开始 - 设备管理器 - 右键网络适配器中的网卡和蓝牙属性 - 电源管理 - 去掉节约电源
- 设置睡眠：右键开始 - 电源选项 -屏幕和睡眠 - 都改成从不
- 取消快速启动：开始 - 控制面板 - 系统和安全 - 电源选项 - 选择电源按钮功能 - 更改不可用设置
- 关闭通信时降低音量：右键托盘声音 - 声音设置 - 更多声音设置 - 通信 - 不执行任何操作
- 麦克风增强：右键托盘声音 - 声音设置 - 麦克风 - 增强音频“高级” - 级别
- 关闭休眠与快速启动：`powercfg -h off`
- 关闭无操作时行为：系统 - 电源 - 屏墓睡眠和休眠超时都改为“从不”
- 登录 OneDrive ；更改文档、图片、视频、下载的默认目录路径
- 设置Pin密码登录：账户 - 登录选项 - PIN
- 隐私和安全性 - 不用的都关闭
- 个性化
	- 主题 - 选深色；桌面图标设置 - 去勾“回收站”
	- 开始 - 关闭“最近使用、全部”
	- 锁屏桌面 - 去勾“在锁屏界面上获取花絮”；锁屏界面状态“无”
- 系统 - 多任务处理 - 贴靠窗口 - 将窗口拖动到屏幕顶部时显示贴靠布局去勾
- 关闭传递优化：Windows 更新 - 高级选项 - 允许从其他设备下载
- 系统 - 高级 - 终端分类 - Powershell 开启允许本地脚本，启用sudo

## 个性化

- 先安装 [Powershell](https://github.com/PowerShell/PowerShell/releases)，与[应用商店](ms-windows-store://pdp/?ProductId=9MZ1SNWT0N5D)同版本
- 执行个人批处理脚本：**Apps PM** 和 **mklink**
- 链接NAS：文件管理器左侧右键此电脑 - 映射网络驱动器 -输入`\\NAS-ip` - 指定盘符（后可以重命名）
- 启动器谁知开机启动：运行 `shell:startup`，将 Claunch（启动器）快捷方式放入
- 避免系统更新厂商驱动：systempropertiesadvanced.exe（系统属性-高级）- 硬件 - 设备安装设置 - 选否
- 添加 ICC 色彩配置文件：右键桌面 - 显示设置 - 高级显示器设置 - 颜色管理 - 添加并浏览文件
- 开始 - 更改屏幕保护程序“空白，3分钟”（OLED显示器）
- 设置共享目录（SMB）
	- 右键开始 - 计算机管理 - 本地用户和组 - 用户 - 右键“新账户”：用户名自定义，密码易记，勾选“用户不能更改密码与永不过期”
	- 右键要共享的目录或磁盘 - 属性 - 共享 - 高级共享 - 勾选“共享此文件夹” - 权限 - 移除Everyone，点击添加，输入上面创建的用户名，勾选该用户的“完全控制”或“读取”权限
	- 访问共享目录：文件管理器 - 右键此电脑 - 添加一个网络位置或映射网络驱动器，输入 `\\192.168.1.1`或`\\设备名称`
- 运行 gpedit.msc - 计算机配置 - 管理模板 - 开始菜单和任务栏 - 从开始菜单中删除“所有程序"列表 - 勾选已启用，下方选“折叠并金庸设置”

## 显卡驱动

N卡日后补充，因为我现在在用A卡

A卡设置
- 系统 -> 禁用问题检测
- 显示器 -> 颜色深度 12bpc
- 首选项 -> 全禁用
- 热键 -> 全禁用
- 去桌面右键菜单驱动项：运行 regedit `计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Classes\PackagedCom\Package\` 其下 `AdvancedMicroDevicesInc` 开头的目录树，server/0或1，在右侧 `ApplicationId` 改名为 `ApplicationId_bak`

## 备用

- 启用不安全SMB访问：运行 `gpedit.msc` - 计算机配置 - 管理模板 - 网络 - Lanman 工作站 - 右侧“启用不安全的来宾登录”改为“已启用”
- 滑动关机快捷方式：`%windir%\System32\SlideToShutDown.exe`
- 重建图标缓存
	- 运行 `%localappdata%` - 删除隐藏文件 `Iconcache.db` - 重启文件管理器，再运行`ie4uinit -show`
- 右键添加移动到文件夹：`HKEY_CLASSES_ROOT\AllFilesystemObjects\shellex\ContextMenuHandlers`，新建“项”，命名为“MoveTo”，双击其“默认值”，写入：`{C2FBB631-2971-11d1-A18C-00C04FD75D13}`
- 右键添加移动到指定文件夹： `HKEY_LOCAL_MACHINE/SOFTWARE/Classes/*/shell` 下新建`项` move to foldername，在其上新建`项` command，修改其默认值 `powershell.exe" "mi %1 C:\foldername"`
- 清除任务栏图标记录：`HKEY_CLASSES_ROOT\Local Settings\Software\Microsoft\Windows\CurrentVersion\TrayNotify 删除 PastIconsStream 和 IconStreams`
- 重命名网络连接名：`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Profiles` 找到你的连接（长字符串名称文件夹），双击要修改的里的 `ProfileName` 值，输入你要的名字
- 无线网卡和有线网卡叠加：cmd 执行 `route print`，查看跃点数（Metric），默认有线网卡 25，无线网卡 45，会优先使用数字小的，因此将其都改成一样的数值即可，右键网卡 - 属性 - `TCP/IPv4` 属性 - 高级 - 去掉自动跃点勾选，输入 `25`

## 浏览器相关

- 解决 http 跳转 https：浏览器访问 `chrome://net-internals/#hsts`，在 Delete domain 项中输入要删除记录的域名，然后可以在 Query domain 项中测试是否删除成功
- 清除 DNS 缓存：浏览器访问 `chrome://net-internals/#dns`，点 Clear host cache

## 游戏相关

应用商店搜索，按需安装
- Xbox（用于游戏）
- Xbox Accessories（用于手柄）
- Xbox 控制台小帮手（用于社交）
- Xbox Games Bar（用于游戏截图录制）

| Games Bar 快捷键   | 功能      |
| --------------- | ------- |
| Win+G           | 启动工具    |
| Win+Alt+B       | 开关 HDR  |
| Win+Alt+PrtScrn | 截图      |
| Win+Alt+G       | 录制最后30秒 |
| Win+Alt+R       | 启停录制视频  |
| Win+Alt+M       | 开关麦克风   |

**提高游戏性能**，先禁用 VBS 虚拟化安全，管理员运行 Powershell

```bash
bcdedit # hypervisorlaunchtype 项 auto 表示开启 off 表示关闭
bcdedit /set hypervisorlaunchtype off # 将其关闭
# 方法2
msinfo32 # 查看下方“基于虚拟化的安全性”
```

关闭内存完整性：开始 - 输入 Core Isolation（内核隔离）- 关闭“内存完整性”后重启

## HDR 设置

**显示器校准**：先按 Win+Alt+B 开启 HDR ，在设置 - 系统 - 屏幕 - HDR - HDR显示器校准，会跳转到商店下载 Windows HDR Calibration，并用其校准，校准后保存配置文件便会添加到色彩管理

**游戏/电影**：先按 Win+Alt+B 开启 HDR，再启动游戏或视频播放器看电影，看完后再次按快捷键关闭 

**可选**
- 如果需要托盘控制可以使用 [HDRTray](https://github.com/res2k/HDRTray)
- 使用 [AutoActions](https://github.com/Codectory/AutoActions) 将需要 HDR 的游戏加入，实现自动开关，它还支持同时开关 HDR + Dolby Atmos for Home Theater + RTSS 监控
- Potplayer 能自动根据视频类型开关 HDR，选项 - 视频 - 右侧“视频渲染器” 选 D3D11，下面勾选 H/W 处理 HDR 输出，勾上（勾成横线，而不是 ✓ 才是自动切换，效果碾压 MadVR

## 外设设置

《极限竞速：地平线5》设置 - 高级控制 - 勾选反转力反馈；抬头显示器与游戏 - 数据输出 `127.0.0.1:20779` 为方向盘输出油表