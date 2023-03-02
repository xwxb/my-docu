---
tags: [知识点记录, GoLang, 青训营]
---

[第五届青训营 ClickHouse-你没见过的列存储.pptx - 飞书云文档](https://bytedance.feishu.cn/file/boxcnrD9MzRtCRfvnYPZdegpxHf)

[【后端专场 学习资料七】第五届字节跳动青训营 - 掘金](https://juejin.cn/post/7198982002304942138/#heading-13)

## 数据库基础复习

### 数据库定义

- 数据解析成有序集合
- 一般以电子的物理形式存储到计算机系统中
- 通过 DBMS 来控制
- 可以通过查询语言获取想要的信息
- 由数据、DBMS、关联应用三部分组成


### 数据库的类型
- OLTP 高速分析，大量事务
- OLAP 多维度，大量数据，理解无锡关系


OLAP具体说明


### SQL

优点：
- 标准化，关系型数据库的通用语言
- 高度非过程化
- 两种使用方式，既可以直接运行，也可以嵌入到编程语言中（使用Driver）

### 数据库架构


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa70920b3f6c44089efa492b0b86bbee~tplv-k3u1fbpfcp-watermark.image?)


红色：SQL的执行部分
- Parser 语法、词法分析，生成AST树
- Analyzer 合法性检查、安全权限校验等
- Optimizer 代价评估、为查询的执行定义真正的执行方式
- Executer 生成课执行的物理计划


蓝色：存储引擎

- 管理内存数据结构
- 管理磁盘数据的增删改查
- 读写算子：数据读写的逻辑


如何存储数据？
- 并发处理
- 构建索引
- 行列存储方式

如何读写数据？
- 读写量的均衡
- 点查场景
- 分析型场景


## 列式存储介绍
行和列是指关系型数据表里的行列

优点
- 易于进行数据压缩
- 相同类型归类并排序

常见压缩算法介绍
LZ4压缩算法：可以直接将连续存储中的前面的部分用一个二元组表示
Run-length encoding：W2R3这样
Delta encoding：就是存和base的差值