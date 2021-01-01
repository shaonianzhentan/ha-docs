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

## 查看外网IP
```bash
curl ifconfig.me
```

## 设置系统音量
```bash
# 查看声卡
amixer scontrols
# 可能显示如下
# Simple mixer control 'Master',0
# Simple mixer control 'Capture',0

# 调整音量到80%
amixer set Master 80%
```

## 自动挂载USB存储设备
```bash
# 添加USB存储规则
sudo nano /etc/udev/rules.d/10-usbstorage.rules
```
将以下内容写入后，重新插入USB存储设备即可
```txt
KERNEL!="sd*", GOTO="media_by_label_auto_mount_end"
SUBSYSTEM!="block",GOTO="media_by_label_auto_mount_end"
IMPORT{program}="/sbin/blkid -o udev -p %N"
ENV{ID_FS_TYPE}=="", GOTO="media_by_label_auto_mount_end"
ENV{ID_FS_LABEL}!="", ENV{dir_name}="%E{ID_FS_LABEL}"
ENV{ID_FS_LABEL}=="", ENV{dir_name}="Untitled-%k"
ACTION=="add", ENV{mount_options}="relatime,sync"
ACTION=="add", ENV{ID_FS_TYPE}=="vfat", ENV{mount_options}="iocharset=utf8,umask=000"
ACTION=="add", ENV{ID_FS_TYPE}=="ntfs", ENV{mount_options}="iocharset=utf8,umask=000"
ACTION=="add", RUN+="/bin/mkdir -p /media/%E{dir_name}", RUN+="/bin/mount -o $env{mount_options} /dev/%k /media/%E{dir_name}"
ACTION=="remove", ENV{dir_name}!="", RUN+="/bin/umount -l /media/%E{dir_name}", RUN+="/bin/rmdir /media/%E{dir_name}" 
LABEL="media_by_label_auto_mount_end"
```
原文链接：https://blog.csdn.net/u012589578/article/details/77703794

## 相关操作记录

> 挂载分区
```bash
# 挂载到/root目录
mount /dev/mmcblk0p2 /root/
# 查看当前运行的进程
fuser -m -v /dev/mmcblk0p2
``` 

> 备份系统到U盘
```bash
# 挂载目录
mount /dev/sda1 /mnt/
# 备份压缩系统到U盘（即使错误也不停止：conv=noerror）
sudo dd conv=noerror if=/dev/mmcblk0 bs=4M |gzip > /mnt/backup.img

# 查看进度（另开一个终端）
watch -n 5 pkill -USR1 ^dd$

# 还原系统到sd卡，请先仔细仔细仔细的看文档，很重要很重要很重要

```
- https://yanke.info/?id=124

> tar备份系统
```bash
# 详细操作，请看原文链接
sudo su
cd /
# 压缩备份到存储卡里
tar -cvpzf /mnt/backup.tgz --exclude=/proc --exclude=/lost+found --exclude=/mnt --exclude=/sys /

# 还原文件到系统，请先仔细仔细仔细的看文档，很重要很重要很重要
tar -xvpzf /mnt/backup.tgz -C /
```

- https://www.cnblogs.com/lvdongjie/p/3835525.html