# 网易云音乐

*视频介绍：*

---

## 安装接口

> 网易云音乐API

官方文档：https://binaryify.github.io/NeteaseCloudMusicApi/

```bash
docker run -d -p 3000:3000 --name netease_cloud_music_api    binaryify/netease_cloud_music_api
```


> 配置反向代理给外网访问`如果没这个需求可以不用配置`

*配置文件：/etc/nginx/conf.d/root.conf*

```nginx
server {
    listen          88;
    server_name localhost;

    location /163/ {
            proxy_pass  http://localhost:3000/;
    }
}
```

## 安装插件

> 插件配置

源码地址：https://github.com/shaonianzhentan/ha_cloud_music