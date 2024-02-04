"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _httpexceptionfilter = require("./utils/filter/http-exception.filter");
const _errorinterceptor = require("./utils/interceptor/error.interceptor");
const _common = require("@nestjs/common");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    app.enableCors();
    app.useGlobalPipes(new _common.ValidationPipe());
    app.useGlobalFilters(new _httpexceptionfilter.HttpExceptionFilter());
    app.useGlobalInterceptors(new _errorinterceptor.ErrorsInterceptor());
    await app.listen(3000);
}
bootstrap();
