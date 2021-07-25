# samba的安装

*视频介绍：*

---

```bash
# 安装依赖
sudo apt-get install samba samba-common-bin -y

# 修改配置
sudo nano /etc/samba/smb.conf
```

> 配置内容`/etc/samba/smb.conf`, 加到最底下
```conf
[share]                   #共享文件的名称， 将在网络上以此名称显示
  path = /home/pi         #共享文件的路径
  browseable = yes        #允许浏览
  public = yes            #共享开放
  writable = yes          #可写
```
方便复制
```conf
[share]
  path = /home/pi
  browseable = yes
  public = yes
  writable = yes
```

```bash
# 重启服务
sudo samba restart

# 注意：如果文件夹不能写，则给予最高权限
sudo chmod -Rf 777 /home/pi
```