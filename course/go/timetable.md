# Go语言课程
# 一、Golang入门 
### 课上基础
-   Golang常用开发工具介绍
    -   编辑器IDE
    -   编译运行或者直接运行
    -   完成第一个“Hello Wrold”
-   Golang语法熟悉
    -   **课堂实战：Golang输出当前时间**
    -   **课堂实战：Golang随机数生成器**
    -   **课堂实战：Golang数学运算（平方、开方）**
-   Golang处理命令行参数
-   Golang实现用GIF动画展示程序并发架构
-   **课堂实战：Golang实现HTTP服务器**（可以运行在Linux、Windows多平台）
-   **课堂实战：Golang实现Socket Daytime协议服务器**
-   [本章要点回顾][1]
### 课后作业
-   **基于课堂知识完善HTTP服务器**
-   **基于课堂知识轻松完成一个解决C10K问题的Socket服务器**
-   根据课堂内容实战Golang交叉编译（可以运行在Linux、Android、Windows等多平台）

# 二、Golang程序结构 
### 课上基础
-   Golang的设计哲学：约定优于机制
-   Golang的命名、声明
-   Golang的变量、赋值
-   Golang的类型
-   Golang的作用域、包和文件
-   Golang写爬虫
-   **课堂实战：Golang爬虫并发实战**
-   **课堂实战：Golang实战斐波那契数列生成器**
-   **课堂实战：Golang版的Web console -- gotty**（通过浏览器来登陆服务器）

###课堂拓展
- HTTP、TCP、IP协议详解
    - HTTP协议基础，各种常见header的含义
    - HTTP性能优化：KeepAlive、连接复用
    - HTTP、TCP、UDP等常见协议的关系  

### 课后作业
-   **Linux命令复刻：cat命令**

#三、Golang的基础数据类型
### 课上基础
-   Golang的整型、浮点数、复数
-   Golang的布尔型
-   Golang的字符串
-   Golang的const常量
-   Golang的控制结构语法
-   Golang的for循环
-   **课堂实战：打印9x9乘法表**
-   **课堂实战：输出各个整数类型取值的范围以及字节大小**
-   **课堂实战：Golang实战文件操作，顺序读写，随机读写**

### 课堂拓展
-   Linux文件系统原理，inode、空洞文件

### 课后作业
-   **实现一个Golang版的计算器**
-   **Linux命令复刻：ps命令**
-   **微服务实战：Socket版echo协议服务器**

# 四、Golang复合数据类型 
### 课上基础
-   数组、Slice的异同和使用场景
-   Map
-   结构体
-   Golang的JSON处理
    -   已知格式的JSON处理
    -   未知格式的JSON处理
-   文本和HTML模板
-   **课堂实战：完成一个简易版的Redis**
-   **课堂实战：完成一个带持久化的学生信息管理系统**

### 课堂拓展
-   CPU L1、L2 cache介绍以及对性能的影响
-   Linux Buffer、Cache对性能的影响

### 课后作业
-   **完成Golang Slice反转**
-   **在上面基础上有能力的同学可以尝试完按单词反转**
    - 如hello world旋转为world hello   
-   **Linux命令复刻：md5sum命令**
-   **完成学生信息管理系统，增加add、load、save等命令**

#五、Golang的函数 
### 课上基础
-   函数声明
-   函数递归
-   **课堂实战：用递归实现斐波那契数列**
-   多返回值、错误、函数值
-   匿名函数、可变参数
-   Deferred函数
-   Panic异常、Recover捕获异常
-   **课堂实战：用函数封装 *学生管理系统* .**
-   **课堂实战：给 *学生管理系统* 增加del和update命令**

### 课堂拓展

-   长连接和短连接，推送机制的实现
-   通信协议的实现，通信协议的关键点
-   深入理解HTTP协议
-   为什么HTTP协议是现在这个样子

### 课后作业
-   **Linux命令复刻：实现一个自己的shell**
-   **Linux命令复刻：实现一个自己的shell，支持管道操作**
    -   如`cat a.go | grep main`

# 六、Golang的方法
### 课上基础

-   方法声明
-   基于指针对象的方法
-   通过嵌入结构体来扩展类型
-   方法值和方法表达式
-   Golang编码实战: Bit数组
-   Golang的封装
-   闭包的概念，用Golang实现闭包

### 开源架构分析
-   Docker实现原理解析
    -   CGroups和LXC隔离技术
    -   namespace技术解析
    -   分层文件系统AUFS和DeviceMapper

### 课后作业
-   以面向对象的方式组织*学生管理系统*


# 七、Golang的接口
### 课上基础

-   接口是合约
-   接口类型、实现接口的条件
-   flag.Value接口
-   接口值
-   **Golang Reader Writer接口介绍**
-   **课堂实战：实现一个Writer版的ByteCounter计数器**
-   **课堂实战：实现一个TeeWriter**
-   sort.Interface接口
-   http.Handler接口
-   error接口
-   **Golang编码实战: 表达式求值**
-   类型断言
-   基于类型断言识别错误类型
-   通过类型断言查询接口
-   类型分支
-   **Golang编码实战: 基于标记的XML解码**

### 课后作业
-   在`https://tour.go-zh.org/methods/16`里完成如下图案
  -   1. 红十字
  -   2. 米字旗
  -   3. 小日本国旗

