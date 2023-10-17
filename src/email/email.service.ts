import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { mailOptions } from './email.dto';

@Injectable()
export class EmailService {

    constructor(private configService: ConfigService) { }

    async handleforgotPasswordEvent(data: mailOptions) {
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false, // Set to true if using SSL
            auth: {
                user: this.configService.get('EMAIL_USERNAME'),
                pass: this.configService.get('EMAIL_PASSWORD'),
            },
        });
        await transporter.sendMail(data);
    }
}
