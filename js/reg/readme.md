# 正则表达式

## 1. 创建正则表达式

### 1. 字面量创建正则表达式

使用字面量创建正则表达式可以有两种方式：

1. 直接使用字符串的形式创建正则表达式 `let reg = '/hello/' `

2. 借助**eval作用域**，提供js表达式输入，通过**模板字符串**，使用变量

    ```
        let str = 'helloworld'
        let a = 'hello';
        console.log(eval(`/${a}/`).test(str));
    ```
---
### 2. 对象创建正则表达式

```
    let str = 'helloworld';
    let reg = new RegExp('e','g');
    console.log(reg.test(str))
```

---

**练一练：** 我们已经学会了创建字符串全局查询字符的正则表达式了，接下来让我们尝试实现这样一个案例：

提供一个`h1`标签，文本信息为 `helloWorld` , 将`ll`描红

```
<!-- HTML -->
<h1 id="title">HelloWorld!</h1>
<!-- JavaScript -->
const title = document.getElementById("title");
const reg = new RegExp('ll','g');
title.innerHTML = title.innerHTML.replace(reg,search=>{
    return `<span style="color:red">${search}</span>`
})
```
---

## 2. 正则选择符

### 1. 或 |

由 `或` 连接的多个条件中满足一个则返回 `true`

```
const reg = new RegExp('lla|w|W', 'g');
const title = 'helloWorld';
console.log(reg.test(title));
```

### 2. 原子表与原子组中的选择符

`原子表 [] ` , 不需要写 ` | ` 符号，因为原子表本质上是多个正则的连接，是 `或` 的关系

```
let reg = /[1234567890]/ // 等于 /1|2|3|4|5|6|7|8|9|0/
```

`原子组 ()` , 需要些 ` | ` 符号， 因为原子组本质上是多个正则的连接，是 `与` 的关系

 ```
 let reg = /(12)|(34)/  // 等于 /12|34/
 ```
---

## 3. 转义

转义是指将 **有歧义的属性** 确认为原本的含义。

以下这个正则表达式就用到了转义

```
let reg = /\d+\.\d+/
```

`\d` 的意思是检索数字 ， `\d+`的意思是检索一或多个数字  
而 `\.` 就用到了转义，因为正则表达式中的 `.` 同时意味着任意值和小数点 ，使用转义将 `.` 的检索对象变为小数点  
也就是说这个正则表达式的检索对象是： 数字+小数点+数字

```
//在对象中这两种时相同的
let reg = new RegExp("d+.d+");
let reg2 = new RegExp("\\d+\\.\\d+");
```

## 4. 字符边界约束

