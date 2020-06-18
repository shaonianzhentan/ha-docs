# 信息存储

---

```bash
# 安装相关依赖
sudo apt-get install libmariadbclient-dev default-libmysqlclient-dev libssl-dev
```

```yaml
# 信息记录到Mysql数据库
recorder:
  purge_keep_days: 7
  db_url: mysql://user:password@SERVER_IP/DB_NAME?charset=utf8

```

官方配置地址：https://www.home-assistant.io/integrations/recorder/