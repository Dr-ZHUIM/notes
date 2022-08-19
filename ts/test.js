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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const propDecorator = (...args) => {
    console.log('args', args);
};
const paramDecorator = (...args) => {
    console.log('args', args);
};
class User {
    name;
    static age = 20;
    show(see, go, talk) {
    }
}
__decorate([
    propDecorator,
    __metadata("design:type", Object)
], User.prototype, "name", void 0);
__decorate([
    __param(2, paramDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", void 0)
], User.prototype, "show", null);
__decorate([
    propDecorator,
    __metadata("design:type", Number)
], User, "age", void 0);
