# MQTT传感器

*视频介绍：https://www.bilibili.com/video/BV1Lz411i7v6/*

---

!> 注意：一定要保证`object_id`唯一
```js
// 配置信息
{
    unique_id: "HA-sensor_object_id",
    name: "传感器名称",
    icon: "mdi:battery",
    state_topic: "device20200606/sensor_object_id/state",
    json_attributes_topic: "device20200606/sensor_object_id/attributes",
    unit_of_measurement: "%",
    device: {
        identifiers: "20200606",
        manufacturer: "制造商",
        model: "HA",
        name: "设备名称",
        sw_version: "1.0"
    }
}

// 发送配置的topic
homeassistant/sensor/HA/HA-sensor_object_id/config

// 发送状态的topic
device20200606/sensor_object_id/state

// 发送属性的topic
device20200606/sensor_object_id/attributes

```

官方文档：https://www.home-assistant.io/integrations/sensor.mqtt/