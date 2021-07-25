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

## 遇到的问题

> 香橙派Armbian系统开启3.5耳机口输出
```bash
# 打开系统配置
armbian-config

# 选择
System - Hardware - 空格选中analog-codec

# 然后保存即可
```

> 在HA中无法控制音量
```bash
# 打开音量控制器，看看实际控制的名称（香橙派Armbian系统里是DAC）
alsamixer

# 修改mixer_control控制
sudo nano /etc/mpd.conf

aplay -l
aplay -L
# 查看默认音频设备
amixer

# 查看指定声卡
amixer -c 3

```
找到音频输出配置，然后将`mixer_control`修改为指定的值
```nginx
audio_output {
        type            "alsa"
        name            "My ALSA Device"
#       device          "hw:0,0"        # optional
#       mixer_type      "hardware"      # optional
#       mixer_device    "default"       # optional
#       mixer_control   "PCM"           # optional
        mixer_control   "DAC"
#       mixer_index     "0"             # optional
}

```

在新版树莓派中的配置
```nginx
audio_output {
        type            "alsa"
        name            "My ALSA Device"
        device          "hw:0,0"
#       mixer_type      "hardware"      # optional
#       mixer_device    "default"       # optional
        mixer_control   "Headphone"
        mixer_index     "0"             
}
```

在香橙派中安装了原装系统，这里使用软件控制音量
```nginx
audio_output {
        type            "alsa"
        name            "My ALSA Device"
        device          "hw:3,0"        # optional
        mixer_type      "software"      # optional
}
```