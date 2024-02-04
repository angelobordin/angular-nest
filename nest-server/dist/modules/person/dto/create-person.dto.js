"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreatePersonDto", {
    enumerable: true,
    get: function() {
        return CreatePersonDto;
    }
});
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CreatePersonDto = class CreatePersonDto {
};
_ts_decorate([
    (0, _classtransformer.Exclude)(),
    _ts_metadata("design:type", String)
], CreatePersonDto.prototype, "id", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(11),
    _ts_metadata("design:type", String)
], CreatePersonDto.prototype, "cpf", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(60),
    _ts_metadata("design:type", String)
], CreatePersonDto.prototype, "name", void 0);
