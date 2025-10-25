import {
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class CreatePaymentLinkDto {
  @IsPositive()
  @IsInt()
  amount: number;
  @IsEmail()
  customerEmail: string;
  @IsEnum(['EGP', 'USD', 'EUR', 'GBP'], { message: 'Invalid currency' })
  @IsOptional()
  currency: 'EGP' | 'USD' | 'EUR' | 'GBP';
}
