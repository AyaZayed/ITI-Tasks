import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  async createUser(body: CreateUserDto): Promise<User> {
    const user = await this.userModel.findOne({ email: body.email });
    if (user) {
      throw new BadRequestException('User already exists');
    }

    const hashedPass = await bcrypt.hash(body.password, 10);

    return await this.userModel.create({
      ...body,
      password: hashedPass,
      role: 'user',
    });
  }

  // updateUser(body: UpdateUserDto, id: string) {}

  async getUserByEmail(email: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }
  // remove(id: string) {}
}
