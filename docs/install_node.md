# Node安装

*视频介绍：https://www.bilibili.com/video/BV1gt4y1y7zH/*

---

!> 注意: 在安装完nvm时，需要在重新打开的终端中，执行`nvm命令`，不然会出现找不到命令的问题

```bash
# 安装node管理器
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# 安装最新版的node
nvm install --lts

```

> 安装pm2管理所有node程序

```bash
# 安装pm2管理模块
npm i pm2 -g

# 查看列表
pm2 list

# 启动程序
pm2 start xxx.js --name 自定义名称

# 保存配置
pm2 save

# 开机启动
pm2 startup
```