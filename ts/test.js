"use strict";
var User;
(function (User) {
    User.name = 'Tom';
    let Member;
    (function (Member) {
        Member.name = 'Bom';
    })(Member = User.Member || (User.Member = {}));
})(User || (User = {}));
console.log(User.Member.name); //Bom
