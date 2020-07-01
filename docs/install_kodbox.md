# 可道云的安装

*视频介绍：*

---

## 安装php环境

```bash
sudo apt install php php-fpm php-mysql
```

## php使用root权限运行

> 编辑`/etc/php/7.3/fpm/pool.d/www.conf`，把user和group修改为root
```bash
nano /etc/php/7.3/fpm/pool.d/www.conf
```

> 编辑`/lib/systemd/system/php7.3-fpm.service`
```bash
nano /lib/systemd/system/php7.3-fpm.service

# 在ExecStart的 --nodaemonize前面加上 --allow-to-run-as-root
# ExecStart=/usr/sbin/php-fpm7.3 --allow-to-run-as-root --nodaemonize...
```

> 执行命令
```bash
# 重新加载所有服务
systemctl daemon-reload

# 重新启动服务
service php7.3-fpm restart

# 查看服务运行情况
ps auwx | grep php
```

## nginx配置运行php

```nginx
server {
        listen          89;
        server_name localhost;
        root /var/www/kodbox;
        index index.php;

        location ~ \.php$ {

                fastcgi_connect_timeout 3600;
                fastcgi_read_timeout 3600;
                fastcgi_send_timeout 3600;

                include        snippets/fastcgi-php.conf;
                fastcgi_pass unix:/run/php/php7.3-fpm.sock;

        }

}
```