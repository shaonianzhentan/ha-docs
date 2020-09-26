# MQTT安装

*视频介绍：https://www.bilibili.com/video/bv1MC4y1a7Uj*

---

## Docker 安装
> 运行MQTT服务，同时开启emqx管理端口：18083、MQTT服务端口：1883、websocket端口：8083

```bash

docker run -it -d --name emqx -p 18083:18083 -p 1883:1883 -p 8083:8083 --restart=always emqx/emqx:latest

```

!> 注意：有些镜像已经内置了其它的MQTT服务，所以必须要注意1883端口冲突

```bash
# 查看端口使用情况
netstat -anp|grep 1883
```

## 直接安装

```bash
# 安装MQTT服务
# 安装mosquitto开发包
# 安装mosquitto客户端
sudo apt install mosquitto libmosquitto-dev mosquitto-clients -y

# 查询mosquitto是否正确运行
sudo service mosquitto status
```

- 来源：https://blog.csdn.net/mycsdn_liruilin/article/details/88717041