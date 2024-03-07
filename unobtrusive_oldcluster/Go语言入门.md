---
tags: [知识点记录, GoLang, 青训营]
---

主要参考圣经 gopl.io 和字节青训基础课

[【后端专场 学习资料一】第五届字节跳动青训营 - 掘金](https://juejin.cn/post/7188225875211452476)

[‍⁢⁢‍‍ ⁡⁢⁣⁤⁣⁤⁢⁡⁢⁡‬⁡⁤‍‍⁤‬⁡ ⁡⁢‍‍‌⁣⁡ ⁣⁤⁣ ⁢‍⁣⁤⁤Go 语言上手 - 基础语法 .pptx - 飞书云文档](https://bytedance.feishu.cn/file/boxcnDQ57K0wtcZtA3Y26ORKwec)



### 介绍



```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, 世界")
}
```





主要介绍：

- 编译型语言。高性能，高并发。
  - 和C一样导入包（packages），类比C中的库（libraries）
  - 统一用 `go` 命令运行、编译
  - 编译速度吊打C++
  - 性能要求严格，如变量或者包没使用的话没法过编译

- 强调轻量性、简单性（代码强制统一格式化）
- 适合用于并发编程（减少复杂性）



和C的基础区别：

- 主要函数是一个 “main包” `package main`
- 分号不是必要的。但是也可以加上，表示一个语句的结束
- Go语言比较有“强迫症”，格式规范很严格，很多简写都写不了，**语句基本的都是独一无二的，没有第二种写法**



其他特性：

- 标准库非常丰富。不需要依靠性能没有保障的第三方库就能完成大部分开发。
- 完善的工具链。诞生之初就设计好了格式化、单元测试框架、代码补全等工具。
- 静态链接。编译之后得到的可执行文件可以 All-in-One，所有代码和库都静止在一个文件里面。
- 跨平台。能够在各种奇怪平台上运行。
- 垃圾回收。自动的代码优化，不要考虑内存释放。可以理解为不适合底层学习但是又有许多性能优化，有点C到Python的一个折中的感觉。



### 基础语法



#### 变量和控制

变量：

- 声明变量的两种方式

  - ```Go
    var 变量名字 类型 = 表达式
    变量名 := (类型) 表达式
    ```

  - 自动变量类型，~~可以不声明但~~一定要有值
    - `:=` 并不是赋值，不同于 Matlab 和 Pascal




```go
var a = "ss"
var c, d int = 3, 5
fmt.Println(a, c, d)

// b = "ss";
b := 3
fmt.Println(b)

```







条件：

- if 无括号
- Switch 不会顺次执行



实测 `for` 后面接一个条件或者三个条件

```go
for i := 1; i < n; i++ {}
for j <= 3 {}

t := 5
for ;t > 0 ; t-- {}
```

（条件一定要写不等式；代码段一定要打括号）



- **Go中无 `while` 语句，全部用 `for` 和 `break` 实现**



#### 数组和切片

数组：长度固定



依次验证

1. 会把值初始化为 `0`
2. 可以直接输出一整个数组，注意数组直接表示出来的话一定要前置类型 “二维数组” `[][]int`
3. 不允许在声明时~~赋值~~定义二维数组的值，这个又矛盾，另一种声明方式是可以的

```go
var arr [5]int 
fmt.Println(arr[1], len(arr))

arr1 := [][]int{{1, 1}, {1, 0}}// auto size is allowed
fmt.Println(arr1)
//[[1 1] [1 0]]

// arr2 := {4, 1, 4} !
// var arr2dem [3][2]int = {1, 3, 1, 5} !
// var arr2dem [3][2]int{1, 3, 1, 5} !
// var arr2dem [3][2]int{{3, 4}, {1, 4}, {4, 1}} !
// var arr2dem [3][2]int = [][]int{{3, 4}, {1, 4}, {4, 1}}
// cannot use ([][]int literal) (value of type [][]int) as [3][2]int value in variable declaration
// fmt.Println("arr2 = ", arr2dem)
```







切片

类型表示 `[]type`

1. `make()` 和 `append()` 函数均用来返回一个数据类型
2. `[]string` 表示字符串数组类型，如果没有初始化的话不是空字符而是空格 
3. 声明时 `[]` 不带 `int` 的数组就是切片，而假如带了就规定是数组不能当切片用了

```go
sl := make([]string, 3)
	
// append(sl, "111")
sl = append(sl, "111")

fmt.Println(sl)
//[   111]
fmt.Println(sl[3])
//[111]

str_arr := []string{"aa", "bb"}
fmt.Println(str_arr)

```



#### 函数和结构体



函数

1. 返回类型后置
2. 经常返回多个类型。第一个表示真正返回值，第二个表示状态



结构体

1. 结构体方法：类比类成员函数。
   1. 使用方法是前函数前置







#### 字符串



操作：





格式化：

- 详细和非常详细式输出



![](https://upload-images.jianshu.io/upload_images/19006510-b83c5415e74df21c.png?imageMogr2/auto-orient/strip|imageView2/2/w/427/format/webp)



- 附带一个 `%q` 是用来保留字符串的引号输出的





#### 其他

map 

1. 初始化会是 `0, false` 这些
2. 完全无序，偏随机
3. 类型表示 `map[key]value`

完全用法：[Go maps in action - The Go Programming Language](https://go.dev/blog/maps)





range

1. 同时表示 key 和 val，可以和 `for` 结合使用 `for key, val := range arr/map` 





指针

1. 作用非常有限
2. 操作方式和C一样



### 常用包



#### JSON 处理

- 序列化和反序列化 `json.Marshal`
- 注意进行 `string()` 类型处理
- 输出风格规定？





#### 错误处理





#### 时间处理

- 导入包以后就可以直接向结构体一样使用一个时间类型，用一些函数来操作时间
- 可以按照 `yy-mm-dd hh:mm:ss` 的格式来解析or格式化一个时间串
- 时间戳





#### 数字解析

- 解析格式：字符串，进制，精度



#### 进程信息

- 获取命令行参数
- 获取写入环境变量
- exec获取什么得到输入输出



### 编译和应用安装

其实这个概念是用来描述开发一个 Go App 的一个简单的整个过程，碍于入门学习材料不当这里整理得有点问题

这是最后一步，整个流程or必须有的要素应该是：

1. 创建模块、建立依赖系统
2. 创建新模块、导入模块
3. 错误处理
4. 测试
5. 编译、安装、发布



[Compile and install the application - The Go Programming Language](https://go.dev/doc/tutorial/compile-install)

- `go run` 命令不生成二进制代码，适合一边编辑一边运行
- `go install` 可以把你生成的可执行文件安装到你的 Go 安装目录里面，然后就可以像 Go 本地工具一样直接运行了，但是不用带 `go` 





### 其他杂知识点





### Go 学习路线



[⁢Go 语言学习路线图 - 飞书云文档](https://bytedance.feishu.cn/docs/doccn3SFTuFIAVr4CDZGx48KKdd)

（感觉这个路线还是非常有参考价值的，虽然每次进都加载得贼慢，主要还是先学完所有必学基础然后用到什么学什么吧）

![image-20230118221548778](https://f.pz.al/pzal/2023/01/18/22149ec387d98.png)



