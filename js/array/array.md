# 数组

## 目录
<hr>

<a href="#secondTitle_1">1.  数组引用类型分析</a>  
<a href="#secondTitle_2">2. 多维数组操作</a>  
<a href="#secondTitle_3">3. Array.of 与数组创建细节</a>  
<a href="#secondTitle_4">4.类型检测与转换</a>  
<a href="#secondTitle_5">5.展开语法</a>  
<a href="#secondTitle_6">6.点语法操作DOM元素</a>  
<a href="#secondTitle_7">7.数组解构赋值</a>  
<a href="#secondTitle_8">8.添加元素的方法</a>  
<a href="#secondTitle_9">9.利用slice与splice进行增删改查</a>  
<a href="#secondTitle_10">10.清空数组</a>  
<a href="#secondTitle_11">11.数组的拆分与合并</a>  
<a href="#secondTitle_12">12.查找元素</a>
<hr/>


##  <p id="secondTitle_1">1.数组引用类型分析</p>

要分析数组引用类型，首先要有一个数组，而定义一个数组一般使用如下方法

```
    const array = [1,2,3,4];

    const array2 = new Array(1,2,3,4);
```

接下来使用 typeof 来看一看数组的数据类型

```
    console.log(typeof array);  //object
```

答案是一个对象，属于引用类型，也就是说数组的复制会是一个浅拷贝，代码如下：

```
    const array = [1,2,3,4];

    const array2 = array;

    array2[0] = 5;

    console.log(array);     //  [5,2,3,4]

    console.log(array2);    // [5,2,3,4]

```

原因是什么呢？引用类型的数组的存储方式为：在栈内存中存储名字，在堆内存中存储值。  
而栈内存提供了一个地址指向堆内存的值。  
也就是说在复制数组时，实际时复制了数组在栈内存中的地址。

<table>
<tr>
    <td colspan="2">栈内存</td>
    <td>堆内存</td>
</tr>
<tr>
<td>location</td>
<td>index</td>
<td>value</td>
</tr>
<tr>
<td>0x000001</td>
<td>0</td>
<td>1</td>
</tr>
<tr>
<td>0x000010</td>
<td>1</td>
<td>2</td>
</tr>
</table>


---
## <p id="secondTitle_2">2.多维数组操作</p>

1. 取得嵌套数组中的值
```
let arrForArr = [[1,2,3],[4,5,6]];
console.log(arrForArr[1][2]);    // 6
```

2. 取得数组中对象的属性值
```
let arrForObject = [{name:"Dency",age:22},{name:"flower",age:1}]
console.log(arrForObject[1].age);    // 1
```

3. 数组作为引用对象，可以更改const定义的数组元素

我们先来看看基本数据类型
```
const a = 2 ;
a = 3 ;
console.log(a);    // Uncaught TypeError: Assignment to constant variable

```     
> 报错： 未捕捉的类型错误：常量的分配
  
再来看看引用类型的数组
```
const arr = [1,2,3];
arr[0] = 99;
console.log(arr[0])     //99
```

为什么会产生这样的现象呢？   
> 这是因为const在定义一个值时，栈内存中开辟了一个地址来保存了一个value，同时此内存地址不允许被改变。 

而基本数据类型的数据进行更改时，会为重新开辟一个地址，这与const的定义方式相悖。  

但是引用数据类型的数组则没有这样的后顾之忧。正如前文提到过的，引用类型数据的更改实际上改的是其在栈内存中地址内的值



---
## <p id="secondTitle_3">3.Array.of 与数组创建细节</p>

### 1.Array.of()
该方法是用来弥补数组构造函数Array()的不足。  
我们先来看看数组构造函数Array()在不同数量的参数下的表现。  
(1) Array()中不传参
```
const arr = Array();
console.log(arr);   //   []
```
(2) Array()中只有一个参数
```
const arr = Array(4);
console.log(arr);   //  (4) [empty × 4]
``` 
(3) Array()中有多个参数
```
const arr = Array(3,5,8,6);
console.log(arr);   //  (4) [3,5,8,6]
```
由上可以看到Array方法分为三种情况，在创建数组是有所不便，我们希望有一种方法能做到：1.无参数时，数组为空数组 2.有参数时，数组的元素为参数。  

