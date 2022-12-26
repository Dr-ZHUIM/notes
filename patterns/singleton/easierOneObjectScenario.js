let counter = 0;
const counterObj = {
    increment(){
        return ++counter;
    },
    decrement(){
        return --counter;
    }
}
Object.freeze(counterObj);
export default counterObj;