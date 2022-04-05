
[TileBoard磁贴面板](https://github.com/resoai/TileBoard)
```bash
cd ~/homeassistant/www/

wget https://hub.fastgit.org/resoai/TileBoard/releases/download/v2.7.0/TileBoard.zip

unzip TileBoard.zip -d TileBoard
```

触发事件
```yaml
# 刷新页面
command: refresh_page

# 启动屏保
command: screen_saver

# 清除通知
command: clear_notify

# 通知
command: notify
id: 'PC2'
icon: 'mdi-desktop-tower'
type: 'info'
title: '待办事项'
message: '您有一条消息，别忘记需要处理了哦'

# 文本转语音
command: tts
text: 使用浏览器内置的TTS服务
```

```yaml
# 播放链接
command: audio
url: https://music.163.com/song/media/outer/url?id=1840459406.mp3

# 播放
command: audio
type: play

# 暂停
command: audio
type: pause

# 重新播放
command: audio
type: reload

# 音量+
command: audio
type: volume_up

# 音量-
command: audio
type: volume_down

# 音量设置（0-100）
command: audio
type: volume_set
volume: 100

```

Aria2下载面板
```bash

cd ~/homeassistant/www/AriaNg

wget https://hub.fastgit.org/mayswind/AriaNg/releases/download/1.2.2/AriaNg-1.2.2-AllInOne.zip

unzip AriaNg-1.2.2-AllInOne.zip
```