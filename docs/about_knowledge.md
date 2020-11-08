# 小知识


## Git

- 接口信息：https://api.github.com/repos/shaonianzhentan/ha_cloud_music/releases/latest

## 录屏

```bash
# 显示设备
ffmpeg -list_devices true -f dshow -i dummy

# 录制桌面（30帧）
ffmpeg -f gdigrab -framerate 30 -i desktop output.mkv

# 录制桌面+声音
ffmpeg -f gdigrab -framerate 30 -i desktop -f dshow -i audio="麦克风阵列 (Realtek(R) Audio)" output.mkv
```
- https://trac.ffmpeg.org/wiki/Capture/Desktop
