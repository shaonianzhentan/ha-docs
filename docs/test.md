

# 电视信息
http://xinqi.if.iqiyi.com/fenghuolun/v2?name=河神2

# 剧集列表 `aid=album_id`
https://pcw-api.iqiyi.com/albums/album/avlistinfo?aid=217146601&page=1&size=999&callback=

# 获取剧集信息
https://api.bilibili.com/pgc/web/season/section?season_id=33378


# 获取播放地址
https://api.bilibili.com/pgc/player/web/playurl?cid=183362119&avid=710444604&qn=64&otype=json&player=1&fnval=2&fnver=0&ep_id=321808

# 番剧搜索
https://api.bilibili.com/x/web-interface/search/type?context=&search_type=media_bangumi&order=&keyword=名侦探柯南

# 资源搜索
https://api.okzy.tv/api.php/provide/vod/at/json/?ac=detail&wd=大秦赋



是dns解析问题，在/etc/resolv.conf中，添加我的网关：192.168.100.1

在文件中添加：

nameserver 192.168.100.1

现在再ping baidu.com

https://www.cnblogs.com/vastiny/p/3900204.html


```bash
sudo cp /home/pi/homeassistant/backup/nodered/flows.json /root/.node-red/flows.json 
sudo cp /home/pi/homeassistant/backup/nodered/settings.js /root/.node-red/settings.js
sudo cp /home/pi/homeassistant/backup/nodered/flows_cred.json /root/.node-red/flows_cred.json
```

frpc.ini配置

"W2NvbW1vbl0Kc2VydmVyX2FkZHI9aGFjaGluYWZycHMuZHVja2Rucy5vcmcKc2VydmVyX3BvcnQ9NzAwMAp0b2tlbj01ZGE1NWQ1MTIxNjFlYTc3NGNiNTZkNzI5MTNhM2FlZAoKW2hhc3MtdGVzdDEyM10KdHlwZSA9IGh0dHAKbG9jYWxfcG9ydCA9IDgwCnN1YmRvbWFpbiA9IGhhc3MtdGVzdDEyMwoKaGFzcy10ZXN0MTIzLmhhY2hpbmEuODAyMTU0LmNvbQ=="


50自行摸索版，就是目前的最新版本，不包含安装指导和咨询
88体验版，就是目前的最新版本，没有后续更新
188持续更新版，后续镜像也会持续更新维护

以上都包含镜像的安装指导和咨询，制作不易，还请理解

```bash
mount /dev/sdc1 /media
pishrink.sh pi.img
```