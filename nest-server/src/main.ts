import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './utils/filter/http-exception.filter';
import { ErrorsInterceptor } from './utils/interceptor/error.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ErrorsInterceptor());
  await app.listen(3000);
}
bootstrap();
