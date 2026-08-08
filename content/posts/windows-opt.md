---
title: "Windows 调优指南"
date: 2026-08-01T13:56:03+08:00
draft: false
categories: ["系统"]
tags: ["Windows"]
---

以下调优内容根据最新版的 Windows11 撰写

##  新装系统

- 关闭系统还原：右键开始 - 系统 - 系统保护 - 配置 - 删除并禁用
- 更新系统：右键开始 - 设置 - Windows 更新 - 检查更新
- 关闭 UAC：开始 - UAC - 更改用户账户控制设置 - 拉到最底“从不通知”
- 关闭索引和软件预加载服务：运行 `services.msc` - 找到 Windows Search 和 SysMain - 停止并禁用
- 设置免密登陆：运行 `netplwiz` - 去勾“要使用本计算机，用户必须输入密码”
	- 无勾选框？修改 `regedit - HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\PasswordLess\Device` ，右侧的 `DevicePasswordLessBuildVersion` 值为 `0`
- 关闭网卡和蓝牙节约电源：右键开始 - 设备管理器 - 右键网络适配器中的网卡和蓝牙属性 - 电源管理 - 去掉节约电源
- 设置睡眠：右键开始 - 电源选项 -屏幕和睡眠 - 都改成从不
- 取消快速启动：开始 - 控制面板 - 系统和安全 - 电源选项 - 选择电源按钮功能 - 更改不可用设置
- 关闭通信时降低音量：右键托盘声音 - 声音设置 - 更多声音设置 - 通信 - 不执行任何操作
- 麦克风增强：右键托盘声音 - 声音设置 - 麦克风 - 增强音频“高级” - 级别
- 关闭休眠与快速启动：powercfg -h off
- 登录 OneDrive ；更改下载/文档/图片/视频的默认位置
- 避免系统更新厂商驱动：systempropertiesadvanced.exe（系统属性-高级）- 硬件 - 设备安装设置 - 选否
- 添加 ICC 配置文件：右键桌面 - 显示设置 - 高级显示器设置 - 颜色管理 - 添加并浏览文件
- 隐私和安全性 - 不用的都关闭
- 个性化 - 锁屏桌面 - 在锁屏上获取花絮去勾
- 系统 - 多任务处理 - 贴靠窗口 - 将窗口拖动到屏幕顶部时显示贴靠布局去勾
- 关闭传递优化：Windows 更新 - 高级选项 - 允许从其他设备下载

## 可选优化

**Win11 启用不安全 SMB 访问**：运行 `gpedit.msc` - 计算机配置 - 管理模板 - 网络 - Lanman 工作站 - 右侧“启用不安全的来宾登录” 改为“已启用”

**访问另一台电脑共享目录的方法**：文件管理器 - 右键此电脑 - 添加一个网络位置，输入地址：`\\192.168.1.1\downloads`（IP地址为另一台机器的IP，downloads 为另一台机器共享的目录名）

**自动关机计划**：创建计划任务→启动程序：`"C:\Windows\System32\shutdown.exe"`并在下面的参数中输入`"-s -t 60"`

**UWP 文件管理快捷方式**：`explorer shell:AppsFolder\c5e2524a-ea46-4f67-841f-6a9465d9d515_cw5n1h2txyewy!App`

**滑动关机快捷方式**：`%windir%\System32\SlideToShutDown.exe`

**重建图标缓存**：运行 ie4uinit -show

**清除开始菜单图标缓存**：Win+R - 输入 `%localappdata%` - 删除隐藏文件 `Iconcache.db` - 注销

**右键添加记事本打开**：`HKEY_LOCAL_MACHINE\SOFTWARE\Classes\*\shell`（没有就建立），新建 项，名为 NotePad，在右侧把默认项的值改成：用记事本打开，再在右侧建立 字符串值]命名为 Icon，值 `C:\windows\system32\notepad.exe`，再在 notepad 主键下新建 [项] 命名为 command，把默认项的值改成：`notepad %1`

**导入注册表快速添加**：以 Notepad++ 为例，将以下的内容保存为 .reg 文件后双击后导入

```bash
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\Notepad++]
"Icon"="D:\\Qsync\\Apps\\Npp\\notepad++.exe"
@="Notepad++"

[HKEY_CLASSES_ROOT\*\shell\Notepad++\command]
@="D:\\Qsync\\Apps\\Npp\\notepad++.exe %1"
```

**右键添加移动到文件夹**：`HKEY_CLASSES_ROOT\AllFilesystemObjects\shellex\ContextMenuHandlers`，新建“项”，命名为“MoveTo”，双击其“默认值”，写入：`{C2FBB631-2971-11d1-A18C-00C04FD75D13}`

**右键添加移动到指定文件夹**：HKEY_LOCAL_MACHINE/SOFTWARE/Classes/*/shell 下 新建 [项] 为：move to foldername，在其上新建 [项] 为：command，修改其默认值为："powershell.exe" "mi %1 C:\foldername"

**清除任务栏图标记录**：`HEEY_CLASSES_ROOT\Local Settings\Software\Microsoft\Windows\CurrentVersion\TrayNotify 删除 PastIconsStream 和 IconStreams`

**重命名网络连接名**：`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Profiles` Profiles 里会发现你的连接都在这里显示（长字符串名称文件夹），双击你要修改的里的 ProfileName 值，输入你要的名字

**无线网卡和有线网卡叠加**：cmd 执行 `route print`，查看跃点数（Metric），默认有线网卡 25，无线网卡 45，会优先使用数字小的，因此将其都改成一样的数值即可，右键网卡 - 属性 - TCP/IPv4 属性 - 高级 - 去掉自动跃点勾选，输入 25

## 浏览器相关

**解决浏览器 http 跳转至 https 问题**：浏览器打开 `chrome://net-internals/#hsts`，在 Delete domain 项中输入要删除记录的域名，然后可以在 Query domain 项中测试是否删除成功

**清除 DNS 缓存**：浏览器打开 `chrome://net-internals/#dns`，点击 Clear host cache

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

## Windows HDR

SDR 使用 sRGB 模式：设置 - 系统 - 屏幕 - 高级显示器设置 - 显示器 1 的显示适配器属性 - 颜色管理 - 设备下拉选择显示器 - 设为 sRGB 2.1 配置文件

显示器的玩家1，不需要任何设置，只需在商店下载 Windows HDR Calibration 工具对显示器进行校准，使其能正确识别亮度并添加到色彩管理，然后在启用 HDR 后将“高级”列表下的配置文件设置为默认，之后可用 Win+Alt+B 开关 HDR ，如果需要托盘控制可以安装 [HDRTray](https://github.com/res2k/HDRTray)

游戏 HDR ，可以下载 [AutoActions](https://github.com/Codectory/AutoActions)，将需要 HDR 的游戏加入，实现自动开关，不仅如此，还可以做到同时开关 HDR + Dolby Atmos for Home Theater + RTSS 监控

Potplayer 播放视频能自动根据视频类型开关 HDR，选项 - 视频 - 右侧“视频渲染器” 选 D3D11，下面勾选 H/W 处理 HDR 输出 勾上（勾成横线，而不是 ✓ 才是自动切换，效果碾压 MadVR

## 外设设置

《极限竞速：地平线5》设置 - 高级控制 - 勾选反转力反馈；抬头显示器与游戏 - 数据输出：127.0.0.1:20779 为方向盘输出油表