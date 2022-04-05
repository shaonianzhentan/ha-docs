# 树莓派智能家居系统

这是一个`树莓派原生系统`，集成 `HomeAssistant` 的 `Core版本`（不包含`Supervisor`）

并且已经安装了和 `HomeAssistant` 相关的所有功能，**零配置开箱即用**

```
因个人时间精力有限，需要先养活自己，才能保证持续提供更多完备的功能
所以本镜像收费200，包含持续更新与咨询的服务
还请理解与支持
```
## 镜像功能

- [x] `HomeAssistant`智能家居系统
    - [x] 系统监控
    - [x] 离线下载管理
    - [x] `hacs` - HACS
    - [x] `ha_file_explorer` - 文件管理器
    - [x] `sonoff` - 易微联集成
    - [x] `xiaomi_miot` - 小米全家桶
    - [x] `xiaomi_radio` - 小米空调伴侣电台
    - [x] `xiaomi_tv` - 小米电视
    - [x] `xiaomi_gateway3` - 小米第三代网关
    - [x] `workday` - 工作日
    - [x] `ha_cloud_music` - 云音乐
    - [x] `panel_iframe` - 侧边栏管理
    - [x] `hf_weather` - 和风天气
    - [ ] `baidu` - 小度音箱
    - [ ] `todoist` - 待办事项
    - [ ] `blue_tacker` - 蓝牙检测
    - [ ] `conversation` - 语音小助手
    - [ ] `edge_tts` - TTS服务
    - [ ] `google_maps` - 百度地图
    - [ ] `nodered` - NodeRED
    - [ ] `pyscript`
    - [ ] `smtp` - QQ邮箱通知
- [x] `NodeRed`可视化编程
- [x] `Samba`局域网共享 - 已赋予最高权限
- [x] `Windows`远程连接
- [x] `Docker`管理器
- [x] `Kodbox`私人云盘
- [x] `Aria2`下载管理
- [x] `WebSSH2`在线终端服务
- [x] `ffmpeg`视频处理服务
- [x] `MQTT`服务
- [x] `MPD`音乐服务
- [x] `DLNA`流媒体服务器
- [x] `Airplay`投屏服务
- [x] `Frpc`内网穿透服务
- _
- **更多功能，持续开发中...**

## 更新日志

#### 第六版（开发中）
- 升级系统、HomeBridge、HomeAssistant以及相关组件
- [ ] HomeAssistant：增加`屏幕保护`卡片
- [ ] HomeAssistant：增加`鼠标控制面板`卡片
- [ ] HomeAssistant：增加`待办事项`集成
- [ ] HomeAssistant：安装`HACS`极速版
- [ ] NodeRED：增加`node-red-contrib-ha-mqtt`节点
- [ ] NodeRED：增加`node-red-contrib-ha-wechat`节点
- [ ] NodeRED：增加`node-red-contrib-home-assistant-websocket`节点
- [ ] TileBoard：修复语音唤醒识别引入
- 赠送家庭助理Windows应用使用权限

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
- 新增v2ray客户端服务
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

## 注意事项（必看）

注意：不要用8123端口访问、请直接使用ip访问
- 请勿使用`:8123`端口进入HomeAssistant，可直接使用IP进入
- 如果不知道IP，可使用`http://raspberrypi.local`进入
- 在百度地图中右键点击可以`设置家的位置`
- 关于`TileBoard磁贴`相关视频：https://www.bilibili.com/video/BV15a4y1a7tF/

### 镜像烧录
- 请千万别为了下载此镜像而开通百度网盘会员，可以提供阿里云盘高速下载
- 建议使用Etcher刷写镜像：https://www.balena.io/etcher/

### 无网线，配置WiFi
如果使用WiFi连接，则镜像烧录后，打开内存卡在`boot`目录下新建`wpa_supplicant.conf`文件，写入以下内容
```conf
country=CN 
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev 
update_config=1 
network={
    ssid="wifi名称"
    psk="wifi密码"
    key_mgmt=WPA-PSK
    priority=1
}
```

### 安全问题
- 如果`开启外网访问`，请务必修改以下初始密码：`HomeAssistant`、`NodeRed`、`Docker管理器`、`下载管理`

### 内网穿透
- 启动`内网穿透服务`之前请先在`文件管理器`里修改`frpc.ini`配置，如果没有自己的服务器，可联系我
```bash
sudo docker run -itd --net="host" --restart=always --name="frpc" -v ~/homeassistant/frpc.ini:/etc/frp/frpc.ini snowdreamtech/frpc
```

### 远程桌面
- 如果想使用`树莓派桌面`操作，可以`Windows`上使用远程桌面方式登录 [操作看视频](https://www.bilibili.com/video/BV1UK4y1j7cE/)
