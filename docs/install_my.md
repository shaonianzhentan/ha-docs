# 我的安装配置

```bash
# 安装Docker管理
sudo docker run -itd --net="host" --restart=always --name="prtainer-demo" docker.io/portainer/portainer

# 安装EMQX
sudo docker run -itd --net="host" --restart=always --name="emqx" emqx/emqx:latest

# 安装Node-Red
sudo docker run -itd --net="host" --restart=always --name="mynodered" --privileged=true nodered/node-red:1.0.1-10-minimal-arm32v6

# 安装HomeAssistant
sudo docker run -itd --net="host" --restart=always --name="ha" --privileged=true -v ~/homeassistant:/config homeassistant/home-assistant:latest

# frpc服务
sudo docker run -itd --net="host" --restart=always --name="frpc" -v ~/homeassistant/frpc.ini:/etc/frp/frpc.ini snowdreamtech/frpc

# clone文件
git clone https://github.com.cnpmjs.org/shaonianzhentan/ha_file_explorer
# 复制文件夹
sudo mv ./ha_file_explorer/custom_components custom_components
# 删除clone的文件
sudo rm -rf ha_file_explorer

# 编辑配置
sudo nano ~/homeassistant/configuration.yaml
```