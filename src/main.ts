import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const notificationGrpcOption: MicroserviceOptions = {
    transport: Transport.GRPC,
    options: {
      package: 'notification',
      protoPath: join(__dirname, 'proto/notification.proto'),
      url: 'localhost:8085',
    },
  };

  app.connectMicroservice(notificationGrpcOption);

  await app.startAllMicroservices();
}
bootstrap();
