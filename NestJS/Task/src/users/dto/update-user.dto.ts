import {
  IsEmail,
  IsInt,
  //   IsOptional,
  IsString,
  IsStrongPassword,
  Min,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  username?: string;

  @IsStrongPassword()
  password?: string;

  @IsEmail()
  email?: string;

  @IsInt()
  @Min(0)
  age?: number;
}
