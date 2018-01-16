---
title: 折腾了一年，只为了像个正常人一样写一个日志
date: 2017-07-12 00:29:06
categories:
- 学习笔记
tags:
- 前端心得
---

![log-update](http://o7a3i0m1t.bkt.clouddn.com/blog/update.png)

Velas 2017 Summer Update （也就是Velas 3.0）很快就要到来啦，其实这几天Velas.xyz也在悄悄地发生着翻天覆地的改变。（这不是病句🙄）但是首先，有一个很重要的改变我不得不说一下。

我终于可以像个正常人一样写日志（即 [Velas - 日志](http://www.velas.xyz/log)）啦！哈哈哈哈哈（虽然你们看到的最终成品来说是没啥变化）
<!--more-->

![log-update1](http://o7a3i0m1t.bkt.clouddn.com/blog/log-update1.PNG)

在Velas 2016（Velas 1.0）的时候，因为整个Velas都是基于纯HTML编写的，所以可以看到整个Log的编写过程都是浓浓的HTML味道。那时每次写日志都相当于写了个小网页……可以看到上面的注释，那个就是为了编写方便而存了了个小模板……😰难以想象那时的我整整写了四个月这样的日志



![blog/update3.PNG](http://o7a3i0m1t.bkt.clouddn.com/blog/update3.PNG)

到了Velas 2017 Spring Update（Velas 2.0），由于引入了Vue，也终于能允许我从使用HTML编写日志转成用JSON编写了，瞬间从石器时代跳到了青铜时代😄不论是编写的效率还是简洁程度都上升了一大截。

然而一切并没有看上去的那么美好……事实是我并不想在这种格式下写东西，因为这个简直就不符合正常人的书写习惯！😡（最初编写结构的时候，我也仅仅是为了方便Vue v-for的读取而这样设计的）

单单是一个日期，我完全不能一眼看出这个日志是在哪一年哪一月哪一天写的，甚至还要一层一层去找年份和月份……更不用说那一层又一层的List……

写的时候流的泪都是当年脑子进的水。



![log-update2](http://o7a3i0m1t.bkt.clouddn.com/blog/log-update2.PNG)

而在Velas 2017 Summer Update（Velas 3.0）中，我仔细分析了Log的JSON结构以及使用Filter进行JSON过滤的可行性后，将JSON的结构从3层6属性精简为1层2属性，彻底把它变成了正常人的书写和阅读习惯✌终于可以像个正常人一样写日志啦~

当然这个转变也归功于对Vue的渐渐熟悉，和我处女座锲而不舍的折腾精神啦。



------

生命不息，折腾不止。折腾了那么久，其实最后也是为了以后能多写日志，多更新……

日志越来越容易写了，但是反而写的越来越少了。

~~这绝对不是因为懒~~