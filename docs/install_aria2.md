# 下载管理

*视频介绍：*

---

## 安装Aria2服务
```bash
# 安装Aria2
wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubi/doubi/master/aria2.sh && chmod +x aria2.sh && bash aria2.sh

# 修改配置
bash aria2.sh

# 修改下载地址到/home/www/aria2
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
