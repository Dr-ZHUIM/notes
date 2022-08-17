"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ErrorDecorator = function (title) {
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            try {
                method();
            }
            catch (err) {
                console.log("%c".concat(title), 'color:green;font-size:20px');
                console.log("%c".concat(err.message), 'color:red;font-size:16px');
            }
        };
    };
};
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.find = function () {
        throw new Error('您查找的用户不存在！');
    };
    User.prototype.create = function () {
        throw new Error('创建用户数据不完整！');
    };
    __decorate([
        ErrorDecorator('查找用户报错！'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "find", null);
    __decorate([
        ErrorDecorator('创建用户报错！'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "create", null);
    return User;
}());
new User().find();
new User().create();
