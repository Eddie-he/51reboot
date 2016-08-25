# Reboot自动化班课表

## 企业代码管理和开发规范技巧
* 代码规范讲解（变量、函数、类命名、日志、异常处理）
  * 知其然，更要知其所以然，详细讲解BAT等大公司的代码规范，和每条规范存在的意义和历史背景。
* Debug 技巧（性能调优、怎么快速定位错误）
  * 如何快速定位线上故障，如何进行代码性能优化。
* 开发常见安全问题（SQL注入、XSS）
  * 360大牛带大家了解常见安全问题的原理，如何避免。
* Git 开发流程规范（协作开发、commit、分支、Tag）
  * 业界流行的GitFlow开发流程是什么，如何在公司推行？

## 资产管理系统（CMDB）
* CMDB设计要点
  * CMDB是运维自动化的核心，如何存储着上层自动化应用的必要数据
  * CMDB中人员、服务器，业务线以及它们之间的关系
* CMDB的API设计
  * CMDB作为运维平台的基础服务，如何对外提供API
  * 如何设计其他模块根据自身需要，调用CMDB的API获取基础资源的信息
* Django框架手把手实战
  * Django框架简介
  * 如何用Django快速的构建一个CMDB

## 企业级服务器监控系统（一）
* 企业级服务器监控系统选型
  * 企业级监控系统面临的挑战
  * 开源企业级监控系统介绍（Zabbix、OpenFalcon）
* 手把手从零开始构建一个简易的服务器监控系统
* BAT服务器监控系统架构剖析

## 企业级服务器监控系统（二）
* 监控系统架构梳理
* 监控系统高可用架构
* 监控系统网络框架
  * 高性能网络编程原理
  * Linux多线程&多进程编程
* 监控系统搭建代码手把手实战

## 运维大数据 -- ELK分布式日志系统快速入门实战
* ELK基本概念部署安装，常用插件实战，ELK使用场景介绍
* RESTful API简介，利用RESTful API实现对ElasticSearch初始化及增删改查
* 常用ElasticSearch的基本查询，filter查询，组合查询实战
* ElasticSearch集群管理
* Logstash配置语法及插件使用
* Logstash常用input输入，filter过滤，output输出配置
* Kibana4连接索引展示日志，并通过数据分析生产图表
* 综合实例：ELK收集，分析，展示Nginx日志

## 集群自动部署大咖 -- 巧用开源实现发布部署系统实战
* 发布流程设计
* 发布状态管理
* Ansible API开发与业务场景应用
* 用Fabirc进行批量线上操作
* 上线包推送（测试发布、灰度发布、全网发布）
* 上线回滚的架构设计
* 上线记录及版本版本展示

## 持续集成（CI）&& 持续构建（CB）&& 持续部署（CD）
* 持续集成系统的意义，如何在公司落地
  * 近些年各大公司都兴起了CI热，那么CI的好处在哪里，如何在团队推行CI。
  * BAT大神结合公司的经验手把手教大家
* 开源持续集成系统对比选型
* Jenkins对接Git，对接构建系统
* Jenkins对接发布发布部署系统
* Jenkins常用插件介绍

## 用户权限平台
* RBAC权限管理系统
* 企业级LDAP用户管理（自动化平台、Git、Jenkins、JIRA、Confluence打通）
* 找回密码、弱密码检查
* 企业无线认证（可扩展）

## Google最新秘密武器 -- Docker容器云实战
* Docker原理介绍（AUFS、DeviceMapper、NameSpace、Cgroups）
* 为分布式编程而生的语言：Golang简介（协程、channel）
* Docker常用操作介绍
* Docker镜像制作
* Docker生态系统介绍（Kubernetes、Mesos、Swarm）
* Docker网络介绍
  * SDN（软件定义网络）简介&操作
* 开源Docker管理系统Rancher介绍&操作

## 提高你的逼格 -- 分布式系统核心原理介绍
* 分布式系统理论介绍
  * [CAP定理及其推导](https://zhuanlan.zhihu.com/p/20399316)
  * CAP定理如何指导我们的平时工作
  * BASE 和 ACID
  * 一致性算法简介：Paxos、Raft
* Redis Cluster方案实例分析
* 名企架构剖析
  * Google Chubby分布式锁服务
  * Apache ZooKeeper分布式配置管理

## 云时代的自动化运维 -- PaaS实战
* AWS（Amazon Web Service）介绍 & 实战
* 微软Azure介绍 & 实战
* 如何选用“云”，如何做成本预估和预算
* 混合云方案介绍
  * 混合云时代如何做主机管理Terraform
  * 混合云所需要的基础服务
