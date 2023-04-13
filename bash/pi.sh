#!/bin/bash

# 更新源
apt update
# 系统升级
apt upgrade

# 拉取最新镜像
docker pull portainer/portainer-ce:latest

if [ $? -ne 0 ]; then
    echo "portainer pull failed"
    exit
else
    echo "portainer pull succeed"
fi
# 停止运行
docker stop portainer
# 删除容器
docker rm portainer
# 重新运行
docker run -itd --net="host" --restart=always --name="portainer" -v /var/run/docker.sock:/var/run/docker.sock -v ~/portainer:/data portainer/portainer-ce:latest

# 拉取最新镜像
docker pull homeassistant/home-assistant:latest

if [ $? -ne 0 ]; then
    echo "homeassistant pull failed"
    exit
else
    echo "homeassistant pull succeed"
fi
docker stop ha
docker rm ha
docker run -itd --net="host" --restart=always --privileged=true --name="ha" -v ~/homeassistant:/config -v ~/homeassistant/media:/media -v /run/dbus:/run/dbus:ro -e TZ="Asia/Shanghai" homeassistant/home-assistant:latest

# 更新WebSSH
cd ~/git/webssh2

git pull

cd ~/git/webssh2/app

npm i

pm2 restart webssh

# 更新NodeRED
sudo pm2 stop nodered

sudo npm install -g --unsafe-perm node-red

sudo pm2 restart nodered