const debounce = (fn:Function,delay:number,options?:any):any => {
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

export {debounce,throttle}