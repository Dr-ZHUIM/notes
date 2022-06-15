# TypeScript

## 目录

### <a href="#id1">1.类型分类</a>
### <a href="#id2">2.类型校验模式</a>

---

## <span id="i1">1.类型分类</span>


---

## <span id="i2">2.类型校验模式</span>

### 1) 类型控制 **(显式赋值)**

> **`显示赋值` 的意义**：主动限制变量的类型

先说明 **`显式赋值`** 的定义 : 直接定义变量的类型。

一如 ：  
```
// 定义一个数字类型的变量
 const num:number = 1
// 定义
const fun = (a: number, b: number): void => {
    let c = a + b;
    console.log(c)
};
```

---
首先写一个求和函数

我们传入两个数字，返回值为正常的数字
````
    function sum(a,b){
        return a + b
    };
    console.log(sum(1,3)) //4
````

我们在传入一个数字和一个字符串，返回值变为了拼接的字符串。
```
        function sum(a,b){
        return a + b
    };
    console.log(sum('ad',3)) //ad3
```

上面这种情况是我们不想得到的，有没有什么办法在开发阶段的时候，就限制参数传入的类型呢？

`答案是使用 **TS的类型**`

我们限制传入参数的类型皆为数字，当传入参数不是数字时，就会在开发阶段与编译阶段报错
```
        function sum(a:number,b:number){
        return a + b
    };
    console.log(sum('ad',3)) //编译报错Argument of type 'string' is not assignable to parameter of type 'number'.
```
---

### 2) 类型推断 **(隐式赋值)**

> **`隐式赋值的意义`** ：为有值的变量提供类型  
> **`缺点`** : 面对值不确定的变量时，不能提供开发人员的预期类型

先说明 **`隐式赋值`** 的定义 : 间接定义变量的类型。

一如：
```
const a = 1;    //隐式定义变量a为类型number
```

在上一小节的例子中我们已经遇到了隐式赋值的小问题
```
    const fun = (a,b)=>{
        return a + b
    };
    console.log(fun('ad',2))
```
在遇到拥有不确定值的变量 a 、 b 后，TS将它们都定义为了 `any` 类型 ， 即任意类型，这显然是不能满足我们想要数字相加的需求的。

所以在做类型校验的时候，尽量要使用 **`显式赋值`**

### 3) 数组的类型推断
数组在定义时，传入的值的类型会隐式赋值给数组。

 **`隐式定义`** 一个字符串型数组

 正常情况下：
```
//定义了一个字符串型
const arr = ['ad', 'bc'];
//压入一个字符串
arr.push('ss');
//显示正常
console.log(arr);   //'ab','bc','ss'
```

当添加非字符串类型数据时报错：
```
const arr = ['ab','bc'];
arr.push(12);
console.log(arr);   // Argument of type 'number' is not assignable to parameter of type 'string'
```

 **`隐式定义`** 一个字符串、数字混合数组

正常情况下：
```
const arr = [1,2,'ab'];
arr.push(12);
arr.push('bc');
console.log(arr);   // 1,2,'ab',12,'bc'
```


---
### 4) 对象的类型推断