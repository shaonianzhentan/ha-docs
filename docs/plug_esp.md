# ESP系列设备接入

---
> 视频介绍
- [ESPHome安装运行翻车记录](https://www.bilibili.com/video/BV1Va411F7pe)
- [ESPHome固件OTA升级](https://www.bilibili.com/video/BV1YZ4y1G7xc)
- [ESPHome配置ws2812b灯带](https://www.bilibili.com/video/BV1Ev411b7fF)
- [小爱同学控制ws2812b灯带](https://www.bilibili.com/video/BV1Na411c73p)

> ESPHome官网：https://esphome.io/

```bash
sudo pip3 install esphome

sudo nano /etc/systemd/system/esphome.service
```

```bash
sudo systemctl enable esphome

sudo systemctl start esphome

systemctl status esphome.service
```

```bash
[Unit]
Description=ESPHome

[Service]
ExecStart=esphome dashboard esphome/
WorkingDirectory=/home/pi/esphome
StandardOutput=inherit
StandardError=inherit
Restart=always
RestartSec=10
User=pi

[Install]
WantedBy=multi-user.target
```