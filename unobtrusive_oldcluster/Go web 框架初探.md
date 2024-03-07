---
tags: [青训营, 知识点记录, GoLang]
---



## 基础概念

### 关键概念
- Router：管理各项功能响应的路径
- Handler：处理响应路径的请求的函数
- MiddleWare：中间件，是在请求到达服务端之前对请求进行一定处理的软件，常用于增加认证、日志、缓存


### 一些简单的前置知识

HTTP介绍：
- Hypertext Transfer Protocol (HTTP) ，超文本传输协议，是我们客户端和服务端通信用的最多的一种网络协议
- HTTP 请求由三个部分组成
    - 请求行：请求方法、URI、请求体
    - 请求头：一些附加信息
    - 请求体：用于存储服务器返回的信息
- 相应地，服务器响应也包含三个部分


## 实例剖析

主要是关于官方手册，其实也是一个完整的教程例子，有开发Webapp的大部分过程：[Writing Web Applications - The Go Programming Language](https://go.dev/doc/articles/wiki/)


整个过程是要求我们建立一个简单的 Wiki 服务端

### 杂知识
- 在一个最简单的服务器的例子中，注意 `r.URL.Path` ，这里就是利用了我们的整个请求体来获取一些信息
- 在结构体 `Page` 中，页面主题部分使用了字节切片，是因为我们在使用IO库的时候预先期待的是这种类型
- `func (p *Page) save() error` 这种特殊的函数头写法是用来定义结构体内部函数的，此处就是定义页面结构体的内置函数
- 处理需要处理不存在页面的处理原因是：虽然路由不成功的时候会自动404，但是很多时候我们的URL中的字段是统一被使用了的，并不会路由失败


### `html/template` 包

基础使用
- 用 `template.PraseFiles` 来解析HTML源代码
- 然后执行，写入响应体，顺便带上父结构体


缓存
- `var templates = template.Must(template.ParseFiles("edit.html", "view.html"))"` 在模板缓存中，`.Must` 函数的作用是作为一个包装器，使得当接收到一个非零的错误值的时候传递出恐慌的消息
- 缓存具体的实现是
    - 先事先把 HTML 解析出来，存到全局变量中
    - 然后再使用 `全局变量.ExecuteTemplate` 函数替换，就能够直接执行


### 函数常量和闭包的使用

众所周知，好的代码一定是非常精要的，所以Go也提供了一种方式让我们对 Validation 的加入部分进行了进一步的抽象

```go

func makeHandler(fn func(http.ResponseWriter, *http.Request, string)) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        m := validPath.FindStringSubmatch(r.URL.Path)
        if m == nil {
            http.NotFound(w, r)
            return
        }
        fn(w, r, m[2])
    }
}

```

这段代码还是值得专门贴上来理解一下的，确实一开始半天没看明白

- 首先这是一个代替原来的函数成为Handler，用来返回一个函数的更高层的一个函数
- 其次他总括了那三个函数的公共部分
- 最后他重新执行原来的三个函数


- 函数常量：表示匿名函数。具体参考：[#Function_literals](https://go.dev/ref/spec#Function_literals)
- 闭包函数：可以引用定义在函数之外的值的函数称之为闭包。匿名函数是闭包。这里的 `fn` 就是一个闭包，因为他包含了三个定义在其之外的参数。



### At last

成品代码复习：[Click here to view the final code listing.](https://go.dev/doc/articles/wiki/final.go)



## Gin 的使用

- 一个简单的例子和讲解：
[Tutorial: Developing a RESTful API with Go and Gin - The Go Programming Language](https://go.dev/doc/tutorial/web-service-gin)


- [使用中间件 | Gin Web Framework](https://gin-gonic.com/zh-cn/docs/examples/using-middleware/)








## RESTful API 设计

REST 表现层状态转换，根基于超文本传输协定（HTTP）之上而确定的一组约束和属性，一种广泛使用和遵循的万维网软件架构的风格。可以就简单理解为我们设计API的时候要遵守的一些约定。

主要原则：
1. 统一接口。所有的资源都是唯一可识别的。
2. 无状态。所有的请求应该包含服务器响应的所有信息，这也是HTTP请求的原则。
3. 可缓存。服务端能够在适当的时候直接使用缓存好的客户端信息。
4. 分层。客户端无法接触服务端的底层架构。

主要内容：
- 后端设计
- HTTP方案
- 状态码