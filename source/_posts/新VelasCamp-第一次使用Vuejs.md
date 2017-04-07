---
title: '新Velas Camp:第一次使用Vue.js'
date: 2016-11-20 17:59:33
categories:
- 学习笔记
tags:
- 前端心得
---

![新Velas Camp](http://o7a3i0m1t.bkt.clouddn.com/image/blog/VelasCamp.jpg)

本来在我在短期之内还是与大规模使用Vue.js无缘的，把[Velas Camp](http://www.velascamp.cn)设计翻新也只是因为之前的设计不太直观（而且流量损耗和加载开销都很大）。而且还干脆小小的尝试了一下Web App形态。

<!--more-->

但是必须要指责一下苹果，一声不吭的就把Web App的启动屏幕api移除了！（据说是bug，但是至今也没恢复），结果白白设计了个启动屏幕，却毫无用武之地。但是想了想，即使没有这个api我也能弄启动屏幕呀（然后又要指责一下苹果，为啥Web App打开都会白屏一段时间，而且根本不会帮你缓存），但是为了不浪费非iPhone6/6s/7（不含plus）用户的流量，于是最后在衡量了开销之后决定，还是用Vue.js来解决一下节点处理问题。

即使只是用了v-if/v-show和bind……

最后弄好了是这个样子的。

![startup screen](http://o7a3i0m1t.bkt.clouddn.com/image/blog/startup.png)

只在iPhone 6/6s/7(不含plus)将网页添加主屏幕之后可见。

虽然感觉目前Web App不是SPA的话没什么用，因为打开其他页面也会跳转到浏览器打开的。但是不管怎么说，虽然很耗时，还是有点小成就感的。（还隐藏了一句Android 5+的标题颜色代码，但是没测试）

------

列一下meta代码（第6行为iOS开始屏幕设置，目前在iOS9+不可用）

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="Velas Camp">
<link rel="apple-touch-icon-precomposed" sizes="180x180" href="retinahd_icon.png">
<link href="apple-touch-startup-image.png" media="(device-width: 375px) and (device-height:667px)and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">
<meta name="theme-color" content="#3b4aff">
```