//手撕map方法
Array.prototype._map = function (callback,thisValue) {
  if (typeof callback !== 'function') throw 'callback must be a function';
  const array = this;
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    //call的第一个参数可以为当前的函数绑定this
    newArray.push(callback.call(thisValue, array[i], i, array));
  };
  return newArray;
}

Array.prototype._map2 = function (callback,thisArg) {
  if (!callback || !callback instanceof Function) return this;
  const result = [];
  const length = this.length;
  const currentArray = this;
  for (let i = 0; i < length; i++) {
    result[i] = callback.call(thisArg,currentArray[i],i,currentArray)
  };
  return result;
}


// map 测试用例
// let arr = [{name:'Tom',age:20},{name:'Jamie',age:22},{name:'Donkie',age:25}];
// let arrThis = {
//   gender : ['male','female']
// }
// let arr2 = arr._map(function(item){
//   item.gender = this.gender[0];
//   return item
// },arrThis);

// console.log(arr2);