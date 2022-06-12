const arr = [1, 2, 3, 3, 1, 4, 5, 5, 8, 6, 2, 1];
const riddingUnbalance = (arr) => {
    let newArr = arr.reduce((pre, curr) => {
        if (pre.includes(curr) === false) pre.push(curr);
        return pre
    }, []);
    newArr.sort((pre, curr) => {
        return pre - curr
    });
    return newArr
};
console.log(riddingUnbalance(arr))  //1,2,3,4,5,6,8