var obj = { name: 'tom', age: 20 }; // 隐式定义了obj的name与age的类型
obj.name = 20;
obj.age = true;
console.log(obj); //{name:'Bom',age:30}
