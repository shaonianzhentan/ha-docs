# Nginx安装

*视频介绍：https://www.bilibili.com/video/BV12k4y1B73B/*

---

## CentOS 安装方式

!> 注意: 如果直接使用`yum install nginx`无效的话, 可以使用以下方式试试

```bash
# 安装epel-release软件包
sudo yum install epel-release -y

# 更新
yum update

# 安装nginx
yum install nginx -y
```

## Ubuntu 安装方式
```bash
sudo apt install nginx -y
```

## 修改配置

!> 注意:因为用户权限问题, 需要把配置文件内容`user nginx;`改为`user root;`

```bash
# 修改配置
nano /etc/nginx/nginx.conf
```

> 可以将配置文件写入到`/etc/nginx/conf.d/`里

> Nginx重新加载配置命令 `nginx -s reload`

> 实时监控100行Nginx错误日志命令 `tail -100f /var/log/nginx/error.log`

## HomeAssistant反向代理配置

*配置文件：/etc/nginx/conf.d/root.conf*

```nginx
server {
    listen          88;
    server_name localhost;

    location / {
		proxy_pass  http://localhost:8123;
    }

    location /api/websocket {
		proxy_pass  http://localhost:8123/api/websocket;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "upgrade";
    }
}
```

> 同时兼容http/websocket
```nginx
http {

	map $http_upgrade $connection_upgrade {
		default upgrade;
		''   close;
	}

	server {
		listen          80;
		server_name localhost;

		location / {
			proxy_pass  http://localhost:8123;
			proxy_set_header  Upgrade  $http_upgrade;
			proxy_set_header  Connection  $connection_upgrade;
		}
	}

}
```

## 相关配置

> http强制跳转到https
```nginx
server {

    listen 80;
    listen 443 ssl;
    server_name www.jiluxinqing.com jiluxinqing.com;
    ssl_certificate      ssl/jiluxinqing.crt;
    ssl_certificate_key  ssl/jiluxinqing.key;
    
    if ($server_port !~ 443) {
        rewrite ^(/.*)$ https://$host$1 permanent;
    }
    
    location / {
        proxy_pass  http://localhost:5000;
    }	  
    
}	
```

## 自签名SSL

```bash
# 1.生成私钥
openssl genrsa -out server.key 2048

# 2.生成 CSR (Certificate Signing Request)
openssl req \
    -subj "/C=CN/ST=Shanghai/L=Shanghai/O=Test/OU=Test Software/CN=orangepizero2.local/emailAddress=65147515@qq.com" \
    -new \
    -key server.key \
    -out server.csr

# 3.生成自签名证书
openssl x509 \
    -req \
    -days 3650 \
    -in server.csr \
    -signkey server.key \
    -out server.crt

# 复制文件到SSL目录
cp server.key server.crt /etc/nginx/ssl/
```