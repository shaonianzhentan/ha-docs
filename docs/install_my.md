# 我的安装配置
 
## Docker环境

安装相关服务
```bash
# 安装Docker管理
sudo docker run -itd --net="host" --restart=always --name="portainer" \
-v /var/run/docker.sock:/var/run/docker.sock \
-v ~/portainer:/data \
portainer/portainer-ce:latest

# 安装HomeAssistant
sudo docker run -itd --net="host" --restart=always --privileged=true --name="ha" \
-v ~/homeassistant:/config \
-v ~/homeassistant/media:/media \
-e TZ="Asia/Shanghai" homeassistant/home-assistant:latest

# 树莓派
sudo docker run -itd --net="host" --restart=always --privileged=true --name="ha" \
-v ~/homeassistant:/config \
-v ~/homeassistant/media:/media \
-v /run/dbus:/run/dbus:ro \
-e TZ="Asia/Shanghai" homeassistant/home-assistant:latest

# 安装EMQX
sudo docker run -itd --net="host" --restart=always --name="emqx" emqx/emqx:latest

# 安装webssh2
sudo docker run -itd --net="host" --restart=always --privileged=true --name="ssh" ilteoood/webssh2:latest

# 网易云音乐API
sudo docker run -itd --net="host" --restart=always --name="music" binaryify/netease_cloud_music_api

# 安装HomeKit服务
docker run -itd --net=host --restart=always --name=homebridge -v ~/homeassistant/homebridge:/homebridge oznu/homebridge:latest

# 安装AirPlay服务
docker run -itd --net=host --restart=always --name=airplay 1activegeek/airconnect
```

### 配置zigbee2mqtt
```bash
# 运行
sudo docker run \
   -itd \
   --net="host" \
   --restart=always \
   --name="z2m" \
   -v ~/homeassistant/zigbee2mqtt:/app/data \
   --device=/dev/ttyACM0 \
   -e TZ=Asia/Shanghai \
   -v /run/udev:/run/udev:ro \
   --privileged=true \
   koenkk/zigbee2mqtt:latest

# 编辑配置(将homeassistant设置为true)
sudo nano ~/homeassistant/zigbee2mqtt/configuration.yaml
```

### 配置外网访问
```bash
# 新建配置文件，配置必要信息
sudo touch ~/homeassistant/frpc.ini

# 编辑配置文件
sudo nano ~/homeassistant/frpc.ini

# frpc服务
sudo docker run -itd --net="host" --restart=always --name="frpc" -v ~/homeassistant/frpc.ini:/etc/frp/frpc.ini snowdreamtech/frpc
```

### 安装NodeRed
```bash
# 安装Node-Red
sudo docker run -itd --net="host"  --restart=always --privileged=true --name="nodered" -v ~/homeassistant/nodered:/data nodered/node-red

# 进入终端
docker exec -it --user root nodered /bin/bash
# 安装ffmpeg
apk add ffmpeg

```

## 原生环境

### 安装PM2开机启动管理
```bash
# 安装淘宝npm
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 安装pm2管理
cnpm i -g pm2
```

### 网易云音乐API
```bash
cd ~/git
git clone https://github.com.cnpmjs.org/Binaryify/NeteaseCloudMusicApi
cd NeteaseCloudMusicApi
cnpm i
pm2 start app.js --name music
```

### 安装Node-Red
```bash
cnpm install -g node-red
# 进入NodeRed目录
cd ~/.nodered
# 安装HomeAssistant模块（必须要装）
npm install node-red-contrib-home-assistant-websocket
# 加入开机启动
pm2 start node-red
```

### 配置WebSSH2

```bash
cd ~/git
git clone https://github.com.cnpmjs.org/billchurch/webssh2
cd webssh2/app
cnpm i
pm2 start index.js --name webssh
```

```nginx
location /ssh/ {
    proxy_pass http://localhost:2222;
}
```

