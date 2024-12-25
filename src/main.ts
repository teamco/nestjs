import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { microserviceOpts } from './config/microservice.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  
  await app.listen(process.env.PORT ?? 4300);

  const microserviceApp = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, { ...microserviceOpts });
  await microserviceApp.listen();
}

bootstrap();
