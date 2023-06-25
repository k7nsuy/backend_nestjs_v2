import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './commons/graphql/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // validation 검증을 위한 pipes
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(4000);
}
bootstrap();
