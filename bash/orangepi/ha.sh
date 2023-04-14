#!/bin/bash

: ' 执行脚本

cd ~/git && wget https://gitee.com/shaonianzhentan/ha-docs/raw/master/bash/orangepi/ha.sh && chmod +x ha.sh && ./ha.sh
'

docker pull homeassistant/home-assistant:latest

if [ $? -ne 0 ]; then
    echo "homeassistant pull failed"
    exit
else
    echo "homeassistant pull succeed"
fi
docker stop ha
docker rm ha
docker run -itd --net="host" --restart=always --privileged=true --name="ha" -v ~/homeassistant:/config -v ~/homeassistant/media:/media -e TZ="Asia/Shanghai" homeassistant/home-assistant:latest