import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SigninDto {
  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  email: string;
  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8)
  password: string;
}
