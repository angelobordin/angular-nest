"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ErrorPersonPermissionDenied", {
    enumerable: true,
    get: function() {
        return ErrorPersonPermissionDenied;
    }
});
let ErrorPersonPermissionDenied = class ErrorPersonPermissionDenied extends Error {
    constructor(message){
        super(message);
    }
};
