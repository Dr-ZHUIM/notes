"use strict";
var moveDecorator = function (target) {
    target.prototype.getPosition = function () {
        return { x: 100, y: 200 };
    };
};
var Tank = /** @class */ (function () {
    function Tank() {
    }
    Tank.prototype.getPosition = function () { };
    return Tank;
}());
var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.getPosition = function () { };
    return Player;
}());
moveDecorator(Tank);
moveDecorator(Player);
var t = new Tank();
console.log('t.getPosition()', t.getPosition());
var p = new Player();
console.log('p.getPosition()', p.getPosition());
