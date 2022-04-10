# Node安装

*视频介绍：https://www.bilibili.com/video/BV1gt4y1y7zH/*

---

!> 注意: 在安装完nvm时，需要在重新打开的终端中，执行`nvm命令`，不然会出现找不到命令的问题

### 安装

> nodejs安装方法一（树莓派zero系列千万别用这个）
```bash
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

> nodejs安装方法二
```bash
# 安装node管理器
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# 安装最新版的node
nvm install --lts

# 注意：在【树莓派zero】上千万别装12及以上版本，需要编译非常浪费时间
nvm install 10.0.0
```

### npm换源

```bash
# 换源
npm config set registry https://registry.npmmirror.com/

# 查看
npm config get registry

# 还原npm源
npm config set registry https://registry.npmjs.org/
```
官方文件：https://cnpmjs.org/


### 管理node应用

> 安装pm2管理所有node程序

```bash
# 安装pm2管理模块
npm i pm2 -g

# 查看列表
pm2 list

# 启动程序
pm2 start xxx.js --name 自定义名称

# 执行python脚本
pm2 start main.py -x --interpreter python

# 保存配置
pm2 save

# 开机启动
pm2 startup
```

### 开启静态服务器
```bash
npx http-server
```