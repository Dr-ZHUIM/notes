/**
 * Why we use iterator?
 * 1. iterators can express sequences of unlimited size
 */

function makeRangeIterator(start = 0,end = Infinity,step = 1){
    let nextIndex = start;
    let iteratorCount = 0;
    const rangeIterator = {
        next(){
            let result;
            if (nextIndex < end){
                nextIndex += step;
                iteratorCount++;
                result = {
                    value: nextIndex,
                    done: false
                };
                return result;
            }
            return {value:iteratorCount,done:true}
        }
    };
    return rangeIterator;
};

const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while(!result.done){
    console.log(result.value);
    result = it.next();
};
console.log("Iterated over sequence of size: ", result); 