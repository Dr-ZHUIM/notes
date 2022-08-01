"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//声明一个装饰器工厂
var MessageDecoratorFactory = function (type) {
    switch (type) {
        case 'login':
            {
                return function (target) {
                    target.prototype.message = function () {
                        console.log('login ---- show message');
                    };
                };
            }
            ;
        case 'store':
            {
                return function (target) {
                    target.prototype.message = function () {
                        console.log('store ---- show message');
                    };
                };
            }
            ;
        default: {
            return function (target) {
                target.prototype.message = function () {
                    console.log('null ---- show message');
                };
            };
        }
    }
};
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.message = function () { };
    LoginController.prototype.login = function () {
        this.message();
    };
    LoginController = __decorate([
        MessageDecoratorFactory('login')
    ], LoginController);
    return LoginController;
}());
var Store = /** @class */ (function () {
    function Store() {
    }
    Store.prototype.message = function () { };
    Store.prototype.getStore = function () {
        this.message();
    };
    Store = __decorate([
        MessageDecoratorFactory('store')
    ], Store);
    return Store;
}());
new LoginController().login();
new Store().getStore();
