---
tags: [知识点记录]
---



事实证明很多东西不是随便看看就能糊弄过去的，不懂就是不懂，专门重开一个以表要认真充重学的决心



[GORM 指南 | GORM - The fantastic ORM library for Golang, aims to be developer friendly.](https://gorm.io/zh_CN/docs/index.html)

不得不说这文档不知道是我不会用还是啥的，学得还是挺痛苦的，配合搜索才能勉强啃下来

## 一些自动化的规定



直接大体上说一下吧

[约定 | GORM - The fantastic ORM library for Golang, aims to be developer friendly.](https://gorm.io/zh_CN/docs/conventions.html) 

其实这里也说得算清楚



有关 GORM 对表的自动化操作的知识点

- 结构体就是 DAO，也就是数据库中的**表**映射到我们代码中的对象

- `db.AutoMigrate(&Product{})` 这个函数可以实现用结构体去数据库中创建表

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