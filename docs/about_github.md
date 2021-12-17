## 解决访问时图裂、加载慢的问题。

> 替换hosts文件

项目地址：https://hub.fastgit.org/521xueweihan/GitHub520

```bash
# Linux编辑hosts
sudo nano /etc/hosts

# Window编辑hosts
C:\Windows\System32\drivers\etc\hosts
```

## 使用CDN节点

格式：`https://cdn.jsdelivr.net/gh/用户名/仓库名@版本号/文件路径`

例子：https://cdn.jsdelivr.net/gh/shaonianzhentan/ha-docs@master/README.md

## 替换域名

格式：`github.com`更换为`github.com.cnpmjs.org`

例子：https://github.com.cnpmjs.org/shaonianzhentan/ha-docs/blob/master/README.md

格式：`github.com`更换为`hub.fastgit.org`

例子：https://hub.fastgit.org/shaonianzhentan/ha-docs/blob/master/README.md

原始文件：https://raw.fastgit.org/shaonianzhentan/ha-docs/master/README.md

## 相关api

- 接口信息：https://api.github.com/repos/shaonianzhentan/ha_cloud_music/releases/latest

## 提交代码命令
```bash
# 查看仓库状态
git status -s
# 暂存更改文件
git add .
# 查看仓库状态
git status -s

git commit -m "更改信息"
# 拉取合并
git pull
# 推送到远程仓库
git push
```

```bash
# 查询源地址
git remote get-url origin

# 更换源地址
git remote set-url origin git@github.com:shaonianzhentan/MiPadAndroid.git

# 删除本地分支
git branch -d xiaomi

# 强制删除本地分支
git branch -D xiaomi

# 删除远程分支
git push origin --delete xiaomi
```