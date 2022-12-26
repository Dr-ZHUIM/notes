"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User;
(function (User) {
    User.name = 'Tom';
    let Member;
    (function (Member) {
        Member.name = 'Bom';
    })(Member = User.Member || (User.Member = {}));
})(User = exports.User || (exports.User = {}));
const foo = (factor, ...nums) => {
    return nums.map(n => factor * n);
};
const foo2 = (param) => {
    if (typeof param === 'string') {
        return param;
    }
    else if (typeof param === 'number') {
        return param + 10;
    }
    else {
        param;
    }
};
let arr = foo(10, 2, 3, 4, 5);
console.log('arr', arr);
