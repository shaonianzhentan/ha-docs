# 我的安装配置
 
## Docker环境

安装相关服务
```bash
# 安装Docker管理
sudo docker run -itd --net="host" --restart=always --name="prtainer-demo" docker.io/portainer/portainer

# 安装EMQX
sudo docker run -itd --net="host" --restart=always --name="emqx" emqx/emqx:latest

# 安装HomeAssistant
sudo docker run -itd --net="host" --restart=always --privileged=true --name="ha" -v ~/homeassistant:/config -e TZ="Asia/Shanghai" homeassistant/home-assistant:latest

# 网易云音乐API
sudo docker run -itd --net="host" --restart=always --name="music" binaryify/netease_cloud_music_api

# 安装Node-Red
sudo docker run -itd --net="host" --restart=always --privileged=true --name="nodered" nodered/node-red:1.0.1-10-minimal-arm32v6
```

配置zigbee2mqtt
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

配置外网访问
```bash
# 新建配置文件，配置必要信息
sudo touch ~/homeassistant/frpc.ini

# 编辑配置文件
sudo nano ~/homeassistant/frpc.ini

# frpc服务
sudo docker run -itd --net="host" --restart=always --name="frpc" -v ~/homeassistant/frpc.ini:/etc/frp/frpc.ini snowdreamtech/frpc
```

## 原生环境

安装PM2开机启动管理
```bash
# 安装淘宝npm
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 安装pm2管理
cnpm i -g pm2
```

网易云音乐API
```bash
cd ~/git
git clone https://github.com.cnpmjs.org/Binaryify/NeteaseCloudMusicApi
cd NeteaseCloudMusicApi
cnpm i
pm2 start app.js --name music
```

安装Node-Red
```bash
cnpm install -g node-red
# 进入NodeRed目录
cd ~/.nodered
# 安装HomeAssistant模块（必须要装）
npm install node-red-contrib-home-assistant-websocket
# 加入开机启动
pm2 start node-red
```

配置WebSSH2

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

安装zigbee2mqtt
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


## 相关插件安装配置

配置文件管理

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
```yaml
# 配置文件管理器
ha_file_explorer:
```

配置网易云音乐
```yaml
# 配置媒体播放器
media_player:
  - platform: ha_cloud_music
    api_url: http://localhost:3000
```
