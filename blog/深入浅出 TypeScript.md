[‌‌‬⁣⁣⁢⁡ ‍‍‌‍⁤⁢ ‍⁣⁣ ⁤‬⁢‬ ‍‌ ⁡ ⁣‌⁡‬‌⁤‍ ⁣‬‍  ‍‍字节前端训练营 - 深入理解TS.pdf - 飞书云文档](https://bytedance.feishu.cn/file/AsTpbKumUowCYXxPcuXcfEr5nig)


## 学习 TS 的原因

- 社区活跃度


和 JS 的对比
- 总体：超集，可以创建复杂代码，JS 只能用于创建动态网页
- 类型：支持强类型
- 可以在编译过程发现错误，而 JS 有些问题只能在运行时发现


带来了什么
- 类型安全
- 先进特性
- 完整的 Tool Chain

推荐
- [dzharii/awesome-typescript: A collection of awesome TypeScript resources for client-side and server-side development. Write your awesome JavaScript in TypeScript](https://github.com/dzharii/awesome-typescript#tools)


从编译过程去发现一些语法糖：[TypeScript: TS Playground - An online editor for exploring TypeScript and JavaScript](https://www.typescriptlang.org/)


## TS 基础

### 基础类型

- boolean, number, string 是三大基本类型

any, unknown, void 三大未定类型
- any 就是 TS 对动态类型的支持
- unknown 表示未定的值，但是当确定以后，除非它是 any 类型，否则它的类型不能再被改变
- void 和 clang 一样表示无类型


never 类型表示一些不能确定类型，但是却又是不会出现的情况，为了确保代码的完备性而写上的，比如设置就是死循环的函数的返回值和异常中止函数

- 数组，元组


### 函数类型
需要有定义输入和输出
- 输入：可选和默认
- 输出：支持自动推断
- 重载


### 接口
- 定义：为了定义对象类型
- 特点
    - 可选
    - 只读
    - 可以描述函数
    - 自定义熟悉
- 灵活 Duck typing


### 类
- 增加了访问性修饰符
- 抽象类
- interface 约束类， implement 实现

和接口的区别
- 类是具体的对象模板
- 接口是定义对象的形状，大致的状态
- 某些情况下确实可以交替使用

## TS 进阶

### 高级类型
- 联合
- 交叉
- 类型断言 const a as number
- 别名 type
    - 和 interface 的区别


### 泛型
作用


基本使用


工具类型：

基础操作符
- typeof 
- keyof 获取所有键
- 索引访问
- 泛型约束

常用工具类型

可以通过新来一个别名的方式来将他们定义为这些属性
- 可选
- 必选
- 只读



## TS 重要实战内容

### 声明文件
- declare 第三方库中的类型声明文件
- `.d.ts` 声明文件定义
- @types 第三方库的类型包
- tsconfig.json 定义 TS 配置



### 运用泛型约束后端接口类型