---
tags: [知识点记录, Node.js, AIChatHis]
---





## Node.js 介绍



- 基于 Chrome V8 的 JS 运行时
- 相较于浏览器，Node 是 JS 的一种后端运行环境，无法直接调用 DOM 和 BOM 的 API
- 再浅显了说，就是在 Node.js 环境下，JS 可以做到一些浏览器环境下做不到的事情，是相对于浏览器的另一个运行huan'jing





简易用途：用来托管网页应用服务

> 直接点击 index.html 文件是无法正常运行 Vue 单页应用的原因是，SPA 需要依赖一些特定的构建工具和前端框架来进行**动态内容加载和路由控制**。

后面那些东西即一些常见的服务端框架做的事情。



可以通过编写一个 Node.js 文件来手动提供一个简单的环境来运行 Vue 单页应用。以下是一个示例：

```javascript
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 静态文件服务
app.use(express.static(path.join(__dirname, 'dist')));

// 路由重定向
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 启动服务器
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
```

首先，我们通过 `express.static` 中间件将 `dist` 目录设置为静态文件服务的根目录，这样服务器可以提供构建生成的 JavaScript、CSS 和其他静态资源文件。

然后，我们使用 `app.get('*')` 定义了一个通配符路由，当客户端访问任何路由时，都会返回 `index.html` 文件。这样，前端路由就可以接管页面的渲染和导航。





## 模块化



