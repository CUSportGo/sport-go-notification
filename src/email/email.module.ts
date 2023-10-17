import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { ConfigModule } from '@nestjs/config';
@Module({
  controllers: [EmailController],
  providers: [EmailService],
  imports: [ConfigModule],
})
export class EmailModule { }
