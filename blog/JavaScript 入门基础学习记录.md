---
tags: [知识点记录, JavaScript, AIChatHis]
---





## API



### String



replace:



`string.replace` 是 JavaScript 字符串的一个方法，用于将匹配某个模式的字符串片段替换为指定的内容。它接受两个参数：要查找的模式（可以是字符串或正则表达式）和替换的内容。

以下是 `string.replace` 的基本语法：
```javascript
const replacedString = originalString.replace(pattern, replacement);
```
- `originalString`：原始字符串，我们要对其进行替换。
- `pattern`：要查找的模式，可以是字符串或正则表达式。如果是字符串，只会替换首次出现的匹配项。如果是正则表达式，可以使用标志（如 `g` 全局标志）来指定匹配所有符合模式的项。
- `replacement`：替换的内容，可以是字符串或函数。如果是字符串，它将替换找到的每个匹配项。如果是函数，函数将在每个匹配项上调用，根据需要返回替换的内容。

下面是一个示例，将字符串中的所有数字替换为 "X"：
```javascript
const originalString = "Today is 2023-06-11.";
const replacedString = originalString.replace(/\d+/g, "X");

console.log(replacedString); // Output: "Today is X-X-X."
```

在这个示例中，正则表达式 `\d+` 匹配所有连续的数字。`replace` 方法使用字符串 "X" 替换了找到的每个数字。



## ES6

- 最新的 JS 标准，使得 JS 可以作为企业级复杂项目的开发，Babel 就是用来支持 ES6 的工具
- 
