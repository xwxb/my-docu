---
tags: [蓝桥杯, 写了挺久的]
---

:::tip
更新中
:::

## 三种序列 DFS 枚举方式对比（有表格）

|        |                   **理解问题**                   |                           代码要点                           |                     进一步解释                     |
| ------ | :----------------------------------------------: | :----------------------------------------------------------: | :------------------------------------------------: |
| 指数型 | 相当于求 $n$ 个二进制位的 $2^n$ 种所有可能的状态 |                                                              | 时间复杂度恰好为 $O(2^n)$ 在递归树中每层有两个分支 |
| 排列型 |                    求 $A^n_n$                    | 因为顺序有关，每层需要往前从头开始考虑，因而需要存当前路径每个元素取没取的状态， |                                                    |
| 组合型 |                    求 $C^n_m$                    |           顺序无关，按一定有序处理；剪枝能提速很多           |                                                    |



对比着代码看



指数型：



排列型：



组合型：





重要理解的方法：三种模型都可以用 $n = 3$ 最简单的情况来描述，再复杂的情况，要是确定是这三种枚举，就可以用最简单的例子加以理解。

比如指数型枚举的具体理解就是：任取123三个数（可以不取），按顺序摆放，共有多少种情况（比方说101这种状态表示取1，得到的数就是13）

在 [116. 飞行员兄弟 - AcWing题库](https://www.acwing.com/problem/content/118/) ，最容易想到的枚举就是**把棋盘看作是 $n = 16$ 的情况去进行指数型枚举**



有空的话我们可以继续考虑一个问题来加深理解：

我之前一直有个误区 ，认为【`dfs` 函数的参数一定代表着当前递归的层数】。这有一定道理，但其实并不准确，应该是一定和层数相关才对。

比如说对棋盘每个位置进行组合型枚举，那我们显然可以跳过某一格进行任意几个格子之间的枚举，而这个时候参数可以有两个，显然不直接代表层数，但是和层数有关。而这个时候我们通常会另外记录层数，比如用 `vector::size()`



然后看排列型枚举的例子，我有时候还很容易误用参数直接作为长度的判断，其实参数应该表示的是【当前排列选择的数字】；



尝试解决新问题：

1. 实现 $A^n_m$

2. 证明二项式定理 $\sum^{n}_{i = 0} C_n^i = 2^n$

   它表示的图形意义是在不剪枝的递归树上的每层每个结点到起点的路径都去检验一遍，即所有结点到根节点的路径，层数代表当前取的数的个数。

   对 $n = 3$ 就是组合型递归树的八个结点对应指数型递归树的八个叶子结点 （对应的路径）