ES6 为我们提供了Array.of()方法
```
const ArrayNull = Array.of();
console.log(ArrayNull);       // []

const ArrayOne = Array.of(1);
console.log(ArrayOne);       // [1]

const ArrayTwo = Array.of(1,2);
console.log(ArrayTwo);       // [1,2]

const ArrayData = Array.of(undefined,undefined);
console.log(ArrayData);       // [undefined,undefined]
```

<hr/>  

###  2. 关于直接定义新的索引的值时

```
    let arr = [1,2,3];
    arr[7] = 8;
    console.log(arr.length);   // 8
    console.log(arr[5]);   // undefined
```
> 当跳过当前索引定义后面的索引时，数组将自动填充空白的索引并且值为undefined


---
## <p id="secondTitle_4">4.类型检测与转换</p>
1.类型检测

<hr/>

```
    console.log(Array.isArray([]));     //true
```
> `Array.isArray`方法可以检测传入参数是否为数组，返回值为布尔值。

<hr/>
2. 类型转换
<br/>
<br/>


### array => string  

1.toString方法

```
const hd = [1,2,3,4].toString();
console.log(typeof hd); //string
```

2.String函数

```
const hd = String([1,2,3,4]);
console.log(typeof hd); //string
```

3.join方法

```
let hd = [1,2,3,4].join('');
console.log(typeof hd);     //string
console.log(hd);    //1234
```

<hr/>

### string => array  

1.split方法

```
    const str = 'abcdefg';
    console.log(str.split(''));     // [a,b,c,d,e,f,g]
```
> split方法传入的参数决定字符串拆分的规则，参数是什么，字符串找到相应的东西就拆分一个元素，并添加到返回的数组中。

2.Array.from方法

```
const obj = {
    name : "dsadsa",
    age : 12 , 
    length : 4
}

console.log(Array.from(obj))    //[undefined,undefined,undefined,undefined]

const obj2 = {
    0 : "dsadsa",
    1 : "asdas",
    length : 2
}

console.log(Array.from(obj2))   //['dsadsa','asdas']

```
> Array.from方法可以传入两个参数，传入第一个参数要有length属性，以index作为分割条件。

```
<body>
    <div> div1 </div>
    <div> div2 </div>
</body>
<script>
    const divs = document.querySelectorAll('div');
    Array.from(divs,item => {
        item.innerHTML += 'append';
        return item
    })
</script>
```

> Array.from方法第二个参数可以是函数，对数组的元素进行操作。


---
## <p id="secondTitle_5">5.展开语法</p>

如何为一个数组添加另一个数组的所有元素？

我们可能会想到push方法
```
const arr = [1,2,3];
const arr2 = [4,5,6];
for(const value of arr2){
    arr.push(value);
};
console.log(arr);   //[1,2,3,4,5,6]
```

我们也可以使用本节讲到的展开语法`...`
```
let arr = [1,2,3];
let arr2 = [4,5,6];
arr = [...arr,...arr2];
console.log(arr);    //[1,2,3,4,5,6]
```

展开语法同时也能用在函数中,我们以一个求和函数作为案例
```
function sum(...nums){
    console.log(nums)   // [1,2,3,4];
    return nums.reduce((prev,curr)=>{
        return (prev += curr)
    })
}
console.log(sum(1,2,3,4))   //10
```

展开运算符的具体用处有四个：

### 1. 构造字面量数组
```
let arr = [1,2,3];
let arr2 = [...arr];
console.log(arr2)
```

### 2.  合并数组
```
let arr = [1,2,3];
let arr2 = [4,5,6];
arr = [...arr,...arr2];
console.log(arr);    //[1,2,3,4,5,6]
```

### 3. 构造字面量对象
```
let person = {name:"asda" , age:15};
let person2 = {...person};
let person3 = person;
console.log(person2);
person.name = "dsa"
console.log(person);
console.log(person2);   // 复制了一个person
console.log(person3);   // 浅拷贝
```

### 4. 合并对象
```
let person4 = {name:"asda" , age:15};
let person5 = {...person4 , name:"asdawdsa",address:"fdasdsasadsdsad"}
```

---
## <p id="secondTitle_6">6.点语法操作DOM元素</p>

```
HTML
---------------
<body>
    <div></div>
    <div></div>
<body>
```
有这么一个html结构，我们想要在每一个div中添加内容，同时想要使用数组方法来操作，该怎么办呢？

### Array.from方法:  
首先使用我们上文曾提到过的Array.from方法，将所有div节点转为数组，再通过map方法来添加内吕工。
```
JS
---------------
const divs = document.querySelectorAll("div");
Array.from(divs).map(item=>{
    item.innerHTML = '123'
})
```

