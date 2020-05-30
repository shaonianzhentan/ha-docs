# 电视投屏
---

## 自动发现DLNA媒体播放器

> 在HomeAssistant配置文件中添加以下配置，会自动发现所有局域网中的DLNA媒体服务
```yaml
discovery:
  enable:
    - dlna_dmr
```