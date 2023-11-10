import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { EmailService } from './email.service';
import { mailOptions } from './email.dto';

@Controller('')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @EventPattern('forgot-password')
  async handleforgotPasswordEvent(data: Record<string, mailOptions>) {
    await this.emailService.handleforgotPasswordEvent(data.mailOptions);
  }
}
