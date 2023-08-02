```
tags: [知识点记录, GoLang, 青训营]
```

[5. 设计模式之 databasesql与 GORM实践.pdf - 飞书云文档](https://bytedance.feishu.cn/file/boxcngmUNHi2joONiiEOgSpJt8d)

## 理解包 `database/sql`

### 基础概念介绍

数据库与SQL介绍： [什么是数据库和SQL？ - 知乎](https://zhuanlan.zhihu.com/p/41576768)

DSN： [DSN 相关解读](https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FData_source_name) 简单说就是把所有和数据库链接的信息综合起来的一个字符串

### 基本用法

简单使用的例子： ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96d28b6d4d2d416ba1ec70ae15f3e6f3~tplv-k3u1fbpfcp-zoom-1.image)

### 设计原理

首先理解这张图：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a8625faaba8344288b36c7689521892a~tplv-k3u1fbpfcp-zoom-1.image)

我们这个用于连接的go模块是起到了一个“连接池的作用”

db sql pkg 提供了一个名为Open()的函数，该函数将驱动程序名称和连接字符串作为参数。驱动程序名称指定了用于连接的驱动程序，而连接字符串包含了连接到数据库所需的信息，如主机名、端口、用户名和密码。一旦建立了连接，开发者就可以使用数据库/sql包来执行查询和操作数据等操作。

连接池主要表示app和数据库建立了许多的连接的一个管理，它会尽可能使用现有的链接，而不是去创建新的连接，以降低服务器负载

原理看不懂，t1

## GORM 基础使用

ORM 是什么？ 就是可以把关系数据库映射到一个对象上，在编程语言里面方便我们操作 进一步来说可以让我们把内存中的数据持久化到磁盘中

> 持久层（Persistence Layer），即专注于实现数据持久化应用领域的某个特定系统的一个逻辑层面，将数据使用者和数据实体相关联。

GORM 是什么？ 就是用Go写的ORM，方便简单地对数据库进行操作

### 基础CURD接口

直接查就行了

### 惯例约定

一些管理约定，要对数据库比较熟悉。。t3

### 关联介绍

CRUD操作

预加载

级联删除

## GORM设计原理

> 怎么用一个语句来优化性能呢

### SQL 是怎么生成的？


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4b4292b0d9c434e8775ec25e1b154e7~tplv-k3u1fbpfcp-watermark.image?)

SQL STATEMENT 由很多 Clause 构成，子句中含有很多表达式->
GORM STATEMENT = n * Chain Method + Finisher Method
- Chain Method 用来添加 GORM Clauses
- GORM Finisher 来决定执行


- GORM 就是根据 SQL 的构成来生成的
- 最后使用 SELECT 模式来执行 GORM Statement

源码



## GORM 最佳实践

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28a5b2a2d6e244ba9f8c0b303c02d75e~tplv-k3u1fbpfcp-watermark.image?)
(很有意义）

### 数据序列化和 SQL 表达式

1. SQL 更新和创建
2. SQL 查询
3. 数据序列化
