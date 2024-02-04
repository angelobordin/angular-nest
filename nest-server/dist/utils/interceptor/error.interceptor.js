"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ErrorsInterceptor", {
    enumerable: true,
    get: function() {
        return ErrorsInterceptor;
    }
});
const _common = require("@nestjs/common");
const _client = require("@prisma/client");
const _operators = require("rxjs/operators");
const _response = require("../functions/response");
const _persondelete = require("../error/person-delete");
const _personnotexists = require("../error/person-not-exists");
const _personparamsnotfound = require("../error/person-params-not-found");
const _personpermissiondenied = require("../error/person-permission-denied");
const _personregister = require("../error/person-register");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ErrorsInterceptor = class ErrorsInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, _operators.catchError)((err)=>{
            let res;
            if (err instanceof _client.Prisma.PrismaClientKnownRequestError || err instanceof _client.Prisma.PrismaClientInitializationError || err instanceof _client.Prisma.PrismaClientUnknownRequestError || err instanceof _client.Prisma.PrismaClientRustPanicError || err instanceof _client.Prisma.PrismaClientValidationError) {
                res = {
                    status: 400,
                    error: true,
                    message: `Erro no prisma! v:${err.clientVersion}`,
                    data: err
                };
            } else if (err instanceof _personnotexists.ErrorPersonNotExists) {
                res = {
                    status: 404,
                    error: true,
                    message: err.message,
                    data: err
                };
            } else if (err instanceof _personregister.ErrorPersonAlreadyExists) {
                res = {
                    status: 400,
                    error: true,
                    message: err.message,
                    data: err
                };
            } else if (err instanceof _persondelete.ErrorPersonDelete) {
                res = {
                    status: 400,
                    error: true,
                    message: err.message,
                    data: err
                };
            } else if (err instanceof _personparamsnotfound.ErrorPersonParamsNotFound) {
                res = {
                    status: 400,
                    error: true,
                    message: err.message,
                    data: err
                };
            } else if (err instanceof _personpermissiondenied.ErrorPersonPermissionDenied) {
                res = {
                    status: 401,
                    error: true,
                    message: 'Usuário não possui permissão necessária para executar esta ação!',
                    data: err
                };
            } else {
                res = {
                    status: 500,
                    error: true,
                    message: 'Erro interno no servidor!',
                    data: err
                };
            }
            throw new _common.BadGatewayException((0, _response.errorReponse)(res));
        }));
    }
};
ErrorsInterceptor = _ts_decorate([
    (0, _common.Injectable)()
], ErrorsInterceptor);
