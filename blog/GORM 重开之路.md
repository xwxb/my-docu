---
tags: [知识点记录]
---



事实证明很多东西不是随便看看就能糊弄过去的，不懂就是不懂，专门重开一个以表要认真充重学的决心

在后端开发中，数据库操作真的是占非常大的比重，不好好学不行



[GORM 指南 | GORM - The fantastic ORM library for Golang, aims to be developer friendly.](https://gorm.io/zh_CN/docs/index.html)

不得不说这文档不知道是我不会用还是啥的，学得还是挺痛苦的，配合搜索才能勉强啃下来

## 一些自动化的规定



直接大体上说一下吧

[约定 | GORM - The fantastic ORM library for Golang, aims to be developer friendly.](https://gorm.io/zh_CN/docs/conventions.html) 

其实这里也说得算清楚



有关 GORM 对表的自动化操作的知识点

- 结构体就是 DAO，也就是数据库中的**表**映射到我们代码中的对象

- `db.AutoMigrate(&Product{})` 这个函数可以实现用结构体去数据库中创建表，具体参照[迁移 | GORM - The fantastic ORM library for Golang, aims to be developer friendly.](https://gorm.io/zh_CN/docs/migration.html)

- 命名规则：

  - 默认的映射规则是：数据库中的表名 = 结构体名小写 + 下划线 + 复数形式
    （驼峰型转蛇形复数）

    例子 `type UserId struct -> user_ids (db table name)`

  - 表名可以通过函数 

    ```go
    // TableName 会将 User 的表名重写为 `profiles`
    func (User) TableName() string {
      return "profiles"
    }
    ```

    重写

    

  - 列名就是表名规则不用带复数





## 关系说明

有四种关系，这四种关系只是数据库里的概念，并不是 GORM 中会起到某种效果的一种设置，主要得基于数据库来理解





## CRUD

软删除就是软件运行删除掉，存一个删除时间，不能再用了，但是数据库还没删除

`unscope()` 函数可以取回软删除的值，但并不是说”只到软删除里面找“，这个函数的作用应该是取消软删除的作用域的（具体没看到哪里有定义）



## 杂知识点

- `Model()` 这个函数用于声明一个模型，具体还得多看一些例子，主要用途，有时候是当链式查找还不能确定在差哪个表的时候的一个定位，有时候是用来创建一个独立于数据库的记录（模型）

  有的时候去掉这个，比如有只有 `Where` 的情况，好像更改就不能应用到数据库，感觉可能是因为不能确定，但是它也不提示就挺奇怪的



