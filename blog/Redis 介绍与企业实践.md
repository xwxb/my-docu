---

tags: [知识点记录, GoLang, 青训营]

---

[第五届青训-Redis-大厂程序员是怎么用的.pptx - 飞书云文档](https://bytedance.feishu.cn/file/boxcniJFW1q92VkUT0sq9iAaxjh)
[【后端专场 学习资料七】第五届字节跳动青训营 - 掘金](https://juejin.cn/post/7198982002304942138#heading-0)

## Redis 介绍



### 概述

为什么需要 Redis ？
- 数据出现了分库、分表
- 数据库从单机变成了集群
    - 数据量
    - 读写压力


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b73067b127e64575a807b38088d18a38~tplv-k3u1fbpfcp-watermark.image?)


有什么方法能让读写变得更快？
- 用类似计算机内存的方式，利用把经常用到的热数据存到内存里面



- 读的时候优先读 Redis，再读 MySQL
- 写的时候先写到 MySQL 里，再通过【Binlog监听】来写入 Redis

### 基本工作原理（怎么实现持久化？）：



- 怎么保证重启数据不在存储中丢失？
    - 增量数据保存到 AOF 文件
    - 全量数据保存到 ROF 文件
    - Redis 重启的时候会首先加载 dump.rdb文件
    - 然后加载 aof 文件，然后去对比
        - aof每次追加的最后一个部分是RESP协议
- 单线程处理所有操作命令：就类似于并发命令串行处理


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d93abe6668a24778ae4de4d409898768~tplv-k3u1fbpfcp-watermark.image?)



## Redis 应用案例
> 源码在开头的学员手册[redis_course: 青训营redis课程Demo](https://gitee.com/wedone/redis_course)

均为掘金的功能模块

### 连续签到

要求：
- 连续
- 每天内的时间限制

做法：
- 用用户id做 key
- 存当前已签到天数并设置过期时间

String 数据结构说明：
> 在工作的时候，基础是很重要的，如果能了解背后的原理，为什么使用这个数据结构可以提升性能，在面试的时候也会很有帮助

- String的设计很独特，存的是二进制数据，需要
  - 很快的读写
  - 节省空间
  - 数据变更的时候需要很快反应

- 主要是sds的指针的左右操作
  - buf 动态扩容
  - 


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc1dce1082a34155bcec9871f968955c~tplv-k3u1fbpfcp-watermark.image?)





### 消息通知

list 作为消息队列




### 


## Redis 使用注意事项