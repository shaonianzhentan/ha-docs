# 安装frps

*视频介绍：*

---

> 一键安装脚本

```bash
wget https://code.aliyun.com/MvsCode/frps-onekey/raw/master/install-frps.sh -O ./install-frps.sh
chmod 700 ./install-frps.sh
./install-frps.sh install

```

源码地址: https://github.com/MvsCode/frps-onekey

> Nginx配置
```nginx
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''   close;
}

# 通配符域名配置
server {

    listen 80;
    server_name *.frp.xxxxxx.com;

    location / {
        proxy_pass http://127.0.0.1:7000;
        proxy_set_header        Host            $host:80;
        proxy_set_header        X-Real-IP       $remote_addr;
        proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_hide_header       X-Powered-By;
        proxy_set_header        Upgrade                 $http_upgrade;
        proxy_set_header        Connection              $connection_upgrade;
    }
}

# 单个域名使用HTTPS访问
server {
    listen          443 ssl;
    server_name ha.frp.xxxxxx.com;

    # 配置证书
    ssl_certificate      /root/ssl/ha.crt;
    ssl_certificate_key  /root/ssl/ha.key;

    location / {
        proxy_pass http://ha.frp.xxxxxx.com;
        proxy_set_header        Upgrade                 $http_upgrade;
        proxy_set_header        Connection              $connection_upgrade;
    }
}
```