## Go语言课程

### 入门 (第一节)

* 环境搭建 
* 编辑器
* 编译运行
* Hello, World
* 命令行参数
* 查找重复的行
* GIF动画
* 获取URL
* 并发获取多个URL
* Web服务
* 本章要点

### 程序结构 (第二节)

* 命名
* 声明
* 变量
* 赋值
* 类型
* 包和文件
* 作用域


### 基础数据类型 (第二节)

* 整型
* 浮点数
* 复数
* 布尔型
* 字符串
* 常量
* 课堂小知识:
	* Linux文件系统原理，inode、空洞文件。
	* Golang文件操作，顺序读写，随机读写。


### 复合数据类型 (第三节)

* 数组
* Slice
* Map
* 结构体
* JSON
* 文本和HTML模板
* 课堂小知识:
	* CPU L1、L2 cache介绍以及对性能的影响
	* Linux Buffer、Cache对性能的影响
	* HTTP、TCP、IP协议详解 
	* HTTP协议基础，各种常见header的含义
	* HTTP性能优化：KeepAlive、连接复用
	* HTTP、TCP、UDP等常见协议的关系

### 函数 (第四节)

* 函数声明
* 递归
* 多返回值
* 错误
* 函数值
* 匿名函数
* 可变参数
* Deferred函数
* Panic异常
* Recover捕获异常
* 课堂小知识：
	* 长连接和短连接，推送机制的实现
	* 通信协议的实现，通信协议的关键点
	* 深入理解HTTP协议
	* 为什么HTTP协议是现在这个样子
* 方法声明
* 基于指针对象的方法
* 通过嵌入结构体来扩展类型
* 方法值和方法表达式
* 示例: Bit数组
* 封装


### 接口 (第五节)

* 接口是合约
* 接口类型
* 实现接口的条件
* flag.Value接口
* 接口值
* sort.Interface接口
* http.Handler接口
* error接口
* 示例: 表达式求值
* 类型断言
* 基于类型断言识别错误类型
* 通过类型断言查询接口
* 类型分支
* 示例: 基于标记的XML解码


### Goroutines和Channels (第六节)

* 示例: 并发的Clock服务
* 示例: 并发的Echo服务
* Channels
* 并发的循环
* 示例: 并发的Web爬虫
* 基于select的多路复用
* 示例: 并发的字典遍历
* 并发的退出
* 示例: 聊天服务
* 课堂小知识:
	* 多进程多线程的产生，在Linux系统中的地位
	* 多进程和多线程的选用场景
	* 多进程、多线程基础；为什么不能一味的开线程解决问题
	* Goroutines

### 基于共享变量的并发 (第七节)

* 竞争条件
* sync.Mutex互斥锁
* sync.RWMutex读写锁
* 内存同步
* sync.Once初始化
* 竞争条件检测
* 示例: 并发的非阻塞缓存
* Goroutines和线程


### 包和工具 (第八节)

* 包简介
* 导入路径
* 包声明
* 导入声明
* 包的匿名导入
* 包和命名
* 工具
* 测试 
	* go test
	* 测试函数
	* 测试覆盖率
	* 基准测试
	* 剖析
	* 示例函数

### 反射 (第九节)

* 为何需要反射?
* reflect.Type和reflect.Value
* Display递归打印
* 示例: 编码S表达式
* 通过reflect.Value修改值
* 示例: 解码S表达式
* 获取结构体字段标识
* 显示一个类型的方法集

### 底层编程 （第九节)

* unsafe.Sizeof, Alignof 和 Offsetof
* unsafe.Pointer
* 示例: 深度相等判断
* 通过cgo调用C代码
* 深度解析Golang net/rpc框架

### 大作业(监控系统) (第十，十一节)

* 采集agent
* 数据中转transfer + kafka
* 数据入库saver + es
* 报警模块