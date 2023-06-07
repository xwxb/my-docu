---
tags: [青训营笔记]

---

[HTTP 框架修炼之道 .pptx - 飞书云文档](https://bytedance.feishu.cn/file/boxcnQ1BgTNrXqOHQGAuTSbKWPh)
这次其实讲得也不错，例子多，通俗



前后端之间通过 HTTP 的通信过程

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74b2a56824cd414ab6481f2e32bf83dd~tplv-k3u1fbpfcp-watermark.image?)


## 再谈 HTTP 协议

### 是什么？
- 超文本？因为一开始只有二进制解码成文本，后来能传的东西就多起来了

协议

为什么需要协议
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd370baa6d514063b879603dbb93c180~tplv-k3u1fbpfcp-watermark.image?)
做了什么？ —— 常见的POST在协议层
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ff77312e4b74d2cbb66d793d14ad69c~tplv-k3u1fbpfcp-watermark.image?)

### 有什么？

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f5b0753cb4947418399431e3c0b9dd5~tplv-k3u1fbpfcp-watermark.image?)

可以使用 Hertz + Postman 来清晰地模拟这个过程

### 请求流程

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b8fd3efdac94a4dbef7a6ddaadd0f5f~tplv-k3u1fbpfcp-watermark.image?)
- 业务层：业务逻辑，想要发送消息邀请看电影
- 


### 不足与展望

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5f3658b317e4a5e87e733c7598308ff~tplv-k3u1fbpfcp-watermark.image?)


## HTTP 框架的设计与实现

### HTTP 框架分层设计

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c29f223f59c4d8e8a70eb11c35bc27a~tplv-k3u1fbpfcp-watermark.image?)
- 让每一层的人员，调用其他层的接口，专注自己的开发

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e91753a2e869447284113b75967d7427~tplv-k3u1fbpfcp-watermark.image?)

盖尔定律：一定是要从简单系统开始设计

### 应用层设计
提供合理的 API
- 合理性
- 简单性
- 冗余、兼容、可测、可见

### 中间件设计
需求：
- 配合 Handler 实现完整请求处理的生命周期
- 预处理、后处理逻辑
- 多中间件注册
- 对上层用户模块


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93dc6a2a588944f4baf1f179ca26a88b~tplv-k3u1fbpfcp-watermark.image?)

1. 像调用函数
2. “请求级别有效”，业务逻辑类似于 Handler
3. 用户不主动调用怎么办？`Next()` 帮助自动递增调用
4. 出现异常想停止？中止函数 `Absorb()`，Index设置到最大

调用链

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a70c5ad60ede4beaab8232b1ce830ef7~tplv-k3u1fbpfcp-watermark.image?)

其他设计方式？

### 路由设计




## 性能修炼之道




## 企业实践
