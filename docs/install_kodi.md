# Kodi视频播放器

*视频介绍：https://www.bilibili.com/video/BV17D4y1S7HE/*

---

## 安装

```bash
# 安装kodi播放器
sudo apt install kodi -y

# 安装IPTV插件
sudo apt install kodi-pvr-iptvsimple -y
```
下载地址: http://mirrors.kodi.tv/releases/

## HomeAssistant配置

```yaml

media_player:
  - platform: kodi
    host: IP_ADDRESS
```

配置参考文档: https://www.home-assistant.io/integrations/kodi/