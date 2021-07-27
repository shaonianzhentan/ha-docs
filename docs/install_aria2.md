# 下载管理

*视频介绍：https://www.bilibili.com/video/BV1KA411B76H/*

---

## 安装Aria2服务

### 安装方法一

```bash
# 安装Aria2
wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubi/doubi/master/aria2.sh && chmod +x aria2.sh && bash aria2.sh

# 修改配置
bash aria2.sh

# 修改下载地址到/home/www/aria2
```

!> 如果出现错误可以尝试修改`/etc/hosts`文件，添加`151.101.76.133 raw.githubusercontent.com`

### 安装方法二

```bash
# 安装Aria2
sudo apt install aria2 -y

# 编辑开机启动配置
sudo nano /etc/systemd/system/aria2.service

```
!> 完整命令：`aria2c --enable-rpc --rpc-listen-all --rpc-secret=密码令牌`

!> `WorkingDirectory=下载文件路径`，记得设置`可写权限`
```ini
[Unit]
Description=aria2 service

[Service]
ExecStart=aria2c --enable-rpc --rpc-listen-all
WorkingDirectory=/var/lib/minidlna
StandardOutput=inherit
StandardError=inherit
Restart=always
RestartSec=10
User=pi

[Install]
WantedBy=multi-user.target
```
```bash
# 启用aria2开机自启服务
sudo systemctl enable aria2

# 开始运行aria2
sudo systemctl start aria2

# 查看状态
systemctl status aria2.service
```

## 安装Aria2管理面板 

```bash
# 切换到aria2下载目录
cd /home/www/aria2

# 拉取指定分支目录
git init
git remote add -f origin https://github.com/ziahamza/webui-aria2
git config core.sparsecheckout true
echo "docs" >> .git/info/sparse-checkout
git pull origin master
```

> 如果配置好了nginx那访问地址就是: `http://localhost/aria2/docs/index.html`

## Nginx配置


```bash
# 添加一个Nginx配置
nano /etc/nginx/conf.d/root.conf
```

!> 注意修改配置里的`域名`
```nginx
server
{
    listen 80;
    server_name 域名;
    index index.html index.htm;
    root  /home/www;
    
    location /jsonrpc {
		proxy_pass  http://localhost:6800/jsonrpc;
		proxy_set_header Host $host:$server_port;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "upgrade";
	}
}
```

## 常见问题

> 如果无法运行，依赖损坏，可以重装安装相关依赖
```bash

sudo apt reinstall libaria2-0

sudo apt reinstall libaria2

systemctl status aria2.service
```