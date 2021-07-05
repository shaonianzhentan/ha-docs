# 香橙派

---

## 连接WiFi

!> 注意：必须要先连接有线网络，才能操作

- 方式一：配置中选择WiFi

```bash
armbian-config
```
- 方式二：命令行连接

```bash
# 查看设备状态
nmcli device status

# 检查 radio
nmcli radio

# 查看附近无线网络信号
nmcli dev wifi list

# 连上 AP 热点
nmcli device wifi connect WiFi名称 password WiFi密码
```

## 自动挂载硬盘
```bash
lsblk

# 挂载硬盘到指定目录
mount /dev/sda1 /mnt/

# 开机自动挂载

# 查看硬盘信息
blkid /dev/sda1

# 添加以下内容，注意修改UUID和文件类型
# UUID=C469-4E8C /mnt exfat defaults 0 0
nano /etc/fstab

# 应用并启动
mount -a
```