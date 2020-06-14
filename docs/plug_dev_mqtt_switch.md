# MQTT开关

*视频介绍：https://www.bilibili.com/video/BV1rp4y1D7Un/*

---

!> 注意：一定要保证`object_id`唯一 。`optimistic`的值会影响开关实际的控制逻辑
```js
// 配置信息
{
    unique_id: "HA-switch_object_id",
    name: "开关名称",
    icon: "mdi:electric-switch",
    state_topic: "device20200606/switch_object_id/state",
    json_attributes_topic: "device20200606/switch_object_id/attributes",
    command_topic: "device20200606/switch_object_id/set",
    optimistic: false,
    device: {
        identifiers: "20200606",
        manufacturer: "制造商",
        model: "HA",
        name: "设备名称",
        sw_version: "1.0"
    }
}

// 发送配置的topic
homeassistant/switch/HA/HA-switch_object_id/config

// 发送状态的topic
device20200606/switch_object_id/state

// 发送属性的topic
device20200606/switch_object_id/attributes

```

官方文档：https://www.home-assistant.io/integrations/switch.mqtt/