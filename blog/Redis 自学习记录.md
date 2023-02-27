---

tags: [知识点记录, GoLang, 青训营]

---

## 一些基础理解

简单来说Redis就是经常和MySQL一起使用的一种不用复杂查询语句的简单数据库，运行在内存中，速度很快

可以参考阅读：
[为什么要用Redis？Redis为什么这么快？ - 知乎](https://zhuanlan.zhihu.com/p/81195864)

使用一贯就是一个软件的使用上手过程，尝试一下就好了，关键是一些基础概念的理解

**使用好 help 指令 + 学会优先查文档可以解决大部分问题**

如果不设置 Redis-Server 自启动的话，后台运行指令为 `redis-server --daemonize yes`

## 数据类型

### Key

key的范围非常广泛，可以是图片也可以是空字符串
- 不建议用非常长的key，一方面对内存不友好，另一方面影响比较时间、查询性能，如果实在需要很长建议先hash一下
- 太短也不行，要表达出意思。
- `.` 和 `-` 一般用于表示多字段，固定一个习惯比较好

### String

非常基本的数据类型

- 如果是数字甚至可以用来自增


### 键空间操作命令

一些命令可以很好的对各种键的空间进行控制，他们不属于任何类型

### 键过期时间
- 可以控制秒或毫秒精度，但后者更常用
- 键过期时间会持久到硬盘中继续虚拟流逝
- 没有过期时间会返回-1，不存在键返回-2
- 


### 其他类型

- Set 集合
- Zset 有序集合
- Hash 散列表
- List 列表

## 简单使用

一个简单的在 Go 中使用的例子

```go

package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

func main() {
	// create a Redis client
	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "",
		DB:       0,
	})
        
            // Ping the Redis server to check if it's running
        _, err := client.Ping(context.Background()).Result()
        if err != nil {
            panic(err)
        }


	// set a key-value pair
	err := rdb.Set(context.Background(), "mykey", "myvalue", 0).Err()
	if err != nil {
		panic(err)
	}

	// get the value of a key
	val, err := rdb.Get(context.Background(), "mykey").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println("mykey", val)
}


```

简单解释就是连接 Redis 服务器并且简单使用了一下这个运行在内存中的数据库。其中 `context.Background()` 就类似于占位符，可以暂时不用管。


理解了这个例子以后，主要就是理解它和一般的本地关系数据库的不一样了

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7cde374ffb0140329247c58f0c2193df~tplv-k3u1fbpfcp-watermark.image?)

这是一个简单说明，理解还不太透彻，也不用太在意

然后是一个简单具体的例子，考虑一个场景：

需要你为一款电商软件设计后端，假设这款电商软件经常有抢购活动
- 用户需要频繁进行加购和取消购物车操作
- 需要存储的数据也不复杂，好像不用关系数据表也可以


这个时候我们尝试使用 Redis 来实现这个过程，主要运用了 List 数据类型

首先是加购操作

```go
func addToCart(client *redis.Client, userID string, itemID string) error {
    // Add the item ID to the user's shopping cart
    key := "cart:" + userID
    err := client.RPush(context.Background(), key, itemID).Err()
    if err != nil {
        return err
    }
    return nil
}
```

这里主要用到了 List 的数据结构，我们可以左右push和pop

然后是获取和移除

```go
func getCart(client *redis.Client, userID string) ([]string, error) {
    // Retrieve the user's shopping cart
    key := "cart:" + userID
    items, err := client.LRange(context.Background(), key, 0, -1).Result()
    if err != nil {
        return nil, err
    }
    return items, nil
}
```

`LRange` 函数可以将左边一个范围的元素取出来，代码里这种取法表示取左边第一个


```go
func removeFromCart(client *redis.Client, userID string, itemID string) error {
    // Remove the item ID from the user's shopping cart
    key := "cart:" + userID
    err := client.LRem(context.Background(), key, 0, itemID).Err()
    if err != nil {
        return err
    }
    return nil
}
```

`LRem` 用来移除