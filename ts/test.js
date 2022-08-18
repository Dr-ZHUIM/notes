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
var UserDecorator = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var descriptor = args[2];
    var method = descriptor.value;
    descriptor.value = function () {
        if (User.identity === Identity.admin) {
            console.log("admin");
        }
        else if (User.identity === Identity.user) {
            console.log("user");
        }
        else if (User.identity === Identity.unlogin) {
            console.log("unlogin");
        }
        else {
            method();
        }
    };
};
var Identity;
(function (Identity) {
    Identity[Identity["user"] = 0] = "user";
    Identity[Identity["admin"] = 1] = "admin";
    Identity[Identity["unlogin"] = 2] = "unlogin";
})(Identity || (Identity = {}));
var UserInterface = /** @class */ (function () {
    function UserInterface(name, identity) {
        this.name = name;
        this.identity = identity;
    }
    ;
    UserInterface.prototype.showIdentity = function () {
        console.log("no identity");
    };
    UserInterface.prototype.showMe = function () {
        console.log("show me ");
    };
    __decorate([
        UserDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserInterface.prototype, "showIdentity", null);
    __decorate([
        UserDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserInterface.prototype, "showMe", null);
    return UserInterface;
}());
var User = new UserInterface("Tom", Identity.unlogin);
