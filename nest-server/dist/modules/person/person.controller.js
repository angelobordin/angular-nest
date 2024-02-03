"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PersonController", {
    enumerable: true,
    get: function() {
        return PersonController;
    }
});
const _common = require("@nestjs/common");
const _personservice = require("./person.service");
const _createpersondto = require("./dto/create-person.dto");
const _updatepersondto = require("./dto/update-person.dto");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let PersonController = class PersonController {
    registerPerson(createPersonDto) {
        return this.personService.registerPerson(createPersonDto);
    }
    getPersonList() {
        return this.personService.getPersonList();
    }
    getPersonById(id) {
        return this.personService.getPersonById(parseInt(id));
    }
    updatePersonById(id, updatePersonDto) {
        return this.personService.updatePersonById(parseInt(id), updatePersonDto);
    }
    deletePersonById(id) {
        return this.personService.deletePersonById(+id);
    }
    constructor(personService){
        this.personService = personService;
    }
};
_ts_decorate([
    (0, _common.Post)(),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createpersondto.CreatePersonDto === "undefined" ? Object : _createpersondto.CreatePersonDto
    ]),
    _ts_metadata("design:returntype", void 0)
], PersonController.prototype, "registerPerson", null);
_ts_decorate([
    (0, _common.Get)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], PersonController.prototype, "getPersonList", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], PersonController.prototype, "getPersonById", null);
_ts_decorate([
    (0, _common.Patch)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _updatepersondto.UpdatePersonDto === "undefined" ? Object : _updatepersondto.UpdatePersonDto
    ]),
    _ts_metadata("design:returntype", void 0)
], PersonController.prototype, "updatePersonById", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], PersonController.prototype, "deletePersonById", null);
PersonController = _ts_decorate([
    (0, _common.Controller)('person'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _personservice.PersonService === "undefined" ? Object : _personservice.PersonService
    ])
], PersonController);
