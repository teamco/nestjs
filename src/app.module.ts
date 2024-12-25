import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FlowersModule } from './flowers/flowers.module';
import { LoggerMiddleware } from './conception/middleware';
import { ConfigModule } from '@nestjs/config';
import { MicroserviceModule } from './microservice/microservice.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from '@nestjs/microservices';
import { microserviceOpts } from './config/microservice.config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { FlowersGraphqlModule } from './flowers-graphql/flowers-graphql.module';
import { WSGateway } from './websocket.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FlowersModule,
    MicroserviceModule,
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        ...microserviceOpts as any,
      }
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      sortSchema: true,
    }),
    FlowersGraphqlModule,
  ],
  controllers: [AppController],
  providers: [AppService, WSGateway],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('flowers');
  }
}
