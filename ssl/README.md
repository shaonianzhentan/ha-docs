# 局域网内搭建浏览器可信任的SSL证书

来源：https://www.tangyuecan.com/2021/12/17/局域网内搭建浏览器可信任的ssl证书/


切换到nginx配置目录
```bash
cd /etc/nginx

mkdir ssl
# 写入内容
nano openssl.cnf
```

生成客户端证书
```bash
openssl genrsa -out myCA.key 2048

openssl req -subj "/C=CN/ST=Shanghai/L=Shanghai/O=HA/OU=HomeAssistant/CN=home-assistant.local/emailAddress=65147515@qq.com" -new -x509 -key myCA.key -out myCA.cer -days 36500
```

> 生成服务器证书
```bash
openssl genrsa -out server.key 2048

openssl req -config openssl.cnf -new -out server.req -key server.key

openssl x509 -req  -extfile openssl.cnf -extensions v3_req -in server.req -out server.cer -CAkey myCA.key -CA myCA.cer -days 36500 -CAcreateserial -CAserial serial
```

---


C:\Windows\System32\drivers\etc\hosts

```yaml
192.168.1.26                ha.home-assistant.local
```