export namespace User{
  export let name:string = 'Tom'
  export namespace Member{
    export let name:string = 'Bom'
  }
}

const foo = (factor:number,...nums:number[]) => {
  return nums.map(n => factor * n)
}

const foo2 = (param:string | number) => {
  if( typeof param === 'string'){
    return param
  }else if( typeof param === 'number'){
    return param + 10
  }else{
    param;
  }
}

let arr = foo(10,2,3,4,5);

console.log('arr',arr)