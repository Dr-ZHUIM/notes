var User;
(function (User) {
    User.name = 'Tom';
    var Member;
    (function (Member) {
        Member.name = 'Bom';
    })(Member = User.Member || (User.Member = {}));
})(User || (User = {}));
console.log(User.Member.name); //Bom
/// <reference path="test.ts" />
var main = function () {
    var arr = [1, 2, 3, 4, 5];
    arr.map(function (ele) {
        console.log('ele', ele);
    });
};
