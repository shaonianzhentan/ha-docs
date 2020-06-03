# 系统信息查看

*视频介绍：https://www.bilibili.com/video/BV1MA411q7zs*

---

> 配置文件：`configuration.yaml`
```yaml
# 加载自定义配置文件
homeassistant:
  customize: !include customize.yaml

# 传感器配置
sensor:
  # 系统日期时间
  - platform: time_date
    display_options:
      - date
      - time
  # 显示有多少客户端连接
  - platform: websocket_api
  #　CPU 温度
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
      - type: load_1m
      - type: load_5m
      - type: load_15m
      - type: network_in
        arg: eth0
      - type: network_out
        arg: eth0
      - type: throughput_network_in
        arg: eth0
      - type: throughput_network_out
        arg: eth0
      - type: packets_in
        arg: eth0
      - type: packets_out
        arg: eth0
      - type: ipv4_address
        arg: eth0
      - type: ipv6_address
        arg: eth0
```
!> 注意：`eth0`是有线网口，无线网卡的名称一般是`wlan0`，可以通过`ifconfig`命令查看

> 分组配置文件：`groups.yaml`
```yaml

systemmonitor:
  name: 系统监控
  entities:
    - sensor.date
    - sensor.time
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
    - sensor.processor_use
    - sensor.last_boot
    - sensor.load_1m
    - sensor.load_5m
    - sensor.load_15m
    - sensor.network_in_eth0
    - sensor.network_out_eth0
    - sensor.network_throughput_in_eth0
    - sensor.network_throughput_out_eth0
    - sensor.packets_in_eth0
    - sensor.packets_out_eth0
    - sensor.ipv4_address_eth0
    - sensor.ipv6_address_eth0
```

> 自定义配置文件：`customize.yaml`
```yaml

sensor.date:
  friendly_name: 日期
sensor.time:
  friendly_name: 时间
sensor.connected_clients:
  friendly_name: 客户端数量
sensor.disk_use_percent:
  friendly_name: 磁盘使用占比
sensor.disk_use:
  friendly_name: 磁盘使用
sensor.disk_free:
  friendly_name: 磁盘空闲
sensor.memory_use_percent:
  friendly_name: 内存使用占比
sensor.memory_use:
  friendly_name: 内存使用
sensor.memory_free:
  friendly_name: 内存空闲
sensor.swap_use_percent:
  friendly_name: 交换分区使用占比
sensor.swap_use:
  friendly_name: 交换分区使用
sensor.swap_free:
  friendly_name: 交换分区空闲
sensor.processor_use:
  friendly_name: 处理器使用
sensor.last_boot:
  friendly_name: 开机时间
sensor.cpu_temperature:
  friendly_name: CPU温度
sensor.network_in_eth0:
  friendly_name: 网络下载eth0
sensor.network_out_eth0:
  friendly_name: 网络上传eth0
sensor.network_throughput_in_eth0:
  friendly_name: 网络下载速度eth0
sensor.network_throughput_out_eth0:
  friendly_name: 网络上传速度eth0
sensor.packets_in_eth0:
  friendly_name: 数据包接收
sensor.packets_out_eth0:
  friendly_name: 数据包发送
sensor.ipv4_address_eth0:
  friendly_name: IPV4地址eth0
sensor.ipv6_address_eth0:
  friendly_name: IPV6地址eth0
```