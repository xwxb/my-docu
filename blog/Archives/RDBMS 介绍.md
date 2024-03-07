---

tags: [知识点记录, GoLang, 青训营]

---

[‌‌深入理解RDBMS.pptx - 飞书云文档](https://bytedance.feishu.cn/file/boxcnCux18fntqEC9VZPk42kWdh)

[【后端专场 学习资料六】第五届字节跳动青训营 - 掘金](https://juejin.cn/post/7197699689135210552/#heading-9)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffb8227b75984305a6f876ba01f6c02c~tplv-k3u1fbpfcp-watermark.image?)

## 经典案例

红包雨：每抢一个红包，就会在关系型数据库上执行两个语句

事务：由 SQL 语句组成的程序执行单元，需要满足 ACID 的特性

ACID 的例子

原子性：抖音扣钱和账户价钱必须同时成功或者同时失败，不然就有人血亏
一致性：主要表示的是合法性，像抖音银行的账户扣成了负数，那就不是合法的
隔离性：抖音和头条各扣一个亿，但是因为并发造成的问题用户只赚了一个亿
持久性：操作更新以后钱就没了

其他例子

高并发：那么大的用户量，请求肯定不能串行处理
高可靠：服务器在关键时刻宕机




## 发展历程

前 DBMS 时代：

人工管理 -> 

文件系统 ->

DBMS 时代：

数据库的核心是他的数据模型
- 网状模型：世界上第一个 DBMS；记录之间都是一个多对多的关系
- 层次模型：诞生于 IBM 的 IMS（信息管理系统）；一对多，主要是树状结构
- 关系模型：实体间的联系都通过二维表来描述了

对比

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/81b703fbdba74036aee02fc4c1a3960c~tplv-k3u1fbpfcp-watermark.image?)

SQL 语言

结构化的查询语言，它不同于过程化语言，它只需要告诉数据库做什么，不需要告诉它怎么做

历史回顾

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ecc82eec2a048cb8e07bfb241d55348~tplv-k3u1fbpfcp-watermark.image?)

Oracle 首先发现了 IBM 隐藏的那篇论文和技术，然后综合其他内容进行了首次的一个商业化数据库的发布


## 关键技术

### 一条 SQL 的一生（执行过程）


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c9e5e3c4313c4b53a1b7cb97929274d2~tplv-k3u1fbpfcp-watermark.image?)

#### Parser

分为
- 词法分析
- 语法分析
    - 语法树 AST 用来解析对机器不那么友好的 SQL 语句
- 语义分析：主要是合法性检验，语句的执行是否有问题

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a26a12a0b05845ce90488074b396b45c~tplv-k3u1fbpfcp-watermark.image?)

#### Optimizer

为什么需要优化器？

例子：高德选择一条最佳的路径

表之间会有不同的连接方式，选择最优的连接方式

RBO优化（基于规则的优化）
- 条件化简
- 表连接优化：最小表先进行连接
- Scan优化：索引模式


Plan Tree 执行的关键

（还是没看完，其实今天的课还挺浅显易懂的，但还是尊重现在的情况吧，项目优先，没看完项目之前比较难安心学）



### SQL 引擎

### 存储引擎

### 事务引擎

## 企业实践
