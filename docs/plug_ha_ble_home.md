## 蓝牙服务 - room-assistant

*视频介绍：https://www.bilibili.com/video/BV1cT4y1T7ec/*

官网：https://www.room-assistant.io/

我的配置
```yaml
global:
  integrations:
    - homeAssistant
    - bluetoothClassic
    - bluetoothLowEnergy
    - xiaomiMi
homeAssistant:
  mqttUrl: mqtt://localhost:1883
bluetoothClassic:
  addresses:
    - 'a8:9c:ed:f0:e2:97'
bluetoothLowEnergy:
  whitelist:
    - a89cedf0e297
xiaomiMi:
  sensors:
    - name: livingroom
      address: 4c65a8ddf5c2
```

```bash
# 重启服务
systemctl restart room-assistant.service
# 查看服务状态
systemctl status room-assistant.service


# 激活蓝牙
hciconfig hci0 up
# 关闭蓝牙
hciconfig hci0 down
# 扫描蓝牙
hcitool scan
# 查看蓝牙设备信息
hciconfig
```

```bash
rfcomm bind /dev/rfcomm0 50:D2:F5:56:2D:DB
```

## 蓝牙在家（不推荐）

*视频介绍：https://www.bilibili.com/video/BV1MV411671Y/*

---

```bash
git clone https://github.com.cnpmjs.org/shaonianzhentan/ha_ble_home
```

源码地址：https://github.com/shaonianzhentan/ha_ble_home
