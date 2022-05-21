# HomeAssistant学习笔记 👋  

?> 玩转HomeAssistant遇到的各种问题与解决方案

[![badge](https://img.shields.io/badge/GitHub-shaonianzhentan-%2373c165)](https://github.com/shaonianzhentan)
[![badge](https://img.shields.io/badge/Gitee-shaonianzhentan-%23c71d23)](https://gitee.com/shaonianzhentan)

![visit](https://visitor-badge.laobi.icu/badge?page_id=shaonianzhentan.ha-docs&left_text=visit)
![forks](https://img.shields.io/github/forks/shaonianzhentan/ha-docs)
![stars](https://img.shields.io/github/stars/shaonianzhentan/ha-docs)
![license](https://img.shields.io/github/license/shaonianzhentan/ha-docs)

[![windows](https://img.shields.io/badge/Windows-家庭助理-blue?logo=windows&style=for-the-badge)](https://www.microsoft.com/zh-cn/store/productId/9n2jp5z9rxx2)

[![Edge Add-on](https://img.shields.io/badge/Edge扩展-点击安装-%23049cdb?style=for-the-badge&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI1NDYxNTI3NTY0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MTQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2NCA2NTZxLTQ4LTUyLTU2LTExNi0yMCAzMC4wMTYtMzIgNjQtMTguMDE2IDU4LjAxNi00Ljk5MiAxMjAuOTkydDUyLjk5MiAxMTQuMDE2IDk4LjAxNiA3MS4wMDhxNjggMjQgMTUyLTggNzAuMDE2LTI2LjAxNiAxMzQuMDE2LTgyLjAxNmwxNC4wMTYtMTZxMzItMzQuMDE2IDQyLjAxNi01MC4wMTYgMjAtMzItMi4wMTYtMzYtOTguMDE2IDUyLTIxMiAzNS4wMDhUNDY0LjAzMiA2NTZ6IG0yNC0yNDhxMjQgMCAyMC45OTItNi4wMTZ0LTIwLjk5Mi0xNmwtMTYtMTAuMDE2cS02Ni4wMTYtMzYtMTQ4LTM2dC0xNDQgMzQuMDE2VDk2IDQ2OHEtMjQgNjQgMi4wMTYgMTQ2LjAxNiAzMC4wMTYgMTI2LjAxNiAxMjguOTkyIDIxNS4wMDh0MjI0Ljk5MiAxMDQuOTkycS02Ni4wMTYtNDAtMTAzLjAwOC0xMTEuMDA4VDMxMiA2NzQuMDE2cTIuMDE2LTg2LjAxNiA1MC4wMTYtMTYyLjAxNiA1MC4wMTYtODIuMDE2IDEyNi4wMTYtMTA0ek0xMTguMDE2IDM1MnE2NC00OCAxNDgtNjAuOTkydDE2NC45OTIgMTEuMDA4IDEzNS4wMDggODIuMDE2cTM2IDQwIDQ4IDkwLjAxNiAxNC4wMTYgNTYtMTQuMDE2IDk2LTM0LjAxNiAzNiA0IDYwIDI4IDE2IDkwLjAxNiAyMi4wMTYgNTYgNCA4Mi4wMTYtMi4wMTYgNzYtMTYgMTIwLTc2IDQwLTU0LjAxNiA0Mi4wMTYtMTI4Ljk5MnQtMzYtMTM5LjAwOHEtNTQuMDE2LTEwNi4wMTYtMTY0LTE2Ni4wMTYtMTA0LTU2LTIyOC01NC4wMTYtMTI4LTIuMDE2LTIzNiA3MS4wMDh0LTE1NiAxOTUuMDA4eiIgcC1pZD0iMjQxNSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==)](https://microsoftedge.microsoft.com/addons/detail/hbagofhaigojgcjmonkaljffiebdkkdn)
[![Microsoft Edge Add-ons](https://img.shields.io/badge/dynamic/json?logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI1NDYxNTI3NTY0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MTQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2NCA2NTZxLTQ4LTUyLTU2LTExNi0yMCAzMC4wMTYtMzIgNjQtMTguMDE2IDU4LjAxNi00Ljk5MiAxMjAuOTkydDUyLjk5MiAxMTQuMDE2IDk4LjAxNiA3MS4wMDhxNjggMjQgMTUyLTggNzAuMDE2LTI2LjAxNiAxMzQuMDE2LTgyLjAxNmwxNC4wMTYtMTZxMzItMzQuMDE2IDQyLjAxNi01MC4wMTYgMjAtMzItMi4wMTYtMzYtOTguMDE2IDUyLTIxMiAzNS4wMDhUNDY0LjAzMiA2NTZ6IG0yNC0yNDhxMjQgMCAyMC45OTItNi4wMTZ0LTIwLjk5Mi0xNmwtMTYtMTAuMDE2cS02Ni4wMTYtMzYtMTQ4LTM2dC0xNDQgMzQuMDE2VDk2IDQ2OHEtMjQgNjQgMi4wMTYgMTQ2LjAxNiAzMC4wMTYgMTI2LjAxNiAxMjguOTkyIDIxNS4wMDh0MjI0Ljk5MiAxMDQuOTkycS02Ni4wMTYtNDAtMTAzLjAwOC0xMTEuMDA4VDMxMiA2NzQuMDE2cTIuMDE2LTg2LjAxNiA1MC4wMTYtMTYyLjAxNiA1MC4wMTYtODIuMDE2IDEyNi4wMTYtMTA0ek0xMTguMDE2IDM1MnE2NC00OCAxNDgtNjAuOTkydDE2NC45OTIgMTEuMDA4IDEzNS4wMDggODIuMDE2cTM2IDQwIDQ4IDkwLjAxNiAxNC4wMTYgNTYtMTQuMDE2IDk2LTM0LjAxNiAzNiA0IDYwIDI4IDE2IDkwLjAxNiAyMi4wMTYgNTYgNCA4Mi4wMTYtMi4wMTYgNzYtMTYgMTIwLTc2IDQwLTU0LjAxNiA0Mi4wMTYtMTI4Ljk5MnQtMzYtMTM5LjAwOHEtNTQuMDE2LTEwNi4wMTYtMTY0LTE2Ni4wMTYtMTA0LTU2LTIyOC01NC4wMTYtMTI4LTIuMDE2LTIzNiA3MS4wMDh0LTE1NiAxOTUuMDA4eiIgcC1pZD0iMjQxNSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==&label=users&color=brightgreen&query=%24.activeInstallCount&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fhbagofhaigojgcjmonkaljffiebdkkdn)](https://microsoftedge.microsoft.com/addons/detail/hbagofhaigojgcjmonkaljffiebdkkdn)
[![Microsoft Edge Add-ons](https://img.shields.io/badge/dynamic/json?logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI1NDYxNTI3NTY0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MTQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2NCA2NTZxLTQ4LTUyLTU2LTExNi0yMCAzMC4wMTYtMzIgNjQtMTguMDE2IDU4LjAxNi00Ljk5MiAxMjAuOTkydDUyLjk5MiAxMTQuMDE2IDk4LjAxNiA3MS4wMDhxNjggMjQgMTUyLTggNzAuMDE2LTI2LjAxNiAxMzQuMDE2LTgyLjAxNmwxNC4wMTYtMTZxMzItMzQuMDE2IDQyLjAxNi01MC4wMTYgMjAtMzItMi4wMTYtMzYtOTguMDE2IDUyLTIxMiAzNS4wMDhUNDY0LjAzMiA2NTZ6IG0yNC0yNDhxMjQgMCAyMC45OTItNi4wMTZ0LTIwLjk5Mi0xNmwtMTYtMTAuMDE2cS02Ni4wMTYtMzYtMTQ4LTM2dC0xNDQgMzQuMDE2VDk2IDQ2OHEtMjQgNjQgMi4wMTYgMTQ2LjAxNiAzMC4wMTYgMTI2LjAxNiAxMjguOTkyIDIxNS4wMDh0MjI0Ljk5MiAxMDQuOTkycS02Ni4wMTYtNDAtMTAzLjAwOC0xMTEuMDA4VDMxMiA2NzQuMDE2cTIuMDE2LTg2LjAxNiA1MC4wMTYtMTYyLjAxNiA1MC4wMTYtODIuMDE2IDEyNi4wMTYtMTA0ek0xMTguMDE2IDM1MnE2NC00OCAxNDgtNjAuOTkydDE2NC45OTIgMTEuMDA4IDEzNS4wMDggODIuMDE2cTM2IDQwIDQ4IDkwLjAxNiAxNC4wMTYgNTYtMTQuMDE2IDk2LTM0LjAxNiAzNiA0IDYwIDI4IDE2IDkwLjAxNiAyMi4wMTYgNTYgNCA4Mi4wMTYtMi4wMTYgNzYtMTYgMTIwLTc2IDQwLTU0LjAxNiA0Mi4wMTYtMTI4Ljk5MnQtMzYtMTM5LjAwOHEtNTQuMDE2LTEwNi4wMTYtMTY0LTE2Ni4wMTYtMTA0LTU2LTIyOC01NC4wMTYtMTI4LTIuMDE2LTIzNiA3MS4wMDh0LTE1NiAxOTUuMDA4eiIgcC1pZD0iMjQxNSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==&label=rating&suffix=/5.0&color=brightgreen&query=%24.averageRating&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fhbagofhaigojgcjmonkaljffiebdkkdn)](https://microsoftedge.microsoft.com/addons/detail/hbagofhaigojgcjmonkaljffiebdkkdn)

[![ha_badge](https://img.shields.io/badge/Home-Assistant-%23049cdb)](https://www.home-assistant.io/)
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)

[![platform](https://img.shields.io/badge/platform-Node--RED-red)](https://flows.nodered.org/node/node-red-contrib-ha-mqtt)
[![NPM version](https://img.shields.io/npm/v/node-red-contrib-ha-mqtt.svg?style=flat-square)](https://www.npmjs.com/package/node-red-contrib-ha-mqtt)
[![platform](https://img.shields.io/badge/platform-Node--RED-red)](https://flows.nodered.org/node/node-red-contrib-ha-wechat)
[![NPM version](https://img.shields.io/npm/v/node-red-contrib-ha-wechat.svg?style=flat-square)](https://www.npmjs.com/package/node-red-contrib-ha-wechat)

#### 关注我的微信订阅号，了解更多HomeAssistant相关知识
<img src="https://ha.jiluxinqing.com/img/wechat-channel.png" width="495" alt="HomeAssistant家庭助理" title="HomeAssistant家庭助理"> 

#### 如果我开发的项目对你有帮助，请我喝杯<del style="font-size: 14px;">咖啡</del>奶茶吧😘
|  |支付宝|微信|
|---|---|---|
奶茶= | <img src="https://ha.jiluxinqing.com/img/alipay.png" align="left" height="160" width="160" alt="支付宝" title="支付宝">  |  <img src="https://ha.jiluxinqing.com/img/wechat.png" align="left" height="160" width="160" alt="微信支付" title="微信">

## 快速安装

Docker管理
```bash
sudo docker run -itd --net="host" --restart=always --name="portainer" -v /var/run/docker.sock:/var/run/docker.sock -v ~/portainer:/data portainer/portainer-ce:latest
```
HomeAssistant
```bash
sudo docker run -itd --net="host" --restart=always --name="ha" --privileged=true -v ~/homeassistant:/config -e TZ="Asia/Shanghai" homeassistant/home-assistant:latest
```
webssh2
```bash
sudo docker run -itd --net="host" --restart=always --name="ssh" --privileged=true ilteoood/webssh2:latest
```
HomeKit服务
```bash
sudo docker run -itd --net="host" --restart=always --name="homebridge" -v ~/homebridge:/homebridge oznu/homebridge:latest
```
ESPHome
```bash
sudo docker run -itd --net="host" --restart=always --name="esphome" -v ~/esphome:/config esphome/esphome
```
Nodejs
```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

```bash
# 安装pm2
npm i pm2 -g
# 安装node-RED
sudo npm install -g --unsafe-perm node-red
# 启动程序
sudo pm2 start node-red
# 保存配置
sudo pm2 save
# 开机启动
sudo pm2 startup
```

## 升级
```bash
sudo docker pull homeassistant/home-assistant:latest
```
```bash
sudo docker pull oznu/homebridge:latest
```

## HomeBridge
- https://github.com/homebridge/homebridge
- https://github.com/SeydX/homebridge-camera-ui
- https://github.com/bwp91/homebridge-ewelink
- https://github.com/kiwi-cam/homebridge-broadlink-rm
- https://github.com/arachnetech/homebridge-mqttthing

## Nginx配置
```nginx
map $http_upgrade $connection_upgrade {
  default upgrade;
  ''   close;
}

upstream homeassistant { 
  server 127.0.0.1:8123;
}

upstream webssh { 
  server 127.0.0.1:2222;
}

upstream nodered {
  server 127.0.0.1:1880;
}

upstream portainer {
  server 127.0.0.1:9000;
}

upstream aria2c {
  server 127.0.0.1:6800;
}

server {

    listen 80;
    listen 443 ssl;
    server_name raspberry.local;
    ssl_certificate      ssl/server.crt;
    ssl_certificate_key  ssl/server.key;

    location / {
        proxy_pass  http://homeassistant;
        proxy_set_header  Upgrade  $http_upgrade;
        proxy_set_header  Connection  $connection_upgrade;
    }

    location /ssh/ {
        proxy_pass http://webssh;
        proxy_set_header  Upgrade  $http_upgrade;
        proxy_set_header  Connection  $connection_upgrade;
    }

    location /node-red/ {
        proxy_pass http://nodered;
        proxy_set_header  Upgrade  $http_upgrade;
        proxy_set_header  Connection  $connection_upgrade;
    }

    location /docker-portainer/ {
        proxy_pass http://portainer/;
        proxy_set_header  Upgrade  $http_upgrade;
        proxy_set_header  Connection  $connection_upgrade;
    }

    location /jsonrpc {
        proxy_pass http://aria2c;
        proxy_set_header  Upgrade  $http_upgrade;
        proxy_set_header  Connection  $connection_upgrade;
    }

    location /html/ {
        root /var/www;
    }

}
```

## 其他项目
- https://code.videolan.org/videolan/LibVLCSharp