# 我的脚本

---

### 报时
```yaml
bao_shi:
  alias: 报时
  mode: single
  sequence:
  - data:
      message: 现在的时间是
        {%- if now().hour < 12 -%} 上午
        {%- elif now().hour == 12 -%} 中午
        {%- elif now().hour <= 18 -%} 下午
        {%- else -%} 晚上 {%- endif %}
        {{now().strftime("%I:%M")}}
    service: ha_cloud_music.tts
```

### 天气预报
```yaml
tian_qi_yu_bao:
  alias: 天气预报
  mode: single
  sequence:
  - data:
      message: ->
        {% set state = state_attr(''weather.tian_qi'', ''forecast'') %}
        今天的天气是{{state[0].condition_cn}}，最高温度：{{state[0].temperature}}度，最低温度：{{state[0].templow}}度，
        明天的天气是{{state[1].condition_cn}}，最高温度：{{state[1].temperature}}度，最低温度：{{state[1].templow}}度，
        后天的天气是{{state[2].condition_cn}}，最高温度：{{state[2].temperature}}度，最低温度：{{state[2].templow}}度
    service: ha_cloud_music.tts
```

### 云音乐
```yaml
yun_yin_le_biao_sheng_bang:
  alias: 云音乐飙升榜
  sequence:
  - service: ha_cloud_music.load
    data:
      type: playlist
      id: '19723756'
  mode: single
  icon: mdi:music
yun_yin_le_xin_ge_bang:
  alias: 云音乐新歌榜
  sequence:
  - service: ha_cloud_music.load
    data:
      type: playlist
      id: '3779629'
  mode: single
  icon: mdi:music
yun_yin_le_re_ge_bang:
  alias: 云音乐热歌榜
  sequence:
  - service: ha_cloud_music.load
    data:
      type: playlist
      id: '3778678'
  mode: single
  icon: mdi:music
yun_yin_le_mei_ri_tui_jian:
  alias: 云音乐每日推荐
  sequence:
  - service: ha_cloud_music.load
    data:
      type: playlist
      id: '3136952023'
  mode: single
  icon: mdi:music
yun_yin_le_dou_yin_pai_hang_bang:
  alias: 云音乐抖音排行榜
  sequence:
  - service: ha_cloud_music.load
    data:
      type: playlist
      id: '2250011882'
  mode: single
  icon: mdi:music
wang_yi_dian_tai_song_yu_xuan_du:
  alias: 网易电台宋宇选读
  sequence:
  - service: ha_cloud_music.load
    data:
      type: djradio
      id: '332398053'
  mode: single
  icon: mdi:music-circle
wang_yi_dian_tai_qing_song_yi_ke:
  alias: 网易电台轻松一刻
  sequence:
  - service: ha_cloud_music.load
    data:
      type: djradio
      id: '1008'
  mode: single
  icon: mdi:music-circle
xi_ma_la_ya_mo_mo_dao_lai:
  alias: 喜马拉雅默默道来
  sequence:
  - service: ha_cloud_music.load
    data:
      type: ximalaya
      id: '258244'
  mode: single
  icon: mdi:music-box
xi_ma_la_ya_duan_zi_lai_le:
  alias: 喜马拉雅段子来了
  sequence:
  - service: ha_cloud_music.load
    data:
      type: ximalaya
      id: '203355'
  mode: single
  icon: mdi:music-box
xi_ma_la_ya_wan_shang_shi_dian:
  alias: 喜马拉雅晚上十点
  sequence:
  - service: ha_cloud_music.load
    data:
      type: ximalaya
      id: '11037095'
  mode: single
  icon: mdi:music-box
```

### 打开电视应用
```yaml
tvapp_youku:
  sequence: []
  mode: single
  alias: 打开优酷
tvapp_iqiyi:
  sequence: []
  mode: single
  alias: 打开爱奇艺
tvapp_qqtv:
  sequence: []
  mode: single
  alias: 打开腾讯视频
```

### 电视盒子联动开关
```yaml
yao_kong_power_off:
  alias: 关闭电视
  sequence:
  - service: script.tian_mao_mo_he_kai_guan
    data: {}
  - delay:
      hours: 0
      minutes: 0
      seconds: 8
      milliseconds: 0
  - service: script.chuang_wei_dian_shi_kai_guan
    data: {}
  mode: single
  icon: mdi:monitor
yao_kong_power_on:
  alias: 打开电视
  sequence:
  - service: script.tian_mao_mo_he_kai_guan
    data: {}
  - delay:
      hours: 0
      minutes: 0
      seconds: 5
      milliseconds: 0
  - service: script.chuang_wei_dian_shi_kai_guan
    data: {}
  mode: single
  icon: mdi:monitor
```

### 小米平板MQTT控制
```yaml
'1612084313173':
  alias: 把平板调暗=把小米平板调暗=把平板调暗一点
  sequence:
  - service: mqtt.publish
    data:
      topic: android/13e6af99/set
      payload: 'brightness: 10'
  mode: single
  icon: mdi:tablet-ipad
'1612084313174':
  alias: 把平板调亮=把小米平板调亮=把平板调亮一点
  sequence:
  - service: mqtt.publish
    data:
      topic: android/13e6af99/set
      payload: 'brightness: 200'
  mode: single
  icon: mdi:tablet-ipad
'1612084313175':
  alias: 把平板调到最亮=把小米平板调到最亮
  sequence:
  - service: mqtt.publish
    data:
      topic: android/13e6af99/set
      payload: 'brightness: 255'
  mode: single
  icon: mdi:tablet-ipad
```

### 智能音箱控制命令
```yaml
'1617509246028':
  alias: 小度音箱电视开关
  sequence:
  - service: mqtt.publish
    data:
      topic: xiaodu/cmd
      payload: 打开天猫魔盒,打开创维电视
  mode: single
  icon: mdi:microphone
xiao_du_zao_shang_hao:
  alias: 小度早上好
  sequence:
  - service: mqtt.publish
    data:
      topic: xiaodu/box
      payload: 早上好
  mode: single
  icon: mdi:microphone
xiao_ai_zao_shang_hao:
  alias: 小爱早上好
  sequence:
  - service: mqtt.publish
    data:
      topic: xiaoai/cmd
      payload: 早上好
  mode: single
  icon: mdi:microphone
```