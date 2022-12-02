# MQTT安装

*视频介绍：https://www.bilibili.com/video/bv1MC4y1a7Uj*

---

## Docker 安装
> 运行MQTT服务，同时开启emqx管理端口：18083、MQTT服务端口：1883、websocket端口：8083

```bash
# 用户名：admin 密码：public
docker run -itd --net="host" --restart=always --name="emqx" emqx/emqx:latest
```

!> 注意：有些镜像已经内置了其它的MQTT服务，所以必须要注意1883端口冲突

```bash
# 查看端口使用情况
netstat -anp|grep 1883
```

## 直接安装

```bash
# 安装MQTT服务
# 安装mosquitto开发包
# 安装mosquitto客户端
sudo apt install mosquitto libmosquitto-dev mosquitto-clients -y

# 查询mosquitto是否正确运行
sudo service mosquitto status
```

- 来源：https://blog.csdn.net/mycsdn_liruilin/article/details/88717041

> `mosquitto 2.0版本`之后需要手动允许外部连接

在`/etc/mosquitto/conf.d`中创建文件`allow.conf`
```conf
listener 1883
allow_anonymous true
```
重启服务
```bash
sudo service mosquitto restart
```

--- 

> 相关代码摘要

授权
```js
// 保存用户名密码
fetch('api/v4/auth_username', {
    method: 'POST',
    'content-type': 'application/json;charset=utf-8',
    body: JSON.stringify({
        "username": "emqx_u",
        "password": "emqx_p"
    })
}).then(res=>res.json()).then(console.log)

// 查询所有账号
fetch('api/v4/auth_username', { method: 'GET' }).then(res=>res.json()).then(console.log)

// 更新密码
fetch('api/v4/auth_username/emqx_u', {
    method: 'PUT',
    'content-type': 'application/json;charset=utf-8',
    body: JSON.stringify({
        "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92"
    })
}).then(res=>res.json()).then(console.log)
```

发布订阅 ACL

```bash
# 重启验证模块
emqx_ctl modules reload emqx_mod_acl_internal
```

```js
// 订阅
fetch('api/v4/acl', {
    method: 'POST',
    'content-type': 'application/json;charset=utf-8',
    body: JSON.stringify({
        "username":"test",
        "topic":"conversation/sub/%u",
        "action":"sub",
        "access": "allow"
    })
}).then(res=>res.json()).then(console.log)

// 发布
fetch('api/v4/acl', {
    method: 'POST',
    'content-type': 'application/json;charset=utf-8',
    body: JSON.stringify({
        "username":"test",
        "topic":"conversation/pub/%u",
        "action":"pub",
        "access":"allow"
    })
}).then(res=>res.json()).then(console.log)

// 获取用户名
fetch('api/v4/acl/username', { method: 'GET' }).then(res=>res.json()).then(console.log)

// 删除ACL规则
var username = 'emqx_u'
var topic = encodeURIComponent('conversation/sub/t/%u')
fetch(`api/v4/acl/username/${username}/topic/${topic}`, { method: 'DELETE' }).then(res=>res.json()).then(console.log)
```