# 外网访问
---

## 运行frp服务

> frp配置文件：frpc.ini

```ini
[common]
server_addr = frp1.chuantou.org
server_port = 7000
privilege_token = www.xxorg.com
user = test-ha

[test-ha]
type = http
local_ip = 127.0.0.1
local_port = 80
subdomain = test-ha
```

> 使用Docker启动frp内网穿透服务

```bash
docker run --restart=always --network host -d -v ~/frpc.ini:/etc/frp/frpc.ini --name frpc snowdreamtech/frpc
```