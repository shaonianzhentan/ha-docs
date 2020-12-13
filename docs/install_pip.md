# HomeAssistant的安装

*视频介绍：https://www.bilibili.com/video/BV1Lk4y1r7e8/*

---
!> 注意: 这里使用的是python3.7及之后的版本，请确保版本正确
## python安装（千万别自己编译，非常浪费时间）
> 官方下载地址： https://www.python.org/downloads/
```bash
# 如果系统中没有3.8以上，可以使用以下方式安装最新版3.9
sudo apt-get install build-essential libsqlite3-dev sqlite3 bzip2 libbz2-dev -y
# 下载压缩包
wget https://www.python.org/ftp/python/3.9.0/Python-3.9.0.tgz
# 解压文件并进入目录
tar zxvf Python-3.9.0.tgz && cd Python-3.9.0

# -------------------- 方法一：单条执行 --------------------
# 配置
sudo ./configure --enable-optimizations
# 编译（使用4线程）（很慢，需要耐心等待）
sudo make -j4
# 安装（很快，预计几分钟）
sudo make install

# -------------------- 方法二：批量执行 --------------------
# 在树莓派上编译安装，估计要90分钟左右，所以就需要批量操作，然后耐心等待即可
sudo ./configure --enable-optimizations && sudo make && sudo make install

# 如果以上没有啥问题，就可以进行验证了
python3.9 --version
```
## pip 安装

```bash
# 安装相关依赖
sudo apt install build-essential libssl-dev libffi-dev \
python3-pip python3-dev python3-setuptools python3-wheel \
python-pip python-dev python-setuptools python-wheel \
libjpeg-dev zlib1g-dev -y
# Pillow图像处理需要以下依赖`libjpeg-dev zlib1g-dev`

# 换源
pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

> 国内开放的pip源
* 阿里云 http://mirrors.aliyun.com/pypi/simple/ 
* 中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/ 
* 豆瓣(douban) http://pypi.douban.com/simple/ 
* 清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/

## HomeAssistant安装

> 安装方式

```bash

# 安装
pip3 install homeassistant

# 安装成功后运行
hass
```
!> 安装指定的版本：`pip install homeassistant==0.110.3`

!> 升级到最新版本：`pip install homeassistant --upgrade`

## 指定Python版本运行

```bash
# 查看hass路径
whereis hass
# 查看Python3.9路径
whereis python3.9

# 安装最新版HA
python3.9 -m pip install homeassistant --upgrade

```
