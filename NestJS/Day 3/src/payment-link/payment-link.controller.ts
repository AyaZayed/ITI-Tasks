import {
  BadRequestException,
  Body,
  Controller,
  Headers,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PaymentLinkService } from './payment-link.service';
import { CreatePaymentLinkDto } from './dto/create.payment-link-dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { MailService } from 'src/mail/mail.service';

@Controller('api/v1/payment-link')
export class PaymentLinkController {
  constructor(
    private readonly paymentLinkService: PaymentLinkService,
    private readonly mailService: MailService,
  ) {}

  @Post('webhook')
  async webhook(
    @Body() body: any,
    @Headers('x-kashier-signature') signature: string,
  ) {
    const isSignatureValid = this.paymentLinkService.verifyKashierSignature(
      signature,
      body,
    );
    console.log('isSignatureValid', isSignatureValid);
    if (!isSignatureValid) {
      throw new BadRequestException('Invalid signature');
    }
    //update the status of the paymentLink in database if the status
    const status = body.data.status === 'SUCCESS' ? 'paid' : 'failed';
    console.log('status', status);

    const paymentLink =
      await this.paymentLinkService.updatePaymentLinkAfterPayment(
        body.data.merchantOrderId,
        status,
      );

    if (paymentLink?.customerEmail && paymentLink.status === 'paid') {
      await this.mailService.sendPaymentSuccessEmail(paymentLink);
    }

    return { message: 'Webhook received' };
  }

  @UseGuards(AuthGuard)
  @Post()
  async createPaynmentLink(
    @Body() body: CreatePaymentLinkDto,
    @Req() req: Request & { user: { id: string } },
  ) {
    // create paymentLink in database
    const paymentLink = await this.paymentLinkService.createPaymentLink(
      body,
      req.user.id,
    );

    // send request to the payment gateway to create payment-session
    const updatedPaymentLink =
      await this.paymentLinkService.createPaymentSessionWithKashier(
        paymentLink,
      );

    if (updatedPaymentLink?.customerEmail) {
      await this.mailService.sendPaymentLinkEmail(updatedPaymentLink);
    }

    return updatedPaymentLink;
  }
}
