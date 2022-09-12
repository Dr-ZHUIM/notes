# CSS代码规范

## 选择器规范 

避免出现超过三层的嵌套规则

## 可读性

### rem选择

```
// 移动端rem计算

/* 基于UI width=750px DPR=2的页面 */
html {
    font-size: calc(100vw / 7.5);
}
```

```
// PC端rem计算

/* 基于UI width=1920px DPR=2的页面 */
html {
    font-size: calc(100vw / 19.2);
}
```

---

### 使用px的场合

1. border
2. 水平方向的padding
3. 确认无适应性的元素
---

### 使用em的场合

1. 控制**段落**的垂直方向的margin
---

### 使用rem的场合

1.  需要适应性的元素
2.  没有动态计算rem的情况下的媒体查询

---

## CSS预设

```
/*
  1. 可预测的伪类元素
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. 去除默认的外边距，内边距
*/
* {
  margin: 0;
  padding: 0;
}
/*
  3. 提供百分比默认高度
*/
html, body {
  height: 100%;
}
/*
  4. 增加可读性
  5. 提供更好的文字表现
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. 提供基本的媒体样式
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. 去除以下元素的内置文字样式
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. 避免文字溢出
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
```