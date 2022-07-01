"use strict";
var Axios = /** @class */ (function () {
    function Axios() {
        console.log('constructor');
    }
    Axios.make = function () {
        if (Axios.query == null) {
            Axios.query = new Axios();
        }
        return Axios.query;
    };
    Axios.query = null;
    return Axios;
}());
var query = Axios.make();
var query2 = Axios.make();
