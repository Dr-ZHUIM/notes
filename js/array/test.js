let arr = [1,2,3,4,{a:1,b:2}];
const result = arr.findIndex(item=>{
    return item.a == 1
});
console.log(result) //{a:1,b:2}