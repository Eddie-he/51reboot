## Go语言课程
一、Golang入门 
=============

- Golang常用开发工具介绍
 - 编辑器IDE
 - 编译运行或者直接运行
- Hello, World
- 命令行参数
- 查找重复的行
- GIF动画
- Golang写爬虫
- Golang爬虫并发实战
- Golang实现一个HTTP服务
- [本章要点回顾][1]

二、Golang程序结构 
=================

-   Golang的设计哲学：约定优于机制
- 命名
- 声明
- 变量
- 赋值
- 类型
- 包和文件
- 作用域

课堂小知识：

- HTTP、TCP、IP协议详解
    - HTTP协议基础，各种常见header的含义
    - HTTP性能优化：KeepAlive、连接复用
    - HTTP、TCP、UDP等常见协议的关系 
三、Golang的基础数据类型 
=====================

- 整型
- 浮点数
- 复数
- 布尔型
- 字符串
- const常量

课堂小知识:

- Linux文件系统原理，inode、空洞文件。
- Golang文件操作，顺序读写，随机读写。

四、Golang复合数据类型 
=====================

- 数组
- Slice
- Map
- 结构体
- Golang的JSON处理
- 文本和HTML模板

课堂小知识:
- CPU L1、L2 cache介绍以及对性能的影响
- Linux Buffer、Cache对性能的影响

五、Golang的函数 
=============

- 函数声明
- 递归
- 多返回值
- 错误
- 函数值
- 匿名函数
- 可变参数
- Deferred函数
- Panic异常
- Recover捕获异常

课堂小知识：

- 长连接和短连接，推送机制的实现
- 通信协议的实现，通信协议的关键点
- 深入理解HTTP协议
- 为什么HTTP协议是现在这个样子

六、Golang的方法
==========

- 方法声明
- 基于指针对象的方法
- 通过嵌入结构体来扩展类型
- 方法值和方法表达式
- Golang编码实战: Bit数组
- Golang的封装
- 闭包的概念，用Golang实现闭包

开源架构分析：

-   Docker实现原理解析
    -   CGroups和LXC隔离技术
    -   namespace技术解析
    -   分层文件系统AUFS和DeviceMapper

七、Golang的接口
=============

- 接口是合约
- 接口类型
- 实现接口的条件
- flag.Value接口
- 接口值
- sort.Interface接口
- http.Handler接口
- error接口
- Golang编码实战: 表达式求值
- 类型断言
- 基于类型断言识别错误类型
- 通过类型断言查询接口
- 类型分支
- Golang编码实战: 基于标记的XML解码
- 补充几点

八、Golang的协程和Channel
=============================

- Golang编码实战: 并发的Clock服务
- Golang编码实战: 并发的Echo服务
- Channel
- 并发的循环
- **Golang编码实战**: 并发的Web爬虫
- 基于select的多路复用
- **Golang编码实战**: 并发的字典遍历
- 并发的退出
- **Golang编码实战**: 聊天服务

课堂小知识:

- 多进程多线程的产生，在Linux系统中的地位
- 多进程和多线程的选用场景
- 多进程、多线程基础；为什么不能一味的开线程解决问题
- Go routines的实现原理

九、Golang基于共享变量的并发
===========================

- 竞争条件
- sync.Mutex互斥锁
- sync.RWMutex读写锁
- 内存同步
- sync.Once初始化
- 竞争条件检测
- Golang编码实战: 并发的非阻塞缓存
- Goroutines和线程

名企架构剖析：

- Twitter 架构探秘----Scaling、Cache、Tracing

十、Golang包和工具
=================

- 包简介
- 导入路径
- 包声明
- 导入声明
- 包的匿名导入
- 包和命名
- 工具

名企架构剖析

- 百亿量级数据库架构----Pinterest

十一、Golang测试简介
=============

- 测试和单元测试的含义和意义
- go test
- 测试函数
- 测试覆盖率
- 基准测试
- 剖析
- Golang编码实战函数

十二、Golang的反射 
=============

- 为何需要反射?
- reflect.Type和reflect.Value
- Display递归打印
- Golang编码实战: 编码S表达式
- 通过reflect.Value修改值
- Golang编码实战: 解码S表达式
- 获取结构体字段标识
- 显示一个类型的方法集

十三、Golang底层编程
==================

- unsafe.Sizeof, Alignof 和 Offsetof
- unsafe.Pointer
- Golang编码实战: 深度相等判断
- 通过cgo调用C代码
- 深度解析Golang net/rpc框架

十四、Golang综合大作业(手写监控系统)
===============================

-   Open-Falcon监控系统架构解析
-   采集agent
- 数据中转transfer + kafka
- 数据入库saver + es
- 报警模块

十五、大家来“点菜”
===============================

-   Reboot拥有强大的金牌讲师团队
-   由同学们自己选择想要深入学习的内容
-   由Reboot金牌讲师给大家深入剖析讲解
-   往届内容：
    -   Google Borg分布式调度系统
    -   名企架构师面试实战
    -   CI（持续集成）& CD（持续部署）

[1]: https://mp.weixin.qq.com/s?__biz=MzA4MjkxMzMyNg==&mid=2654069634&idx=1&sn=0f8346c71c20739c949a88abecffc766&scene=0#wechat_redirect