#八、Golang的协程和Channel
### 课上基础

-   Golang编码实战: 并发的Clock服务
-   Golang编码实战: 并发的Echo服务
-   Channel
-   并发的循环
-   **Golang编码实战**: 并发的Web爬虫
-   基于select的多路复用
-   **Golang编码实战**: 并发的字典遍历
-   并发的退出
-   **Golang编码实战**: 聊天服务
-   **Golang编码实战**: [简单的RPC服务示例][2]

### 课堂拓展:

-   多进程多线程的产生，在Linux系统中的地位
-   多进程和多线程的选用场景
-   多进程、多线程基础；为什么不能一味的开线程解决问题
-   Go routines的实现原理

### 课后作业
-   完善[RPC服务][3]：把客户端改造成可以并发向多个server发送命令并返回结果的模式

#九、Golang基于共享变量的并发
### 课上基础

-   竞争条件
-   sync.Mutex互斥锁、sync.RWMutex读写锁
-   内存同步
-   sync.Once初始化
-   竞争条件检测
-   Golang编码实战: 实现一个简单的基于Telnet聊天室服务
-   **课堂实战：给聊天室服务增加@指定人 私聊功能**
-   Goroutines和线程
-   Golang编码实战: 基于Socket手写一个简单的HTTP服务器
-   **课堂实战：给HTTP服务器增加图片展示功能**

### 名企架构剖析：

- Twitter 架构探秘----Scaling、Cache、Tracing

### 课后作业
-   [实现HTTP服务器的“图片墙”功能][4]

#十、Golang包和工具
### 课上基础

-   包简介、导入路径
-   包声明、导入声明
-   包的匿名导入
-   包和命名
-   golang包管理工具govendor
-   介绍代理服务怎么工作的
-   golang编写代理服务
-   [socks5协议简介][5]
-   golang解析socks5协议代理服务器
-   加密原理
-   golang加密包的使用（RC4/AES）
-   实现一个对称加密/解密工具，支持管道
-   著名的shadowsocks原理简介

### 名企架构剖析

- 百亿量级数据库架构----Pinterest

### 课后作业
-   实现一个对称加密/解密工具，支持指定文件名加密

#十一、Golang测试简介
### 课上基础

-   测试和单元测试的含义和意义
-   go test
-   测试函数、测试覆盖率
-   图形化的单元测试工具：goconvey介绍
-   [加密算法简介][6]
    -   对称加密
    -   非对称加密
    -   散列算法（Hash）
- 中间件回顾
- 加密代理
- 监控大作业介绍及演示
- 大作业环境准备及调试

### 课后作业
-   构建自己的带加密隧道的Socks5代理服务器

#十二、Golang综合大作业(手写监控系统)
### 课上基础
- 串联socks5和proxy_b
- [分布式高可用监控OpenFalcon架构讲解][7]
- 监控agent结构讲解
- 监控数据采集：psutil介绍
- **课堂实战：获取 cpu使用率，cpu load, 内存使用率，磁盘使用率**
- 数据格式与通信协议
- **课堂实战：编写监控agent**
-   **课堂实战：完成监控Agent的Transfer模块**


### 课后作业
-   完善监控Agent的数据上报逻辑：将本端的数据进行采集，然后将数据交个网络模块，最后由网络模块将数据传输给server端。


#十三、Golang底层编程
### 课上基础

-   unsafe.Sizeof, Alignof 和 Offsetof
-   unsafe.Pointer
-   **Golang编码实战: 深度相等判断**
-   通过cgo调用C代码
-   深度解析Golang net/rpc框架
-   用户自定义监控项
-   grafana介绍: 通用图表展示
-   kafka介绍：分布式队列
    - go写kafka
    - go订阅kafka
-   ElasticSearch介绍: 存储和查询
-   Kibana介绍: es的查询界面
-   go写入ElasticSearch

### 课后作业
-   **完成监控Agent的Saver模块**

#十四、Golang Web开发
### 课上基础
-   Golang Web开发现状
-   Golang Template库使用
-   Golang 连接使用MySQL
-   Beego或Gorilla开发一个简单的Web用户管理系统
-   增加权限控制
-   会话保持、Session和Cookie
-   MVC开发思想

### 课后作业
-   为课上实现的Web系统增加Json API

#十五、大家来“点菜”
### 课上基础

-   Reboot拥有强大的金牌讲师团队
-   由同学们自己选择想要深入学习的内容
-   由Reboot金牌讲师给大家深入剖析讲解
-   往届内容：
    -   Google Borg分布式调度系统
    -   名企架构师面试实战
    -   CI（持续集成）& CD（持续部署）


  [1]: https://mp.weixin.qq.com/s?__biz=MzA4MjkxMzMyNg==&mid=2654069634&idx=1&sn=0f8346c71c20739c949a88abecffc766&scene=0#wechat_redirect
  [2]: https://github.com/51reboot/golang-02-homework/blob/master/lesson7/README.md
  [3]: https://github.com/51reboot/golang-02-homework/blob/master/lesson7/README.md
  [4]: https://github.com/51reboot/golang-02-homework/tree/master/lesson9
  [5]: http://www.jianshu.com/p/172810a70fad
  [6]: https://zhuanlan.zhihu.com/auxten/20064358
  [7]: https://github.com/51reboot/simpleMon