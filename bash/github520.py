# -*- coding: utf-8 -*-  

import re, os, urllib2

# 加载内容
def load_content(file_path):
    fp = open(file_path, 'r')
    content = fp.read()
    fp.close()
    return content

# 保存内容
def save_content(file_path, data):
    fp = open(file_path, 'w+')
    fp.write(data)
    fp.close()

def main():
    hosts_file = '/etc/hosts'
    if os.path.exists(hosts_file) == False:
        print('文件不存在')
        return
    old_hosts_content = load_content(hosts_file)

    # 获取hosts内容
    response = urllib2.urlopen('https://raw.hellogithub.com/hosts')
    githosts = response.read()

    # 检测是否已经添加
    reg = re.match(r".*(# GitHub520 Host Start.*# GitHub520 Host End)", old_hosts_content, flags = re.S)
    if reg is None:
        new_hosts_content = old_hosts_content + githosts
        msg = "初次更新host"
    else:
        new_hosts_content = old_hosts_content.replace(reg.groups(0)[0], githosts)
        msg = "更新host"
    save_content(hosts_file, new_hosts_content)
    print(msg)

main()