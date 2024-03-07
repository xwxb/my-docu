---
tags: [题解, 蓝桥杯, 学习记录]
---



# AcWing 1238. 日志统计


还算是比较简单的双指针，唯一难的地方或许是如何建模，去理解这个模型

y总说到，双指针也只是一种暴力优化的思想而已，不必有什么思想上的负担



要搞清楚这题，首先要搞清楚双指针指的是什么。

双指针说是双指针，一般其实就是同时操作两个下标，理解为两个扫描头。

这里我们对 `{时刻, id}` 进行了排序，所以可以这里的**扫描对象**可以理解为为：在一个时间的数轴上按时间顺序逐个操作每个被点赞的 id



然后我们核心的算法思想：用两个扫描头去维护一个区间，使得这个区间的时刻长度永远在 $(0, D]$ 内，然后检查这个区间是否有符合条件的 id



接下来具体的算法步骤：

1. 我们主要逐个递增我们区间终点，即我们可以先写一个终点的 `for` 循环，按照时间顺序逐个加入 id ;
2. 一开始起点肯定是设为最开始的那个id所在的时刻，然后每一个终点我们都去检查区间长度是否超了
   1. 没有则保持不变，继续加入新 id 并检查是否有 id 满足要求
   2. 有则将起点往后移，并移除原起点处的id



其中有一个需要考虑的问题：如果同一时刻有两个帖子的id受到了点赞，是否有影响?

没有影响。因为我们区间一定是先取到最大长度然后再开始往短了调整，这个过程如果帖子id对应的赞数够的话一定能够被记录下来。



```c++
int n, d, k;
set<int> hotposts;
int likes[N];

int main()
{
    cin >> n >> d >> k;
    
    vector<PII> logs;
    
    int t = n;
    while(t--){
        PII p; cin >> p.first >> p.second;
        logs.push_back(p);
    }
    
    sort(logs.begin(), logs.end());
    
    for(int i = 0, j = 0; i < n; ++i){
        int it = logs[i].first, ii = logs[i].second;
        likes[ii]++;
        
        while(it - logs[j].first >= d){
            likes[logs[j++].second]--;
        }
        
        if(likes[ii] >= k) hotposts.insert(ii);
    }
    
    for(int i : hotposts) cout << i << '\n';
    
    return 0;
}
```

