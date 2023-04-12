---
tag: [GoLang, 青训营, 学习记录]
---



[Go 语言进阶 - 工程进阶](https://juejin.cn/post/7188225875211452476/#heading-8)



## 并发编程

并发vs并行

- 并行可以理解为实现（解决）并发的一个手段
- Go语言就是为并发而生的，可以充分发挥多核优势

[完全理解并发 - 知乎](https://zhuanlan.zhihu.com/p/47295847)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8847173cd1304db9ae13c73e1ba1af82~tplv-k3u1fbpfcp-zoom-1.image)



### 协程 GoRoutine



区别 (Concurrence and parallel)

- 线程：昂贵下系统资源，占用很小，内核态
- 协程：轻量级的一个线程，用户级；Go可以创建上万个协程



- 开启协程的方法

  ```go
  // 最简单的方法直接 go 就行了
  go func()
  
  //这是一般会使用的匿名函数的方法，最后的括号表示匿名函数的输入参数
  go func(){
      
  }()
  ```

- 子协程执行完，母协程不退出



### CSP

- 一种并发编程的模型，提倡用在通信中共享内存，而不是反过来

- Channel：连接协程，进行值的通信
- 协程间通过共享内存进行内存交换



### Channel

- 通过 `make` 函数可以建立确定「缓冲通道」大小的 Channel
- 缓冲通道和缓冲区的作用差不多
- **作用**
  - 顺序性，并发安全
  - 有缓冲：生产-消费模型中，不会因为消费速度问题影响生产


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d25797a61874972bf2975af104d54f5~tplv-k3u1fbpfcp-watermark.image?)

**复杂操作**

### 并发安全 Lock


t3

- 不加锁可能引起错误结果
- 避免对共享内存做一些并发安全的读写操作

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf81d5b83e224466b905ece1effd7f08~tplv-k3u1fbpfcp-watermark.image?)

### WaitGroup

三个主要计数方法：

- 协程 +d -1 阻塞直到零

优化
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47e1085e8c0c41a185e0da868fd1661f~tplv-k3u1fbpfcp-watermark.image?)

## 依赖管理

### 依赖管理演进

- GOPATH：
  - 所有项目都从 src 目录下获取
  - 问题：不同的项目分别对同一个包的不同版本有依赖的使用的时候，包升级了以后就控制不了就版本了，**无法实现多版本的控制**
- Go Vendor：
  - 项目目录下增加 vendor 文件夹，存放依赖的副本，项目优先从 vender 获取依赖
  - 分别使用依赖解决了不同项目**解决了多版本控制**的问题
  - 问题：**依赖版本不可控，容易不兼容**
- Go Module：
  - Go推出的一个依赖管理系统，最终目的是**定义版本规则和管理项目的依赖关系**
  - 三要素
    - 配置文件 go.mod 描述项目如何以来
    - 中心仓库管理依赖库 proxy
    - 本地工具 

### 配置文件 go.mod

基本单元：
- 原生库（版本）
- 单元依赖
  - module path
  - 版本号 定位到某一个版本和提交
    版本规则：
      - 语义化版本
      - commit 伪版本
  - indirect 非直接依赖，没有导入的
  - incompatible 没有 go.mod 和 「主版本」 v2+



### 依赖分发-回源 proxy:

解决远程仓库的依赖使用问题

直接同步的话：

- 无法保证构建稳定性
- 保证依赖可用性
- 仓库负载

解决：所有仓库都从 proxy 拉去依赖
GOPROXY环境变量：复制站列表，顺次去找，找不到就回到源站





### 本地工具使用

go get

- 默认
- 删除
- 拉取特定分支



go mod 

- `init` 初始化，创建 go.mod 文件
- `download` 下载模块到本地
- `tidy` 修建，自动删除和增加





## 测试

测试种类
- 回归测试
- 集成测试
- 单元测试





### 单元测试

#### 规则


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e83ef00192e949069f1e4a169bc5147e~tplv-k3u1fbpfcp-watermark.image?)

-  `*testing.T` 是用来在测试过程中报告和记录的

-  `go test` 的时候，会根据文件夹代表的包名对应的代码的文件名来找相应的 `_test.go` 文件，这是我目前发现单个代码文件名的唯一作用





- go test 运行测试
- 单元测试 assert


评价 —— 覆盖率
- 描述通过测试的代码覆盖程度
-  `--cover`
-  tips
    -  50%+就过关
    -  分支尽量独立、分别覆盖全
    -  测试单元粒度小，测试目的明确





#### 依赖测试

> 要测试的单元可能有很多依赖

两个目标
- 幂等：多次测试结果一样
- 稳定：单元测试是能够相互隔离的，不同测试函数能够独立运行


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c311975f340c4cfa97e24c84df826804~tplv-k3u1fbpfcp-watermark.image?)


实现两个目标：Mock机制

- 文件处理：测试文件容易被篡改
- 打桩：用一个函数替换原函数
- 打桩测试：不依赖本地文件



自行研究的部分：



- Monkeypatching 是软件开发中的一种技术，就是用某种方式实现**模仿替换**掉原来程序中**运行时**会用到的一些代码
- 而mock测试则是对**直接依赖进行模仿**，来测试软件运行时候依赖的问题



详细说明可以参考：

- [干货！用大白话告诉你什么是Mock测试 - 掘金](https://juejin.cn/post/6955472906465837064)

#### 基准测试 BenchMark

- 重复运行一段代码多次，来测试表现
- 作用：对代码进行优化
- 写法 
    - `BenchmarkXxx()`
    - 入参 `*testing.B`
- 听不懂 fast并性能更优

[testing package - testing - Go Packages](https://pkg.go.dev/testing#hdr-Benchmarks)




## 实战

步骤：
- 需求分析
- 代码开发
- 测试运行
