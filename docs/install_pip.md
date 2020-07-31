# HomeAssistant的安装

*视频介绍：https://www.bilibili.com/video/BV1Lk4y1r7e8/*

---
!> 注意: 这里使用的是python3.7及之后的版本，请确保版本正确

## pip换源

> 国外的源太慢了，需要换成国内的

```bash
# 切换用户目录
cd ~
# 新建.pip目录
mkdir .pip
# 切换到.pip目录
cd .pip
# 创建pip.conf文件
touch pip.conf

# 编辑pip.conf文件
nano pip.conf

```
写入内容
```pip.conf
[global]
index-url = http://mirrors.aliyun.com/pypi/simple/
[install]
trusted-host=mirrors.aliyun.com
```
> 国内开放的pip源
* 阿里云 http://mirrors.aliyun.com/pypi/simple/ 
* 中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/ 
* 豆瓣(douban) http://pypi.douban.com/simple/ 
* 清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/

> windows换源

```bash
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

## HomeAssistant安装

> 安装方式

```bash
# 安装
pip install homeassistant

# 安装成功后运行
hass
```
!> 安装指定的版本：pip install homeassistant==0.110.3


