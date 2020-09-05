# 网络爬虫

---

> 安装与配置

```yaml
# 使用爬虫组件
sensor:
  - platform: scrape
    resource: https://book.qidian.com/info/1019941746
    name: 大侠等一等
    select: ".update .detail a"
    scan_interval: 3600
  - platform: scrape
    resource: https://book.qidian.com/info/1023035179
    name: 大王叫我来守夜
    select: ".update .detail a"
    scan_interval: 3600
    index: 0
    attribute: "href"
    headers:
      User-Agent: Mozilla/5.0
```

> 相关文档
- https://www.home-assistant.io/integrations/scrape/
- https://www.w3school.com.cn/css/css_selector_type.asp
