"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ErrorPersonParamsNotFound", {
    enumerable: true,
    get: function() {
        return ErrorPersonParamsNotFound;
    }
});
let ErrorPersonParamsNotFound = class ErrorPersonParamsNotFound extends Error {
    constructor(message){
        super(message);
    }
};
