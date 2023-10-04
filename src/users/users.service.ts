import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  save(createUserDto: CreateUserDto) {
    return this.userRepository.save({
      ...createUserDto,
    });
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(updateUserDto: UpdateUserDto): Promise<UpdateUserDto> {
    return this.userRepository.findOne({
      where: {
        ...updateUserDto,
      },
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
}
