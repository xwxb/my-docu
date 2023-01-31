---
tag: [工具]
---



## GoLang



就是用 Go 写代码解决，Go 标准库里面有 json 处理库，还是很方便的



直接贴示例代码：

（不要在意具体的内容，这确实是有一个具体的用途的，知道第一个结构体是输入 JSON 结构体，第二个是用来输出的就行）



```go
package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
)

type Input struct {
	Chara struct {
		Name        string `json:"Name"`
		Des string `json:"Des"`
		Def  string `json:"Def"`
	} `json:"Chara"`
}

type Output struct {
	Name     string `json:"Name"`
	Pers      string `json:"Pers"`
	EDlogue string `json:"EDlogue"`
}

func main() {
	// Read in the Input.json file
	jsonFile, err := ioutil.ReadFile("Input.json")
	if err != nil {
		log.Fatal(err)
	}

	// Unmarshal the JSON data into the Input struct
	var caiDef Input
	err = json.Unmarshal(jsonFile, &caiDef)
	if err != nil {
		log.Fatal(err)
	}

	// Process the data and fill in the Output struct
	Output := Output{
		Name: caiDef.Chara.Name,
		Pers: caiDef.Chara.Des,
		EDlogue: caiDef.Chara.Def,
	}

	// Marshal the Output struct into JSON
	OutputJSON, err := json.Marshal(Output)
	if err != nil {
		log.Fatal(err)
	}

	// Write the JSON data to a new file called Output.json
	err = ioutil.WriteFile("Output.json", OutputJSON, 0644)
	if err != nil {
		log.Fatal(err)
	}
}

```





比较麻烦的是需要把 Go 结构体写出来，好在有工具可以用：

[JSON转Golang Struct - 在线工具 - OKTools](https://oktools.net/json2go)

注意要选择嵌套转换，这样我们就能一次把 $.json$ 文件反序列化了



## 使用 Shell 工具 jq



### 介绍

上面那种方法确实还算简单，但还是不够简单，而且遇到了非常大的 JSON 文件就难以处理了

这个时候我们就可以用到 JSON 处理工具 jq 了，它可以将复杂的 JSON 提取成简单的JSON

（官网：[jq](https://stedolan.github.io/jq/)



### Ubuntu 下安装



这个问题还挺坑的，不能直接安装，需要事先开启所有版面/仓库



```bash
sudo add-apt-repository main
sudo add-apt-repository universe
sudo add-apt-repository restricted
sudo add-apt-repository multiverse 
```



然后再安装

```bash
sudo apt-get install jq
```



### 使用实例



因为我觉得知识点足够简单了就不提供实例了hh（其实就是懒）



1. 直接提取第第一层键的值

   ```bash
   jq '.key_level1' input.json > output.json
   ```

   最后的输出是可选的，不填可以直接打印到屏幕
   
2. 多层提取直接像结构体一样加点就好了

   ```bash
   jq '.key_level1.key_leve2' input.json > output.json
   ```

3. **数组**处理
   
	```bash
   jq '.[]' input.json > output.json
   ```

   `.[]` 表示的是，当前已经提取出来了一个数组，也就是最根层已经是一个数组了，现在这个命令可以把数组里的每个值循环输出
   
4. 多键值处理

	```bash
   jq '.key1, .[].key2' input.json > output.json
   ```

   其实就是逗号分开就好了
   
5. 组合使用（加油把骚年——）



操作注意：

1. 建议逐个文件输出，感觉还是容易搞错的，主要是命令会更简洁一点
2. 实测输出文件不能是自己
3. 一开始我居然在想“怎么保留键值输出这种蠢问题”。。明明就是一层层剥皮每层既是键又是值
4. jq只能





更多基本使用实例可以看看：[shell编程学习之使用jq对json数据进行提取 - _nul1 - 博客园](https://www.cnblogs.com/nul1/p/12228785.html)







