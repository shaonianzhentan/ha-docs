# samba的安装（没有测试通过）

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
[share]
    comment = Share
    path = /home/pi/
    browseable = yes
    writable = yes
    guest ok = yes
    create mask = 0664
    directory mask = 0775
```

```bash
# 验证错误
testparm

# 设置pi的密码
# sudo smbpasswd -a pi

# 重新服务
sudo samba restart
```