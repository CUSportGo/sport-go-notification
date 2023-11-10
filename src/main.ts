import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const notificationGrpcOption: MicroserviceOptions = {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.EMAIL_SERVICE_RMQ],
      queue: process.env.EMAIL_QUEUE,
      queueOptions: { durable: false },
      prefetchCount: 1,
    },
  };

  app.connectMicroservice(notificationGrpcOption);

  await app.startAllMicroservices();
}
bootstrap();
