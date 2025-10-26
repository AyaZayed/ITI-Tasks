import {
  Controller,
  Get,
  Body,
  Param,
  // Put,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { TransformInterceptor } from './interceptors/transform.interceptor';

@UseInterceptors(TransformInterceptor)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  async getAll(): Promise<User[]> {
    return await this.usersService.getUsers();
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<User> {
    return await this.usersService.getUserById(id);
  }

  // @Put(':id')
  // update(
  //   @Body() updateUserDto: UpdateUserDto,
  //   @Param('id') id: string,
  // ): {
  //   message: string;
  //   data?: User | undefined;
  // } {
  //   return this.usersService.update(updateUserDto, id);
  // }
}
