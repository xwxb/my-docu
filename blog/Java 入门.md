---
tags:[知识点记录, Java]
---



# Java 入门

## 有关 Java 的技术



### Java 程序设计语言介绍

- Java 具有大部分高级语言拥有的特性

- `.java` 源代码都会先被编译器编译变成 `.class` 文件，再经由 JAVA VM 转化成机器代码

  ![](https://docs.oracle.com/javase/tutorial/figures/getStarted/getStarted-compiler.gif)

- JVM 能够在不同的操作系统上运行，这是 Java 程序的可移植性的基础![](https://docs.oracle.com/javase/tutorial/figures/getStarted/helloWorld.gif)
  - 其作用之一就是对编译后的程序进行不同程度上的进行时优化



### Java 运行平台

- 平台即程序运行的软硬件环境，即操作系统 + 底层硬件，可以简单用操作系统来代指
- 对 Java 来说，其（运行）平台可以具体为![](https://docs.oracle.com/javase/tutorial/figures/getStarted/getStarted-jvm.gif)

- 作为一个独立于平台的环境，Java平台可能比本地代码慢一些。然而，编译器和虚拟机技术的进步正在使性能接近本地代码，而不会威胁到移植性。



## Java 科技可以做什么？

- 开发工具
  - javac
  - java launcher
  - javadoc
- API
- 后端部署
- UI 工具包
- 内置融合库
  - 比如访问 MySQL 的这些



## 参考资料

- [Lesson: The Java Technology Phenomenon (The Java™ Tutorials &gt; Getting Started)](https://docs.oracle.com/javase/tutorial/getStarted/intro/index.html)