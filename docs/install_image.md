# 镜像安装

*视频介绍：*

---

## 树莓派RaspberryPi

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

> 树莓派原生系统：默认账号`pi`和密码`raspberry`

树莓派系统换源：https://mirror.tuna.tsinghua.edu.cn/help/raspbian/

> 更换时区
```bash
# 查看系统时间
date

# 设置时区为上海
sudo timedatectl set-timezone 'Asia/Shanghai'
```

## 香橙派OrangePi

> 连接WiFi


- 方式一：配置中选择WiFi

```bash
armbian-config
```
- 方式二：命令行连接

```bash
# 查看设备状态
nmcli device status

# 检查 radio
nmcli radio

# 查看附近无线网络信号
nmcli dev wifi list

# 连上 AP 热点
nmcli device wifi connect WiFi名称 password WiFi密码
```