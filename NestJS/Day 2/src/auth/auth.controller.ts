import { User } from './../users/schemas/user.schema';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/auth/dto/create-user-dto';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/sign-in-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('signup')
  async signup(@Body() body: CreateUserDto): Promise<Partial<User>> {
    return await this.authService.signup(body);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signin(@Body() body: SigninDto): Promise<any> {
    return await this.authService.signin(body);
  }
}
