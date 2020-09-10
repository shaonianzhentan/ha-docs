# NFC碰碰贴

*视频介绍：*

---

> 自动化触发事件
```yaml

event_data:
  tag_id: NFC标签ID
event_type: tag_scanned
platform: event
```

!> 注意：触碰时默认直接浏览器打开链接，需要设置允许HomeAssistant应用操作链接

> 小米9【MIUI 12】操作方式

`设置` > `应用设置` > `应用管理` > （右上角菜单）`默认应用设置` > `打开链接` > `Home Assistant` > `打开支持的链接`（设置为允许）

> 相关文档
- https://github.com/home-assistant/android
- https://www.home-assistant.io/tag/tag_id