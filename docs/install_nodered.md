# Node-RED安装

*视频介绍：https://www.bilibili.com/video/BV19V411C74F/*

---

## docker方式安装

!> 通过加上`--privileged=true`可以获取最高权限（宿主机root权限）

```bash

# 正常安装
docker run -it -d -p 1880:1880 --restart=always --privileged=true --net="host" --name mynodered nodered/node-red:1.0.1-10-minimal-arm32v6

```

```bash
# 进入容器内部
docker exec -it mynodered /bin/bash
# 切换到安装模块目录中
cd /data
```

## npm方式安装

> 安装运行

```bash
# 全局安装node-red
npm install -g --unsafe-perm node-red

# 启动
node-red
```

> 开机启动
```bash
# 查看全局node_modules目录
npm

# 启动node-red
pm2 start 全局node_modules安装目录/node-red/red.js --name nodered

# 查看运行列表
pm2 list

# 保存配置
pm2 save

# 加入开机启动项
pm2 startup
```

## 基本语法

```bash
# 当前上下文
context.get
context.set
# 当前流
flow.get
flow.set
# 全局
global.get
global.set
```

- https://blog.csdn.net/sos768/article/details/91351923