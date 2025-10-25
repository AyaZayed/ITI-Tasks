/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaymentLink } from './schemas/payment-link.schema';
import { Model } from 'mongoose';
import { CreatePaymentLinkDto } from './dto/create.payment-link-dto';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as crypto from 'crypto';
import * as queryString from 'qs';
import * as _ from 'lodash';

@Injectable()
export class PaymentLinkService {
  constructor(
    @InjectModel(PaymentLink.name) private paymentLinkModel: Model<PaymentLink>,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async createPaymentLink(
    body: CreatePaymentLinkDto,
    userId: string,
  ): Promise<PaymentLink> {
    const paymentLink = await this.paymentLinkModel.create({
      ...body,
      createdBy: userId,
    });
    return paymentLink;
  }

  async createPaymentSessionWithKashier(paymentLink: PaymentLink) {
    const url = 'https://test-api.kashier.io/v3/payment/sessions';
    const headers = {
      'Content-Type': 'application/json',
      'api-key': this.configService.get('KASHIER_API_KEY'),
      Authorization: this.configService.get('KASHIER_SECRET_KEY'),
    };
    const body = {
      amount: paymentLink.amount.toString(),
      currency: paymentLink.currency,
      order: paymentLink._id,
      merchantRedirect: 'https://example.com/redirect',
      display: 'en',
      allowedMethods: 'card,wallet',
      iframeBackgroundColor: '#FFFFFF',
      merchantId: this.configService.get('KASHIER_MERCHANT_ID'),
      brandColor: '#FF5733',
      defaultMethod: 'card',
      saveCard: 'NA',
      interactionSource: 'ECOMMERCE',
      serverWebhook:
        'https://5208a16373f0.ngrok-free.app/api/v1/payment-link/webhook',
    };

    const response = await firstValueFrom(
      this.httpService.post<{ sessionUrl: string; _id: string }>(url, body, {
        headers,
      }),
    );

    const rawResponse = {
      data: response.data,
      status: response.status,
    };

    // update the paymentLink in database with the rawResponse
    const updatedPaymentLink = await this.paymentLinkModel.findByIdAndUpdate(
      paymentLink._id,
      {
        response: rawResponse,
        request: {
          url,
          headers,
          body,
        },
        link: response.data?.sessionUrl,
        gatewayOrderId: response.data?._id,
      },
      { new: true },
    );
    return updatedPaymentLink;
  }

  verifyKashierSignature(signature: string, body: any): boolean {
    const sortedSignatureKeys = body.data.signatureKeys.sort();

    const APIKey = this.configService.get('KASHIER_API_KEY');
    if (!APIKey) {
      throw new Error('KASHIER_API_KEY is not defined');
    }

    const objectSignaturePayload = _.pick(body.data, sortedSignatureKeys);
    const signaturePayload = queryString.stringify(objectSignaturePayload);
    const computedSignature = crypto
      .createHmac('sha256', APIKey)
      .update(signaturePayload)
      .digest('hex');
    return computedSignature === signature;
  }

  async updatePaymentLinkAfterPayment(
    merchantOrderId: string,
    status: string,
  ): Promise<PaymentLink | null> {
    const paymentLink = await this.paymentLinkModel.findOneAndUpdate(
      { _id: merchantOrderId },
      { status },
      { new: true },
    );
    return paymentLink;
  }
}