[模块化 | JetLab 🍃](https://jetlab.live/note/nodejs/08.NodeM)



- 导出以后的对象被称作是公共成员
- 模块作用域值的是模块的函数变量只在当前模块或者被引用的时候生效，不会相互污染
- 导出对象： `exports === module.exports`



两种规范，常见的两种模块系统

- CommonJS 使用 `module.exports` 和 `require` 语句来导出、导入模块，是一种比较普适性的方式
  - 可以使用 import 语法来动态即时导入

- ES6 使用 `export` 和 `import` 语句来导出、导入模块。在一般的 node 模块中不能直接使用



> 1. `export default` 是 ES6 的模块语法，用于导出一个模块的默认值。在导入时可以使用 `import` 关键字直接获取**默认**值，也可以使用 `{}` 获取命名导出的值。
> 2. `module.exports` 是 CommonJS 的模块语法，用于导出一个模块的值。在导入时使用 `require` 关键字获取导出的值。
>
> 需要注意的是，这两种语法是不兼容的。如果需要在不同的模块系统之间导入和导出代码，需要进行相应的转换。
>
> 如果你的代码仅在浏览器环境下运行，可以使用 `export default`；如果你的代码运行在 Node.js 环境下，建议使用 `module.exports`。



> 在 Node.js 中，有几种常见的模块导入方式，每种方式都有不同的使用场景。下面是几种常见的模块导入方式及其使用场景：
>
> 1. 使用 `require` 导入模块：
>    ```js
>    const fs = require('fs');
>    ```
>    这是 Node.js 中最早的模块导入方式，用于导入 Node.js 核心模块或第三方模块。它适用于 CommonJS 模块系统，可以在任何地方使用，包括脚本的顶层和函数内部。
>
> 2. 使用 ECMAScript 模块 (ESM) 导入：
>    ```js
>    import fs from 'fs';
>    ```
>    这是 ES6 引入的一种新的模块导入方式，使用 `import` 关键字。ESM 导入方式具有以下特点：
>    - 只能在模块的顶层使用，不能在函数内部使用。
>    - 使用静态导入，模块的导入发生在代码执行之前。
>    - 支持默认导出和命名导出。
>    - 需要在文件扩展名为 `.mjs` 或启用 `"type": "module"` 选项的 `.js` 文件中使用。
>
> 3. 使用 `import()` 动态导入模块：
>    ```js
>    import('module-name').then(module => {
>      // 使用导入的模块
>    });
>    ```
>    `import()` 是一个函数，可以在运行时动态导入模块。它返回一个 Promise，可以使用 `then` 方法来处理导入的模块。动态导入适用于按需加载模块或在特定条件下加载模块的场景。
>
>
> 总的来说，`require` 是传统的模块导入方式，适用于 CommonJS 模块系统，支持在任何地方使用。ESM 导入方式是 ECMAScript 的标准语法，适用于在模块的顶层使用，需要特定的文件扩展名或启用 `"type": "module"` 选项。`import()` 动态导入方式用于在运行时按需加载模块。根据你的需求和项目环境，选择适合的模块导入方式。



导出有两种方式

- 默认导出
- 命名导出



导出的具体说明

> 好的，下面举一个简单的例子来说明默认导入和命名导入的区别。
>
> 假设有一个 `module.js` 模块，其中定义了一个默认导出和一个命名导出：
>
> ```javascript
> // module.js
> export default function() {
>   console.log('This is the default export.');
> }
> 
> export function foo() {
>   console.log('This is the named export.');
> }
> ```
>
> 现在，在另一个模块中，我们可以使用默认导入和命名导入来使用这些导出项：
>
> ```javascript
> // app.js
> import defaultExport from './module.js';
> import { foo } from './module.js';
> 
> defaultExport(); // 输出：This is the default export.
> foo(); // 输出：This is the named export.
> ```
>
> 在这个例子中，我们首先使用默认导入方式来导入 `module.js` 模块的默认导出项。这里我们将其命名为 `defaultExport`。然后，我们使用命名导入方式来导入 `module.js` 模块的 `foo` 函数。
>
> 需要注意的是，在同一个模块中，只能有一个默认导出项，但可以有多个命名导出项。如果需要导出多个项，而又不想使用命名导出，可以使用对象字面量来导出多个项，如下所示：
>
> ```javascript
> // module.js
> export default {
>   foo: function() {
>     console.log('This is the default export.');
>   },
>   bar: function() {
>     console.log('This is another named export.');
>   }
> }
> ```
>
> 在这个例子中，我们将一个对象字面量作为默认导出项导出。这个对象有两个方法：`foo` 和 `bar`。可以使用默认导入方式来导入整个对象，如下所示：
>
> ```javascript
> // app.js
> import myModule from './module.js';
> 
> myModule.foo(); // 输出：This is the default export.
> myModule.bar(); // 输出：This is another named export.
> ```
>
> 除了默认导出和命名导出之外，还有一种导出方式是混合导出（Mixed Exports）。这种方式是将默认导出和命名导出组合在一起使用，如下所示：
>
> ```javascript
> // module.js
> export default function() {
>   console.log('This is the default export.');
> }
> 
> export function foo() {
>   console.log('This is the named export.');
> }
> 
> export const bar = 'This is another named export.';
> ```
>
> 在这个例子中，我们将默认导出、命名导出和常量导出混合在一起使用。可以使用以下方式来导入这些导出项：
>
> ```javascript
> // app.js
> import defaultExport, { foo, bar } from './module.js';
> 
> defaultExport(); // 输出：This is the default export.
> foo(); // 输出：This is the named export.
> console.log(bar); // 输出：This is another named export.
> ```
>
> 需要注意的是，混合导出方式只适用于 ES6 模块，而不适用于 CommonJS 模块。



## 内部 API



### HTTP 模块







## 第三方 API



### Express



#### 基本使用

- 介绍：用于构建网页应用的框架，即后端常说的 Web 框架，对应 Go 里面的 GIN 和 Kitex

- `express.static` 非常方便地创建一个静态资源的服务，还可以多重托管
- 用 HTTP 框架部分的服务来处理路由
- `nodemon` 就是一般 JS 框架中用来动态构建，不用重新启动项目的工具



以下是一个过一遍使用的基础例子：



当使用 Express 进行模块化路由和静态资源托管时，以下是一个简单的实际应用例子，涉及了模块化路由、静态资源托管以及其他重要知识点：

首先，我们需要安装 Express：

```bash
npm install express
```

然后，创建一个名为 `app.js` 的文件，并添加以下内容：

```javascript
// 导入 Express 模块
const express = require("express");

// 创建 Express 应用
const app = express();

// 设置静态资源托管
app.use(express.static("public"));

// 创建路由模块
const homeRouter = require("./routes/home");
const userRouter = require("./routes/user");

// 使用路由模块
app.use("/", homeRouter);
app.use("/user", userRouter);

// 启动服务器
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

在这个例子中，我们首先导入了 Express 模块，并创建了一个 Express 应用实例。

然后，我们使用 `app.use(express.static("public"))` 设置了静态资源托管，将 `public` 目录下的静态文件提供给客户端访问。

接下来，我们创建了两个路由模块 `homeRouter` 和 `userRouter`，分别对应主页和用户相关的路由。这些路由模块可以根据需要进一步拆分和扩展。

最后，我们使用 `app.use()` 方法将路由模块应用于 Express 应用。通过指定路径前缀，可以实现模块化的路由处理。

在 `routes/home.js` 中，我们可以编写以下代码：

```javascript
// 导入 Express 模块
const express = require("express");

// 创建路由实例
const router = express.Router();

// 处理主页路由
router.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

// 导出路由模块
module.exports = router;
```

在 `routes/user.js` 中，我们可以编写以下代码：

```javascript
// 导入 Express 模块
const express = require("express");

// 创建路由实例
const router = express.Router();

// 处理用户路由
router.get("/", (req, res) => {
  res.send("User page");
});

// 导出路由模块
module.exports = router;
```

在这些路由模块中，我们使用 `express.Router()` 创建了路由实例，并定义了相应的路由处理函数。这些处理函数可以根据需求进一步扩展，用于处理不同的请求。

最后，我们在 `app.js` 中使用 `app.use()` 将这些路由模块应用到 Express 应用上，分别对应不同的路径前缀。

#### 中间件

- 

当使用 Express 框架时，可以同时使用全局中间件、局部中间件和自定义中间件来处理请求和响应。下面是一个例子，演示了这些中间件的使用和一些注意事项：

```javascript
const express = require('express');
const app = express();

// 全局中间件，作用于所有请求
app.use(express.json()); // 解析 JSON 请求体

// 自定义中间件
const customMiddleware = (req, res, next) => {
  console.log('This is a custom middleware');
  next();
};

// 局部中间件，仅作用于特定路由
app.get('/users', customMiddleware, (req, res) => {
  res.send('Users page');
});

// 错误处理中间件
const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
};

