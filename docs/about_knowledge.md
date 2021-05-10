# 小知识

## 录屏

```bash
# 显示设备
ffmpeg -list_devices true -f dshow -i dummy

# 录制桌面（30帧）
ffmpeg -f gdigrab -framerate 30 -i desktop -f mp4 output.mp4

# 录制桌面+声音
ffmpeg -f gdigrab -framerate 15 -i desktop -f dshow -i audio="麦克风阵列 (Realtek(R) Audio)" -f mp4 output.mp4

# 指定不同的录音设备
ffmpeg -f gdigrab -framerate 15 -i desktop -f dshow -i audio="麦克风 (EDIFIER W800BT Hands-Free AG Audio)" -f mp4 output.mp4

# 因为4k导致手机无法播放，所以需要缩放至1080p
#（-vf scale=1920:1080,setsar=1:1 ）
ffmpeg -f gdigrab -framerate 15 -i desktop -f dshow -i audio="麦克风阵列 (Realtek(R) Audio)" -f mp4 -vf scale=1920:1080,setsar=1:1 output.mp4

```
- https://trac.ffmpeg.org/wiki/Capture/Desktop

!> 注意事项：
<br/>录完了的视频打不开，推荐使用`VLC播放器`打开，如果卡顿建议`减少帧率`
<br/>也可以使用`格式转换工具`进行转码操作 [Windows应用 - 格式工厂](https://www.microsoft.com/zh-cn/p/%e6%a0%bc%e5%bc%8f%e5%b7%a5%e5%8e%82-%e8%a7%86%e9%a2%91%e5%89%aa%e8%be%91%e6%a0%bc%e5%bc%8f%e5%b7%a5%e5%8e%82%e6%a0%bc%e5%bc%8f%e8%bd%ac%e6%8d%a2/9npsx9n4t3tj#activetab=pivot:overviewtab)

## 查看运行日志
```bash
# 实时查看服务日志
journalctl -u home-assistant@pi.service -f
```

## 使用curl发送HTTP请求
```bash
curl -X POST -H "Authorization: Bearer 令牌凭据" \
  -H "Content-Type: application/json;charset=GBK" \
  -d '{"text": "切换彩灯"}' \
  http://192.168.1.101:8123/api/services/conversation/process
```
!> 注意：各个系统换行符标识`\`可能会有区别，在运行时一定要注意

## 网站收集

> 文件临时下载
- https://d.serctl.com/
- http://toolwa.com/github/
- https://gh.api.99988866.xyz/
- https://ghproxy.com/
- http://gitd.cc/
- https://github.zhlh6.cn/

## Android通知转发

> 标题`title: %TITLE`，内容`content: $CONTENT`
- https://www.coolapk.com/apk/com.example.junnan.xiaozhuanfa

!> URL地址：http://192.168.1.101:8123/api/webhook/123456 ，这里的`123456`是自动化里配置的

> 配置自动化
```yaml
- id: '1616035392522'
  alias: Android通知转发地址
  description: ''
  trigger:
  - platform: webhook
    webhook_id: '123456'
  condition: []
  action:
  - service: persistent_notification.create
    data:
      message: '{% for key in  trigger.data -%}{{ key }}:{{ trigger.data[key] }},{%- endfor %}'
  mode: single
```

## 解决HACS下载很慢的问题

> hacs/helpers/functions/download.py `_LOGGER.debug("Downloading %s", url)`
```python
    if "https://raw.githubusercontent.com" in url:
        arr = url.replace("https://raw.githubusercontent.com/", "").split('/')
        arr[1] = arr[1] + '@' + arr[2]
        arr[2] = ''
        _list = ["https://cdn.jsdelivr.net/gh"]
        for item in arr:
            if item != '':
                _list.append(item)
        url = '/'.join(_list)
        _LOGGER.debug("下载链接： %s", url)
```

## 启动ssh服务 
```bash
sudo service ssh start
```