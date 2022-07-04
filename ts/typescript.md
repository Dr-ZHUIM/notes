# TypeScript

## 目录

- [1.类型校验模式](#1%E7%B1%BB%E5%9E%8B%E6%A0%A1%E9%AA%8C%E6%A8%A1%E5%BC%8F)
  - [1). 类型控制 **(显式赋值)**](#1-%E7%B1%BB%E5%9E%8B%E6%8E%A7%E5%88%B6-%E6%98%BE%E5%BC%8F%E8%B5%8B%E5%80%BC)
  - [2). 类型推断 **(隐式赋值)**](#2-%E7%B1%BB%E5%9E%8B%E6%8E%A8%E6%96%AD-%E9%9A%90%E5%BC%8F%E8%B5%8B%E5%80%BC)
  - [3). 数组、元组的类型推断](#3-%E6%95%B0%E7%BB%84%E5%85%83%E7%BB%84%E7%9A%84%E7%B1%BB%E5%9E%8B%E6%8E%A8%E6%96%AD)
  - [4). 对象的类型推断](#4-%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%B1%BB%E5%9E%8B%E6%8E%A8%E6%96%AD)
  - [5). 组合类型的声明](#5-%E7%BB%84%E5%90%88%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%A3%B0%E6%98%8E)
  - [6).any 类型的定义](#6any-%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%AE%9A%E4%B9%89)
  - [7). unknown 类型的定义](#7-unknown-%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%AE%9A%E4%B9%89)
  - [8). void 与 never 类型的定义](#8-void-%E4%B8%8E-never-%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%AE%9A%E4%B9%89)
- [2.TS 函数运用](#2ts-%E5%87%BD%E6%95%B0%E8%BF%90%E7%94%A8)
  - [1) 函数类型声明](#1-%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E)
  - [2) 函数参数类型定义](#2-%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89)
  - [3) 函数返回值类型定义](#3-%E5%87%BD%E6%95%B0%E8%BF%94%E5%9B%9E%E5%80%BC%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89)
- [3.枚举类](#3%E6%9E%9A%E4%B8%BE%E7%B1%BB)
- [4.断言](#4%E6%96%AD%E8%A8%80)
  - [1). 断言的定义](#1-%E6%96%AD%E8%A8%80%E7%9A%84%E5%AE%9A%E4%B9%89)
  - [2). as const 断言](#2-as-const-%E6%96%AD%E8%A8%80)
  - [3). 非空断言](#3-%E9%9D%9E%E7%A9%BA%E6%96%AD%E8%A8%80)
- [5.类与接口](#5%E7%B1%BB%E4%B8%8E%E6%8E%A5%E5%8F%A3)
- [6.泛型](#6%E6%B3%9B%E5%9E%8B)

---

## 1.类型校验模式

### 1). 类型控制 **(显式赋值)**

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

```
    function sum(a,b){
        return a + b
    };
    console.log(sum(1,3)) //4
```

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

### 2). 类型推断 **(隐式赋值)**

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

在遇到拥有不确定值的变量 a 、 b 后，TS 将它们都定义为了 `any` 类型 ， 即任意类型，这显然是不能满足我们想要数字相加的需求的。

所以在做类型校验的时候，尽量要使用 **`显式赋值`**

### 3). 数组、元组的类型推断

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

当添加非字符串、数字类型数据时报错：

```
const arr = [1,2,'ab'];
arr.push({a:1});
console.log(arr);   //Argument of type '{ a: number; }' is not assignable to parameter of type 'string | number'.
```

**`显式定义`** 一个由字符串，数字，布尔值混合数组

语法: `const(或者var、let) arr:(type|type)[] = []`

```
const arr:(string|number|boolean)[] = ['a',2,false] //此处没有涉及到泛型的定义方式
```

**`隐式定义`** 一个字符串、数字混合数组

**`元组`**
元组是确认了每一位元素的具体类型的数组

```
const arr:[string,string,number] = ['test','test',123]
```

---

### 4). 对象的类型推断

**`隐式定义`** 对象的类型

正常情况下：

```
const obj = {name:'tom',age:20};   // 隐式定义了obj的name与age的类型
obj.name = 'Bom';
obj.age = 30;
console.log(obj)   //{name:'Bom',age:30}
```

错误情况下：

```
 const obj = {name:'tom',age:20};   // 隐式定义了obj的name与age的类型
 obj.name = 20; // Type 'number' is not assignable to type 'string'.
 obj.age = true;    //Type 'boolean' is not assignable to type 'number'.
```

**`显式定义`** 对象的类型  
可以直接声明变量为对象  
也可以声明变量为对象的同时，声明变量属性的类型。

> **可以通过 `?:` 的方式声明一个属性为不必须的**

```
let obj:object = {} //限定obj为对象
let obj2:{name:string,age:number,url?:string}   //限定obj2为name是字符串,age是数字,url为不必须的字符串的对象
```

### 5). 组合类型的声明

定义一个多种类型的基础数据类型变量

```
let word:string|number;
word = 'test';
word = 12;  //都不报错
```

定义一个组合类型的数组

```
let arr:(string|number)[] = ['test',123];
console.log(arr) //[ 'test', 123 ]
```

使用泛型定义一个组合类型的数组

```
let arr:Array<string|number> = ['test',123]
```

---

### 6).any 类型的定义

`any` 类型的变量可以赋任意类型的值。

> `any` 类型 是其他类型的总集  
> 如果定义变量时什么类型都不给，默认为 `any` 类型, **这一情况应当被阻止**。
>
> > 在 tsconfig.json 中设定 `"noImplictAny" : true` 阻止隐式定义 `any` 类型

**`隐式定义`** 一个 any 类型的变量

```
let word;
word = true;
word = 123;
word = 'afds';
word = class{}
```

**`显式定义`** 一个 any 类型的变量

```
let word:any;
word = true;
word = 123;
word = 'afds';
word = class{}
```

定义一个可以传入任意类型数据的数组

```
let arr: any[] = [];
arr = ["asd", 123, true, [1, 2, 3], null, undefined];
console.log('arr',arr)  //arr [ 'asd', 123, true, [ 1, 2, 3 ], null, undefined ]
```

**注意！使用 any 类型将失去 ts 的严格类型保护**

```
class MyClass {
    constructor(){};
    get = () => 'test'
}
const test:any = new MyClass;
console.log(test.show());   //编辑器不会报错，运行时才会报错
```

而在这个案例中，我们会发现我们将 any 类型的 obj 赋值给 string 类型的 a 后，a 不会校验类型

```
let obj: any = 123
let a: string;

a = obj;
console.log('a',a)  // a 123
```

> 尽量不要使用 any 类型

---

### 7). unknown 类型的定义

`unknown` 类型 顾名思义就是不清楚的类型，但是它存在类型校验。  
当 `unknown` 类型的变量被直接赋值给其他有类型的变量时会报错。

这时候我们需要引入新的概念——断言 `as`

在这个案例中将 unknown 类型的 obj 断言为 string 类型

```
let obj: unknown = 123
let a: string;

a = obj as string;  //在这里将unknown类型的obj断言为string类型
console.log('a',a)  // a 123
```

> 我们得到了什么好处？  
> 1.能够定义一个任意类型的变量  
> 2.保留 ts 的严格类型校验

如果我们想借助 `unknown` 类型来破坏 ts 的类型校验也是可以的

只要将变量的类型先断言为 `unknown` 类型再断言为相应类型便可。

```
let str: string = '123';
let num: number = 123;
console.log(typeof num); //number
num = str as unknown as number;
console.log('num',num) //num 123
console.log(typeof num) //string
```

---

### 8). void 与 never 类型的定义

`void` 类型的值只能是 `undefined`

```
let a:void = undefined
```

`never` 类型不能拥有值

```
let b:never
```

> `void` 使用场景：  
> `void` 类型用于定义函数的返回值为 `undefined`

```
const foo = ():void => {
    const a:string = 'ab'
}   //该函数的返回值是undefined
```

> `never` 使用场景：  
> `never` 类型用于定义没有返回值的函数，如函数中使用 `throw` 的情况

```
const foo = ():never => {
    throw('error:whatever')
}
```

---

## 2.TS 函数运用

### 1) 函数类型声明

隐式声明一个函数

```
const foo = () => '我是一个函数'
```

显式声明一个函数

```
const foo:Function = () => '我是一个函数'
```

---

### 2) 函数参数类型定义

TS 的函数参数声明方式与 JS 基本一致

1.一般参数

```
const foo = (name:string,age:number) => {    return {name, age}
}
```

2.拥有默认值的参数  
表示如果该参数不传的话，有一个默认值

```
const foo = (name:string,age:number,money:number=200) => {return {name, age,money}
}
```

3.可选参数  
表示该参数可以选择不传

```
const foo = (name:string,age:number,money:number=200,address?:string) => {return {name, age,money, address}
}
```

> 应当注意的是：函数参数的定义顺序是：一般参数 -> 默认值参数 -> 可选参数

4.剩余参数  
表示除去已经定义的参数以外的参数

```
const foo = (name: string, ...args: number[]): object => {
  const sum: number = args.reduce((s, n) => s + n, 0);
  return { name, sum };
};

const count = foo('testCount', 1, 2, 3, 4, 5, 6);
console.log('count',count) // count { name: 'testCount', sum: 21 }
```

---

### 3) 函数返回值类型定义

应当知晓的是：函数要先执行才会有返回值  
所以函数返回值类型的定义要在 `括号` 后面

```
const foo = ():string => "string-foo"

function foo2():number{
    return 200
}
```

---

## 3.枚举类

枚举类型 `enum` 用于对同一类型的值做语义化的设置

举个例子：一个人的性别，数据库传过来可能是 `0` 或者 `1` ，而我们希望在设计接口的时候方便认知，我们可以借助枚举类型。

**枚举类型的值如果不设定默认值的话，是在枚举类中的索引(index)值**

```
enum GenderType{
    male,   //0
    female  //1
};
const tom = {
    name : 'Tom',
    gender:GenderType.male
};
console.log(tom);   //{ name: 'Tom', gender: 0 }
```

枚举类型允许设定默认值 , **从规范来讲，同一枚举类中的值的类型应当统一**

```
enum ScoreType{
    Tom = 80 ,
    Bom = 90
};
const testRes = {
    student : 'Tom',
    score : ScoreType.Tom
};
console.log(testRes) //{ student: 'Tom', score: 80 }
```

## 4.断言

### 1). 断言的定义

> 断言：用于 **决定** 一个多种类型的值具体为哪一个类型。

看一个函数：

这个函数可以返回两种类型 `string` `number` ， 由 arg 这个布尔值类型的变量来错做返回的是什么类型的值。

我们将函数的返回值存入变量 res 中，那么 res 的类型便是 `string | number`

这时我们可以为 res 赋 `string` 或者 `number` 类型的值

```
const foo = (arg:boolean):string|number => {
    return arg?'test':123
};
let res =  foo(true);
res = 'im string';
res = 200
```

但是我们不希望 res 的值是混合类型，这时候就可以使用断言

```
const foo = (arg:boolean):string|number => {
    return arg?'test':123
};
let res =  foo(true) as string;
res = 'im string';
res = 123 // 报错，number类型不能赋给string类型
```

### 2). as const 断言

`as const` 断言 ：

- 基本数据类型的变量使用时 ： 将变量的类型变为当前的值（值类型）
- 数组使用时：将数组变为元组，值只读
- 对象使用时：将每一项的类型变为 value 的类型，值只读

```
/*基本数据类型*/
let a = 12 as const ; // a的类型为 12
/*数组*/
let b:string = '123';
let c:number = 123;
let arr = [a,b,c] as const ; //arr[0]的类型为12，arr[1]的类型为string ，arr[2]的类型为number
/*对象*/
let obj = {
    num : a,
    string : b
} as const  //num,string的类型为只读的12和字符串
```

**`as const` 的 使用场景**

- 数组使用 as const 将数组变为只读数组

```
let a = 'string';
let b = 123;
let arr = [a,b] as const;
```

- 解构赋值时赋予类型

```
const foo = () => {
    let a = 'myfunction';
    let b = (x: number, y: number) => x + y;
    return [a,b] as const // 避免了解析出来的元素拥有混合类型
}
const [n, m] = foo();
console.log('m(20,40)',m(20,40)) //60
```

---

### 3). 非空断言

非空断言 ：用于表示变量的值一定不会是 `null`

使用方法：

- as 变量的类型
- 值的最后写 !

在不使用非空断言的情况下查询 dom 元素，我们都知道这个 dom 节点它不一定存在，所以他的类型是 `HTMLDivElement | null`

```
const li:HTMLDivElement = document.querySelector('.test')
//报错：不能将类型“HTMLDivElement | null”分配给类型“HTMLDivElement”。
```

**在确信该变量的值的类型下**，使用非空断言。

```
const li: HTMLDivElement = document.querySelector(".test") as HTMLDivElement;
```

或者

```
const li: HTMLDivElement = document.querySelector(".test")!;
```

---

## 5.类与接口

### 1). TS中使用类

一起来实现一个基础的类

```
class Person {
  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }
  name:string;
  age:number
};
```

使用类来创建两个实例对象，这两个实例的类型就是Person类

```
class Person {
  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }
  name:string;
  age:number
};
const François = new Person('François',22);
const Dency = new Person('Dency',23);
```

**重点：TS中可以将类作为类型赋予变量**

```
class Person {
  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }
  name:string;
  age:number
};
const François = new Person('François',22);
const Dency = new Person('Dency',23);
const personsArr:Person[] = [François,Dency];

console.log('François',François);   //François Person { name: 'François', age: 22 }
console.log('Dency',Dency);     //Dency Person { name: 'Dency', age: 23 }
console.log('personsArr',personsArr);
/*
personsArr [
  Person { name: 'François', age: 22 },
  Person { name: 'Dency', age: 23 }    
]
*/
```

### 2). 类的关键字 public , protected , private

先引入一个概念：权限等级

在类中的属性分为三个权限等级：`public` , `protected` , `private`

`public` ： 最低等级权限，允许当前属性在实例对象、子类、当前类中使用

`protected` ：第二权限等级，允许当前属性在子类、当前类中使用

`private` ：最高权限等级，只允许当前属性在当前类中使用

拥有 `protected` 关键字的属性被子类继承时 , 子类在有更改权限等级的需求下，只能将其转变为 `public`

来看个案例

```
class Person {
  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }
  protected name:string;
  public age:number;
  private showPerson(){
    return `名字：${this.name} ; 年龄：${this.age}`
  }
  protected getPerson(){
    console.log('showPerson()',this.showPerson())
  }
};

class User extends Person{
  constructor(name:string,age:number){
    super(name,age);
    this.name = name;
  };
  //降级处理，允许类外部使用name变量
  public name:string;
  public show(){
    //方法在实例原型链上继承，属性由类继承
    this.getPerson()
  }
}

const Dency = new User('Dency',23);

Dency.show()    //showPerson() 名字：Dency ; 年龄：23
```

### 3). 关键字 static 

static 关键字指该属性只能通过类来调用  
static 的作用：    
- static 关键词将属性存入类中，避免了实例存储相同属性浪费性能的问题。  

**static关键字在public、protected、private关键字的后面**

```
class Person {
  static type:string = 'Person';
  private static classID:string = '111';

  static show(){
    console.log(Person.classID)
  }
}

console.log(Person.type); //Person
Person.show(); //111
```

---

### 4). 类的关键字 readonly

readonly 关键字指该属性是只读的，不可修改

```
class Person {
  public constructor(name: string) {
    this.name = name
  };
  public readonly name: string;
}

const Tom = new Person('Tom')
Tom.name = "Bom"  // 报错，Person类的name属性只读
```

但是使用readonly关键字的属性在构建函数中初始化时，可以修改
```
class Axios {
  public constructor(path?:string){
    this.path = path || this.path
  };
  protected path:string = 'https://www.github.com'
  public showApi(api:string){
    return `${this.path}/${api}`
  }
}

const users = new Axios();
const account = new Axios('www.baidu.com');

//users.showApi('users') https://www.github.com/users
console.log("users.showApi('users')",users.showApi('users'))
//account.showApi('account') www.baidu.com/account
console.log("account.showApi('account')",account.showApi('account'))
```

---

### 5). TS类中的构造函数

类的构造函数的作用是 ： 初始化类的实例的属性

来实现如下一个案例

我们先写一个类Person，在类中的构造函数中初始化属性name

将传入的name赋给实例的name属性
```
class Person {
  constructor(name:string){
    this.name = name
  }
  public name:string
}
```

接着，我们再定义一个可选参数，由于可选参数的返回值是 type|undefined 所以要再初始化的时候提供undefined的对应值

这样一来我们就为Person类的job属性提供了一个默认值
```
class Person {
  constructor(name:string,job?:string){
    this.name = name;
    this.job = job || 'student'
  }
  public name:string
  public job:string
}
```

我们想看一下实例的情况，在类里写一个函数来打印实例

```
class Person {
  constructor(name:string,job?:string){
    this.name = name;
    this.job = job || 'student'
  }
  public name:string;
  public job:string;
  public show(){
    console.log('this',this)
  }
}

const Tom = new Person('Tom');

Tom.show()  // this Person { name: 'Tom', job: 'student' }
```

### 6). 单例模式

单例模式：指一个类只能生成单个实例

假设我们有一个class Axios
1.将构造函数设为private使外部不能 new Axios  
2.建立一个private static属性，该属性的类型为Axios | null ，用于标识是否建立过Axios的实例  
3.建立static属性函数   

```
class Axios {
  private static query: Axios | null = null
  private constructor(){
    console.log('constructor')
  }
  static make():Axios{
    if(Axios.query == null){
      Axios.query = new Axios()
    }
    return Axios.query
  }
}

const query = Axios.make();
const query2 = Axios.make();

```
---

### 7). 访问器get与set - 计算属性

在类中，我们可以借助访问器 get 与 set 来作为计算属性，控制属性的

```
class User{
constructor(name: string) {
  this._name = name
}
private _name: string
public get name(): string {
  return this._name
}
public set name(name: string){
    this._name = name
}
}

const Tom = new User("Tom");
Tom.name = 'Bom';
console.log('Tom',Tom) //Tom User { _name: 'Bom' }
```

---

### 8). abstract抽象类

抽象类的定义：为子类提供业务逻辑以及规范的类，不能被实例化

抽象类中所定义的抽象属性**不会被继承**，但会形成规范，强制要求继承该类的子类同样拥有该属性的定义

**抽象类不能实例化**

**抽象属性只能在抽象类中定义**

```
//将类包进块级作用域，因为DOM有Animation类
{
  abstract class Animation {
    abstract name:string
    abstract move():void
    protected getPosition(x: number, y: number): number[] {
      return [x, y];
    }
  }

  class Tank extends Animation {
    name: string = 'enemy';
    public move(): void {
      console.log(`${this.name}坦克移动`);
    }
  }

  class Player extends Animation {
    name:string = 'player'
    public move(): void {
      console.log(`${this.name}坦克移动`);
    }
  }
}

```

### 9.) interface 接口

接口的定义：只提供规范的类

接口的使用：在类的后部添加关键字 implements 然后写上接口的名字

如  `class Person implements PersonInterface{}`

```
{
  interface AnimationInterface {
    name: string;
    move(): void;
  }

  abstract class Animation {
    protected getPosition(x: number, y: number): number[] {
      return [x, y];
    }
  }

  class Tank extends Animation implements AnimationInterface{
    name: string = "enemy";
    public move(): void {
      console.log(`${this.name}坦克移动`);
    }
  }

  class Player extends Animation implements AnimationInterface {
    name: string = "player";
    public move(): void {
      console.log(`${this.name}坦克移动`);
    }
  }
}

```

来看看interface如何对Object约束

在下面的案例中，我们创建了一个 `UserInterface`接口，并将对象 `Tom` 的类型设定为 `UserInterface` ， 对象`Tom` 的属性就被约束了，必须要满足 `UserInterface` 的规定才能够编译

**如果想要设定可选属性：`age?:number` 在冒号前加`？`即可**

**如果允许该类有额外属性：`[key:string]: any`**
```
interface UserInterface{
  name : string
  age : number
  info():string
}

const Tom:UserInterface = {
  name : 'Tom',
  age : 20,
  info : function(){
    return `${this.name},${this.age}`
  }
}

console.log('Tom.info()',Tom.info())  //Tom.info() Tom,20
```

---

### 10). 接口的继承



---

## 6.泛型


