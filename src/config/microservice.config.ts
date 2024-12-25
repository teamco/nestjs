import { Transport, MicroserviceOptions } from '@nestjs/microservices';

export const microserviceOpts: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: process.env.MICROSERVICE_HOST ?? 'localhost',
    port: process.env.MICROSERVICE_PORT ? +process.env.MICROSERVICE_PORT : 8877
  }
};