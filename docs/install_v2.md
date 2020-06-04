# 梯子管理


---

## 服务器配置安装

> 安装文档：https://github.com/sprov065/v2-ui

!> 注意：一定要使用`ws`模式

> Nginx配置

```
# 创建相关配置文件
nano /etc/nginx/conf.d/v2.conf
```

*自定义配置文件: `v2.conf`*
```nginx
    server
    {
        listen 80;
        server_name 域名;

        location / {
          proxy_pass http://localhost:65432;
        }

        location /v2/network {
            proxy_pass  http://localhost:50694;
            proxy_set_header Host $host:$server_port;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }
    }
```

## 使用cloudflare

!> 注意: SSL/TLS 一定要选择 `Flexible` 模式
