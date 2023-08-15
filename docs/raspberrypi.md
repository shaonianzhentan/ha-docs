# 树莓派智能家居系统

这是一个`树莓派原生系统`，集成 `HomeAssistant` 的 `Core版本`（不包含`Supervisor`）

预装众多有用的插件和服务，不管是学习还是自定义开发，都能省去大量时间

我的目标是让每一位新手玩家 **零配置开箱即用**，不用考虑那么多，直接就能够玩起来😁

```
因个人时间精力有限，需要先养活自己，才能保证持续提供更多完备的功能
所以本镜像收费200，包含持续更新与本系统相关问题咨询服务
还请理解与支持

```
## 镜像功能

> 预装`php` `nodejs` `python` 等环境，可以直接运行相关程序

### HomeAssistant

  - 卡片
    - [x] [天气卡片](https://github.com/bramkragten/weather-card)
    - [x] [动画背景](https://github.com/Villhellm/lovelace-animated-background)
    - [x] [Mushroom](https://github.com/piitaya/lovelace-mushroom)
    - [x] `kiosk-mode` [全屏显示](https://github.com/NemesisRE/kiosk-mode)
  - 主题
    - [x] [Windows10](https://github.com/mikosoft83/hass-windows10-themes)
    - [x] [waves](https://github.com/tgcowell/waves)
    - [x] [iOS](https://github.com/basnijholt/lovelace-ios-themes)
    - [x] [google](https://github.com/JuanMTech/google-theme)
  - 页面
    - [x] [离线下载管理](https://github.com/mayswind/AriaNg)
    - [x] [Tileboard](https://github.com/resoai/TileBoard)
  - 设备插件
    - [x] `sonoff`  [易微联集成](https://github.com/AlexxIT/SonoffLAN)
    - [x] `localtuya`  [涂鸦](https://github.com/rospogrigio/localtuya)
    - [x] `midea_ac_lan`  [美的M-Smart设备](https://github.com/georgezhao2010/midea_ac_lan)
    - [x] `xiaomi_miot`  [小米全家桶](https://github.com/al-one/hass-xiaomi-miot)
    - [x] `xiaomi_gateway3`  [小米第三代网关](https://github.com/AlexxIT/XiaomiGateway3)
    - [x] `ble_monitor`  [蓝牙设备接入](https://github.com/custom-components/ble_monitor)
    - [x] `xiaomi_tv`  [小米电视](https://github.com/shaonianzhentan/xiaomi_tv)
    - [x] `xiaomi_radio`  [小米空调伴侣电台](https://github.com/shaonianzhentan/xiaomi_radio)
  - 控制插件
    - [x] `bemfa` [巴法云](https://github.com/larry-wong/bemfa) - 小爱同学/天猫精灵/小度音箱
    - [x] `conversation`  [语音小助手](https://github.com/shaonianzhentan/conversation)
    - [x] `ha_app`  [家庭助理Android应用](https://github.com/shaonianzhentan/ha_app)
    - [x] `ha_windows`  [家庭助理Windows应用](https://github.com/shaonianzhentan/ha_windows)
    - [x] `ha_wechat`  [微信控制](https://github.com/shaonianzhentan/ha_wechat)
  - 显示插件
    - [x] 系统监控
    - [x] `google_maps`  [百度地图](https://github.com/shaonianzhentan/google_maps)
    - [x] `ha_file_explorer`  [文件管理器](https://github.com/shaonianzhentan/ha_file_explorer)
    - [x] `workday`  [工作日](https://github.com/shaonianzhentan/workday)
    - [x] `hf_weather`  [和风天气](https://github.com/shaonianzhentan/hf_weather)
  - 音乐插件
    - [x] `ha_cloud_music`  [云音乐](https://github.com/shaonianzhentan/ha_cloud_music)
    - [x] `cloud_music_mpd`  [云音乐MPD播放器](https://github.com/shaonianzhentan/cloud_music_mpd)
    - [x] `edge_tts`  [TTS服务](https://github.com/hasscc/hass-edge-tts)
  - 功能插件
    - [x] `hacs`  [HACS](https://github.com/hacs-china/integration)
    - [x] `bookmark` [书签](https://github.com/shaonianzhentan/bookmark)
    - [x] `panel_iframe`  [侧边栏管理](https://github.com/shaonianzhentan/panel_iframe)
    - [x] `nodered`  [NodeRED](https://github.com/zachowj/hass-node-red)
    - [x] `pyscript`  [Python脚本](https://github.com/custom-components/pyscript)
    - [x] `smtp`  [QQ邮箱通知](https://github.com/shaonianzhentan/smtp)
    - [x] `cloud_backup`  [云备份](https://github.com/shaonianzhentan/cloud_backup)
    <!-- - [ ] `meiju` [美的美居](https://github.com/hasscc/meiju) -->

### [NodeRED](https://github.com/node-red/node-red)

一个可视化编程平台，通过拖拉节点可轻松编程实现简单的功能，已预装`HomeAssistant`相关插件

- [x] `node-red-contrib-home-assistant-websocket` - [homeassistant](https://github.com/zachowj/node-red-contrib-home-assistant-websocket)
- [x] `node-red-contrib-ha-mqtt` - [创建MQTT实体](https://github.com/shaonianzhentan/node-red-contrib-ha-mqtt)
- [x] `node-red-dashboard` - [仪表盘](https://github.com/node-red/node-red-dashboard)
- [x] `node-red-node-pi-gpio` - [GPIO](https://flows.nodered.org/node/node-red-node-pi-gpio)

### 服务

- [x] `Aria2`下载管理
- [x] `WebSSH2`在线终端服务
- [x] `ffmpeg`视频处理服务
- [x] `MQTT`服务
- [x] `MPD`音乐服务
- [x] `DLNA`流媒体服务器
- [x] `Airplay`投屏服务
- [x] `Samba`局域网共享 - 已赋予最高权限
- [x] `Windows`远程连接
- [x] `Docker`管理器
- [x] [`Kodbox`私人云盘](http://kodcloud.com/download/)
- [x] `Frpc` 内网穿透服务 - `需要则单独收费`

## 更新日志

#### 第13版 开发中
- [ ] 更新树莓派系统、Kodbox
- [ ] 更新HomeAssistant、HACS及相关插件
- [ ] 更新NodeRED及相关插件
- [ ] 使用Docker管理器汉化版
- [ ] 调整Nginx配置支持大文件上传和预览
- [ ] 树莓派3B/4B禁止屏幕休眠

#### 第12版 2023-6-18
- [x] 更新树莓派系统、HomeAssistant、NodeRED、Docker管理器、HACS及相关插件
- [x] 新增涂鸦插件
- [x] 增加GPIO控制相关库
- [x] 安装v2rayA
- [x] 修复WebSSH长时间会自动断线的问题

#### 第11版 2023-4-16
- [x] 更新树莓派系统、HomeAssistant、NodeRED、Docker管理器、HACS及相关插件
- [x] `HomeAssistant`、`Portainer`、`WebSSH`安装到root目录中
- [x] `pip`换源
- [x] Samba只共享`homeassistant`文件夹
- [x] 支持命令修改`NodeRED`登录密码
- [x] 新增简略移动端界面
- [x] 新增`kiosk-mode`插件（隐藏Home Assistant标题或侧边栏）
- [x] 修复自动化`日历提醒`
- [x] 新增自动化`每日备份`
- [x] 新增意图脚本`我想听xxx的歌`
- [x] 删除`hf_weather`插件（京东万象服务停止，此插件不可用）

#### 第十版 2023-2-6
- [x] 更新树莓派系统、HomeAssistant、NodeRED、Docker管理器、HACS
- [x] 新增`云备份`插件
- [x] 新增`家庭助理Windows应用`插件
- [x] 新增`家庭助理Android应用`插件
- [x] 更新`微信控制`插件
- [x] 更新`语音小助手`插件
- [x] 使用新版`云音乐`插件
- [x] 使用新版`云音乐MPD播放器`插件
- [x] 新增`本地日历`集成，配置自动化提醒
- [x] 新增`微信消息`自动化
- [x] 新增`树莓派关机`脚本
- [x] 新增`树莓派开机`脚本
- [x] 新增`Web ESPHome`侧边栏链接

#### 第九版 2022-12-12
- [x] 更新树莓派系统
- [x] 更新HomeAssistant版本
- [x] 更新NodeRED版本
- [x] 更新Docker管理器版本
- [x] 更新HACS极速版到最新版本
- [x] 解决MQTT只有当前设备可以连接的问题
- [x] Docker换源
- [x] 增加`Kodbox`私人云盘

#### 第八版 2022-9-19

- [x] 更新树莓派系统及HomeAssistant
- [x] 新增HomeAssistant蓝牙支持
- [x] 安装php环境

#### 第七版 2022-7-30

- [x] 使用树莓派64位系统
- [x] 升级`HomeAssistant` 版本
- [x] 升级NodeRED 版本
- [x] 删除`Kodbox`、`HomeBridge`、`ESPHome`（树莓派3b+内存只有1G，需要安装请联系我）
- [x] 支持https局域网无限制访问

#### 第六版 2022-4-23
- [x] 更新树莓派系统及相关软件
- [x] 升级nodejs
- [x] 升级HomeBridge
- [x] 升级ESPHome
- [x] 升级NodeRED
- [x] 升级Kodbox
- [x] 升级SSL证书
- [x] 移除全网音乐搜索服务
- [x] 升级HomeAssistant以及相关组件
- [x] HomeAssistant：增加`屏幕保护`卡片
- [x] HomeAssistant：增加`鼠标控制面板`卡片
- [x] HomeAssistant：增加`待办事项`集成
- [x] HomeAssistant：增加`蓝牙监视器`集成
- [x] HomeAssistant：增加`浏览器主页`集成
- [x] HomeAssistant：安装`HACS`极速版
- [x] NodeRED：增加`node-red-contrib-ha-mqtt`节点
- [x] NodeRED：增加`node-red-contrib-ha-wechat`节点
- [x] NodeRED：增加`node-red-contrib-home-assistant-websocket`节点
- [x] NodeRED：增加`一键更新GitHub Host`
- [x] NodeRED：增加`一键重启Nginx命令`
- [x] NodeRED：增加`智能家居面板`
- [x] TileBoard：修复语音唤醒识别引入
- [x] [home-assistant/android](https://github.com/home-assistant/android/releases/tag/2022.3.0)

#### 第五版 2022-2-12
https://www.bilibili.com/video/BV1d5411o7qm

- 升级系统、HomeBridge、HomeAssistant以及相关组件
- HomeAssistant：使用新版`侧边栏面板`自定义组件
- HomeAssistant：使用新版`百度地图`自定义组件
- HomeAssistant：使用新版`QQ邮箱通知`自定义组件
- HomeAssistant：使用新版`小米电视`自定义组件
- HomeAssistant：使用新版`空调伴侣收音机`自定义组件
- HomeAssistant：新增`工作日`自定义组件
- HomeAssistant：新增日期时间组件
- TileBoard：新增手机显示配置
- TileBoard：新增文本转语音服务
- TileBoard：新增语音唤醒识别
- TileBoard：新增音乐播放服务
- 新增讯飞语音识别服务

#### 第四版 2021-11-15
https://www.bilibili.com/video/BV1t341187kr

- 升级HomeBridge
- 升级HomeAssistant
- HomeAssistant：升级内置组件
- HomeAssistant：新增pyscript组件
- HomeAssistant：修复HACS无法启动的问题
- NodeRED：新增重启DLNA服务（解决Airplay找不到RaspberryPi+的问题）
- 修复Airplay在部分网络下无法启动的问题
- 新增WiFi AP热点服务
- 新增全网音乐查询服务
- 新增v2客户端服务
- 新增ESPHome服务

#### 第三版 2021-8-15
https://www.bilibili.com/video/BV1Sq4y1Q7SV

- Tileboard：增加`全屏显示`操作
- Tileboard：修复浏览器默认翻译中文提示
- Tileboard：修复部分`天气图标不显示`的问题
- Tileboard：新增事件 `页面刷新`、`声音播放`、`屏幕保护`
- HomeAssistant：升级到`2021.8.6`版本
- HomeAssistant：增加`检测激活开关`蓝图
- HomeAssistant：增加`定时备份`自动化
- HomeAssistant：增加`智能家居系统启动`自动化
- HomeAssistant：增加`购物清单`集成
- NodeRED：新增`MQTT订阅`的`最高权限命令`
- NodeRED：新增`一键备份、还原`
- HomeBridge: 安装`BroadLink RM`博联红外依赖库
- 支持Nginx大文件上传，最高支持100MB
- 增加Airplay服务
- 增加MPD-DLNA播放器服务

#### 第二版 2021-7-31
https://www.bilibili.com/video/BV1HL411n7qo

- 增加Tileboard面板
- Tileboard进行基本汉化
- Tileboard增加基本配置
- 增加背景图片配置
- 增加应用下载链接导航
- 新增重启命令
- NodeRed新增关机命令
- 修复下载服务无法运行的问题
- 测试下载音乐，使用DLNA测试播放
- 测试下载视频，使用DLNA测试播放
- 增加自签名HTTPS证书，支持https访问
- 增加整点报时蓝图
- 增加整点报时自动化
- 增加周一至周五早上8点10分早安闹钟自动化
- 过滤了云音乐和部分实体重复的记录，减少数据库大小

#### 第一版
https://www.bilibili.com/video/BV1TP4y1t7w5

## 界面预览

待补充

## 使用说明

> 整体流程如下，全程只有我一个人，
- 加我微信`shaonianzhentan`或QQ`635147515`
- 咨询一下 `最好先了解一下自己的需求，看看是否能满足`
- 开始付款 `不能还价是因为时间和知识就是金钱，还得吃饭`
- 发你下载链接 `阿里云盘&百度云盘，默认发百度云盘`
- 拉你进群 `下次有更新，新的版本直接发群里`

![wx](./img/wx.jpg ':size=150px')

### 下载镜像压缩包

- 提供`百度云盘`和`阿里云盘`两种下载途径

### 下载树莓派系统刷写工具

- 树莓派官方刷写软件：https://github.com/raspberrypi/rpi-imager/releases/latest

### 刷写镜像到SD卡

- 设置WiFi等相关信息，开始刷写

### 进入HomeAssistant页面

!> 注意：不要用8123端口访问、请直接使用ip访问

- 请勿使用`:8123`端口进入HomeAssistant，可直接使用IP进入
- 如果不知道IP，可使用`http://raspberrypi.local`进入

### 设置家的位置

!> 第一次使用，请将家的默认位置改成你的

- 在百度地图中右键点击可以`设置家的位置`