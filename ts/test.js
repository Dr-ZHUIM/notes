"use strict";
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
{
    var Animation_1 = /** @class */ (function () {
        function Animation() {
        }
        Animation.prototype.getPosition = function (x, y) {
            return [x, y];
        };
        return Animation;
    }());
    var Tank = /** @class */ (function (_super) {
        __extends(Tank, _super);
        function Tank() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "enemy";
            return _this;
        }
        Tank.prototype.move = function () {
            console.log(this.name + "\u5766\u514B\u79FB\u52A8");
        };
        return Tank;
    }(Animation_1));
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "player";
            return _this;
        }
        Player.prototype.move = function () {
            console.log(this.name + "\u5766\u514B\u79FB\u52A8");
        };
        return Player;
    }(Animation_1));
}
