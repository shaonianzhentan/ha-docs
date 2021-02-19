# 小米设备接入

*视频介绍：*

---

## 点灯科技



> 编译`blinker-py`

```bash
cd ~/git

git clone https://github.com.cnpmjs.org/blinker-iot/blinker-py

cd blinker-py
sudo python3 setup.py install
sudo pip3 install -r requirements.txt

cd example/Blinker_MIOT/MIOT_LIGHT

```

> 运行

```bash
# 运行python文件
sudo pm2 start main.py -x --interpreter python3

# 查看列表
sudo pm2 list

# 保存
sudo pm2 save

# 加入开机启动
sudo pm2 startup
```

> 官方网站
- https://diandeng.tech/doc

## 获取局域网通信密钥

- 【修改版米家APP】 https://bbs.hassbian.com/thread-6717-1-1.html
- 【修改版米家APP】 https://bbs.iobroker.cn/t/topic/357
- 【获取米家设备令牌】 https://github.com/Maxmudjon/com.xiaomi-miio/blob/master/docs/obtain_token.md

> 使用nodejs环境运行
```bash
# 随便新建一个文件夹
mkdir mi
# 切换到文件夹中
cd mi

# 安装依赖
npm install node-mihome

# 新建index.js文件
nano index.js
```

```js
const mihome = require('node-mihome');

(async () => {
    mihome.miioProtocol.init();
    // 使用小米用户密码登录
    const username = 'email@example.com';
    const password = 'password';
    await mihome.miCloudProtocol.login(username, password);

    const options = { country: 'cn' };
    // 获取所有设备信息
    const devices = await mihome.miCloudProtocol.getDevices(null, options);
    console.log(devices)
})();

```

## 设备接入

> 官方组件
- https://www.home-assistant.io/integrations/#search/xiaomi
- 小米设备：https://www.home-assistant.io/integrations/xiaomi_miio/
- Aqara网关：https://www.home-assistant.io/integrations/xiaomi_aqara/
- 小米电视：https://www.home-assistant.io/integrations/xiaomi_tv/

> 第三方组件
- 小米网关3：https://github.com/AlexxIT/XiaomiGateway3
- 小米云服务：https://github.com/fineemb/xiaomi-cloud
- 小米净化器和加湿器：https://github.com/syssi/xiaomi_airpurifier
- 小米电饭煲：https://github.com/syssi/xiaomi_cooker
- 小米电风扇：https://github.com/syssi/xiaomi_fan
- 小米飞利浦灯：https://github.com/syssi/philipslight
- 米家空调伴侣：https://github.com/syssi/xiaomi_airconditioningcompanion
- 小米空调伴侣2：https://github.com/EugeneLiu/xiaomi_airconditioningcompanionMCN02
- 小米温湿度传感器：https://github.com/custom-components/ble_monitor
- Yeelink设备：https://github.com/al-one/hass-miio-yeelink
- 小米设备新协议：https://github.com/al-one/hass-xiaomi-miot

> 卡片面板
- 小米电风扇：https://github.com/fineemb/lovelace-fan-xiaomi
- 空调：https://github.com/fineemb/lovelace-thermostat-card
- 空气净化器：https://github.com/fineemb/lovelace-air-filter-card
- 扫地机器人 https://github.com/TheLastProject/lovelace-valetudo-map-card
- 扫地机器人 https://github.com/benct/lovelace-xiaomi-vacuum-card

> 可以使用以下依赖包开发自定义组件
- https://github.com/rytilahti/python-miio
- https://gitlab.com/stavros/python-yeelight