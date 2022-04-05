# HomeAssistant学习笔记 👋  

?> 玩转HomeAssistant遇到的各种问题与解决方案

> 文档作者：`shaonianzhentan`，联系方式：`QQ: 635147515`

[![windows](https://img.shields.io/badge/Windows-家庭助理-blue?logo=windows&style=for-the-badge)](https://www.microsoft.com/zh-cn/store/productId/9n2jp5z9rxx2)

[![ha_badge](https://img.shields.io/badge/Home-Assistant-%23049cdb)](https://www.home-assistant.io/)
![visit](https://visitor-badge.laobi.icu/badge?page_id=shaonianzhentan.ha-docs&left_text=visit)
[![badge](https://img.shields.io/badge/GitHub-shaonianzhentan-%2373c165)](https://github.com/shaonianzhentan)
[![badge](https://img.shields.io/badge/Gitee-shaonianzhentan-%23c71d23)](https://gitee.com/shaonianzhentan)

![](https://komarev.com/ghpvc/?username=shaonianzhentan&color=green)

<!--
**shaonianzhentan/shaonianzhentan** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->

![shaonianzhentan's github stats](https://github-readme-stats.vercel.app/api?username=shaonianzhentan&count_private=true&show_icons=true)

#### 关注我的微信订阅号，了解更多HomeAssistant相关知识
<img src="https://cdn.jsdelivr.net/gh/shaonianzhentan/ha-docs@master/docs/img/wechat-channel.png" width="495" alt="HomeAssistant家庭助理" title="HomeAssistant家庭助理"> 

#### 如果我开发的项目对你有帮助，请我喝杯<del style="font-size: 14px;">咖啡</del>奶茶吧😘
|  |支付宝|微信|
|---|---|---|
奶茶= | <img src="https://cdn.jsdelivr.net/gh/shaonianzhentan/ha-docs@master/docs/img/alipay.png" align="left" height="160" width="160" alt="支付宝" title="支付宝">  |  <img src="https://cdn.jsdelivr.net/gh/shaonianzhentan/ha-docs@master/docs/img/wechat.png" align="left" height="160" width="160" alt="微信支付" title="微信">



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