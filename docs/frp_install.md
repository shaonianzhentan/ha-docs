# 外网访问

*视频介绍：https://www.bilibili.com/video/BV1YK4y1t7x8*

---

## 运行frp服务

> frp配置文件：frpc.ini

```ini
[common]
server_addr = frp1.chuantou.org
server_port = 7000
token = www.xxorg.com

[test-ha]
type = http
local_ip = 127.0.0.1
local_port = 8123
subdomain = test-ha
```
!> 注意：修改配置里的`test-ha`保证其唯一性

> 使用Docker启动frp内网穿透服务

```bash
docker run --restart=always --network host -d -v ~/frpc.ini:/etc/frp/frpc.ini --name frpc snowdreamtech/frpc
```

## 高级配置

> 服务设备配置
```ini

[common]
server_addr = 服务器IP
server_port = 服务器端口
token = Token密钥
tls_enable = true

admin_addr = 127.0.0.1
admin_port = 7400
admin_user = 自定义用户名
admin_pwd = 自定义密码

[secret_ssh]
type = stcp
sk = 客户端自定义密钥
local_ip = 127.0.0.1
local_port = 22

[ha]
type=http
local_ip=127.0.0.1
local_port=88
subdomain=ha

[ha-https]
type=https
plugin = https2http
plugin_local_addr = 127.0.0.1:88
subdomain=ha
plugin_crt_path = /etc/frp/server.crt
plugin_key_path = /etc/frp/server.key
plugin_host_header_rewrite = 127.0.0.1

[ha-nodered]
type=http
local_ip=127.0.0.1
local_port=1880
http_user=自定义用户名
http_pwd=自定义密码
subdomain=ha-nodered

[ha-docker]
type=http
local_ip=127.0.0.1
local_port=9000
http_user=自定义用户名
http_pwd=自定义密码
subdomain=ha-docker

```

> 操作设备配置
```ini
[common]
server_addr = 服务器IP
server_port = 服务器端口
token = Token密钥

[secret_ssh_visitor]
type = stcp
# stcp 的访问者
role = visitor
# 要访问的 stcp 代理的名字
server_name = secret_ssh
sk = 客户端自定义密钥
# 绑定本地端口用于访问 ssh 服务
bind_addr = 127.0.0.1
bind_port = 6000
```

```bash
# 本地通过ssh连接服务设备
ssh -oPort=6000 pi@127.0.0.1
```
