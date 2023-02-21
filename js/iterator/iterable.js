const myIterableObj = {
    *[Symbol.iterator](){
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
    }
}

for (const value of myIterableObj) {
    console.log(value);
  }

  console.log('myIterableObj',myIterableObj)