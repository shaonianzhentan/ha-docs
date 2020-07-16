# 键盘遥控器

*视频介绍：*

---

> 官方配置

```bash

keyboard_remote:
 - device_descriptor: '/dev/input/event3'
   type: 'key_down'

```

- https://www.home-assistant.io/integrations/system_keyboard_remote

> 测试键盘设备
```bash
# 安装input-utils
sudo apt-get install input-utils

# 列出所有输入设备
sudo lsinput

# 查看设备信息（这里的数字3指的是：/dev/input/event3 ）
sudo input-events 3
```