// 使用错误处理中间件
app.use(errorHandler);

// 启动服务器
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

在这个例子中，我们使用 Express 创建了一个应用实例，并使用 `app.use()` 方法来添加全局中间件。在这个例子中，我们使用 `express.json()` 中间件来解析 JSON 请求体。

我们还定义了一个自定义中间件函数 `customMiddleware`，它在特定的路由上使用，即 `/users` 路由。这个中间件在请求到达 `/users` 路由之前被调用，并在中间件函数中打印一条日志信息。

此外，我们还定义了一个错误处理中间件函数 `errorHandler`，它接收四个参数，其中第一个参数是错误对象。这个中间件用于捕获应用中的错误，并返回一个适当的错误响应。在例子中，我们使用 `app.use()` 将错误处理中间件应用到整个应用中，以便处理所有路由中可能出现的错误。

注意事项：
1. 全局中间件：使用 `app.use()` 将全局中间件添加到应用中。全局中间件会应用于每个请求，所以要确保中间件的逻辑适用于所有请求。
2. 局部中间件：在特定的路由中使用 `app.METHOD()`（如 `app.get()`、`app.post()` 等）与中间件函数结合使用。局部中间件仅作用于指定路由。
3. 中间件的顺序：中间件函数的顺序非常重要，它们按照添加的顺序依次执行。确保将中间件添加到正确的位置，以避免逻辑错误或影响其他中间件的功能。
4. 中间件函数的参数：中间件函数接收三个参数：`req`（请求对象），`res`（响应对象），`next`（下一个中间件函数）。`next` 参数是一个回调函数，用于将控制权传递给下一个中间件函数。
5

. 错误处理中间件：错误处理中间件函数需要四个参数，其中第一个参数是错误对象。错误处理中间件函数用于捕获应用中的错误，并返回适当的错误响应。要使用错误处理中间件，需要将其添加到应用的最后，使用 `app.use()`。
6. 除了常见的中间件，Express 还支持使用第三方中间件，可以通过 npm 安装并使用这些中间件来增强应用的功能。



## 杂

### JSONP 技术与 CORS

- JSONP 就是把用于传输的 JSON 垫一层 `<script>` 标签来绕过 CORS 策略的技术



> 在Vue.js中，由于浏览器的安全限制，无法直接在客户端使用JSONP技术解决CORS问题。JSONP依赖于动态创建<script>标签并执行回调函数的方式，而Vue.js的模板编译和渲染是在客户端完成的，无法动态创建<script>标签。



