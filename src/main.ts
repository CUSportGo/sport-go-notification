import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const notificationGrpcOption: MicroserviceOptions = {
    transport: Transport.RMQ,
    options: {
      urls: ["amqp://localhost:5672"],
      queue: 'email_queue',
      queueOptions: { durable: false },
      prefetchCount: 1,
    },
  };

  app.connectMicroservice(notificationGrpcOption);

  await app.startAllMicroservices();
}
bootstrap();
