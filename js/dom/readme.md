# DOM Document-Object-Model

## 1. DOM 加载顺序


1. 浏览器把html代码解析成1个Dom树，html中的每个tag都是Dom树中的1个节点，根节点就是我们常用的document对象。dom树就是html结构，里面包含了所有的html tag，包括用JS添加的元素。

2. 浏览器把所有样式(主要包括css和浏览器自带的样式设置)解析成样式结构体，在解析的过程中会去掉浏览器不能识别的样式。

3. dom tree和样式结构体结合后构建呈现树(render tree),render tree有点类似于dom tree，但有区别，render tree能识别样式，render tree中每个node都有自己的style，而且render tree不包含隐藏的节点(比如display:none的节点，还有head节点)，因为这些节点不会用于呈现，而且不会影响呈现的，所以就不会包含到render tree中。但是visibility:hidden隐藏的元素还是会包含到render tree中的，因为visibility:hidden 会影响布局，会占有位置。

4. 一旦render tree构建完毕后，浏览器就根据render tree来绘制页面。

## 2. DOM节点Node概念
