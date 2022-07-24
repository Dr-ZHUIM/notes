"use strict";
var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    Collection.prototype.push = function () {
        var _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, items);
    };
    return Collection;
}());
var numberCollection = new Collection();
numberCollection.push(1, 2, 3, 4, 5);
console.log(numberCollection.data);
