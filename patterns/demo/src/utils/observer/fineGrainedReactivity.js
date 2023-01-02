/**
 * @Goal Removes the update dependency of React
*/

//困难点1: Set 类型 用于存储不可重复的值的数据结构
//困难点2: try finally 关键字   用于跳过异常
//困难点3: for(const effect of [...subs])   数组for遍历循环

//问题1: 为什么React Hooks不使用细粒度更新?
/**
 * 个人认为: 使用响应式更新会导致react hooks触发时间不可控
 * 二个方面的不可控: 不能够自主设置某个值的监听;不受react hooks的"不允许在条件语句中使用的限制"
 */
//问题2: Vue3是如何使用proxy来隐藏掉getter这一函数的?
const fineGrainedReactivity = {useState};

const effectStack = [];

function useState(value){
    // 保存订阅该state变化的effect
    const subs = new Set();
    const getter = () => {
        //获取上下文的effect
        const effect = effectStack[effectStack.length - 1];
        if (effect){
            subscribe(effect, subs)
        }
        return value;
    }
    const setter = (newValue) => {
        value = newValue;
        //通知所有的订阅state变化的effect执行
        for(const effect of [...subs]){
            effect.execute();
        }
    };
    return [getter,setter];
}

function useEffect(callback){
    const execute = () => {
        //重置依赖
        cleanup(effect);
        //将当前的effect推入栈顶
        effectStack.push(effect);
        try{
            callback()
        }finally{
            effectStack.pop();
        }
    };
    const effect = {
        execute,
        deps: new Set()
    };
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
    effect.deps.add(subs);
}

export default fineGrainedReactivity;