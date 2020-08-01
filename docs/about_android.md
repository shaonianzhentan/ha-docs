# Android小知识

---

## 远程调试
> 注意：需要先下载新版的adb调试器
```bash
# 查看当前连接设备
adb devices

# 设备使用数据线连接到电脑（确保已授权，可连接）
adb tcpip 5555

# 拔掉数据线，执行连接命令，然后就会成功
adb connect 192.168.1.111
```

## 模拟点击
```bash
# 长按10秒（从指定位置滑到指定位置，用时10秒）
adb shell input swipe 500 2100 500 2100 10000 

# 模拟点击屏幕
adb shell input tap 500 2000

# 模拟按键输入
adb shell input keyevent 66
```
- `66`：`回车`
- `62`：`空格`

## 应用程序操作
```bash

# 查看手机屏幕分辨率
adb shell wm size

# 返回
adb shell input keyevent 4

# 增加音量
adb shell input keyevent 24

# 降低音量
adb shell input keyevent 25

# 静音
adb shell input keyevent 164

# 截屏
adb shell screencap /sdcard/screen.png

# 下载指定文件到本地
adb pull /sdcard/screen.png

# 上传文件到Android设备
adb push test.apk /sdcard

# 获得当前活动窗口的信息
adb shell dumpsys window windows

# 查看Android手机当前正在运行的Activity
adb shell dumpsys activity activities
```

## 启动应用

> 手机应用
```bash
# 打开微信
adb shell am start com.tencent.mm/com.tencent.mm.ui.LauncherUI

# 打开爱奇艺
adb shell am start -n com.qiyi.video/org.qiyi.android.video.MainActivity

# 打开QQ
adb shell am start -n com.tencent.mobileqq/.activity.SplashActivity

```
> 电视应用
```bash
# 天猫魔盒主页
am start com.youku.taitan.tv/com.youku.tv.home.activity.HomeActivity

# 奇异果
am start com.gitvdideo.aliapp/com.gala.video.app.epg.HomeActivity

# 腾讯视频
am start com.ktcp.video/.activity.MainActivity

# 哔哩哔哩
am start com.xiaodianshi.tv.yst/.ui.splash.SplashActivity

# 启动Kodi
am start org.xbmc.kodi/.Splash

```
```
# 使用Kodi播放指定视频
am start -a android.intent.action.VIEW -d "http://192.168.1.101/kodi/河神2/第23集/index.m3u8" -t "video/*" -n "org.xbmc.kodi/.Splash"
```