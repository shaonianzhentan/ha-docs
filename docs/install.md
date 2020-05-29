# HomeAssistant的安装
---
## docker

> 安装方式
```bash

# 配置文件路径：~/homeassistant

docker run -d --net="host" --name="ha" -v ~/homeassistant:/config -p 8123:8123 homeassistant/home-assistant:latest

```

## pip

> 安装方式
```bash

# 执行安装
pip install homeassistant

# 开始运行
hass

```

## 镜像烧录

> 安装方式
```bash


```
