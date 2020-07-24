# 摄像监控

*视频介绍：*

---

> 官方配置

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

> 使用命令录像存储
```bash
# 安装FFmpeg
sudo apt install ffmpeg -y

# 保存录像到本地
ffmpeg -i RTSP地址 -c copy -map 0 -f segment -segment_list 存放路径/playlist.m3u8 -segment_time 5 存放路径/output%09d.ts

```
