# 我的安装配置

安装相关服务
```bash
# 安装Docker管理
sudo docker run -itd --net="host" --restart=always --name="prtainer-demo" docker.io/portainer/portainer

# 安装EMQX
sudo docker run -itd --net="host" --restart=always --name="emqx" emqx/emqx:latest

# 安装HomeAssistant
sudo docker run -itd --net="host" --restart=always --privileged=true --name="ha" -v ~/homeassistant:/config homeassistant/home-assistant:latest

```


配置文件管理
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
```bash
# 网易云音乐API
sudo docker run -itd --net="host" --restart=always --name="music" binaryify/netease_cloud_music_api
```
```yaml
# 配置媒体播放器
media_player:
  - platform: ha_cloud_music
    api_url: http://localhost:3000
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

NodeRed相关安装
```bash
# 创建文件夹
sudo mkdir ~/homeassistant/nodered
# 设置权限
sudo chmod 777 ~/homeassistant/nodered

# 安装Node-Red
sudo docker run -itd --net="host" --restart=always --privileged=true --name="nodered" -v ~/homeassistant/nodered:/data nodered/node-red:1.0.1-10-minimal-arm32v6

# 进入NodeRed目录
cd ~/homeassistant/nodered

# 换源
npm config set registry https://registry.npm.taobao.org

# 安装HomeAssistant模块（必须要装）
npm install node-red-contrib-home-assistant-websocket

# 安装onvif摄像监控模块（可不装）
npm install node-red-contrib-onvif-nodes@0.0.1-beta.7

# 安装blinker
npm install node-red-contrib-blinker-mqtt
# 编辑文件
nano ~/homeassistant/nodered/node_modules/node-red-contrib-blinker-mqtt/blinker-mqtt.js
# .replace(/'/g, '"')
```