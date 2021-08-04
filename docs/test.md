

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




## 连接蓝牙音箱

https://raspberrypi.stackexchange.com/questions/48140/raspberry-pi-3-connecting-to-bluetooth-audio-device-on-raspbian-jessie/116953

```bash
bluetoothctl

power on

agent on

default-agent

scan on

pair D4:60:75:CA:DF:A7

trust D4:60:75:CA:DF:A7

connect D4:60:75:CA:DF:A7

# 移除设备
remove D4:60:75:CA:DF:A7

# 显示设备信息
info D4:60:75:CA:DF:A7 

# 显示设备
devices


# 显示蓝牙音箱
pactl list sinks



pactl set-default-sink bluez_sink.D4_60_75_CA_DF_A7.a2dp_sink
```