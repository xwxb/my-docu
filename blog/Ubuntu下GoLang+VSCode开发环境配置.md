---
tags: [学习记录, GoLang]
---



1. 安装 GoLang

   ```shell
   sudo add-apt-repository ppa:longsleep/golang-backports
   sudo apt update
   sudo apt install golang-go
   ```

2. 添加环境变量（理论上PATH里面有就行了，Windows下同理）
   ```shell
   export PATH=$PATH:/usr/local/go/bin
   ```

3. 检查版本，是否配置成功（这里有时候需要重启，Windows应该就需要）

   ```shell
   go version
   ```

4. 安装 VSCode 插件里的 Go 插件，谷歌官方那个

5. 会提示缺少很多必要模块，直接 install all 就行

   `proxy.golang.org` 国内被墙，魔法外的解决方法：

   用这条命令更换代理（Windows下似乎这个命令以后要重启VSCode）

   ```shell
   go env -w GOPROXY=https://goproxy.cn,direct
   ```

   然后这样表示 Modules 都安装成功了

   ![](https://f.pz.al/pzal/2023/01/13/4ae0f4bec0306.png)

6. 测试 `.go` 文件是否能正常运行
   ![image-20230113203332375](https://f.pz.al/pzal/2023/01/13/88014a7e7f0a9.png)





参考：

- [Ubuntu · golang/go Wiki](https://github.com/golang/go/wiki/Ubuntu)

- [Download and install - The Go Programming Language](https://go.dev/doc/install#install)