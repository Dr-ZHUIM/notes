const debounce = (fn:Function,delay:number):any => {
    let timeoutId:number|undefined;
    return function(...args:any[]){
        if(timeoutId)clearTimeout(timeoutId);
        timeoutId = setTimeout(() =>{
            fn(...args)
        },delay)
    }
}

const throttle = (fn:Function,delay:number) => {
    let last:number = 0;
    return (...args:any[]) => {
        const now = new Date() as unknown as number;
        if (now - last < delay){
            return;
        };
        last = now as unknown as number;
        return fn(...args)
    }
}

function _debounce (func:Function,delay:number){
    let timeoutId:number|undefined;
    return function(...args:any[]){
        if(timeoutId)clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args)
        },delay)
    }
}

function _throttle(func:Function,delay:number){
    let timeout:number|null;
    return function() {
        const context = this;
        let args = arguments;
        if (!timeout){
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context, args);
            }, delay);
        }
    }
}

export {debounce,throttle}