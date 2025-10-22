import {
  Controller,
  Get,
  Body,
  HttpStatus,
  Param,
  Patch,
  Delete,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Roles('admin')
  @UseGuards(AuthGuard, RolesGuard)
  @Get('/')
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return await this.userService.getUserById(id);
  }

  @Patch('/:id')
  async updateUserById(
    @Param('id') id: string,
    @Body() body: any,
  ): Promise<User> {
    return await this.userService.updateUserById(id, body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async deleteUserById(@Param('id') id: string): Promise<void> {
    await this.userService.deleteUserById(id);
  }
}
