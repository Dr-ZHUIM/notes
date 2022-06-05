let arr = [{
        title: 'aaa',
        id: 1
    },
    {
        title: 'bbb',
        id: 2
    },
    {
        title: 'ccc',
        id: 3
    }
];
for (const key in arr) {
    arr[key].title = 'new ' + arr[key].title
};
console.log(arr);