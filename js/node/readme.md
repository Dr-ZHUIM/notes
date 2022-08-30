# Node.js

本文档将根据Node.js官方文档来粗略地介绍node.js的常用知识点。

## 1. Node的特性

异步I/O , 单线程 ， 非阻塞

## 2. Node模块的导出(expose a module)

### 1. `module.exports`

该方法与 ESModule 中的 `export default` 类似 , 被其导出的对象就是 `require` 函数返回的值。

```
// car.js
const car = {
  brand: 'Ford',
  model: 'Fiesta',
};

module.exports = car;

// index.js
const car = require('./car');

```

### 2. `exports.xxx`

该方法与 ESModule 中的 `export` 类似 ， 被其导出的对象就是 `require` 函数返回的值的属性。

```
exports.car = {
  brand: 'Ford',
  model: 'Fiesta',
};
```

### 3. `require` 函数始终指向 `module.exports` 的对象

以下这个案例中的 `exports.car` 因为`require`函数指向了 `module.exports的对象`  , `exports.car` 的值不可调取， 成了undefined。

```
// car.js
exports.car = {
  brand: 'Ford',
  model: 'Fiesta',
};

module.exports = {
  brand: 'Tesla',
  model: 'Model S',
};

// app.js
const tesla = require('./car');
const ford = require('./car').car;

console.log(tesla, ford);   //{ brand: 'Tesla', model: 'Model S' } undefined
```
---

## Node.js 处理错误

### 抛出错误的方式

我们使用 `throw` 关键字来抛出错误

### 错误的数值类型

在node.js中，我们抛出的一定是一个 `error对象`

### 处理错误的方式

我们借助 `Promise` 的 `catch` 方法来异步地获取error值

### 监听没有抛出的错误
在我们有遗漏的错误没有抛出时，Js将崩溃，为了不出现这样的情况，我们需要监听 `uncaughtException` 这个事件

```
process.on('uncaughtException', err => {
  console.error('There was an uncaught error', err);
  process.exit(1); // mandatory (as per the Node.js docs)
});

```