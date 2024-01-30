import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FindOneUserDto, UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  save(createUserDto: CreateUserDto) {
    return this.userRepository.save({
      ...createUserDto,
    });
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(updateUserDto: FindOneUserDto): Promise<UpdateUserDto> {
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

  async signIn(updateUserDto: FindOneUserDto) {
    const payload = { username: updateUserDto.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
      message: 'ورود موفق',
    };
  }
}
