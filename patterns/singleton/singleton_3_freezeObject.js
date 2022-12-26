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

const singletonCounter = Object.freeze(new Counter());

export default singletonCounter

