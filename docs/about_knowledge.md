# 小知识


## Git

- 接口信息：https://api.github.com/repos/shaonianzhentan/ha_cloud_music/releases/latest

## 录屏

```bash
# 显示设备
ffmpeg -list_devices true -f dshow -i dummy

# 录制桌面（30帧）
ffmpeg -f gdigrab -framerate 30 -i desktop -f mp4 output.mp4

# 录制桌面+声音
ffmpeg -f gdigrab -framerate 30 -i desktop -f dshow -i audio="麦克风阵列 (Realtek(R) Audio)" -f mp4 output.mp4
```
- https://trac.ffmpeg.org/wiki/Capture/Desktop

!> 注意：视频播放推荐使用`VLC播放器`，如果卡顿建议`减少帧率`
