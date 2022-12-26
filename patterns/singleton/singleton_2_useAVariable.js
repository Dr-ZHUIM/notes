let counter = 0;
let instance;

class Counter {
    constructor(){
        if(instance){
            throw "You can't create another one instance!"
        }
        instance = this;
    }
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