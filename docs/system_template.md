# 模板

*视频介绍：https://www.bilibili.com/video/BV1Jv41117T3/*

---

> 模板介绍用例

- 判断和获取实体状态

```bash
{% if is_state('binary_sensor.updater', 'on') %}
    实体的属性为on哦
{% else %}
    实体的状态值：{{ states('binary_sensor.updater') }}
    实体的状态值：{{ states.binary_sensor.updater.state }}
{% endif %}
```

- 判断和获取实体属性

```bash
{% if is_state_attr('binary_sensor.updater', 'newest_version', '0.114.4') %}
    实体属性判断：{{ states.binary_sensor.updater.attributes }}
{% else %}
    获取实体属性值一：{{ state_attr('binary_sensor.updater', 'newest_version') }}
    获取实体属性值二：{{ states['binary_sensor.updater']['attributes']['newest_version'] }}
    获取实体属性值三：{{ states.binary_sensor.updater.attributes.newest_version }}
{% endif %}
```

- 遍历数据

```bash
{% for state in states.sensor %}
  传感器的ID：{{ state.entity_id }}
  传感器的类型：{{ state.domain }}
  传感器的名称：{{ state.name }}
  传感器的状态：{{ state.state }}
  传感器的属性：{{ state.attributes }}
{% endfor %}
```

- 时间

```bash
现在的时间是
{%- if now().hour < 12 -%}
上午
{%- elif now().hour == 12 -%}
中午
{%- elif now().hour <= 18 -%}
下午
{%- else -%}
晚上
{%- endif -%}
{{ now().strftime("%I:%M") }}
```
```bash
# 12小时制
{{ now().strftime("%Y-%m-%d %I:%M:%S") }}
# 24小时制
{{ now().strftime("%Y-%m-%d %H:%M:%S") }}
# 格式化指定时间
{{ strptime("2020-10-10 10:10:10", "%Y-%m-%d %H:%M:%S").strftime("%H:%M:%S") }}
```

- 过滤器

```bash
# 字符串转数字类型
{{ '100.123' | float}}

# 保留小数
{{ 100.123 | round(2) }}

# 组合
{{ '100.123' | float / 100 }}

# 字符串转json对象
{%- set temp = '{"temperature": 25, "unit": "°C"}' | from_json %}
温度：{{ temp.temperature }}{{ temp.unit }}
# json对象转字符串
{{ temp | to_json }}


```

- 距离 `distance(纬度坐标, 经度坐标)`

```bash
坐标与家的距离: {{ distance(123.45, 123.45) }}

和家的距离: {{ distance(states.zone.home) }}

坐标与指定实体的距离: {{ distance(123.45, 123.45, 'zone.home') }}

两个实体之间的距离：{{ distance('device_tracker.anne_therese', 'device_tracker.paulus') }}
```

!> 注意：`-`清除空格

> 相关文档

- https://www.home-assistant.io/docs/configuration/templating/
- http://jinja.pocoo.org/docs/dev/templates/
