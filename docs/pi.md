## 初始密码

- 树莓派：`pi` `ha123456`
- HomeAssistant：`ha` `ha123456`
- Docker管理器：`admin` `homeassistant`
- NodeRed：`admin` `ha123456`
- 下载管理：`ha123456`

### 安全问题
- 如果`开启外网访问`，请务必修改以下初始密码：`HomeAssistant`、`NodeRed`、`Docker管理器`、`下载管理`

### 内网穿透
- 启动`内网穿透服务`之前请先在`文件管理器`里修改`frpc.ini`配置，如果没有自己的服务器，可联系我
```bash
sudo docker run -itd --net="host" --restart=always --name="frpc" -v ~/homeassistant/frpc.ini:/etc/frp/frpc.ini snowdreamtech/frpc
```

### 远程桌面
- 如果想使用`树莓派桌面`操作，可以`Windows`上使用远程桌面方式登录 [操作看视频](https://www.bilibili.com/video/BV1UK4y1j7cE/)
