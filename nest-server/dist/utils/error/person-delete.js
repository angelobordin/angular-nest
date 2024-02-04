"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ErrorPersonDelete", {
    enumerable: true,
    get: function() {
        return ErrorPersonDelete;
    }
});
let ErrorPersonDelete = class ErrorPersonDelete extends Error {
    constructor(message){
        super(message);
    }
};
