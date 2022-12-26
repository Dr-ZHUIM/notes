let counter = 0;

class Counter {
    getinstance(){
        return this;
    }
    getCount(){
        return counter;
    }
    increment(){
        return ++counter;
    }
    decrement(){
        return --counter;
    }
}

const instance1 = new Counter()
const instance2 = new Counter()