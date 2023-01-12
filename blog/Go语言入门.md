---
tags: [知识点记录, GoLang]
---


主要参考圣经 gopl.io



```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, 世界")
}
```





主要介绍：

- 编译型语言
- 和C一样
  - 导入包（packages），类比C中的库（libraries）
  - 统一用 `go` 命令运行、编译



和C的区别：

- 主要函数是一个 “main包” `package main`
- 无分号



特点：

- 强调轻量性、简单性（代码强制统一格式化）
- 适合用于并发编程（减少复杂性）


