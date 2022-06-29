var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.showPerson = function () {
        return "\u540D\u5B57\uFF1A".concat(this.name, " ; \u5E74\u9F84\uFF1A").concat(this.age);
    };
    Person.prototype.getPerson = function () {
        console.log('showPerson()', this.showPerson());
    };
    return Person;
}());
;
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        return _this;
    }
    ;
    User.prototype.show = function () {
        //方法在实例原型链上继承，属性由类继承
        this.getPerson();
    };
    return User;
}(Person));
var Dency = new User('Dency', 23);
Dency.show();
