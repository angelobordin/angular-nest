"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _httpexceptionfilter = require("./utils/filter/http-exception.filter");
const _errorinterceptor = require("./utils/interceptor/error.interceptor");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    app.useGlobalFilters(new _httpexceptionfilter.HttpExceptionFilter());
    app.useGlobalInterceptors(new _errorinterceptor.ErrorsInterceptor());
    await app.listen(3000);
}
bootstrap();
