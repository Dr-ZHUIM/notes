const mySet = new Set();

mySet.add({a:2});
mySet.add({a:3});

mySet.forEach(obj => console.log(obj.a));
console.log(mySet.entries())