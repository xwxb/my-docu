# chatgpt-prompt-eng 课程速览



提示词工程的学习资料前面几个月就已经涌现出相当多非常不错的资料了啊，一直有些纠结看哪个加上自己也一直挺彷徨该不该空出大量时间来学。恰巧放假 + 最权威的课程刚刚出现了，就别想那么多先尽快刷完再说吧。

> *Generative AI offers many opportunities for AI engineers to build, in minutes or hours, powerful applications that previously would have taken days or weeks. I’m excited about sharing these best practices to enable many more people to take advantage of these revolutionary new capabilities.*
>
> <div style="text-align: right;">
> – Andrew Ng
> </div>

## Intro



- 被广泛运用的一次性提示词使得 LLM 的能力被严重低估



当前使用的 LLM 大致会分为两种类型

- Base LLM：行动模式为单字接龙的基础 LLM
- Instruction Tuned
  - 遵循特定指示来行动的 LLM
  - RLHF 人类反馈强化学习
  - 更容易生成有帮助，诚实无害的输出





## Guidelines



原则一：clear and specific instruction

- clear != short
- 1 分隔符很重要，可以是任何将起分开的符号
  - 可以避免提示冲突，使得 LLM 分不清到底是处理的内容
- 2 要求结构化输出
  - 比如说 JSON HTML
- 3 要求模型检查是否满足要求
  - 比如检查边界情况
  - 用如果，就这样的句型
-  4 少量提示训练
  - 提供成功的例子



%我发现我其实大多数都自己总结出来过hhh，果然多用还是很重要%



原则二：给 LLM 充足的时间来思考

- 策略一：给模型指明需要做的步骤
- 策略二：在模型急于「得出结论」之前让他给出自己的答案（有自己的思考）



重要：模型的局限

- 模型虽然吸收了，大量的知识，但是对「知识的边界」并不清晰，我们称之为「幻觉」
- 一个可行的方案是：让他得出结论的时候，同时给出相关引用，得出结论的原因



## Iterative Prompt

> 提示词的编写不是一蹴而就的过程
>
> 第一个提示词是否成功并不重要，更重要的是迭代开发的过程
>
> 没有一个可以适合不同应用场景的完美提示
>
> 我认为成为有效提示工程师的关键不在于记住了完美的提示怎么写，在在于有用一个良好的开发提示的过程



- 限制字符数的效果不如限制词数，LLM使用的是”分词器“

- 核心是：牢记 Guideline，注意留够思考时间
- 当构建更复杂的应用的时候，需要去查看ping'jun

![image-20230504190708376](https://f.pz.al/pzal/2023/05/04/4eea35eca2b58.png)

## Summarize

主要是总结的方式，你可以去指定总结的侧重点，目的，限制总结字数等

总结实际应用场景非常广泛且作用非常大，所以目的也还是很重要的，当你想要总结电商评论的时候，你可以直接总结出有用的信息







***



一些输出

```#ChatHis
我这个prompts好在哪里，我给你讲解一下： #tricks 
1. 让使用“扮演”的方式来“预载”数据库信息，而不是单纯根据我们的要求进行模型预测，可以得到很多有用的消息；
2. 很多时候 LLM 确实能解决很多问题，LLM 的生成的本质就是预测，这也是人脑的处理机制，就好比别人问你问题，你会根据问题，结合自己的经验，去预测可能的答案；但是我们有的时候不单单是想要“直接根据问题获得针对性的回答”。举个例子，你遇到了一个特别高明的教授，你有机会向他提问，针对性地解决问题固然好，但是你或许也希望他能根据你的情况，主动性给你提供一些“跟你问题直接相关的”信息。
3. 基本要求，Ng老师给的官方重要指南里的要点：
31 给模型足够的思考时间，问题不能太大。很多时候你觉得他无所不能，但是他token和计算单位上都是有限制的，你问题越小，他才会给你处理得越好。这就像让你一小时赶ddl，你会选择抄作业一样。
32 分隔符和结构化输出是 clear and specific instruction 的关键
```

