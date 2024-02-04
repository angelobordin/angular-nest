"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ErrorPersonNotExists", {
    enumerable: true,
    get: function() {
        return ErrorPersonNotExists;
    }
});
let ErrorPersonNotExists = class ErrorPersonNotExists extends Error {
    constructor(message){
        super(message);
    }
};
