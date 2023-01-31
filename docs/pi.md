## 初始密码

- 树莓派：`pi` `raspberry`
- HomeAssistant：`ha` `ha123456`
- Docker管理器：`admin` `ha123456` 或 `homeassistant`
- NodeRed：`admin` `ha123456`
- HomeBridge：`admin` `admin`
- 下载管理：`ha123456`
- V2：`admin` `ha123456`

## 相关问题与解决方案

> 重新安装NodeRED

打开终端, 切换到用户目录
```bash
cd ~/
```
输入以下命令重新安装NodeRED
```bash
sudo npm install -g --unsafe-perm node-red
```
安装成功后，执行重启服务命令
```bash
sudo pm2 restart node-red
```
重启成功后，运行以下命令，然后截图给我看看
```bash
sudo pm2 logs node-red
```