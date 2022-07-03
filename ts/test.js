"use strict";
var User = /** @class */ (function () {
    function User(name) {
        this._name = name;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var Tom = new User("Tom");
Tom.name = 'Bom';
console.log('Tom', Tom);
