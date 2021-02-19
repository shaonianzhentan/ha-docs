# MQTT灯光

*视频介绍：https://www.bilibili.com/video/BV1fV411r7xQ/*

---

!> 注意：一定要保证`object_id`唯一
```js
// 配置信息
{
    unique_id: "HA-light_object_id",
    name: "电灯",
    state_topic: "device20200606/light_object_id/state",
    command_topic: "device20200606/light_object_id/set",
    brightness_state_topic: "device20200606/light_object_id/brightness/status",
    brightness_command_topic: "device20200606/light_object_id/brightness/set",
    rgb_state_topic: "device20200606/light_object_id/rgb/status",
    rgb_command_topic: "device20200606/light_object_id/rgb/set",
    color_temp_state_topic: "device20200606/light_object_id/color_temp/status",
    color_temp_command_topic: "device20200606/light_object_id/color_temp/set",   
    json_attributes_topic: "device20200606/light_object_id/attributes",
    effect_list: ["模式一", "模式二"],
    effect_state_topic: "device20200606/light_object_id/effect/state",
    effect_command_topic: "device20200606/light_object_id/effect/set",
    optimistic: true,
    device: {
        identifiers: "20200606",
        manufacturer: "制造商",
        model: "HA",
        name: "设备名称",
        sw_version: "1.0"
    }
}

// 发送配置的topic
homeassistant/light/HA/HA-light_object_id/config

// 发送状态的topic
device20200606/light_object_id/state

// 发送属性的topic
device20200606/light_object_id/attributes

```

官方文档：https://www.home-assistant.io/integrations/light.mqtt/
