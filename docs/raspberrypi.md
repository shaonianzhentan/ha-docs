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

> 2021-7-27

- 增加Tileboard面板，修改了配置，进行了汉化处理
- 新增关机重启命令
- 修复下载服务无法运行的问题
- 增加自签名HTTPS证书，支持https访问
- 增加整点报时蓝图
- 增加整点报时自动化
- 过滤了云音乐和部分实体重复的记录，减少数据库大小