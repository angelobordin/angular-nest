"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ErrorPersonAlreadyExists", {
    enumerable: true,
    get: function() {
        return ErrorPersonAlreadyExists;
    }
});
let ErrorPersonAlreadyExists = class ErrorPersonAlreadyExists extends Error {
    constructor(message){
        super(message);
    }
};
