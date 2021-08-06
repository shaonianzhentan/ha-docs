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

## 更新日志

> 2021-9-1
- Tileboard增加全屏显示操作
- 解决Tileboard浏览器默认翻译中文提示
- 修复Tileboard部分天气图标不显示的问题
- HomeAssistant升级到2021.8.0版本
- 增加浏览器语音唤醒识别功能
- 增加MQTT订阅：执行系统命令
- 增加蓝图：检测激活开关
- 增加自动化：定时备份
- 增加自动化：智能家居系统启动
- 增加自动化：回家离家

> 2021-7-31

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

## 注意事项

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