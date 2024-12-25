import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, MicroserviceOptions } from '@nestjs/microservices';
import { microserviceOpts } from './config/microservice.config';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(microserviceOpts as any);
  }

  sendMessage() {
    this.client.emit('message', 'New order received!');
  }
}