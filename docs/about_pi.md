# 树莓派

---

## 配置Windows远程访问服务

```bash
# 安装xrdp相关服务 
sudo apt-get install tightvncserver xrdp -y
```

> 在windows上按下`WIN键+R`输入`mstsc`，打开远程连接输入树莓派IP用户密码即可

## 创建AP热点

- 视频教程：https://www.bilibili.com/video/BV1it4y1S7Ab/

```bash
# 安装依赖
sudo apt install dnsmasq hostapd -y

# 编译代码
git clone https://github.com/oblique/create_ap
cd create_ap
make install

# 会自动开机启动AP热点
# 查看启动状态
sudo systemctl status create_ap

# 编辑配置
sudo nano /etc/create_ap.conf
```

源码：https://github.com/oblique/create_ap

## 挂载分区
```bash
# 挂载到/root目录
mount /dev/mmcblk0p2 /root/
# 查看当前运行的进程
fuser -m -v /dev/mmcblk0p2

``` 