# Kodi视频播放器

*视频介绍：https://www.bilibili.com/video/BV17D4y1S7HE/*

---

## 安装

```bash
# 安装kodi播放器
sudo apt install kodi -y

# 安装IPTV插件
sudo apt install kodi-pvr-iptvsimple -y
```
下载地址: http://mirrors.kodi.tv/releases/

## HomeAssistant配置

```yaml

media_player:
  - platform: kodi
    host: IP_ADDRESS
```

配置参考文档: https://www.home-assistant.io/integrations/kodi/


## 设置视频缓存

> 配置文件`advancedsettings.xml`
```xml
<advancedsettings>
  <cache>
    <buffermode>1</buffermode>
    <memorysize>139460608</memorysize>
    <readfactor>20</readfactor>
  </cache>
</advancedsettings>
```
> 存放路径
- Linux：`~/.kodi/userdata/`
- Windows：`%APPDATA%\kodi\userdata`
- Android：`Android/data/org.xbmc.kodi/files/.kodi/userdata/`
- iOS：`/private/var/mobile/Library/Preferences/Kodi/userdata/`

## 相关方法

> 调用服务`kodi.call_method`
```yaml
# 选择集数
method: Player.Open
item:
  playlistid: 1
  position: 31

# 播放/暂停
method: Player.Open
playerid: 1
```

> 获取kodi列表
```js
fetch('http://localhost:8080/jsonrpc?PlaylistCollection', {
    method:'POST', 
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        "jsonrpc":"2.0",
        "method":"Playlist.GetItems",
        "id": Date.now(),
        "params": {
            "playlistid":1,
            "properties": ["title","thumbnail","file","artist","genre","year","rating","album","track","duration","playcount","dateadded","episode","artistid","albumid","tvshowid"],
            "limits":{"start":0}
        }
    })
}).then(res=>res.json()).then(res=>{
  res.result.items.forEach(ele => {
    // 显示列表
  })
})
```