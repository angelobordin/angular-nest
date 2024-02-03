"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PersonRepository", {
    enumerable: true,
    get: function() {
        return PersonRepository;
    }
});
const _common = require("@nestjs/common");
const _nestjsprisma = require("nestjs-prisma");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PersonRepository = class PersonRepository {
    async registerPerson(createPersonDto) {
        return await this.prismaService.person.create({
            data: createPersonDto
        });
    }
    async getPersonList() {
        return await this.prismaService.person.findMany();
    }
    async getPersonById(id) {
        return await this.prismaService.person.findUnique({
            where: {
                id
            }
        });
    }
    async updatePersonById(id, updatePersonDto) {
        return await this.prismaService.person.update({
            where: {
                id
            },
            data: updatePersonDto
        });
    }
    async deletePersonById(id) {
        return await this.prismaService.person.delete({
            where: {
                id
            }
        });
    }
    constructor(prismaService){
        this.prismaService = prismaService;
    }
};
PersonRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjsprisma.PrismaService === "undefined" ? Object : _nestjsprisma.PrismaService
    ])
], PersonRepository);
