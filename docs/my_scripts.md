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

### 天猫魔盒遥控
```yaml
chuang_wei_dian_shi_kai_guan:
  alias: 创维电视开关
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000050025224A0036003E00AC01C312F43301020202000000000002020200000000000002020000000002020000020202020433020477
  mode: single
  icon: mdi:monitor
tian_mao_mo_he_kai_guan:
  alias: 天猫魔盒开关
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000070024224B0032003F00B000E901CD0384121154010101010101010102020202020101020202020102010201010101020102010206530663
  mode: single
  icon: mdi:set-top-box
yao_kong_left:
  alias: 天猫魔盒遥控左键
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000060024224A003800AE00E701CF039E12214300000000000000000101010101000001000101000000000001000001010101010542050E
  mode: single
  icon: mdi:set-top-box
yao_kong_right:
  alias: 天猫魔盒遥控右键
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000070026224D003800AF00E901CD039B1220265E4300000000000000000101010101000001000101010000000001000000010101010542064205D7
  mode: single
  icon: mdi:set-top-box
yao_kong_up:
  alias: 天猫魔盒遥控上键
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000060024224A003700AF00E901CF038E121F430000000000000000010101010100000101010000000001000000010101010001054205FE
  mode: single
  icon: mdi:set-top-box
yao_kong_down:
  alias: 天猫魔盒遥控下键
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000060024224A003700AE00E801CC038D121C430000000000000000010101010100000100010001000000000100010001010101054205F5
  mode: single
  icon: mdi:set-top-box
yao_kong_select:
  alias: 天猫魔盒遥控确定键
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000060024224A003700AF00E901CE038B121A430000000000000000010101010100000100010000000000000100010101010101054205F5
  mode: single
  icon: mdi:set-top-box
yao_kong_home:
  alias: 天猫魔盒遥控HOME键
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000060024224A003700AF00E901CF038E121E430000000000000000010101010100000101010100000001000000000101010001054205FD
  mode: single
  icon: mdi:set-top-box
yao_kong_back:
  alias: 天猫魔盒遥控返回键
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000060024224A003700AE00E901CF038F121C430000000000000000010101010100000101010101000001000000000001010001054205FB
  mode: single
  icon: mdi:set-top-box
yao_kong_menu:
  alias: 天猫魔盒遥控菜单键
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000060024224A003700AE00E601CE038F121A430000000000000000010101010100000100010100010000000100000100010101054205F5
  mode: single
  icon: mdi:set-top-box
yao_kong_volume_up:
  alias: 天猫魔盒遥控音量增加键
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000060024224A003700AE00E801CE0390121D430000000000000000010101010100000101010101010101010000000000000000054205FB
  mode: single
  icon: mdi:set-top-box
yao_kong_volume_down:
  alias: 天猫魔盒遥控音量减少键
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000060024224A003700AE00E601CB0392121D430000000000000000010101010100000101000101010001000001000000010001054205F8
  mode: single
  icon: mdi:set-top-box
```

### 彩灯遥控
```yaml
cai_deng_on:
  alias: 彩灯开
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000070024224B003700AA00E301C6038C0FA5138843000000000000000001010101010101010100010000000100000100010101000105420609
  mode: single
  icon: mdi:string-lights
cai_deng_off:
  alias: 彩灯关
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000080024224C0030004100AE00EC01CC03850FAD13885401010101010101010202020202020202020202010101020101010102020201020653079B
  mode: single
  icon: mdi:string-lights
cai_deng_mode1:
  alias: 彩灯模式1
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000070024224B003700AB00E401CA03920FAB13884300000000000000000101010101010101000001000000010001010001010100010542061B
  mode: single
  icon: mdi:string-lights
cai_deng_mode2:
  alias: 彩灯模式2
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000080024224C0034003C00AB00EC01CA038E0FAB13885401010101010101010202020202020202020201010101020101010202020201020653079C
  mode: single
  icon: mdi:string-lights
cai_deng_mode3:
  alias: 彩灯模式3
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE0000000000000000000000000A00262250000C003700AA00E601C7039004530B4B0ED01388541111111111111111121212121212121212121211111111111111111212121212170653180969
  mode: single
  icon: mdi:string-lights
cai_deng_mode4:
  alias: 彩灯模式4
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000080026224E003700AA00E301C903920FAB138825B1430000000000000000010101010101010101000001000000000001010001010101054207420637
  mode: single
  icon: mdi:string-lights
cai_deng_mode5:
  alias: 彩灯模式5
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000070024224B003700AB00E401C9038F0FA9138843000000000000000001010101010101010001010001000000010000010001010105420615
  mode: single
  icon: mdi:string-lights
cai_deng_mode6:
  alias: 彩灯模式6
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000080026224E003700AA00E401C703910FAC138825B1430000000000000000010101010101010101000101000000000001000001010101054207420636
  mode: single
  icon: mdi:string-lights
cai_deng_mode7:
  alias: 彩灯模式7
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000080026224E003700AB00E501C703930FAB138825B1430000000000000000010101010101010100000101000000000101000001010101054207420639
  mode: single
  icon: mdi:string-lights
cai_deng_mode8:
  alias: 彩灯模式8
  sequence:
  - service: xiaomi_miio_airconditioningcompanion.climate_send_command
    data:
      entity_id: climate.aqara_air_conditioning_companion
      command: FE000000000000000000000000070024224B003700AB00E601CA03910FA913884300000000000000000101010101010101000101010100010001000000000100010542061A
  mode: single
  icon: mdi:string-lights
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