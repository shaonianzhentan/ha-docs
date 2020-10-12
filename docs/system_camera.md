# 摄像监控

*视频介绍：[移动控制](https://www.bilibili.com/video/BV1bZ4y1N74q/)、[录制存储](https://www.bilibili.com/video/BV1kK4y1872d/)*

---

## 官方配置

```yaml
# 从提供的流进行录制
stream:

camera:
  # 通用摄像机
  - platform: generic
    still_image_url: http://192.168.1.111:554/snapshot
    stream_source: rtsp://admin:123456@192.168.1.111:554/
  # FFmpeg摄像机
  - platform: ffmpeg
    input: rtsp://admin:123456@192.168.1.111:554/

binary_sensor:
  # 运动检测
  - platform: ffmpeg_motion
    input: rtsp://admin:123456@192.168.1.111:554/
  # 声音检测
  - platform: ffmpeg_noise
    input: rtsp://admin:123456@192.168.1.111:554/
```

- https://www.home-assistant.io/integrations/generic_ip_camera/
- https://www.home-assistant.io/integrations/stream/
- https://www.home-assistant.io/integrations/camera.ffmpeg/
- https://www.home-assistant.io/integrations/ffmpeg_noise/
- https://www.home-assistant.io/integrations/ffmpeg_motion/

## 使用命令录像存储

```bash
# 安装FFmpeg
sudo apt install ffmpeg -y

# 保存录像到本地（没声音）
ffmpeg -i RTSP地址 -c copy -map 0 -f segment -segment_list 存放路径/playlist.m3u8 -segment_time 5 存放路径/output%09d.ts

# 录制音视频到MP4文件（有声音）
ffmpeg -y -i 带音频的RTSP地址 -c:v copy -c:a aac -strict experimental -f mp4 文件绝对路径

ffmpeg -y -i rtsp://admin:123456@192.168.1.111:554/0/av0 -c:v copy -c:a aac -strict experimental -f mp4 /home/pi/homeassistant/media/test.mp4

# 录制视频到MP4文件（没声音）
ffmpeg -y -i RTSP地址 -vcodec copy -acodec copy -f mp4 文件绝对路径

ffmpeg -y -i rtsp://admin:123456@192.168.1.111:554/ -vcodec copy -acodec copy -f mp4 /home/pi/homeassistant/media/test.mp4

```

## 新建网络隔离AP

```bash
# 安装依赖
sudo apt install dnsmasq hostapd -y

# 复制文件到指定目录
git clone https://github.com.cnpmjs.org/oblique/create_ap
cd create_ap
sudo cp -r create_ap /usr/bin/
sudo cp -r create_ap.service /etc/systemd/system/

# 编辑启动服务
## 执行换成以下内容（不带互联网共享的AP）
## ExecStart=/usr/bin/create_ap -n wlan0 HomeAssistant ha123456 --no-virt
sudo nano /etc/systemd/system/create_ap.service

# 启动服务
sudo systemctl start create_ap

# 开机启动
sudo systemctl enable create_ap

# 查看服务状态
sudo systemctl status create_ap
 
```

```bash
# 查看连接的网络
arp -a
```

## 摄像机控制

!> 注意：在不能使用[官方插件ONVIF](https://www.home-assistant.io/integrations/onvif/)的情况下使用

```bash
# 在Node-Red中安装以下依赖
npm install node-red-contrib-onvif-nodes@0.0.1-beta.7
```
- 源码地址：https://github.com/bartbutenaers/node-red-contrib-onvif-nodes

## 摄像头RTSP地址

> 品牌型号：CloudCamera，Android应用 【[YCC365 plus](https://www.closeli.cn/app/1536546203748)】
```bash
# 没有声音
rtsp://admin:123456@192.168.1.111:554/
# 有声音
rtsp://admin:123456@192.168.1.111:554/0/av0
# 快照
http://192.168.1.111:554/snapshot
# 查看ONVIF设备
http://192.168.1.111/onvif/device_service 

# SSH服务： root/cxlinux
# Telnet服务：root/cxlinux
```

---

> 品牌型号：辣鸡摄像头，应用客户端【[有看头 yousee](http://yoosee.co/index.html)】

```bash
# Onvif端口：5000

# CMSClient客户端 - 用户名：admin 密码：00000000

# 设备ID：摄像头底部的二维上有写
# 设备密码：123
# 设备RTSP密码：需要自己在APP里初始设置

# 注意：如果不在APP里开启声音，这里是没有声音的
# 主码流：onvif1  次码流：onvif2
rtsp://admin:yoosee123456@192.168.12.161:554/onvif1
```
!> 注意：默认随机生成RTSP密码，需要在APP里添加摄像头后，进入操作`连接硬盘录像机`-`开启连接` - 然后修改RTSP密码

---

> 博云刷机固件20200914
```bash
# 有声音
rtsp://admin:boyun@192.168.12.88:554/live
# RTSP密码修改： /etc/ipc.ini
# WEB密码修改： /etc/httpd.conf

# SSH服务：端口22，用户名root，密码boyun
# Telnet服务：端口23，用户名root，密码boyun
# Ftp服务：端口21，用户名root，密码boyun
```
---
> 测试支持协议
```bash
# 辣鸡yoosee摄像头不支持TCP
ffmpeg -f rtsp -rtsp_transport tcp -i rtsp://admin:yoosee123456@192.168.1.114:554/onvif1 -an -f null -

ffmpeg -f rtsp -rtsp_transport udp -i rtsp://admin:yoosee123456@192.168.1.114:554/onvif1 -an -f null -
```

## 自动化服务

> 守护服务
```yaml
- id: '1602472118675'
  alias: 摄像机画面监控停止时，重新启动
  description: '保证画面监控一直启动'
  trigger:
  - platform: state
    entity_id: binary_sensor.ffmpeg_motion
    to: unavailable
  condition: []
  action:
  - service: ffmpeg.start
    data: {}
    entity_id: binary_sensor.ffmpeg_motion
  mode: single
```

> 监控录像
```yaml
- id: '1602481256778'
  alias: 摄像机画面监控变动时，录像
  description: '录像视频默认30秒，可以自定义'
  trigger:
  - platform: state
    entity_id: binary_sensor.ffmpeg_motion
    from: 'off'
    to: 'on'
  condition: []
  action:
  - service: camera.record
    data_template:
      filename: '/home/pi/homeassistant/www/record_{{now().strftime("%Y-%m-%d %H:%M:%S")}}.mp4'
    entity_id: camera.wo_shi_de_she_xiang
  mode: single
```