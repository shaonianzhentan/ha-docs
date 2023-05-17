# 学习大纲

---

#### 1.课程简介
 - 课程介绍
 - NodeRED介绍

#### 2.NodeRED安装与配置
 - 安装方式介绍
 - 设置文件的介绍
 - 密码的生成与配置

#### 3.NodeRED功能介绍
 - 节点管理
 - 新建流程
 - 部署服务
 - 全局配置
 - 调试信息
 - 导出备份
 - 导入还原

#### 4.NodeRED使用
  - **常用节点介绍**
    - inject
    - debug
    - function
    - switch
    - change
    - delay
    - exec
    - mqtt in
    - mqtt out
    - http response
    - http request

  - **常用字段介绍**
    - msg
    - payload

  - **安装与更新节点**

  - **使用节点**
    - 配置
    - 连接
    - 部署
    - 调试

  - **MQTT的操作**
    - 配置服务
    - 订阅主题
    - 发布内容

#### 5.NodeRED实战
  - **HomeAssistant自动化服务**
    - 安装`home-assistant`节点
    - 创建长令牌 `Access token`
    - 配置Home Assistant连接信息`Base URL`和`Access token`
    - 监听事件，了解Home Assistant事件概念
    - 监听状态，了解Home Assistant自动化概念
    - 调用服务，了解NodeRED中调用Home Assistant服务的使用方法

  - **网络爬虫**
    - 分析网页内容
      - 设置cookie
      - 设置请求类型
      - 设置请求参数
    - 获取网页内容
      - 解析json数据，了解数据格式转换
      - 控制台输出内容，了解debug节点使用
      - 生成传感器实体，了解NodeRED如何在Home Assistant中生成实体

  - **HomeAssistant生成MQTT实体**
    - 安装`ha-mqtt`节点
    - 配置mqtt信息
    - 创建一个开关
    - 控制开关

#### 6.NodeRED总结
 - NodeRED的优势与不足
 - NodeRED的发展介绍
 - NodeRED和HomeAssistant的关系