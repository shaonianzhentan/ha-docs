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

## 获取Token方法

- 【修改版米家APP】 https://bbs.hassbian.com/thread-6717-1-1.html
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