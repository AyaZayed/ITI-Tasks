import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Param,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto): {
    message: string;
    data?: CreateUserDto;
  } {
    return this.usersService.create(createUserDto);
  }

  @Get()
  getAll(): { message: string; data: User[] } {
    return this.usersService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): {
    message: string;
    data?: User | undefined;
  } {
    return this.usersService.getById(id);
  }

  @Put(':id')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id') id: string,
  ): {
    message: string;
    data?: User | undefined;
  } {
    return this.usersService.update(updateUserDto, id);
  }
}
