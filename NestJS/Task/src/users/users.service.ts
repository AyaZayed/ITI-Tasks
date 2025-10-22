import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAll() {
    return {
      message: 'Users fetched successfully',
      data: this.users,
    };
  }

  create(body: CreateUserDto) {
    const id = Date.now().toString();
    this.users.push({ ...body, id });
    return {
      message: 'User created successfully',
      data: { ...body, id },
    };
  }

  getById(id: string) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      return {
        message: 'User not found',
      };
    }

    return {
      message: 'User fetched succesfully',
      data: user,
    };
  }

  update(body: UpdateUserDto, id: string) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      return {
        message: 'User not found',
      };
    }
    const updatedUser = { ...user, ...body };
    return {
      message: 'User updated successfully',
      data: updatedUser,
    };
  }

  remove(id: string) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      return {
        message: 'User not found',
      };
    }
    this.users = this.users.filter((u) => u.id !== id);
    return {
      message: 'User deleted successfully',
      data: user,
    };
  }
}
