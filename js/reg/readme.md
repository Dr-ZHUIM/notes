# 正则表达式

## 字面量创建正则表达式

使用字面量创建正则表达式可以有两种方式：

1. `let reg = '/hello/' `

2. 借助**eval作用域**，提供js表达式输入，通过**模板字符串**，使用变量

```
    let str = 'helloworld'
    let a = 'hello';
    console.log(eval(`/${a}/`).test(str));
```