### 原型链调用call方法：  
call方法能够临时调用所请求的对象的原型链上的方法，并立即使用。
```
JS
---------------
const divs = document.querySelectorAll("div");
Array.prototype.map.call(divs,(item)=>{
    item.innerHTML = '123'
})
```

### 展开运算符方法
用展开运算符构造一个字面量数组，直接使用map方法。
```
JS
---------------
const divs = document.querySelectorAll("div");
[...divs].map(item=>{
    item.innerHTML = '123'
})
```

在此补充一下，不使用数组的情况下，可以直接用forEach
```
JS
---------------
const divs = document.querySelectorAll("div");
divs.forEach(item=>{
    item.innerHTML = '123'
})
```

---
## <p id="secondTitle_7">7.数组解构赋值</p>

以左侧的变量来对应数组中的变量

### 对应解构
左侧变量的第一个对应数组的第一个值
```
let arr = [1,2,3]
let [a,b] = arr
console.log(a,b)    //1,2
```

### 合并解构
使用展开运算符的合并数组功能来解构
```
let arr = [1,2,3]
let arr2 = [1,2,3]
let [...arr3] = arr;
let [a,...arr4] = arr2;
console.log(arr3); // 1,2,3
console.log(a); // 1
console.log(arr4);  //2,3
``` 

---
## <p id="secondTitle_8">8.添加或者删除元素的方法</p>

### 首先来看看添加的方法

### 1. 利用length作用索引值添加
**在数组尾部添加元素**  
length的值 始终比 数组的最后一位元素的索引值 大一 ，也就是说以length作为索引值，始终在创建一个新的元素
```
let arr = [1,2,3,4];
arr[arr.length] = 5;
arr[arr.length] = 6;
console.log(arr)    //1,2,3,4,5,6
```

### 2. 利用展开运算符添加
**批量添加元素，可以选择数组首部或者尾部**   
使用展开运算符合并数组，达到添加元素的目的
```
let arr = [1,2,3,4];
let arr2 = [5,6,7];
arr = [...arr,...arr2];
console.log(arr)    //1,2,3,4,5,6,7
```

### 3.unshift从数组首部添加
**应当注意unshift、push、shift、pop会改变原数组**
```
let arr = [1,2,3,4];
arr.unshift(5);
console.log(arr);   //5,1,2,3,4
```

### 4.push从数组尾部添加
```
let arr = [1,2,3,4];
arr.push(5);
console.log(arr);   //1,2,3,4,5
```

### 再看看删除的方法

### 1.shift从数组首部删除
```
let arr = [1,2,3,4];
arr.shift();
console.log(arr);   //2,3,4
```

### 2.pop从数组尾部删除
```
let arr = [1,2,3,4];
arr.pop();
console.log(arr);   //1,2,3
```

---

## <p id="secondTitle_9">9.利用slice与splice进行增删改查</p>

在开始之前，先明确 `slice` 与 `splice` 的用法：  

`slice` 方法  与 `splice` 方法的语法不同

slice(x,y)    x - 作为被截取的初始索引     y - 截至第几位数字，但**不包括**y 

splice(x,y,z...)  x - 作为被截取的初始索引    y - 截取几位数字  z - 替换的元素,会放在x的位置

`slice` 方法  与 `splice` 方法的用法也不同

slice方法不会改变原数组，而splice可以

```
// slice()
let arr = [1,2,3,4,5];
const arr2 = arr.slice(1,4);
console.log(arr)
console.log(arr2)   //2,3,4

// splice()
let arr3 = [1,2,3,4,5];
const arr4 = arr3.splice(1,4);
console.log(arr3)   //1,5
console.log(arr4)   //2,3,4
```

于是借助 `splice` 来增删改查

### 增：  
已知一个数组arr有四个元素 `[1,2,3,4]` , 现有需求，在3后面添加2个数字 `5,6`

```
let arr = [1,2,3,4];
arr.splice(2,0,5,6);
console.log(arr);   //1,2,3,5,6,4
```

已知一个数组arr有四个元素 `[1,2,3,4]` ， 现有需求，在末尾添加1个数字 `5`
```
let arr = [1,2,3,4];
arr.splice(arr.length,0,5);
console.log(arr);   //1,2,3,4,5
```

