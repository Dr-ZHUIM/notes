let a = ()=>{
  console.log(11);
};

console.log(typeof a);
console.log(a instanceof Function);
console.log(Object.prototype.toString.call(a));
