# HomeAssistant的安装
---

## Docker一键安装脚本

> 安装方式 
```bash
# 使用 Shell 脚本进行安装
curl -fsSL https://get.docker.com -o get-docker.sh

sudo sh get-docker.sh

```
[具体操作请查看详细安装文档](https://www.runoob.com/docker/ubuntu-docker-install.html)

## Docker换源

!> 注意：如果拉取速度没问题，可以不用换
```bash
# 编辑配置文件
nano /etc/docker/daemon.json
```
> 配置文件的内容
```json
{
  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]
}
```
[具体操作请查看详细操作文档](https://lug.ustc.edu.cn/wiki/mirrors/help/docker)


## Docker管理界面安装

> 安装方式

```bash
docker run -d -p 9000:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock --name prtainer-demo docker.io/portainer/portainer

```

- 访问地址：http://设备IP :9000

## HomeAssistant安装

> 安装方式

```bash
# 配置文件路径：~/homeassistant
docker run -d --net="host" --name="ha" --restart=always --privileged=true -v ~/homeassistant:/config -p 8123:8123  -e TZ="Asia/Shanghai" homeassistant/home-assistant:latest

```
!> 可以自定义修改HomeAssistant配置文件的路径，“~”代表当前登录用户的根目录


