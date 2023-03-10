---
tags: [知识点记录, Java]
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



### Java 科技可以做什么？

- 开发工具
  - javac
  - java launcher
  - javadoc
- API
- 后端部署
- UI 工具包
- 内置融合库
  - 比如访问 MySQL 的这些



### 参考资料

- [Lesson: The Java Technology Phenomenon (The Java™ Tutorials &gt; Getting Started)](https://docs.oracle.com/javase/tutorial/getStarted/intro/index.html)



## 程序运行



理解 `.class` 文件

- `.class` 文件是 `.java` 源码编译后得到的文件
- 它是一种 Bytecode，专门设计为让 JVM 执行的
- 而 JVM 则是一种跨平台的程序，通过将 `.class` 转化为相应的机器代码以执行程序





Java 是比较典型的面向对象编程语言，大部分可以类比 CPP 进行学习，这里补充一些理解的细节：



`public static void main(String[] args)`

- 这是一个类中的方法之一，我们把类中的函数叫做「方法」

- `static` 和 CPP 中一样，当一个函数或者变量是静态的，说明这个存储的位置不一样，它们不属于单个类的示例，是所有类共用的，且可以在类没有声明的时候就使用

- `main` 是一个类中所有函数的入口，当我们执行一个类的代码的时候，我们会从这里进入；没有主函数的类不能直接运行

- `args` 这个也是 clang 里有的，就是可以把运行时候的附加参数带进去

  比如`System.out.println("Hello, " + args[0] + "!");` 这个可以在执行文件的时候，把命令后直接带的参数读进去，而不需要后续扫描

  

  

  

  