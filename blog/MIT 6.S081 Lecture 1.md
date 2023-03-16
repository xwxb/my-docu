## 课程目标
- 理解操作系统的实现
- 从 XV 6 小型操作系统只获得实践经验


## 操作系统的重要任务
- 硬件的抽象
- 多路复用，并发处理
- 独立性
- 共享功能
- 安全机制
- 让应用程序获得更好的性能
- 用途尽可能广泛


## 整个架构概述

- 用户层
- 内核态
    - 进程处理
    - 内存分配
    - 访问控制
- 硬件层

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/deb6dd8a3d054bfeb697d61985dea680~tplv-k3u1fbpfcp-watermark.image?)


## Kernel API 系统调用

例子：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/194537f4241a4a6d89de176899904fdc~tplv-k3u1fbpfcp-watermark.image?)
（fork 是创建新进程的）

和普通函数的区别是什么？
- 是一段始终调用的代码
- 有特殊的权限，可以访问很多敏感的内容


## Why OP HARD / Interetring
- 难以处理
- Tensious 有很多矛盾需要处理
    - 效率和抽象
    - 强大却又简单的API
    - 灵活与安全
- 提供了很多功能，有很多**奇怪的交互方式**，值得我们去思考
- 追查 bug 的本质

高级语言多少和直接系统调用有一些隔离，这是为了可移植性，但最终还是要通过一些接口来联系起来


## 实际 XV6 中一些功能（系统程序）的代码设计实例和解释
C语言是比较低级的语言，更接近汇编语言，本质是机器指令

copy



open


fork
复制当前进程

exec 
将进程替换成另一个exe

forkexec

子进程和父进程的关系（？）


redirect
运行命令并将输出重定向
文件描述符


