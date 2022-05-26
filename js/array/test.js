let arr = [{
        name: 'iphone',
        price: 6000
    },
    {
        name: 'ipad',
        price: 4999
    },
    {
        name: 'mac',
        price: 16999
    },
];
arr = arr.sort((prev, curr) => {
    return curr.price - prev.price
});
console.log(arr)
// [{ name: 'mac', price: 16999 },{ name: 'iphone', price: 6000 },{ name: 'ipad', price: 4999 }]