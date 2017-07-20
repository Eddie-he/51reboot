# 运维自动化 

## 课程概述
### 面向学员
* 专门为热衷钻研运维自动化技术、想要掌握如何从0构建企业级运维自动化平台、想要转型为运维开发的同学而量身打造
* 希望报名的你掌握一门开发语言Java、PHP、Python其一
* 希望报名的你是一位运维工程师，只有运维才懂得怎样写运维自动化平台
* 希望报名的你是喜欢动手敲代码，只有不行的敲代码，才能码出复杂的运维管理平台
* 希望报名的你是一个课程积极、乐于记笔记，只有在课程与老师互动发表对运维平台的建议及想法，才能够做出一个符合公司需求的运维平台

## 课程表

## Django实战篇
### Django 基础

* URL 配置
* 视图函数
* request 对象
* HttpResponse 对象
* Django 如何处理一个请求？
* 模板引擎
* 表单验证

### Django 模型

* 模型语法
* 字段类型
* 元选项
* 执行查询
* 查询集方法参考
* 查询表达式
* 模型关系（一对一、一对多、多对多）

### Django 视图

* URL 配置
* 视图函数
* 快捷函数
* 装饰器
* 权限管理
* Django 权限机制概述
* Django 权限控制
* Permission 管理
* User Permission 管理
* Group Permission 管理
* Permission_required 装饰器
* Template 中的权限检查

### Django 模板

* 语音概述
* 内建标签和过滤器
* 模板 API 
* 自定义标签与过滤器

##资源管理篇
###   第五-七天（CMDB）

* CMDB 设计要点
* CMDB 是运维自动化的核心，如何存储着上层自动化应用的必要数据
* CMDB 中人员、服务器，业务线以及它们之间的关系
* CMDB 的API设计
* CMDB 作为运维平台的基础服务，如何对外提供API
* 如何设计其他模块根据自身需要，调用 CMDB 的 API 获取基础资源的信息
* 用户管理
* 用户登录、退出、用户列表
* 修改用户状态（禁止用户登录）
* 服务器
* 添加服务器
* 通过 API 实现服务器的增删改查
* 服务器运行状态及业务线管理

## 监控篇
### 第八天（Zabbix 实战）项目二

* Zabbix 常用API简介
* CMDB 中的主机列表怎么与Zabbix 联动
* CMDB 中的主机列表与Zabbix 模板绑定及解绑
* 从机器的安装到自动化发现到监控项的添加都要干那些事？

### 第九天（Graphite 实战）项目三


* Graphite基础
* Graphite基本组件介绍
* Graphite API 介绍
* 运维平台通过API调用，整合graphite实现多维度的性能展示

## 自动化管理篇
### 第十天（Ansible 实战）项目四  

* Ansible 介绍
* Ansible 常用模块介绍（shell、copy、file、cron...）
* Playbook 介绍及应用
* Ansible 二次开发入门
* ansible-playbook 常用API 介绍
* 如何用Ansible 快速实现一个发布系统
* 实现Ansible 代码发布模块

### 第十一天（Saltstack 实战）项目五

* SaltStack 快速入门
* SaltStack 数据系统
* SaltStack 远程执行
* SaltStack 配置管理
* SlatStack 管理实践
* SaltStack 实践案例
* SaltStack 常用API使用及源码剖析
* SaltStack 怎么和发布平台联动

### 第十二/十三天（CI/CD）项目六

* 发布流程设计
* 发布状态管理
* 发布权限（申请->审批->版本确认）
* 发布设计与实现(测试->灰度->正式)

### 第十四天（中小型公司认证系统LDAP）项目七

* Python LDAP 模块使用
* CMDB、Jenkins与发布系统和LDAP打通
* LDAP 可以干那些事？WIFI、Confluence、Jira、Gitlab 都可以走用统一的认证
* 如何打造一个中小型公司LDAP认证架构设计

### 第十五天（ELK）项目八

* ELK基本概念部署安装，常用插件实战，ELK使用场景介绍
* RESTful API简介，利用RESTful API实现对ElasticSearch初始化及增删改查
* 常用ElasticSearch的基本查询，filter查询，组合查询实战
* ElasticSearch集群管理
* Logstash配置语法及插件使用
* Logstash常用input输入，filter过滤，output输出配置
* Kibana连接索引展示日志，并通过数据分析生产图表
* 综合实例：ELK收集，分析，展示Nginx日志
* 综合实例：elastalrt插件实现es的监控报警

## 福利
### 赠送：Google最新秘密武器 -- Docker容器云实战

* Docker原理介绍（AUFS、DeviceMapper、NameSpace、Cgroups）
* 分布式编程而生的语言：Golang简介（协程、channel）
* Docker常用操作介绍
* Docker镜像制作
* Docker生态系统介绍（Kubernetes、Mesos、Swarm）
* Docker网络介绍
* SDN（软件定义网络）简介&操作
* 开源Docker管理系统Rancher介绍&操作


## 课程亮点
###  DevOps 2.0 全新起航

* 使用Python3+Django1.11
* Django 基础内容更加充实，重要知识点源码剖析。
* 新增中小公司统一认证系统（OpenLDAP）。
* 新增SaltStack自动化课程，结合CI/CD及CMDB，构建全新的发布平台。