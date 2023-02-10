---

tags: [知识点记录, GoLang, 青训营]

---
[‌深入浅出 RPC 框架 副本.pptx - 飞书云文档](https://bytedance.feishu.cn/file/boxcn5DUtKdJDDitx8NHShv2xZd)

[【后端专场 学习资料五】第五届字节跳动青训营 - 掘金](https://juejin.cn/post/7196322025114779703/#heading-33)

## 基本概念

RPC (Remote Procedure Calls) 调用和本地函数的区别

1. 函数映射：远程调用的时候要如何知道该调用这个函数呢？还有定位问题，本地可以用指针，函数只能用id
2. 数据流转换成字节流
3. 网络传输


RPC 概念模型

这里的 Stub 是一个打包解包参数和结果的过程的过程，有点“票根”的意思

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/34547ead74fa4c03895cfde39faeef17~tplv-k3u1fbpfcp-watermark.image?)


RPC 的完整过程

- IDL 文件：接口通信语言，很重要，比如说 ProtoBuf ，使得不同平台上的不同语言可以相互通信
- 生成代码：通过编译器工具将IDL文件转换成静态库
- 解编码：数据流和字节流、序列化和反序列化
- 通信协议：规范了格式，额外的元数据
- 网络传输：成熟的网络库 + TCP / UDP传输


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d9e5025aeae7488b9cfeb7bbfa1316ed~tplv-k3u1fbpfcp-watermark.image?)

RPC 好处和带来的问题

好处主要是能够隔离分别处理，效率高
问题是服务器宕机不好处理

由RPC框架解决

## 分层设计


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c61cc9f621f4416bc626a50bea111d8~tplv-k3u1fbpfcp-watermark.image?)

### 编解码层

不同的人使用同一份 IDL 文件生成不同的 CodeGen

数据格式
- 语言特定的格式
- 文本格式
- 二进制编码：跨语言、高性能，ProtoBuf就是一种，常见的还有Thrift 的 BinaryProtocol

二进制编码

一般使用 TLV 编码
- Tag 类似于类型
- Length
- Value 值也可以是另一个 TLV 结构

选型
- 兼容性
- 通用性


### 协议层

概念
- 特殊结束符：以此作为协议单元结束的标志
- 变长协议：类似于计组里的变长指令

协议构造
- HEADER MAGIC：标识版本信息，用于快速校验
- PROTOCOL：解编码方式 Binary or Compact
- TRANSFORM ID：压缩方式
- INFO ID： 定制元数据
- PAYLOAD：消息体

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d92bd0f505a64c8480112ae4712278b6~tplv-k3u1fbpfcp-watermark.image?)


……

### 网络通信层

Sockets API



![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e35776dc087846c9b3d24b7863f9f075~tplv-k3u1fbpfcp-watermark.image?)

……

## 关键指标分析


## 企业实践

主要是为了跳出课本以外，接触企业实践

### 整体架构 —— Kitex