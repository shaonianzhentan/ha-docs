# 小米设备接入

*视频介绍：*

---

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