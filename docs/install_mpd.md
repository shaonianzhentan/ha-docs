# Music Player Daemon

*视频介绍：https://www.bilibili.com/video/BV1ci4y147Bn/*

---

## 安装mpd服务

```bash
# 安装mpd
sudo apt install mpd -y

# 修改配置内容
sudo nano /etc/mpd.conf

# 找到 bind_to_address  "localhost" 这一行
# 将 localhost 修改为 127.0.0.1

# 重启命令
systemctl restart mpd

# 查看运行状态
systemctl status mpd
```
!>  注意: `localhost`修改为`127.0.0.1`是为了让同局域网的设备能访问到mpd服务

## HomeAssistant配置

```yaml

media_player:
  - platform: mpd
    host: IP_ADDRESS
```

配置参考文档: https://www.home-assistant.io/integrations/mpd/