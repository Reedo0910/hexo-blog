---
title: 关于Talk的月份列表
date: 2016/6/6 18:00:00
categories:
- 学习笔记
tags:
- 前端心得
- 毛玻璃
---

> 提示：由于博客迁移，本文提到的功能可移步到[Velas's Talk,每日碎碎念](http://2016.velas.xyz/talk.html)查看

今天的Talk页增加了月份标签与月份列表，现在让我们来认识一下这两个小朋友吧。

其实在最初设计出来的时候，月份列表是长这样的

![talk月份列表设计初稿](http://o7a3i0m1t.bkt.clouddn.com/image/blog/ss12.png)

不能说不美观，但是当多看了几遍之后就会觉得那个灰色的条条横在中间有点影响看日志的食欲，而且在有一些地方也不符合这个网站的风格。冥想了一下之后，断然决定让之前那个被我吐槽的filter: blur回归，于是就有了今天这个样子

<!--more-->

![talk月份列表设计第二稿](http://o7a3i0m1t.bkt.clouddn.com/image/blog/ss13.png)

虽然感觉还有进步空间，但是能做到这样还是挺有成就感的。

**目前filter: blur毛玻璃效果的兼容性列表如下（6月19日更新）：**                            

- 测试已知可用的有：新版本的：Chrome、Firefox、**Edge、iOS上的所有浏览器以及Android上的所有浏览器。**
- 未测试但理论上兼容的有：新版本的：Opera、基于Webkit内核（或Blink内核）的浏览器（如：Safari、360浏览器等）、iOS 8（及以后版本）和Android 4.4（及以后版本）上的浏览器。
- **测试已知不兼容的有：IE全系列浏览器（IE11不兼容，推测旧版本的IE也不支持）、Opera Mini以及不支持CSS3的旧版本浏览器。**在这些浏览器上月份列表背景为半透明的灰白色遮罩效果。

**更新：Edge、Safari以及Android上的浏览器都兼容filter: blur，之前在Edge和Safari等浏览器上不能显示毛玻璃效果为实现方法出错。**