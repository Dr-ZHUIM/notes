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

