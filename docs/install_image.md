# 镜像安装

*视频介绍：*

---
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

> 在`boot`目录下新建`ssh`文件开启ssh服务