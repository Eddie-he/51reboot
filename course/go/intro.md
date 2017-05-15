## 自我介绍
先做一下自我介绍，我从2013年开始使用go，到现在已经有4年的历史了，我从事的工作主要是自动化运维和基础架构相关的工作，因为工作的特点，也促使我最早接触到go语言，
在做了几个成功的项目之后，就开始在全部门推广go的使用，现在go语言已经成为部门的后端语言标配，之后也在公司层面推广过go语言，可以说是一个go语言的布道者。

## 特性一览
Go语言是Google于2009年开源的一门新的系统编程语言，主要有以下特点：

- 静态编译
- 垃圾回收
- 简洁的符号和语法
- 平坦的类型系统
- 基于CSP的并发模型。
- 高效简单的工具链。
- 丰富的标准库

## Hello world
我们先看下go的`hello world`
```go
package main

import "fmt"

func main() {
    fmt.Println("hello, world")
}
```
可以看出go的语法风格跟c还是很像的，有c或者python背景的同学应该不难理解。

我们再看另外一个例子，是用go写的一个HTTP的例子
```go
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, world!")
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
```

我们很容易就写出来一个高并发的HTTP库，这得益于go内置了一个完整的HTTP库的实现，再加上go天然的并发支持，写出高性能的HTTP服务其实可以很简单。

## Go出生的背景
Go最早并不是一个Google的正式项目，而是作为一个"20%"的项目出现的，直到2009年才以开源的方式面向大众，目前go team有稳定的发布周期，大约半年一个新的版本，最新的是1.8。
Go语言的出身可以说非常豪华，最早对go语言的讨论是由罗伯特·格瑞史莫、罗伯·派克和肯·汤普逊发起的，主要是为了解决c++中出现的问题而发起的项目。肯·汤普逊是c语言和unix的发明者，罗伯特·格瑞史莫参与设计了Java的HotSpot虚拟机和Chrome浏览器的JavaScript V8引擎，罗博·派克在大名鼎鼎的bell lab侵淫多年，参与了Plan9操作系统、C编译器以及多种语言编译器的设计和实现。

Go语言从2009年开源到现在吸引了很多开发者的注意，分别获得了2009年和2016年的TIOBE之星，如果说2009年那一次是因为Google的影响，那2016年这一次绝对是自身实力的厚积薄发

### 为什么需要一个新的语言

传统的语言比如c++，大家花费太多时间来学习如何使用这门语言，而不是如何更好的表达写作者的思想，同时编译花费的时间实在太长，对于编写-编译-运行这个链条来说周期太长。动态语言如Python，由于没有强类型的约束，很多问题需要在运行时发现，这种低级错误更应该交给编译器来发现。

同时有如下趋势：

- 人力成本越来越高
- 机器越来越便宜
- 机器的性能越来越厉害
- 在开发效率和运行速度上达到平衡

这就是go诞生的背景。

## Go的哲学
> 简化这门语言必是一门更大的成就 - Rob Pike

Go的思维方式

- 最小心智负担原则
- 最小特性
- 最少惊异
- 最少犯错机会

Go的目标是成为互联网的c语言，在保持了c简单明了的基础上，同时加入了一些自己的特性

- 少就是指数级的多
- 最少特性原则：如果一个功能不对解决任何问题有显著价值，那么就不提供
- 显式表达：所写即所得的语言
- 极度简化但完备的OOP
- 功能内聚：例如，强大的组合能力
- 最友善的 C 语言的支持

Go是一门以软件工程为目的的语言设计:

- 快速编译
- 严格的依赖管理
- 代码风格的强一致性
- 偏向组合而不是继承

列出几个我认为比较优秀的设计：

- if for switch之类的语句不需要用括号了，但保留了大括号，方便定位语句块。
- 可以使用 := 进行自动类型推导。再也不用写诸如 list<int>::iterator it = l.begin()之类的语法了。
- 使用字母大小写设置可见性（letter case sets visibility）。省去了成员前面一堆的public和private，直接看名字就可以辨认。
- 保留了指针操作，但去掉了指针算术，指针更安全了，同时留给了程序员使用值语义和引用语义的权利。
- defer关键字。妈妈再也不用担心句柄没有关闭了。

Go对OOP的支持有如下特点：
- 返璞归真，没有继承，只有组合
- 明确区分复用和抽象，复用使用组合，抽象使用
- 所见即所得，明确的内存模型，没有vtable之类的东西
- 鸭子类型，抽象更方便

Go对并发的支持是一个重要的特性，go有两大神器来支持并发：
- goroutine：轻量的"线程"
- channel: 带类型的，协程安全的管道，类似unix里面的pipe

Go解决C10K问题
```go
func handle(conn net.Conn) {
	fmt.Fprintf(conn, "%s", time.Now().String())
	conn.Close()
}

func main() {
	l, err := net.Listen("tcp", ":8080")
	if err != nil {
		log.Fatal(err)
	}
	for {
		conn, err := l.Accept()
		if err != nil {
			log.Fatal(err)
		}
		go handle(conn)
	}
}
```
很直接，回归最原始的思维方式，没有回调地狱

## Go在工程上的设计

Go在工程上的设计可谓体贴入微：

- 没有依赖地狱, 甚至是glibc
- 编译一次，随处拷贝，部署极为方便
- 对比 gitlab和gogs https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/install/installation.md

交叉编译只是一个环境变量的问题：

- 编译成linux的二进制 GOOS=linux go get github.com/icexin/markdown
- 编译成windows的二进制 GOOS=windows go get github.com/icexin/markdown
- 编译成arm上的二进制 GOOS=linux GOARCH=arm go get github.com/icexin/markdown
如果尝试过c的交叉编译的同学就能体会这种便捷性。

一些一键命令:

- 一键编译 go build
  go build github.com/icexin/markdown

- 一键测试 go test
  go test github.com/icexin/markdown

- 一键下载更新依赖并编译 go get
  go get github.com/icexin/markdown
  
Go对文档的支持是目前所有语言里面最贴心的，比如你在github上看到一个项目叫`github.com/go-redis/redis`，前面加上`godoc.org`即`godoc.org/github.com/go-redis/redis`就可以自动生成所有的文档。

## Go的明星项目：

- Docker，正火热的容器化技术
- kubernetes，Goole Borg的开源实现
- Etcd, 类似zookeeper的高可用key-value存储
- TIDB, 国人开发的Google spanner的开源实现

## Go学习资料

- 官方网站 golang.org
- Go在线教程 tour.golang.org
- 文档 golang.org/doc/




