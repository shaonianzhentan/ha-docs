# 我的自动化

---

### 半点报时
```yaml
- id: '1595770838333'
  alias: 半点报时
  description: ''
  trigger:
  - hours: /1
    minutes: /30
    platform: time_pattern
    seconds: '0'
  condition:
  - after: 07:59
    before: '23:01'
    condition: time
  action:
  - data: {}
    service: script.bao_shi
```

### 智能家居系统启动
```yaml
- id: '1594714783803'
  alias: 智能家居系统启动
  description: ''
  trigger:
  - event: start
    platform: homeassistant
  condition: []
  action:
  - data:
      message: 智能家居系统启动成功
    service: ha_cloud_music.tts
  mode: single
```

### 每日闹钟
```yaml
- id: '1604483455480'
  alias: 闹钟
  description: ''
  trigger:
  - platform: time_pattern
    hours: '8'
    seconds: '0'
    minutes: '1'
  condition:
  - condition: time
    weekday:
    - mon
    - tue
    - wed
    - thu
    - fri
  action:
  - service: ha_cloud_music.tts
    data:
      message: 早上好，要起床了哦
  - delay: '6'
  - service: conversation.process
    data:
      text: 播放新闻
  mode: single
```

### 音乐灯光
```yaml
- id: '1608474701341'
  alias: 音乐灯光
  description: ''
  trigger:
  - platform: state
    entity_id: media_player.yun_yin_le
    attribute: entity_picture_local
  condition: []
  action:
  - service: color_extractor.turn_on
    data_template:
      color_extract_url: http://192.168.1.101{{ states.media_player.yun_yin_le.attributes.entity_picture_local }}
      entity_id: light.colorful_light_1
      brightness_pct: 100
      transition: 5
  mode: single
```

### 回家/离家
```yaml
- id: '1577440079771'
  alias: 自动化回家：欢迎回家
  trigger:
  - entity_id: binary_sensor.shou_ji_zai_jia
    from: 'off'
    platform: state
    to: 'on'
  condition:
  - condition: state
    entity_id: light.xiao_mi_deng_pao
    state: 'off'
  - condition: state
    entity_id: light.cai_deng
    state: 'off'
  action:
  - data: {}
    entity_id: light.cai_deng
    service: light.turn_on
  - data: {}
    entity_id: light.xiao_mi_deng_pao
    service: light.turn_on
  - data:
      message: 欢迎回家
    service: ha_cloud_music.tts
  - service: persistent_notification.create
    data:
      message: 欢迎回家
  - data: {}
    entity_id: automation.zi_dong_hua_hui_jia_huan_ying_hui_jia
    service: automation.turn_off
  mode: single
- id: '1577440079772'
  alias: 自动化回家：离家警戒
  description: 晚上6点的时候，如果我不在家，则开启检测回家模式
  trigger:
  - hours: '18'
    minutes: '0'
    platform: time_pattern
    seconds: '0'
  condition:
  - condition: state
    entity_id: binary_sensor.shou_ji_zai_jia
    state: 'off'
  action:
  - data: {}
    entity_id: automation.zi_dong_hua_hui_jia_huan_ying_hui_jia
    service: automation.turn_on
  - data:
      title: 启用欢迎回家模式
      type: state
    service: ha_qqmail.notify
  mode: single
```

### 传感器检测激活开关
```yaml
- id: '1608545642022'
  alias: 传感器检测激活开关
  description: ''
  use_blueprint:
    path: shaonianzhentan/motion_switch.yaml
    input:
      no_motion_wait: '60'
      motion_entity: binary_sensor.0x00158d0003d17638_occupancy
      switch_target:
        entity_id: switch.sonoff_1000b22946
```

### 键盘遥控器
```yaml
- id: '1615040508235'
  alias: 键盘遥控器
  description: ''
  use_blueprint:
    path: shaonianzhentan/keyboard_remote.yaml
    input:
      key_4:
      - service: media_player.media_next_track
        data: {}
        entity_id: media_player.yun_yin_le
      key_8:
      - service: media_player.media_previous_track
        data: {}
        entity_id: media_player.yun_yin_le
      key_16:
      - service: media_player.volume_up
        data: {}
        entity_id: media_player.yun_yin_le
      key_12:
      - service: media_player.volume_down
        data: {}
        entity_id: media_player.yun_yin_le
      key_22:
      - service: media_player.media_play_pause
        data: {}
        entity_id: media_player.yun_yin_le
      key_3:
      - service: script.xiao_ai_zao_shang_hao
      key_7:
      - service: mqtt.publish
        data:
          topic: xiaoai/cmd
          payload: 闭嘴
      key_6:
      - service: mqtt.publish
        data:
          topic: xiaoai/cmd
          payload: 请帮我关闭所有灯
      key_20:
      - service: mqtt.publish
        data:
          topic: xiaoai/cmd
          payload: 小爱同学
```