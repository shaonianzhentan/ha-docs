# 智能音箱接入控制
https://www.bilibili.com/video/BV19h411f7dp

---

> 智能音箱开放平台
- [小度音箱](https://dueros.baidu.com/dbp/main/console)
- [天猫精灵](https://iap.aligenie.com/console/skill/list)
- [天猫精灵2.0](https://iot.aligenie.com/home)
- [小爱同学](https://developers.xiaoai.mi.com/skills/create/list)
- [华为音箱](https://developer.huawei.com/consumer/cn/doc/development/smarthome-Guides/yunprotocol-0000001075545823)

> 测试平台
- [电脑桌面版小爱同学](https://www.mi.com/service/bijiben/drivers/Smart-Mouse)

## 小度音箱和天猫精灵接入
- 视频介绍：https://www.bilibili.com/video/BV1G54y1C7KW
- 插件：https://github.com/cnk700i/havcs

> 我的配置
```yaml
havcs:
  platform:                               
    - aligenie
    - dueros
  http:
    clients:
      dueros: wusuowei
      aligenie: wusuowei
      aligenie_ignore: ignore
    ha_url: https://xxx.com
    expire_in_hours: 8760
  device_config: ui
```

## 小爱音箱接入
- 视频介绍：https://www.bilibili.com/video/BV19h411f7dp

## 天猫精灵无公网接入

> 开发者平台
- [阿里生活物联网平台](https://living.aliyun.com/)

> 参考链接
- https://bbs.hassbian.com/thread-11927-1-1.html
- https://bbs.iobroker.cn/t/topic/6337/2