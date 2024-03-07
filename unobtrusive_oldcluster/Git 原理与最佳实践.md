---
tags: [青训营笔记]
---

唯一算是还略懂一点的东西了，这次就当正好完整架起来一个知识体系，然后更重要的是学习一下平常想找都找不到的最佳实践吧

[‍⁣⁤⁡⁣‌⁡‬ ⁡⁤ ⁣⁡⁤⁤‬⁤⁢‬⁡‌⁡⁣⁢⁢‬‬⁤⁢⁣ ⁣‌⁢Git 的正确使用姿势与最佳实践 .pptx - 飞书云文档](https://bytedance.feishu.cn/file/boxcnqXgX9cP9uX5CVNGNeDZiLd)
PPT 做得很不错，可以单刷，方便复习

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52b44ad1509d458fb5cdccdc6a888642~tplv-k3u1fbpfcp-watermark.image?)

## Git 是什么

版本控制软件对比

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75d6af338d644d4499f679d99ada40d8~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/956776bbea5d4f76a43d807dfd58b335~tplv-k3u1fbpfcp-watermark.image?)

远程仓库托管平台对比

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b9a3337aac8a447f81f0b3c337d6a29d~tplv-k3u1fbpfcp-watermark.image?)

## 基本使用方式

### Git 目录介绍

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff6d06c77fb74cf0b9321b077ece8a9e~tplv-k3u1fbpfcp-watermark.image?)

#### Git 内部配置

*   常见配置
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d95ee971679145079194c8118debdeac~tplv-k3u1fbpfcp-watermark.image?)

#### Git Remote

*
*   可以把 push 和 fetch 的 remote 设置成不同的
    *   都会设置到内部 .gitconfig

HTTP Remote

*   不太安全，存在硬盘也不太方便

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6da6404562dd44ef8300443dd61a861f~tplv-k3u1fbpfcp-watermark.image?)

SSH Remote

*   大致就是本地生成私钥，然后添加到GitHub就行了
*   需要使用 InsteadOf 配置替换掉原来的 HTTP 连接方式

### Object

#### Git Add

会新增一个加密的 object

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e3649d5ab7f4485abe5411efd57d13b~tplv-k3u1fbpfcp-watermark.image?)

#### Git Commit

也会新增很多 object 信息，会有目录树，提交者等信息

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cebc93370b67475bb4fbf12d1387c24b~tplv-k3u1fbpfcp-watermark.image?)

分类

*   blob 存储内容
*   Tree
*   Commit

如何串联在一起

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad91937a2776473784554764296bc76d~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8707e7a5ceb04e5ca8964d6970f6f3a4~tplv-k3u1fbpfcp-watermark.image?)

### Ref

*   就是指向 Commit ID 的指针
*   git tag
    *   Tag 表示稳定版本，相比 Ref 是不会变更的，一般会作为一个发布版本，其实也是 Ref 的子概念
    *   Annotation Tag
        *   Tag Object
        *   git tag -a
        *

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71c17dc163d1419ca3774bd260d64d66~tplv-k3u1fbpfcp-watermark.image?)

### 历史版本

追溯
- object 新增 parent 信息，表示指向之前版本的指针

修改
- commit --amend
- rebase
    - 
- filter：修改所有提交


Object
- 老的 Object 并没有被删除，但是没有用了
- 我们叫做悬空的 obj，没有ref指向它


### 结构总结

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/261eda29b54b4d8287be0efefc2495ee~tplv-k3u1fbpfcp-watermark.image?)



## Git 研发流程

### 不同的工作流

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/73bf193dca9946bdbcf1eee7c8423530~tplv-k3u1fbpfcp-watermark.image?)

### 集中式工作流


### 分支管理工作流

具体分类

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d890de8cd3244749ad61c81020499a7~tplv-k3u1fbpfcp-watermark.image?)

GitFlow
- 严格标准，代码会很清晰
- 流程过于复杂，正常研发都难以进行

Github Flow
- 选择团队合作的方式：fork或者直接给权限
- PR：注意 CI CA CR 等操作，合并 feature 分支
- 分支保护


Gitlab Flow 
- Princpal: upstream first


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1422eb409c1040afb8c38182305096da~tplv-k3u1fbpfcp-watermark.image?)


代码合并
- Fast forward 就是直接合并，移动指针
- Three-way merge 处理冲突，会产生新的节点


**选择合适的工作流&常见问题** （重要）
1. 小团队推荐 Github
2. 确保 CR
3. 保持主干整洁， FF合并与 reabse
4. 大型团队不要局限流程

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d973999eeae41199ea0e40af07c6fdc~tplv-k3u1fbpfcp-watermark.image?)
- 了解新的研发流程
- 不要频繁使用 TW 合并
