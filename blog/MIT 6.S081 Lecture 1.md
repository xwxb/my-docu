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





## 总结

一些课程链接整理

- 一些基本用到的函数的源码：[Index of /2022/lec/l-overview](https://pdos.csail.mit.edu/6.S081/2022/lec/l-overview/)
- 教科书就是 Xv6 手册（和 C语言圣经）
- 工具说明（应该是准备好了的，防止还要用）[6.1810 / Fall 2022](https://pdos.csail.mit.edu/6.S081/2022/tools.html)
- [Lab guidance](https://pdos.csail.mit.edu/6.S081/2022/labs/guidance.html)
  - 内核的汇编代码
  - GDB介绍和两种检查内核的用法
  - qemu 自带的监视器，可以用来监控机器状态
- 重要参考材料 [6.1810 / Fall 2022](https://pdos.csail.mit.edu/6.S081/2022/reference.html)



- 处理器 Handbook，高阶内容了，基本用不到[PDP11-40 Manual Index](https://pdos.csail.mit.edu/6.828/2005/pdp11/)





导图



```mermaid
# 6.1810 2022 Lecture 1: O/S Overview

    - 6.1810 goals
        - Understand operating system (O/S) design and implementation
        - Hands-on experience extending a small O/S
        - Hands-on experience writing systems software
    - What is the purpose of an O/S?
        - Abstract the hardware for convenience and portability
        - Multiplex the hardware among many applications
        - Isolate applications in order to contain bugs
        - Allow sharing among cooperating applications
        - Control sharing for security
        - Don't get in the way of high performance
        - Support a wide range of applications
    - Organization: layered picture 
        - user/kernel diagram
            - user applications: vi, gcc, DB, &c
            - kernel services
            - h/w: CPU, RAM, disk, net, &c
        - We care a lot about the interfaces and internal kernel structure
    - What services does an O/S kernel typically provide?
        - process (a running program)
        - memory allocation
        - file contents
        - file names, directories
        - access control (security)
        - many others: users, IPC, network, time, terminals
    - What's the application / kernel interface?
        - "System calls"
        - Examples, in C, from UNIX (e.g. Linux, macOS, FreeBSD):
            - fd = open("out", 1);
            - write(fd, "hello\n", 6);
            - pid = fork();
        - These look like function calls but they aren't
        - Why is O/S design+implementation hard and interesting?
            - many design tensions:
                - efficient vs abstract/portable/general-purpose
                - powerful vs simple interfaces
                - flexible vs secure
            - features interact: `fd = open(); fork()`
            - uses are varied: laptops, smart-phones, cloud, virtual machines, embedded
            - evolving hardware: NVRAM, multi-core, fast networks
            - unforgiving environment: quirky h/w, hard to debug
        - You'll be glad you took this course if you...
            - care about what goes on under the hood
            - like infrastructure
            - need to track down bugs or security problems
            - care about high performance

```

