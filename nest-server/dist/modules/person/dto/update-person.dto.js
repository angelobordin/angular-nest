"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdatePersonDto", {
    enumerable: true,
    get: function() {
        return UpdatePersonDto;
    }
});
const _mappedtypes = require("@nestjs/mapped-types");
const _createpersondto = require("./create-person.dto");
let UpdatePersonDto = class UpdatePersonDto extends (0, _mappedtypes.PartialType)(_createpersondto.CreatePersonDto) {
};
