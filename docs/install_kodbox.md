# 可道云的安装

*视频介绍：*
---

!> 注意：在部分环境中无法安装php curl模块，需要自行编译，很烦

## 安装php环境

```bash
sudo apt install php php-fpm php-mysql
```

## php使用root权限运行

> 编辑`/etc/php/7.3/fpm/pool.d/www.conf`，把user和group修改为root
```bash
nano /etc/php/7.3/fpm/pool.d/www.conf
```

> 编辑`/lib/systemd/system/php7.4-fpm.service`
```bash
nano /lib/systemd/system/php7.4-fpm.service

# 在ExecStart的 --nodaemonize前面加上 --allow-to-run-as-root
# ExecStart=/usr/sbin/php-fpm7.3 --allow-to-run-as-root --nodaemonize...
```

> 执行命令
```bash
# 重新加载所有服务
systemctl daemon-reload

# 重新启动服务
service php7.4-fpm restart

# 查看服务运行情况
ps auwx | grep php

# 如果一直报sqlite不可用，还需要安装相关依赖
sudo apt install php7.4-sqlite3

# 如果你有硬盘，可以挂载
# 编辑开机启动
nano /etc/rc.local
# 加入开机自动挂载
mount /dev/sda1 /mnt
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
                fastcgi_pass unix:/run/php/php7.4-fpm.sock;

        }

}
```

## 使用Docker安装

```bash
# 安装可道云(数据目录为/mnt/kodbox，端口为89)
sudo docker run -itd -p 89:80 -v /mnt/kodbox:/var/www/html --restart=always --name="kodbox" kodcloud/kodbox:v1.19
# 切换目录安装网页文件
cd /mnt/kodbox
# 获取源代码
wget https://static.kodcloud.com/update/download/kodbox.1.20.zip
# 解压到当前目录之中
unzip kodbox.1.20.zip
# 删除当前压缩文件
rm -rf kodbox.1.20.zip
```