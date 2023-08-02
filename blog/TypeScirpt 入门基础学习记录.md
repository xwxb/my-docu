---
tags: [知识点记录, JavaScript, AIChatHis]
---





## TS 基础

### 基础类型

- boolean, number, string 是三大基本类型

any, unknown, void 三大未定类型

- any 就是 TS 对动态类型的支持
- unknown 表示未定的值，但是当确定以后，除非它是 any 类型，否则它的类型不能再被改变
- void 和 clang 一样表示无类型


never 类型表示一些不能确定类型，但是却又是不会出现的情况，为了确保代码的完备性而写上的，比如设置就是死循环的函数的返回值和异常中止函数

- 数组，元组



```typescript
// 布尔类型
let isDone: boolean = false;

// 数字类型
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// 字符串类型
let color: string = "blue";
color = 'red';

// 数组类型
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// 元组类型
let x: [string, number];
x = ["hello", 10];

// 枚举类型
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;

// Any 类型
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// Void 类型
function warnUser(): void {
    console.log("This is my warning message");
}

// Null 和 Undefined 类型
let u: undefined = undefined;
let n: null = null;

// Never 类型
function error(message: string): never {
    throw new Error(message);
}

// Object 类型
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);

// 类型断言
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

```



类型转换

> 在 TypeScript 中，常用的进行类型转换的语句有以下几种：
>
> 1. `as` 关键字
>
> `as` 关键字可以用来进行类型断言，将一个值转换为指定的类型。它的语法如下：
>
> ```typescript
> value as type
> ```
>
> 其中，`value` 是要转换的值，`type` 是要转换成的类型。例如：
>
> ```typescript
> const value: any = "Hello, World!";
> const str: string = value as string;
> ```
>
> 在上面的代码中，我们将一个 `any` 类型的值转换成了 `string` 类型。
>
> 2. `<type>` 语法
>
> `<type>` 语法也可以用来进行类型断言，将一个值转换为指定的类型。它的语法如下：
>
> ```typescript
> <type>value
> ```
>
> 其中，`type` 是要转换成的类型，`value` 是要转换的值。例如：
>
> ```typescript
> const value: any = "Hello, World!";
> const str: string = <string>value;
> ```
>
> 在上面的代码中，我们将一个 `any` 类型的值转换成了 `string` 类型。
>
> 需要注意的是，`<type>` 语法在 JSX 中有特殊的含义，因此不建议在 JSX 中使用。
>
> 3. `Number()`、`String()`、`Boolean()` 等函数
>
> `Number()`、`String()`、`Boolean()` 等函数可以将一个值转换成对应的基本类型。它们的语法如下：
>
> ```typescript
> Number(value)
> String(value)
> Boolean(value)
> ```
>
> 其中，`value` 是要转换的值。例如：
>
> ```typescript
> const num: number = Number("123");
> const str: string = String(123);
> const bool: boolean = Boolean(0);
> ```
>
> 在上面的代码中，我们分别将一个字符串、一个数字和一个数值转换成了对应的基本类型。
>
> 总之，在 TypeScript 中，常用的进行类型转换的语句有 `as` 关键字、`<type>` 语法和 `Number()`、`String()`、`Boolean()` 等函数。需要根据实际情况选择合适的语句进行类型转换。




### 函数类型

需要有定义输入和输出

- 输入：可选和默认
- 输出：支持自动推断
- 重载


### 接口

- 定义：为了定义对象类型
- 特点
  - 可选
  - 只读
  - 可以描述函数
  - 自定义熟悉
- 灵活 Duck typing


### 类

- 增加了访问性修饰符
- 抽象类
- interface 约束类， implement 实现

和接口的区别

- 类是具体的对象模板
- 接口是定义对象的形状，大致的状态
- 某些情况下确实可以交替使用



> `...` 是 TypeScript 中的语法，它被称为扩展语法（Spread Syntax），它可以在对象和数组中进行使用。
>
> 在对象中，扩展语法允许您将一个对象的属性和方法复制到另一个对象中。例如：
>
> ```
> const obj1 = { a: 1, b: 2 };
> const obj2 = { ...obj1, c: 3 };
> console.log(obj2); // { a: 1, b: 2, c: 3 }
> ```
>
> 

## TS 进阶

### 高级类型

- 联合
- 交叉
- 类型断言 const a as number
- 别名 type
  - 和 interface 的区别


### 泛型

作用


基本使用


工具类型：

基础操作符

- typeof 
- keyof 获取所有键
- 索引访问
- 泛型约束

常用工具类型

可以通过新来一个别名的方式来将他们定义为这些属性

- 可选
- 必选
- 只读

