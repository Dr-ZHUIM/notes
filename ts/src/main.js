"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("./test");
const main = (a) => {
    const arr = [1, 2, 3, 4, 5];
    arr.map(ele => {
        console.log('ele', ele);
    });
    console.log(a);
};
const a = test_1.User.name;
main(a);
