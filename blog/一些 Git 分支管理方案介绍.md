---
tag: [git, 知识点记录, 青训营]
---



恰好当了队长要学习这方面的知识，依然是水一天的笔记+蹭图床

## 命名规范

今天学习了一种很简单的规范命名规则，还挺得我心的

简单说就是：


**分支命名：条目/引用/具体内容**

一些常用的条目名：

- feature
- bugfix
- hotfix（紧急修改/临时方案）
- test（对issue的测试）

引用即根据哪个 issue 来进行开发的，如果没有引用就写 no-ref

具体内容简洁表示就好了

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48f7685d59d446c495cda671d04a3c20~tplv-k3u1fbpfcp-watermark.image?)


**提交命名：`category: do something; do some other things`**

条目一般有：
- feat (feature)
- fix (bugfix)
- refactor（调整）
- chore


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ac6d877089842fb84f0749ded06a133~tplv-k3u1fbpfcp-watermark.image?)


## 冲突处理

在**单分支协作开发**中，我们常常会遇到和主分支的冲突，尽量减少冲突的方法如下：

- 开发前：一定记得先pull
- 开发结束：
    - 当开发的这条分支远程修改和本地冲突不大的时候，**优先pull合并，然后在commit push**，这样能大幅减少无意义的merge
    - 当冲突比较明显，我们更适合先本地commit保存当前更改，然后再pull尝试协商解决冲突，然后再push

防止冲突造成事故的一个常用的办法是设置保护分支

我们团队的分支策略是这样的

1. 合并到主分支之前需要提出拉取申请
2. 需要仓库主同意
3. 允许强制推送（慎用）


## 参考资料



- [⁡‬Git 分支管理规范--写的代码都队 - 飞书云文档](https://ypbg9olvt2.feishu.cn/docs/doccnTMRmh7YgMwL2PgZ5moWUsd#)
- [A Simplified Convention for Naming Branches and Commits in Git - DEV Community 👩‍💻👨‍💻](https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4)
- [Git commit与pull的先后顺序_Katherine_Pierce的博客-CSDN博客_git先commit再pull](https://blog.csdn.net/xiaosi_xiaosi/article/details/81336077)