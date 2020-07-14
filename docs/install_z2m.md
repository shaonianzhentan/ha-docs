# zigbee2mqtt安装

*视频介绍：https://www.bilibili.com/video/bv1dk4y1B73W*

---

!> 注意: `CC2531 USB Dongle`在买的时候一定要`让卖家刷好固件`, 一定要说是用来`做zigbee2mqtt开发`的, 如果卖家`不懂就别买`了

```bash
docker run \
   -it \
   --net="host" \
   --restart=always \
   --name="z2m" \
   -v ~/z2m/data:/app/data \
   --device=/dev/ttyACM0 \
   -e TZ=Asia/Shanghai \
   -v /run/udev:/run/udev:ro \
   --privileged=true \
   koenkk/zigbee2mqtt:latest
```

> 配置文件`~/z2m/data/configuration.yaml`,将`homeassistant`设置为`true`

详情请查看配置: https://github.com/Koenkk/zigbee2mqtt/blob/master/data/configuration.yaml