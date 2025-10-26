import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/schemas/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('/signup')
  async signup(@Body() body: CreateUserDto): Promise<Partial<User>> {
    return await this.authService.signup(body);
  }

  @Post('/signin')
  async signIn(@Body() body: CreateUserDto): Promise<any> {
    return await this.authService.signIn(body.email, body.password);
  }
}
