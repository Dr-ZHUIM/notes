export default function Pipeline (...middlewares) {
    const stack = middlewares;

    const push  = (...middlewares) => {
        stack.push(...middlewares)
    } 

    const execute =  (context) => {
        let prevIndex = 1;
        const runner =  (index) => {
            if (index === prevIndex){
                throw new Error('next() called multiple times')
            }
            prevIndex = index;
            const middleware = stack[index];
            if (middleware) middleware(context, () => runner(index + 1))
        }
        runner(0)
    }
    return {push,execute}
}