# Nginx安装

*视频介绍：*

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