### 删：
已知一个数组arr有四个元素 `[1,2,3,4]` , 现有需求，删除元素 `2,3`

```
let arr = [1,2,3,4];
arr.splice(2,2);
console.log(arr);   //1,2
```

### 改：  
已知一个数组arr有四个元素 `[1,2,3,4]` , 现有需求，创建一个函数，实现数组内的元素修改位置。
```
const move = (arr,from,to,num) => {
    let item = arr.splice(from,num);
    //splice方法返回的是一个数组，所以要用展开运算符将item展开
    arr.splice(to,0,...item);
    return arr
}
let arr = [1,2,3,4,5,6];
// 将2,3 移到第四位
move(arr,1,3,2);
console.log(arr);   //1,4,5,2,3,6
```
---

## <p id="secondTitle_10">10. 清空数组</p>

### 1. arr = []
`arr = []` 这种方法是指新开辟一个堆内存地址，来保存一个空的arr，也就是说原地址不变
```
let arr = [1,2,3,4];
let arr2 = arr;
arr = [];
console.log(arr);   // []
console.log(arr2);  //1,2,3,4
```

### 2. arr.length = 0
`arr.length = 0`是指arr指向的堆内存地址清零，更为彻底。
```
let arr = [1,2,3,4];
let arr2 = arr;
arr.length = 0;
console.log(arr); // []
console.log(arr2); //[]
```

---

## <p id="secondTitle_11">11. 数组的拆分与合并</p>

### 1. `字符串`**拆分成**`数组` 与 `数组`**合并成**`字符串`

**`join`不会改变原数组**

```
let str = "hello,world";
let arr = str.split(',');
console.log(arr);   // ['hello','world']
let arr2 =  arr.join('-');
console.log(arr2);   // 'hello-world'
```

### 2. 数组合并

1） concat   

**`concat`方法不会改变原数组**

```
let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let arr3 = arr.concat(arr2);
console.log(arr1,arr3)  //[1,2,3,4],[1,2,3,4,5,6,7,8]
```

2） 展开运算符

```
let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let arr3 = [...arr , ...arr2];
console.log(arr3) //[1,2,3,4,5,6,7,8]
```

3） copywithin  
**`copyWithin()`  方法会改变原数组**

`copyWithin()`  方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。

`copyWithin()` 能使用三个参数：

target : 被替换的目标索引值（required）  
start : 替换内容的开始索引值
end : 替换内容的结束索引值，并不被包含

```
let arr = [1,2,3,4,5,6];
arr.copyWithin(3,1,3);
console.log(arr)    // [1,2,3,2,3,6]
```

## <p id="secondTitle_12">12. 查找元素</p>

首先先设定一个数组 ： `let arr = [1,2,3,4,5,2]`  
我们想检索到数组中的 2

### 1.`indexOf` 与 `lastIndexOf` 检索索引值 (不能用于引用类型数据)
 
`indexOf()`方法内填写一个值，以此匹配到 **第一个** 符合条件的元素，并返回 **索引值**   

```
let arr = [1,2,3,4,5,2];
let indexOfFirstTwo = arr.indexOf(2);
console.log(indexOfFirstTwo);   //1
```

`lastIndexOf()`方法内填写一个值，以此匹配到 **最后一个** 符合条件的元素，并返回 **索引值**  

```
let arr = [1,2,3,4,5,2];
let indexOfLastTwo = arr.lastIndexOf(2);
console.log(indexOfLastTwo);   //5
```

### 2.`includes` 检索是否拥有被检索的元素 (不能用于引用类型数据)
`lastIndexOf()`方法内填写精确的元素值，遍历数组查询是否有匹配元素值的元素，并返回 **布尔值**

```
let arr = [1, 2, 3, 4, 5, 6];
const result = arr.includes(2);
console.log(result) //true
```

### 3. `find` 检索元素 

`find()` 方法传入一个回调函数,遍历数组并执行回调函数，返回与回调函数返回值匹配的元素

```
let arr = [1,2,3,4,{a:1,b:2}];
const result = arr.find(item=>{
    return item.a == 1
});
console.log(result) //{a:1,b:2}
```

### 4. `findIndex` 检索索引值

`findIndex()`方法传入一个回调函数,遍历数组并执行回调函数，返回与回调函数返回值匹配的元素索引值

```
let arr = [1,2,3,4,{a:1,b:2}];
const result = arr.findIndex(item=>{
    return item.a == 1
});
console.log(result) //4
```