import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({});
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  console.log('port', port);
  await app.listen(port || 3000);
}
bootstrap();
