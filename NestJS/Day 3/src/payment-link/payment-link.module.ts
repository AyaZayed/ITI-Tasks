import { Module } from '@nestjs/common';
import { PaymentLinkController } from './payment-link.controller';
import { PaymentLinkService } from './payment-link.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentLink, PaymentLinkSchema } from './schemas/payment-link.schema';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: PaymentLink.name, schema: PaymentLinkSchema },
    ]),
    AuthModule,
    HttpModule,
    MailModule,
  ],
  controllers: [PaymentLinkController],
  providers: [PaymentLinkService],
})
export class PaymentLinkModule {}
