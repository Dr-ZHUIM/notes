function foo (){
  let a = 1;
  return function inner(){
    a++;
    return a;
  }
}

let fooValueA;
let fooValueB;

const inner1 = foo();
const inner2 = foo();

fooValueA = inner1();
fooValueA = inner1();
fooValueA = inner1();
fooValueA = inner1();

console.log('fooValueA',fooValueA);

fooValueB = inner2();
fooValueB = inner2();
fooValueB = inner2();

console.log('fooValueB',fooValueB)