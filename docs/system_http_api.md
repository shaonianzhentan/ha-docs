# HTTP接口请求

*视频介绍：https://www.bilibili.com/video/BV18C4y1h77R/*

---

> 测试例子

```yaml

sensor:
  # 上海公交卡
  - platform: rest
    scan_interval: 3600
    resource: https://shanghaicity.openservice.kankanews.com/public/traffic/Jtkapi?cardno=25662810934
    name: 上海公交卡余额
    value_template: '{{ value_json.balance }}'
    json_attributes:
      - cardno
      - balance
      - lastdate
      - content
      - state
    unit_of_measurement: 元
  - platform: rest
    name: 松江40路到站时间
    resource: http://www.shjt.org.cn:8005/bus/TrafficLineXML.aspx?TypeID=3&lineid=871612&stopid=14&direction=0&name=%E6%9D%BE%E6%B1%9F40%E8%B7%AF
    json_attributes_path: "$.result.cars.car"
    json_attributes:
      - "terminal"
      - "stopdis"
      - "distance"
      - "time"
    value_template: '{{ ((value_json.result.cars.car.time | int) / 60) | round(0, "floor") }}'
    unit_of_measurement: "分钟"
    
# HTTP通知接口服务
notify:
  - platform: rest
    name: 自定义通知名称
    resource: https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=企业微信的机器人webhook
    method: POST_JSON
    data:
      msgtype: text
      text:
        content: 固定的测试消息内容

# HTTP自定义请求接口服务
rest_command:
  qyweixin:
    url: https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=企业微信的机器人webhook
    method: POST
    payload: '{"msgtype": "text", "text":{"content": "{{ message }}"}}'
    content_type:  'application/json; charset=utf-8'    


```

- https://www.home-assistant.io/integrations/rest/
- https://www.home-assistant.io/integrations/arest/
- https://www.home-assistant.io/integrations/notify.rest/
- https://www.home-assistant.io/integrations/rest_command/
