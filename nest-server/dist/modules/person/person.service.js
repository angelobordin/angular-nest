"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PersonService", {
    enumerable: true,
    get: function() {
        return PersonService;
    }
});
const _common = require("@nestjs/common");
const _personrepository = require("./person.repository");
const _response = require("../../utils/functions/response");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PersonService = class PersonService {
    async registerPerson(createPersonDto) {
        const result = await this.repository.registerPerson(createPersonDto);
        return (0, _response.successReponse)(result, 'Registro cadastrado com sucesso');
    }
    async getPersonList() {
        const result = await this.repository.getPersonList();
        return (0, _response.successReponse)(result);
    }
    async getPersonById(id) {
        const result = await this.repository.getPersonById(id);
        return (0, _response.successReponse)(result);
    }
    async updatePersonById(id, updatePersonDto) {
        const result = await this.repository.updatePersonById(id, updatePersonDto);
        return (0, _response.successReponse)(result, 'Registro atualizado com sucesso!');
    }
    async deletePersonById(id) {
        const result = await this.repository.deletePersonById(id);
        return (0, _response.successReponse)(result, 'Registro deletado com sucesso!');
    }
    constructor(repository){
        this.repository = repository;
    }
};
PersonService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _personrepository.PersonRepository === "undefined" ? Object : _personrepository.PersonRepository
    ])
], PersonService);
