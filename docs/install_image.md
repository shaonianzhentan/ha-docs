# 镜像安装

*视频介绍：*

---

!> 在`boot`目录下新建`ssh`文件开启ssh服务

> 如果使用Wifi连接，则镜像烧录后，打开内存卡在`boot`目录下新建`wpa_supplicant.conf`文件，写入以下内容
```nginx
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

> 树莓派原生系统：默认账号`pi`和密码`raspberry`

树莓派系统换源：https://mirror.tuna.tsinghua.edu.cn/help/raspbian/

> 更换时区
```bash
# 查看系统时间
date

# 设置时区为上海
sudo timedatectl set-timezone 'Asia/Shanghai'
```

## 镜像功能

- [x] `HomeAssistant`智能家居系统
    - [x] HACS
    - [x] 文件管理器
    - [x] 易微联集成
    - [x] 小米集成
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