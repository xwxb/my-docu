---
tags: [知识点记录, Vue, AIChatHis]
---







## 前言

了解原理还是很重要的，这是我个人学前端的一大误区。前端很容易获得反馈，加上现在copilot的开发习惯，使得比较难以静下心来研究原理



## Vue 基本原理



我们知道最终浏览器都是基于 HTML + JS + CSS 进行渲染的，那在使用 JS 框架构建网页的时候，Vue 具体做了哪些事情呢？



回顾一下一个网页的渲染过程

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f17b73e185f54ff9b142f6800c5f89cd~tplv-k3u1fbpfcp-watermark.image?)



使用 CDN 的形式来使用 vue，我们也可以看到 Vue 也只是在网页绘制以后，利用 JS 对排版好的 DOM 树进行操作而已

直接创建一个 Vue 项目的话，很多事情都已经帮我们做好了

[渲染机制](https://cn.vuejs.org/guide/extras/rendering-mechanism.html)





### 基本概念



- 计算属性：选项式 API 中的一个计算变量的一个方式。这种方式带有缓存、缓存控制、依赖追踪，比直接赋值有时候是更值得使用的一种方式。





### 两种 API 风格

- 选项式 API 指的是在 `*export* *default* {}` 中提供 `data`、`methods` 和 `mounted` 等选项来描述组件逻辑，这些选项都会直接暴露在 `this` 上
- 组合式 API 是一种比较基础的实现，它使用  `<script setup> ` 表示，使得顶层变量/函数都能够在模板中直接使用。





区别和联系

- 选项式 API 是在 组合式 API 的基础上实现的
- 组合式 API 中使用了 `<script setup>` 来声明脚本，`<script setup>` 中的导入和顶层变量/函数都能够在模板中直接使用。
- 两种 API 风格（Options API 和 Composition API）是可以混合使用的
  - `setup` 函数被用来替代选项式API中的 `data` 选项
  - 组合式 API 中，没有使用 setup + ref 的需要使用 export default + setup() 选项 来实现相同的效果

- 可以多在[教程 | Vue.js](https://cn.vuejs.org/tutorial/#step-2)这个里面对比







响应式和声明式渲染：

- 组合式用 `ref` 定义的、选项式中用 `data` 选项导出的数据

  - 组合式中直接定义的数据是非响应式的，还要注意需要加上 `<scrip setup>` 。前者会被当作内部数据处理，后者会

  - > `reactive()` 只适用于对象 (包括数组和内置类型，如 `Map` 和 `Set`)。而另一个 API `ref()` 则可以接受任何值类型。

  - 具体参考 [响应式基础 | Vue.js](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state)







组合式 API

- setup函数 [组合式 API：setup() | Vue.js](https://cn.vuejs.org/api/composition-api-setup.html)

> Vue3 中还引入了 setup() 钩子函数，用于代替 Vue2 中的 beforeCreate 和 created 钩子函数。在 setup() 中可以使用 reactive、ref 等函数来创建响应式数据，以及使用 props 等参数。

> 模板中的表达式和 `<script setup>` 中的代码处在同一个作用域中。







### 模块载入原理

然后我们了解组件的一般使用原理，以路由组件和组件库为例

我们有两种模块的使用方式，以 `marked` 包为例



```vue
import { marked } from 'marked';
// or const { marked } = require('marked');

const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
```





### 构建原理

​	[Vite是基于原生ES6 Modules，在生产环境下打包使用的是Rollup，而vue-cli则是基于webpack封装，生产环境和开发环境都是基于Webpack打包](https://juejin.cn/post/7099824785470783501)[1](https://juejin.cn/post/7099824785470783501)

它们主要做的事情是，分析模块化后的 `.js` 文件的依赖关系，然后打包成几个静态文件



## Vue 路由深度解析

[入门 | Vue Router](https://router.vuejs.org/zh/guide/)





## 组件库使用原理深度解析



01

在 Vuetify 中，`v-container`、`v-app`、`v-main` 是用于构建网页布局的关键组件。

- `v-container` 组件是用于创建网页内容的容器。它是一个包裹内容的块级元素，通过设置不同的属性可以控制容器的宽度、间距和对齐方式。`v-container` 提供了响应式的布局，能够根据屏幕大小自动调整容器的宽度。

- `v-app` 组件是 Vuetify 的根组件，用于创建应用的主要容器。它包含了整个应用的布局结构，并提供了全局的设置和样式。`v-app` 通常是放置在应用的最外层，作为其他 Vuetify 组件的容器。

- `v-main` 组件是应用主要内容的容器。它用于包裹应用的主要内容区域，通常是放置在 `v-app` 组件内部。`v-main` 会占据剩余的空间，并根据需要自动调整高度，确保内容在页面上居中显示。

布局构建的原理是通过嵌套不同的布局组件来组合和定位内容。`v-container` 提供了内容的容器，并可以控制其宽度和对齐方式。`v-app` 则是整个应用的主要容器，负责包裹所有的内容，并提供全局的设置和样式。`v-main` 则是应用主要内容的容器，用于放置主要的页面内容。

通过使用这些布局组件，可以灵活地构建网页布局，实现响应式的设计，并根据需要调整容器的大小和位置。同时，Vuetify 的布局系统还提供了其他的布局组件和工具，如栅格系统、弹性盒子、辅助类等，进一步增强了布局的灵活性和扩展性。





02

Vuetify 组件的渲染确实是在挂载之前进行的，所以想动态渲染出组件的方案是行不通的



