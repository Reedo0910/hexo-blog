---
title: WebGL! WebGL!
date: 2016/5/29
categories:
- 学习笔记
tags:
- WebGL
- 前端心得
---
前几天上游戏编程的时候听老师提了一下WebGL这个东西，大概就是利用JavaScript和OpenGL的一种3D绘图标准，可以用来弄含有3D元素的页面，甚至是3D网页游戏等等等等。而且现在绝大多数浏览器也已经支持这个标准了。
然后昨天我查了一下这个东西到底有多玄乎，结果又把我的三观刷新了一次。
在我印象中，提起网页游戏，我第一反应：不就是4399嘛 ![撇嘴](https://talk-1252562537.cos.ap-hongkong.myqcloud.com/emotions/piezui.png)
大不了就是这样
 ![webgame](https://talk-1252562537.cos.ap-hongkong.myqcloud.com/images/pre/webgame.jpg)

**但是WebGL做的东西画风是这样的：**
<!--more-->
 [![HelloRacer](https://talk-1252562537.cos.ap-hongkong.myqcloud.com/images/pre/ss8.png)](http://helloracer.com/webgl/)                        

**HelloRacer** 

- 方向键或WASD键控制赛车
- 回车键切换视角
- 空格键刹车

[点击查看HelloRacer Demo](http://helloracer.com/webgl/)

[![Materials Cars](https://talk-1252562537.cos.ap-hongkong.myqcloud.com/images/pre/ss9.png)](http://alteredqualia.com/three/examples/materials_cars.html)                  

**Materials Cars**

 [点击查看Materials Cars Demo](http://alteredqualia.com/three/examples/materials_cars.html)

 [![WebGL Water](https://talk-1252562537.cos.ap-hongkong.myqcloud.com/images/pre/ss7.png)](http://madebyevan.com/webgl-water/)

**WebGL Water**               

- 拖动小球或点击水面形成水波
- 拖动黑色空白区域改变视角
- G键切换有/无重力影响
- L键切换灯光（光源方向基于视角位置）
- 空格键暂停

[点击查看WebGL Water Demo](http://madebyevan.com/webgl-water/)

*更多WebGL实例 开源中国：15 个可在 Chrome 浏览器上体验 WebGL 的例子*

**简直就是美轮美奂好吗！**听到显卡风扇呼呼转的时候真的好兴奋啊 ![害羞](https://talk-1252562537.cos.ap-hongkong.myqcloud.com/emotions/haixiu.png)

然后又查了一下，现在很多的WebGL Demo都用了一个叫做Three.js的Javascript库，因为如果单纯调用WebGL的话代码量是十分恐怖的。

*另：等我把JS弄懂了之后真想搞搞这个，过过我的游戏开发瘾 ![自恋](https://talk-1252562537.cos.ap-hongkong.myqcloud.com/emotions/zilian.png)*

*但是这货运行效率好像不太高（误），玩了一下显卡风扇转的好离谱，还有些卡……*