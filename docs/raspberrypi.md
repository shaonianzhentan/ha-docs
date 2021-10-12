# 树莓派智能家居镜像

---

## 镜像功能

- [x] `HomeAssistant`智能家居系统
    - [x] HACS
    - [x] 文件管理器
    - [x] 易微联集成
    - [x] 小米集成
    - [x] 云音乐
    - [x] 系统监控
    - [x] 侧边栏管理
    - [x] 离线下载管理
    - [x] 和风天气
- [x] `NodeRed`可视化编程
- [x] `Samba`局域网共享 - 已赋予最高权限
- [x] `Windows`远程连接
- [x] `Docker`管理器
- [x] `Kodbox`私人云盘
- [x] `Aria2`下载管理
- [x] `ffmpeg`视频处理服务
- [x] `MQTT`服务
- [x] `MPD`音乐服务
- [x] `DLNA`流媒体服务器
- [x] `Frpc`内网穿透服务

## 初始密码

> 树莓派：`pi` `raspberry`

> HomeAssistant：`ha` `ha123456`

> Docker管理器：`admin` `ha123456`

> NodeRed：`admin` `ha123456`

> HomeBridge：`admin` `admin`

> 下载管理：`ha123456`

> WiFi热点：`HomeAssistant` `ha123456`

> V2rayA：`admin` `ha123456`

## 更新日志

> 第五版（计划中）
- [ ] HomeAssistant：增加`回家离家`自动化
- [ ] HomeAssistant：增加`语音唤醒识别`服务
- [ ] HomeAssistant：增加`手势识别`服务
- [ ] 初始化广告过滤服务

> 第四版（测试中）

- 升级HomeBridge
- 升级HomeAssistant
- 升级内置组件
- 修复Airplay在部分网络下无法启动的问题
- 修复HACS无法启动的问题
- 新增pyscript组件
- 新增WiFi AP热点服务
- 新增全网音乐查询服务
- ~~新增网易云音乐服务~~
- 新增v2ray客户端服务
- ~~新增ESPHome服务~~

> 第三版 2021-8-15

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

> 第二版 2021-7-31

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

## 注意事项（使用前必看）不要用8123端口访问、不要用8123端口访问
- 请千万别为了下载此镜像而开通百度网盘会员，可以提供阿里云盘高速下载
- 建议使用Etcher刷写镜像：https://www.balena.io/etcher/
- 如果`没有插网线`的环境，可以使用`WiFi配置连接`，具体方法请点击[这里](/install_image)
- 请勿使用`:8123`端口进入HomeAssistant，可直接使用IP进入
- 如果不知道IP，可使用`http://raspberrypi.local`进入
- 如果想使用`树莓派桌面`操作，可以`Windows`上使用远程桌面方式登录 [操作看视频](https://www.bilibili.com/video/BV1UK4y1j7cE/)
- 如果`开启外网访问`，请务必修改以下初始密码：`HomeAssistant`、`NodeRed`、`Docker管理器`、`下载管理`
- 初次使用，请将`configuration.yaml`文件里的`DLNA设备自动发现`开启（删除前面的#号）

```yaml
# 自动发现
discovery:
  enable:
    - dlna_dmr
```
- 默认定位为上海，可以通过调用服务设置，在百度地图里取的坐标值需要转换为GPS坐标
  [坐标拾取](https://www.toolnb.com/tools/getbaidupoint.html)
  [坐标转换](https://tool.lu/coordinate/) `WGS84坐标系 = GPS坐标`

```yaml
# 设置HomeAssistant位置
service: homeassistant.set_location
data:
  latitude: GPS纬度
  longitude: GPS经度
```
- 启动`内网穿透服务`之前请先在`文件管理器`里修改`frpc.ini`配置，如果没有自己的服务器，可联系我

```bash
sudo docker run -itd --net="host" --restart=always --name="frpc" -v ~/homeassistant/frpc.ini:/etc/frp/frpc.ini snowdreamtech/frpc
```

- 关于`TileBoard磁贴`相关视频：https://www.bilibili.com/video/BV15a4y1a7tF/
- `自动备份、小米电视接入、小米网关收音机接入、小米设备接入、智能音箱接入`或者有`特殊需求`或`其他功能`，都可以联系我

