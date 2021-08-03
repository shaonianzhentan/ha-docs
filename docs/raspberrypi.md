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

## 设置坐标

## NodeRed密码修改

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