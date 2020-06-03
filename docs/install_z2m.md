# zigbee2mqtt安装

*视频介绍：*

---

```bash
docker run \
   -it \
   --net="host" \
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