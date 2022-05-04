

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

```bash
mount /dev/sdb1 /media
pishrink.sh pi.img

```

```bash
sudo mkdir /var/lib/airconnect
cd /var/lib/airconnect
sudo wget https://raw.fastgit.org/philippe44/AirConnect/master/bin/airupnp-arm && sudo chmod +x airupnp-arm

sudo nano /etc/systemd/system/airupnp.service
```

https://github.com/philippe44/AirConnect


```bash
sudo apt-get install netatalk avahi-daemon
```

```bash
auth reset --username 用户名 --password 新密码

hass --script  auth list

hass --script  auth change_password 用户名 新密码
```


```bash
# 打开前端库
cd /usr/local/lib/python3.9/site-packages/hass_frontend/

grep -rnl 'recognition.lang="en-US"' *

frontend_es5/3742bad2.js
frontend_latest/bc21e120.js

# 替换
sed -i 's/recognition.lang="en-US"/recognition.lang="zh-CN"/g' frontend_es5/3742bad2.js
sed -i 's/recognition.lang="en-US"/recognition.lang="zh-CN"/g' frontend_latest/bc21e120.js

# 移除压缩文件
rm -rf frontend_es5/3742bad2.js.gz
rm -rf frontend_latest/bc21e120.js.gz
```