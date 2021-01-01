# MiniDLNA流媒体服务器

*视频介绍：https://www.bilibili.com/video/BV1a5411Y7Ns/*

---

```bash
# 安装服务
sudo apt-get install minidlna -y
# 启动服务
sudo service minidlna start
# 设置为可读可写权限
sudo chmod 777 /var/lib/minidlna

# 修改配置文件
sudo nano /etc/minidlna.conf
# 重启服务
sudo service minidlna restart
# 查看服务运行状态
sudo service minidlna status
```