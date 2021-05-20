# 我的配置

---

### 基础配置
```yaml
# 自定义
homeassistant:
  customize: !include customize.yaml
python_script:
# 语音控制
conversation:
# 颜色提取器
color_extractor:
# 日志
logger:
  default: info
  logs:
    # 内置组件开启调试信息
    homeassistant.components.keyboard_remote: debug
    # 第三方组件开启调试信息
    custom_components.conversation: debug
```

### 系统监控
```yaml
sensor:
  # 显示有多少客户端连接
  - platform: websocket_api
  - platform: rest
    name: wan_ip
    resource: https://www.ip.cn/api/index?ip=&type=0
    value_template: '{{ value_json.ip }}'
    json_attributes:
      - address
    scan_interval: 600
  - platform: command_line
    name: CPU Temperature
    command: "cat /sys/class/thermal/thermal_zone0/temp"
    unit_of_measurement: "°C"
    value_template: '{{ value | multiply(0.001) | round(1) }}'
  # 系统监控
  - platform: systemmonitor
    resources:
      - type: disk_use_percent
        arg: /
      - type: disk_use
        arg: /
      - type: disk_free
        arg: /
      - type: memory_use_percent
      - type: memory_use
      - type: memory_free
      - type: swap_use_percent
      - type: swap_use
      - type: swap_free
      - type: processor_use
      - type: last_boot
```

### 自定义数据库
```yaml
recorder:
  # 记录多少天的数据
  purge_keep_days: 2
  db_url: mysql://用户名:密码@服务器地址:3306/数据库名称?charset=utf8
```

### 键盘遥控器
```yaml
keyboard_remote:
  - device_descriptor: /dev/input/event3
    type:
      - key_down
```