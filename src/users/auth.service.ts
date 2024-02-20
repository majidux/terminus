import { Injectable } from '@nestjs/common';
import { FindOneUserDto, UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly authRepository: Repository<User>,
  ) {}

  findOne(updateUserDto: FindOneUserDto): Promise<UpdateUserDto> {
    return this.authRepository.findOne({
      where: {
        ...updateUserDto,
      },
    });
  }
}
