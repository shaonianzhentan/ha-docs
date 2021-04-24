# Android小知识

---

## 安装

- 官方文档：https://developer.android.com/studio/command-line/adb?hl=zh-cn

```bash
sudo apt-get install android-tools-adb -y
```


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
# 模拟输入文本
adb shell input text hello

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

```bash
# 下载到本地
adb shell screencap /sdcard/screen.png && adb pull /sdcard/screen.png
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

# 打开KiwiBrowser
adb shell am start -n com.kiwibrowser.browser/org.chromium.chrome.browser.ChromeTabbedActivity
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

天猫魔盒
```bash

# 天猫魔盒主页
adb shell am start com.youku.taitan.tv/com.youku.tv.home.activity.HomeActivity

# 天气应用
adb shell am start com.youku.taitan.tv/com.youku.tv.smartHome.weather.WeatherActivity


adb shell am start com.youku.taitan.tv/com.youku.tv.smartHome.SmartHomeActivity

adb shell am start com.youku.taitan.tv/com.youku.tv.iot.activity.IoTInfoActivity

# 观看历史
adb shell am start com.youku.taitan.tv/com.youku.tv.userdata.MyYingshiActivity

# 随机播放电视
adb shell am start com.youku.taitan.tv/com.youku.tv.carouse.CarouselDetailActivity

# 应用中心
adb shell am start com.youku.taitan.tv/com.youku.tv.yingshi.boutique.bundle.appstore.activity.AppHomeActivity

# 搜索
adb shell am start com.youku.taitan.tv/com.yunos.tv.yingshi.activity.SearchActivity

# 热播
adb shell am start com.youku.taitan.tv/com.youku.tv.hotList.activity.HotListActivity

# 奇怪的调试界面
adb shell am start com.youku.taitan.tv/com.yunos.tv.app.remotecontrolserver.diagnostic.ui.DiagActivity



adb shell am start -a android.intent.action.MAIN -n com.youku.taitan.tv/com.youku.tv.detail.activity.DetailActivity -d yunostv_yingshi://yingshi_detail/?id=233508&showType=4&showStrId=cbcb9fd84b0e4cdebf60&isfull=false&title=我是女演员&from=9&subItem=20210417&isBackYingHome=false&isBackLastActivity=false&fromApp=com.youku.taitan.tv

adb shell am start -a android.intent.action.MAIN -n com.youku.taitan.tv/com.youku.tv.home.activity.HomeActivity -d yunostv_yingshi://yingshi_home -f 0x10000000

adb shell am start -a android.intent.action.MAIN -n com.youku.taitan.tv/com.youku.tv.detail.activity.DetailActivity -d yunostv_yingshi://yingshi_detail/?id=226555&showType=3&from=tvsearch&sourceFrom=9&from_self=com.yunos.tv.universalsearch

adb shell am start -a android.intent.action.MAIN -n com.youku.taitan.tv/com.youku.tv.detail.activity.DetailActivity -d yunostv_yingshi://yingshi_detail/?id=1284299142

> 奇异果

```bash

adb shell am start -a android.intent.action.MAIN -n com.gitvdideo.aliapp/com.gala.video.app.epg.HomeActivity

# 搜索
adb shell am start -a android.intent.action.MAIN -n com.gitvdideo.aliapp/com.gala.video.app.epg.ui.search.QSearchActivity

com.gala.video.app.albumdetail.AlbumDetailActivity

com.gala.video.app.epg.ui.search.QSearchActivity

com.gala.video.app.albumdetail.MultiProcAlbumDetailActivity

com.gala.video.app.epg.ui.allview.AllViewActivity

com.gala.video.app.epg.ui.sl.SLVideoActivity

com.gala.video.app.epg.LoadingActivity

com.gala.video.app.epg.ui.supermovie.SuperMovieActivity

com.gala.video.app.epg.uikit.ui.multisubject.MultiSubjectActivity

com.gala.video.cp.RemoteContentProvider

adb shell am start -a android.intent.action.MAIN -n com.gitvdideo.aliapp/com.gala.video.app.epg.HomeActivity -d igala://com.gala.video/detail?id=2258


adb shell am broadcast -a com.gitvdemo.video.action.ACTION_ENTER -c android.intent.category.DEFAULT -d igala://com.gala.video/detail?id=3517998595930601

http://itv.ptqy.gitv.tv/api/suggest?u=tv_32ad0e58dc7b1a8d481cf0904f1e3ef9&pu=&key=ST


adb shell am start -a android.intent.action.VIEW -d "iqiyi://mobile/player?tvid=8891707610250800"
```

##  APK反编译工具
```bash
# APK反编译工具
sudo apt install apktool -y

# 反编译apk文件
apktool d xxx.apk

adb logcat
```