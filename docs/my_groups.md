# 我的分组

---

### 系统监控
```yaml
systemmonitor:
  name: 系统监控
  entities:
    - sensor.local_ip
    - sensor.connected_clients
    - sensor.cpu_temperature
    - sensor.disk_use_percent
    - sensor.disk_use
    - sensor.disk_free
    - sensor.memory_use_percent
    - sensor.memory_use
    - sensor.memory_free
    - sensor.swap_use_percent
    - sensor.swap_use
    - sensor.swap_free
    - sensor.processor_use_percent
    - sensor.last_boot
    - sensor.wan_ip
```

### 云音乐
```yaml
cloudmusic:
  name: 云音乐
  entities:
    - script.yun_yin_le_biao_sheng_bang
    - script.yun_yin_le_xin_ge_bang
    - script.yun_yin_le_re_ge_bang
    - script.yun_yin_le_mei_ri_tui_jian
    - script.yun_yin_le_dou_yin_pai_hang_bang
    - script.wang_yi_dian_tai_song_yu_xuan_du
    - script.wang_yi_dian_tai_qing_song_yi_ke
    - script.xi_ma_la_ya_mo_mo_dao_lai
    - script.xi_ma_la_ya_duan_zi_lai_le
    - script.xi_ma_la_ya_wan_shang_shi_dian
```

### 天猫魔盒
```yaml
tmallbox:
  name: 天猫魔盒
  entities:
    - script.chuang_wei_dian_shi_kai_guan
    - script.tian_mao_mo_he_kai_guan
    - script.yao_kong_left
    - script.yao_kong_right
    - script.yao_kong_up
    - script.yao_kong_down
    - script.yao_kong_select
    - script.yao_kong_home
    - script.yao_kong_back
    - script.yao_kong_menu
    - script.yao_kong_volume_up
    - script.yao_kong_volume_down
```

### 彩灯
```yaml
ircaideng:
  name: 彩灯
  entities:
    - script.cai_deng_on
    - script.cai_deng_off
    - script.cai_deng_mode1
    - script.cai_deng_mode2
    - script.cai_deng_mode3
    - script.cai_deng_mode4
    - script.cai_deng_mode5
    - script.cai_deng_mode6
    - script.cai_deng_mode7
    - script.cai_deng_mode8
```

### 电视应用
```yaml
tvapp:
  name: 电视应用
  entities:
    - script.tvapp_youku
    - script.tvapp_iqiyi
    - script.tvapp_qqtv
```