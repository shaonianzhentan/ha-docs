# 摄像监控

*视频介绍：*

---

## 官方配置

```yaml
# 从提供的流进行录制
stream:

# 摄像机
camera:
  - platform: generic
    still_image_url: http://192.168.1.111:554/snapshot
    stream_source: rtsp://admin:123456@192.168.1.111:554/
```

- https://www.home-assistant.io/integrations/generic_ip_camera/
- https://www.home-assistant.io/integrations/stream/

## 使用命令录像存储

```bash
# 安装FFmpeg
sudo apt install ffmpeg -y

# 保存录像到本地
ffmpeg -i RTSP地址 -c copy -map 0 -f segment -segment_list 存放路径/playlist.m3u8 -segment_time 5 存放路径/output%09d.ts

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

# 查看服务状态
sudo systemctl status create_ap
```

```bash
# 查看连接的网络
arp -a
```