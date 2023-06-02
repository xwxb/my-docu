---
tags: [Shell, 青训营]
---



[⁣⁡⁣⁣‌⁣⁢‬⁣‍⁤‍⁡‍ ⁣⁣⁢‍‌⁣‌‬⁡‬‬⁡ ‍⁤⁤ ‬⁢⁢字节前端训练营 - Shell 脚本和编程.pptx - 飞书云文档](https://bytedance.feishu.cn/file/HrFjbOsFUoHSyGx5C2Tcuf7Nnab)

## Shell 基础概念

### 概念

*   终端 (Terminal)：计算机硬件的末端，和用户交互的设备（键盘和屏幕）

> a piece of equipment consisting of a keyboard and a screen that is used for putting information into a computer or getting information from it.

*   tty (teletypeWriter)：和终端差不多，Linux 引申为实际的输入设备
*   终端模拟器：就是在实际电脑中模拟终端进行输入的软件，会关联到虚拟tty
*   Shell：一种编程语言，模拟器输入命令的解释器，解释输出对象就是实际的终端
*   Bash：GNU 为 Shell 在 Linux 中开发的分支

Shell 发展分支的关系

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/26b180d47da7472a85182994e56b9c1b\~tplv-k3u1fbpfcp-watermark.image?)

### 构成

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/827a2aeaf49549a494801b2eafd4871a\~tplv-k3u1fbpfcp-watermark.image?)

## 语法

### 变量

*   子Shell 不能使用 父Shell 的自定义变量，但是可以用父Shell的环境变量
*   声明方式
    *   直接声明。注意等号两边不能有空格
    *   let declare export

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bca1fa7f1b174b57b19b5f41124b448f\~tplv-k3u1fbpfcp-watermark.image?)







*   其他注意
    *   等号右边不加 `$` 的符号默认为字符串

    *   用 `let` 声明一个变量的时候等号右边则会优先不按字符串来处理




*   `declare` 也是用于声明变量，可以精细化控制声明变量的类型、权限、作用域。
    *   `+` 可以取消变量类型
    *   `-x` 可以更改为环境变量
    *   `-p` 用于显示类型

系统环境变量


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7c243f723ef4e1b90b617c1e4c15784~tplv-k3u1fbpfcp-watermark.image?)

配置文件加载

*   `source` 用于执行脚本或者从脚本中加载变量到当前 shell

- 登录式
- 非登录
  - 交互式（模拟器
  - 非交互式（文件

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c076ed893ed49cba335a77b6c3d9ba5\~tplv-k3u1fbpfcp-watermark.image?)


### 运算符和引用


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/734c6fea3f324f77896083ba7a0ce678~tplv-k3u1fbpfcp-watermark.image?)

- 后置 `&` 符号可以代替 `--deamon` ，让程序作为守护进程使用
- 继续前置 `nohup` 命令可以取消和 shell 一起关闭


管道

- 一些不能接受标准输入的命令可以使用 `xargs` 命令来预处理，它的作用是接受标准输入并转换成参数列表，也就 `ls` 原来的输入
- 默认仅处理 stdout，stderr 则须从手动设置命令参数


重定向

- 后置的重定向参数
  ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c4288d9b1cb04bd08b9b54f3084f1558~tplv-k3u1fbpfcp-watermark.image?)

- 单独获取一列的输出信息：循环获取每一行，echo，cut

- 输入重定向的一个例子：把
  ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e95b2f4a0bc4cea947383f8fef3adde~tplv-k3u1fbpfcp-watermark.image?)



一些杂语法

- `--` 双减可以用来取消转义，比如说你想找的文件名就是 `-n` 的情况

  > grep -- "-n" filename.txt

- 





### 语句和其他语法

- 判断命令
  - 用于测试
  - `[cond]` 的结果只能是正确或者错误，这是使用 `if` 的时候和 `(())` 的区别，此外还能配置更复杂的条件
  - 双方括号 `[[cond]]` 是更高级的判断
  - 
- 分支语句
  - `if cond; then \n .. fi` 算是固定语句，`then` 没有单独继续命令的效果

- 循环
- 函数
  - `return` 仅用来表示状态，结果一般用 `\`\``来取
    - **返回值和输出值不是一个概念！** 比如ls有输出，`test` 只有返回值
  - `local` 和 `unset` 可以用来避免作用域污染
  - 返回值可以结合「命令链接运算符」来进行二次运算
- 模块化

### 常用命令

- 用于问题排查

一些使用案例

- 用 `grep` 来获取日志中的 `ERROR`
- 还可以进一步按照不同列的内容进行排序 `-t` 分割 `-k` 选择列
- 可以进一步用 `-A` `-B` 来看附近的内容（after和before）
- `tail -f` 可以用来动态接受输入

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3974a9462cfd470794412eed3289fe40~tplv-k3u1fbpfcp-watermark.image?)


## Shell 原理

### 概述

执行

- 文件
  - 后缀是约定
  - 第一行是解释器的约定
- 启动方式


执行过程

1. 字符解析
   2. 行分割
   3. 命令分割
   4. 参数分割
2. shell 展开
3. 重定向
4. 执行
   8. buildin
   9. path
5. 收集执行状态返回给用户脚本


### Shell 展开

- 大括号展开生成一些序列相关值
- ~可以直接展开用户
- 参数展开
  - 间接双层参数展开
  - 参数长度
  - 空参数处理：变量为空的操作
- 参数切片
  - `${para:offset:l}`

- 参数删除：一种截取字符串的方法
- 命令替换：输出命令结果 两种方法  \`cmd\` 和 `(cmd)` 
- 数学计算： `((cal))`
- 文件名模式匹配，部分正则



## 调试和前端集成

### 命令调试

三种方式

- echo printf
- set 配置
- 插件

### 前端集成