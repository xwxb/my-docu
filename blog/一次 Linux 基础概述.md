---
tags: [Linux, 操作系统, 青训营]
---

[‍⁢⁣‌⁣⁣⁣‍⁤⁤⁢⁣⁤‬⁢‍⁤‌⁣⁢⁤⁤‬⁤‌⁣‬ ‌⁢⁡‬⁢‌⁡‍⁢‬⁤⁢‬‬字节前端训练营 - Linux 基础.pptx - 飞书云文档](https://bytedance.feishu.cn/file/H9JGbU3jMoe23AxopbYcDVJcnHx)



## 计算机硬件

计算机五大基本单元

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/72cc0b21f2084c5b808ede86126fc268~tplv-k3u1fbpfcp-watermark.image?)

## 操作系统

计算机中最大的软件，承上启下，在软硬件中传递信息

提供两大能力

管理计算机资源

*   处理器
*   存储

提供用户接口

用于启动其他软件的 OS 是怎么被启动的？
—— 操作系统启动流程

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9cf33048672b4dedbe348833d8ebfbac~tplv-k3u1fbpfcp-watermark.image?)

*   BIOS：
*   UEFI：是对BIOS的一个优化
    *   优化掉了自检的过程

## 发展历史

版本

*   发行版
    *   \= 内核 + 常用软件
    *   几个分支

应用领域

## 系统结构

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f9e7792e1c648d49cafb81f13e50100~tplv-k3u1fbpfcp-watermark.image?)

### 内核

*   内核就是软硬件的中间层
*   内核是资源管理的程序
*   内核提供了系统调用的命令

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/350ccc253e0b4935be1ff71907139722~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3140b0a23fd245e19e2bc32821c56f00~tplv-k3u1fbpfcp-watermark.image?)

### Shell

### 进程管理

#### 进程了解

例子：nignx 会以什么形式存留在 Linux 里

*   一个 CPU 核一次只能运行一个进程
*   进程由 PID 和 PPID 唯一识别
    *   进程的结构是一个树形的结构

常用命令

*   查看抢占优先级
*   S是状态
    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe9579d663584652ad88d1bf6c20c03a~tplv-k3u1fbpfcp-watermark.image?)

#### 进程调度

问：如何在有限的核数的 CPU 上运行那么多进程的

调度过程和状态
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/46785694cb4549b79ba005b917e0f0af~tplv-k3u1fbpfcp-watermark.image?)

调度原则

*   每个进程的运行时间差不多相等
*   逻辑CPU轮询
*   消耗时间 正比于 「进程量」

系统调用

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c304acf8d4a74e7e9c5f943eae9b18a3~tplv-k3u1fbpfcp-watermark.image?)

### 文件系统

—— 负责持久化数据的子系统

一切皆文件

*   套接字(socket)、文件目录……都是
*   好处：保证了操作 / 接口调用的统一

目录结构  —— 树状

问题：如何实现对用户统一调用接口的？

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a15196e9dfb402eb247fa55d62265e8~tplv-k3u1fbpfcp-watermark.image?)

*   VFS：中间的一个帮我们消除差异的软件

查看「文件系统类型」

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9eb3afb06c4244ebb3c510c687a4d110~tplv-k3u1fbpfcp-watermark.image?)

文件读取流程

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d99b961ddf84cd1b11e9bd6863a9215~tplv-k3u1fbpfcp-watermark.image?)

### 用户权限

#### 用户账户

*   用户账户
*   用户组

相关命令：u groups uid

### 文件权限

RWX

*   文件类型
*   所有者
*   所有组
*   其他人

权限操作

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d4676c5726314064baa446bb29e4ee87~tplv-k3u1fbpfcp-watermark.image?)

## 应用程序

### 软件包

*   软件包管理
    *   底层工具：安装删除
    *   上层工具：数据搜索、依赖解析

一些对应关系

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d49ddc39d4ec4723a74f957ea570babe~tplv-k3u1fbpfcp-watermark.image?)

常用命令