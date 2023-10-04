import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    // @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  // constructor(
  //   @InjectModel(User.name) private readonly userModel: Model<User>,
  // ) {}

  create(createUserDto: CreateUserDto) {
    return this.userModel.insertMany({
      ...createUserDto,
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(createUserDto: CreateUserDto) {
    return this.userModel.findOne({
      ...createUserDto,
    });
  }

  update(
    id: number,
    // updateUserDto: UpdateUserDto
  ) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async validateUser(username: string, password: string): Promise<boolean> {
    return !!this.userModel.findOne({ username, password });
  }
}