### 安装zigbee2mqtt
```bash
# 下载安装
cd ~/git
git clone https://github.com.cnpmjs.org/Koenkk/zigbee2mqtt
cd zigbee2mqtt
cnpm i
# 修改配置(自动发现：homeassistant的值修改为true)
sudo nano data/configuration.yaml

# 启动运行
pm2 start index.js --name z2m
```

### 安装frpc
```bash
# 下载程序
wget https://github.com/fatedier/frp/releases/download/v0.33.0/frp_0.33.0_linux_arm.tar.gz

# 解压并进入
tar -zvxf frp_0.33.0_linux_arm.tar.gz
cd frp_0.33.0_linux_arm

# 复制文件到指定目录
sudo cp -r frpc /usr/bin/
sudo mkdir /etc/frp
sudo cp -r frpc.ini /etc/frp/
sudo cp -r systemd/frpc.service /etc/systemd/system/

# 编辑配置文件
sudo nano /etc/frp/frpc.ini

# 启动查看
cd /etc/systemd/system/
sudo systemctl start frpc.service
# 查看运行状态
sudo systemctl status frpc.service
```

## 相关插件安装配置

### 配置文件管理

!> 这里一定要安装`pip install qiniu`不然跑不起来

```bash
# clone文件
git clone https://github.com.cnpmjs.org/shaonianzhentan/ha_file_explorer
# 复制文件夹
sudo mv ./ha_file_explorer/custom_components custom_components
# 删除clone的文件
sudo rm -rf ha_file_explorer

# 编辑配置
sudo nano ~/homeassistant/configuration.yaml
```

## OrangepiZero快速安装

- https://mirror.tuna.tsinghua.edu.cn/help/debian/

> 来来来，下面的认真看起来，装机必备

```bash
# 换源
# 更新
apt update
# 更新hosts（可同时进行）
# apt安装MQTT（速度快）

# 安装npm
apt install npm
# npm换源
npm config set registry https://registry.npm.taobao.org
# 安装node管理模块
npm i -g n
# 安装node最新稳定版
n stable

# 安装开机启动管理
npm i -g pm2
```

> 内存超过512以上推荐`（辣鸡CPU、辣鸡内存就别装了，卡的要死）`

```bash
# 安装docker
apt install docker.io
# 安装docker管理器
# docker拉取HomeAssistant（比pip编译速度快）
# 进入到HA的终端，安装文件管理器相关依赖和文件

# 安装相关模块
npm i -g node-red
# git拉取安装webssh2、zigbee2mqtt
# 安装AP热点
```

> 辣鸡内存256，无力吐槽，告辞
```bash
# 算了算了，pip安装太慢了，还是使用docker安装

# 辣鸡内存就别装node-red了
# 辣鸡内存就别装webssh2了

# 装个zigbee2mqtt算球
# 勉强装个AP热点完事
```

## 我的Nginx配置

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

    location /html/tile/config.js {
        proxy_pass  http://homeassistant/local/TileBoard/config.js;
    }

    location /html/tile/styles/custom.css {
        proxy_pass  http://homeassistant/local/TileBoard/custom.css;
    }

}
```
> 安装Aria2下载面板
```bash
# 设置最高权限
cd /var/www && sudo chmod 777 html
# 创建aria2目录
cd html && mkdir aria2 && cd aria2
# 拉取指定目录
git init
git remote add -f origin https://github.com.cnpmjs.org/ziahamza/webui-aria2
git config core.sparsecheckout true
echo "docs" >> .git/info/sparse-checkout
git pull origin master
echo 'success'
```
> 安装TileBoard磁贴面板
```bash
# 设置最高权限
cd /var/www && sudo chmod 777 html
# 创建tile目录
cd html && mkdir tile && cd tile
# 拉取指定目录
wget https://github.com/resoai/TileBoard/releases/download/v2.1.3/TileBoard.zip
unzip TileBoard.zip
rm -rf TileBoard.zip
echo 'success'
```