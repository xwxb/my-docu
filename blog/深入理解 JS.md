---
tags: [青训营, JavaScirpt]
---



[⁡⁡‬ ⁡‍‍⁢⁣‌⁢‌‌⁢ ⁣⁢‬⁤⁡⁡ ⁡⁢‌‍‌⁣⁢‌‌⁤⁢字节前端训练营 - 深入理解JS.pptx - 飞书云文档](https://bytedance.feishu.cn/file/BawAbtvtyopFCgxx5bOc4VuvnPb)

推荐 [目录 | JavaScript 标准参考教程](https://wohugb.gitbooks.io/javascript/content/)



## JS 的基本概念

### His


诞生

- 借鉴了四门语言
- C 的基本语法，Java 的数据类型和数据管理
- Function First Class
- Prototype-based


发展
- 三个命名变化
- ECMAScript
    - 为了打败微软，交给了 ECMA 公司
    - 基本可以等于 JS
- 0910 NODEJS NPM 可以用 JS 写服务端了
- 2016 ES 6


### 特点

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2ae1377e4cb478ab7fc8b5ac9f4142f~tplv-k3u1fbpfcp-watermark.image?)

重点是渲染进程
- GUI 线程，把页面上的内容给绘制处理出来
- JS 线程就是运行线程的

这两个线程是互斥的
- 所以是单线程的

- 动态/弱类型语言：定义的时候无需声明类型
- 面向对象，函数式
    - 都是选择性
    - 函数式其实就是 参数 -> 结果；副作用，纯函数

- 安全：无法访问系统
- 性能：JIT

### 数据类型


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/312a2408da2d43a0adcad9891089e6c7~tplv-k3u1fbpfcp-watermark.image?)
- JS 中的复杂的类型（如字典）都是引用类型，直接赋值的话相当于引用同一个地址了。
- 但是字符串这种会直接传值
- 结论是：**在 JS 中，简单类型被创建出来就不会被改变，复杂类型可以被改变** (string and array)


### 作用域

- 作用域涉及而是**变量的可访问性和可见性**
- JS 是「静态作用域」或者叫做「词法作用域」，可以预测代码执行过程中 query identifier
    - （词法环境，不是同一个东西）


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ab174a7990c4bf8bc83b06d9d9b0704~tplv-k3u1fbpfcp-watermark.image?)

### 变量提升

- 只针对 `var` 和 `function`
- 可以实现在把定义放在执行前预先进行初始化的效果


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/edac686cc7294dc1bb3a2d65e3837ac0~tplv-k3u1fbpfcp-watermark.image?)
- 函数定义会整个提前
- 但是 `var` 只会提升一个 `undefine`

JS 是纯解释的语言吗？
- 所以也可以发现也并不完全是，也是有一个预编译的过程的



## JS 的执行

### 概述

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bb3479fe41714787a9991d22b41ed24e~tplv-k3u1fbpfcp-watermark.image?)

- 字节码的好处之一是节省代码量，节省内存
- 右边的机器码是 JIT 过程
    - 如果代码执行了两次以上，就会被视作是“热代码”
    - 这种代码会存储起来，下一次就直接编程执行


AST 转换的一个简单示例

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e86049757e9c46c695fbb2756622c74b~tplv-k3u1fbpfcp-watermark.image?)



### 执行上下文

- 执行上下文是指执行到这块代码的准备工作
- 分类
    - 全局
        - 开始执行的就创建，压栈，声明周期内只有一份
    - 函数
    - Eval
- 做的事情
    - 绑定 This
    - 创建词法环境：放函数和const
    - 创建变量环境：放 var 
- 调用栈
    - Outer：指向外部变量环境；相对于自己函数的一个外部，那就是「全局的执行上下文」了 ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ea5a338245e44eaa951f3411641b5a93~tplv-k3u1fbpfcp-watermark.image?)
    - 找的是上一级，不一定是全局
    - 这就是「作用域链」

- 变量环境和堆空间是分开的

- 切换 ESP 的时候涉及空间回收
    - 函数的直接上下文会在函数执行完在栈顶弹出


## 进阶知识点

### 闭包

- （函数）闭包指的是可以直接访问定义时候的变量的函数
- 闭包本质上是函数执行完内存不会被回收的一块变量
- 闭包的作用是可以进一步抽象函数，以及可以起到类似于静态函数的效果，可以创建属于函数的变量，函数执行后变量不被回收。


### this
- 普通的 this ，在浏览器中直接指向 Window 类
- this 的指向是可以通过 `apply()` `bind()` 等函数去改变的
- this 的创建过程



### 垃圾回收


### 事件循环
- 微任务队列一定优于宏任务执行
    - 例子是 promise 和 `SetTimeOut`


***

重要知识点总结

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6fd276ac96e34d3b91e7b54206e5557c~tplv-k3u1fbpfcp-watermark.image?)