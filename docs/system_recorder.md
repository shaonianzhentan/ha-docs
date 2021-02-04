# 信息存储

---

> 安装与配置

```bash
# 安装相关依赖
sudo apt-get install libmariadbclient-dev default-libmysqlclient-dev libssl-dev -y

pip3 install mysqlclient
```

```yaml
# 信息记录到Mysql数据库
recorder:
  purge_keep_days: 7
  db_url: mysql://user:password@SERVER_IP/DB_NAME?charset=utf8

```

官方配置地址：https://www.home-assistant.io/integrations/recorder/

> `mysql8.0`及以后修改密码方法

```bash
# 使用root的空密码进入mysql
mysql -u root -p

# mysql修改root账号密码方法1
alter user'root'@'localhost' identified by '新密码';
# mysql修改root账号密码方法2
alter user'root'@'localhost' identified with mysql_native_password by '新密码';

# 查看加密后的密码
select authentication_string from user where user='root'
```