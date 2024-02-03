"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    errorReponse: function() {
        return errorReponse;
    },
    successReponse: function() {
        return successReponse;
    }
});
function successReponse(data, message = '') {
    return {
        status: 200,
        error: false,
        message,
        data
    };
}
function errorReponse(err) {
    return {
        status: 400,
        error: true,
        message: err.message,
        data: err
    };
}
