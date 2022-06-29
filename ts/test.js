"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    Person.prototype.showPerson = function () {
        return this.name + "\u7684\u5E74\u9F84\u662F" + this.age + "\u5C81";
    };
    return Person;
}());
var Tom = new Person("Tom", 22);
var Bom = new Person("Bom", 24);
var Jack = new Person("Jack", 26);
var persons = [Tom, Bom, Jack];
