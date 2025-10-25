/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { PaymentLink } from 'src/payment-link/schemas/payment-link.schema';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(to: string, subject: string, html: string): Promise<any> {
    const info = await this.mailerService.sendMail({
      to,
      subject,
      html,
    });
    return info;
  }

  async sendPaymentLinkEmail(paymentLink: PaymentLink): Promise<any> {
    const html = `
    <h1>Payment Link</h1>
    <p>Amount: ${paymentLink.amount}</p>
    <p>Currency: ${paymentLink.currency}</p>
    <p>Link: ${paymentLink.link}</p>
    `;
    return this.sendEmail(paymentLink.customerEmail, 'Payment Link', html);
  }

  async sendPaymentSuccessEmail(paymentLink: PaymentLink): Promise<any> {
    const html = `
    <h1>Payment Success</h1>
    <p>Amount: ${paymentLink.amount}</p>
    <p>Currency: ${paymentLink.currency}</p>
    `;
    return this.sendEmail(paymentLink.customerEmail, 'Payment Success', html);
  }
}
