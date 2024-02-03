"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PersonModule", {
    enumerable: true,
    get: function() {
        return PersonModule;
    }
});
const _common = require("@nestjs/common");
const _personservice = require("./person.service");
const _personcontroller = require("./person.controller");
const _nestjsprisma = require("nestjs-prisma");
const _personrepository = require("./person.repository");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let PersonModule = class PersonModule {
};
PersonModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _nestjsprisma.PrismaModule
        ],
        controllers: [
            _personcontroller.PersonController
        ],
        providers: [
            _personservice.PersonService,
            _personrepository.PersonRepository
        ]
    })
], PersonModule);
