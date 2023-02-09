---
tag: [工具, 学习记录]
---







主要是 [Learn LaTeX in 30 minutes - Overleaf, Online LaTeX Editor](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes) 的学习记录

早期其实想学，几个G的安装包劝退了我（不过其实很早之前也知道 Overleaf 了，就是懒得学



## 介绍的要点

常见的有关 $\LaTeX$ 名词：

- $\TeX$ 是最早出现的一个排版软件，最广为流传的是对数学公式的渲染，现在一般叫做“引擎”

- 而 $\LaTeX$ 则是一种基于 $\TeX$ 的排版系统

- MathJax 和 KaTeX 都是基于 $\TeX$ 的用于渲染数学公式的 JavaScript 库

  本博客就是使用 $Ka\TeX$ 进行的数学公式的渲染，而前者应该是主流网页的渲染方式，这里顺带推荐一个冷门好用的油猴脚本：[flaribbit/click-to-copy-equations: Click to copy equations in Wikipedia](https://github.com/flaribbit/click-to-copy-equations) （好用的话给开发者留个 Star）



优势：

- 内容排版分离，可以专注内容（其实个人感觉 Word 其实也可以视作是分离，感觉用Markdown导出惯了hh）

- 模板丰富，还有很多免费的外部包，常用命令简单，入门难度不大

  



## 使用的关键



- 找准文档的类型，这关乎整个文档的组织

- 不会的格式直接查就好了

  （基本格式：![image-20230128152359677](https://f.pz.al/pzal/2023/01/28/a3ffc149ebb4e.png)

- 用好外部包





## 后续的尝试



想尝试的一些东西，先挖坑



- [ ]   常用模板，是否有直接类似CSS的一键导入的方法
- [ ]   实际论文过程中数学公式外的要点

- [ ]  [Keldos-Li/typora-latex-theme: 将Typora伪装成LaTeX的中文样式主题，本科生轻量级课程论文撰写的好帮手](https://github.com/Keldos-Li/typora-latex-theme)
- [ ] Markdown 、 $\LaTeX$ 、Pandoc 的联动 [Pandoc - About pandoc](https://pandoc.org/)
