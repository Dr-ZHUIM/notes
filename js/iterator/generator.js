function* makeRangeIterator(start=0,end=Infinity,step=1){
    let iteratorCount = 0;
    for(let i = start; i < end; i += step){
        iteratorCount++;
        yield i;
    };
    return iteratorCount;
}

function* makeIterator() {
    yield 1;
    yield 2;
  }

const it = makeRangeIterator(1,10,2);
const it2 = makeIterator();

let result = it.next();
const result2 = it2.next();

while(result.value < 10){
    console.log(result.value);
    result = it.next();
}