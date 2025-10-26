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
  name?: string;

  @IsStrongPassword()
  password?: string;

  @IsEmail()
  email?: string;

  @IsInt()
  @Min(0)
  age?: number;
}
