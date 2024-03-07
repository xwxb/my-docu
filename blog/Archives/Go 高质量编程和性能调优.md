---
tags: [知识点记录, GoLang, 青训营]
---

[‍‌⁤⁢⁡⁤ ⁣⁡⁣⁡ ‍‍‌ ⁡⁤ ‌⁣‬ ‍⁡‬‌⁢‍ ‍⁡ ⁢‬高质量编程与性能调优实战 .pptx - 飞书云文档](https://bytedance.feishu.cn/file/boxcn7AkvSWnRkHEttsuYHqW24g)

## 高质量编程

高质量：
1. 正确性：边界清晰、正确处理一些边界情况
2. 可靠性：鲁棒
3. 简洁清晰

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22c31bd8515842a8902a26bf315c9834~tplv-k3u1fbpfcp-watermark.image?)

### 编码规范

众所周知，Go 是强迫症语言，所以能编译出来的代码基本都是格式化好了，因此 Google 的 Style Guide 里面并没有 Go 语言的 styleguide;

但是依然有的是关于编码大致模式和高效编程的一些指导，参考：[styleguide | Style guides for Google-originated open-source projects](https://google.github.io/styleguide/go/guide.html) （这个很简洁，几分钟就能读完）

中文版：[Google Go 编程规范 | Google Style Guides](https://gocn.github.io/styleguide/)



下面是一些比较重要的公共约定部分：

**注释**

1. 公共符号始终要注释
2. 不需要注释接口的实现方法


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/482f2519855343ba85f909f24031c260~tplv-k3u1fbpfcp-watermark.image?)

要求：
1. 解释代码未表达出的上下文
2. 解释代码何时会出错


**代码格式**

使用本地工具



**命名规范**

变量
1. 越短越好
2. 缩略词全大写
3. 变量调用的位置越远，就要携带更尽可能多的上下文信息

函数
1. 不必携带包名的content
2. 短
3. foo（这个变量一般用来表示一个未知的值，表示尚未确定，也是一种 placeholder） ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc1fb482216b44c9a04dd02881ae0e17~tplv-k3u1fbpfcp-watermark.image?)

包

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/95d0e5aa2ef844f382f9ab057ebd95c1~tplv-k3u1fbpfcp-watermark.image?)



**控制流程**

避免嵌套，尽量减少缩进

实例：检测多个函数的错误的时候，有错误就提前返回


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/468ee21d655e444bb6185541537919f9~tplv-k3u1fbpfcp-watermark.image?)

**错误和异常处理**

简单错误

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fb15cb13166043ec95fa11f5db8d12aa~tplv-k3u1fbpfcp-watermark.image?)




warp

包装错误形成错误链
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/140d720b4ada406e92d7bf9246ac4630~tplv-k3u1fbpfcp-watermark.image?)



错误判定



![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b3b54bb0c0d43be8e6f9bfb02242d1d~tplv-k3u1fbpfcp-watermark.image?)

- 不能用 `==` 来判断错误， `error.Is` 可以用来检查**错误链**上是否有特定错误
- `error.As` 可以将特定错误获取出来，和 `.Is` 的区别是能够拿出来判断


error

提供尽可能简明的错误

panic

用于真正异常的情况
听不懂
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/844f8d1ff14c445aa3c65a094f506fdd~tplv-k3u1fbpfcp-watermark.image?)

recover

- 是在被 `defer` 的函数中使用的
- 多个 `defer` 后进先出
- 可以配合 `log` 记录当前调用栈





### 性能优化建议

可以学习：[Effective Go - The Go Programming Language](https://go.dev/doc/effective_go)



获取建议&对比的工具：Benchmark

- `go test -bench=. -benchmem`
- 结果说明![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69f973cc10a8480c902957cb205b969d~tplv-k3u1fbpfcp-watermark.image?)



具体的建议：

1. slice 预分配内存

原理：本质是对数据进行的指针、分配内存的操作

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/463e2a3eb31e49f39d6b278255c3190c~tplv-k3u1fbpfcp-watermark.image?)

另一个建议是再创建子切片的时候使用 copy，让大内存尽量得到释放



2. Map 预分配内存

3. 使用 `strings.Builder` 来构造字符串

   1. 和 Java 一样，用 `[]byte` 数组的底层实现来构造字符串

   2. 而不是为了构造不可变类型，不断分配新的内存

   3. 也可以预分配

2. 空结构体
   1. 代替 Set
   2. (其实我不是很理解，感觉有点违背语言本身，或者说为什么为什么没有编程语言本身就是这样设计的)
      1. 可能低性能也有其用途吧，或者说和原来的设计目的有关
3. Atomic 包是互斥多线程计数的硬件实现，比用软件互斥锁时间性能上好很多

![image-20230602090820188](https://s2.loli.net/2023/06/02/zdTg5Pvanys7qDG.png)



## 性能调优实战



### 调优原则

- 基于数据不要猜
- 定位最大瓶颈而不是细枝末节
- 不要过早优化
- 不要过度优化



### pprof





### 排查实战



### 采样过程和原理





