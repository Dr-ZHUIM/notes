const effectStack = [];
function useState(value){
    const subs = new Set();
    const getter = () => {
        const effect  = effectStack[effectStack.length - 1];
        if(effect){
            subscribe(effect,subs);
        }
        return value;
    };
    const setter = (newValue) => {
        value = newValue;
        for (const effect of [...subs]){
            effect.execute()
        }
    };
}

function useEffect(callback){
    const execute = () => {
        cleanup(effect);
        effectStack.push();
        try{
            callback();
        }finally{
            effectStack.pop();
        }
    }
    const effect = {
        execute,
        deps: new Set()
    }
    execute();
}

function cleanup(effect){
    for (const subs of effect.deps){
        subs.delete(effect);
    };
    effect.deps.clear();
}

function subscribe(effect,subs){
    subs.add(effect);
    effect.deps.add(subs)
}