# zigbee2mqtt安装

*视频介绍：*

---

```bash
docker run -it --net="host" --name="z2m" -v ~/z2m/data:/app/data --device=/dev/ttyACM0 -e TZ=Asia/Shanghai koenkk/zigbee2mqtt:latest
```

> 配置文件: `~/z2m/data/configuration.yaml`

```yaml
mqtt:
  base_topic: zigbee2mqtt
  server: 'mqtt://localhost'
  user: admin
  password: public

```