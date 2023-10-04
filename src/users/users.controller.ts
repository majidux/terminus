import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  NotFoundException,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody } from '@nestjs/swagger';
// import { User } from './entities/user.entity';
// import { UpdateUserDto } from './dto/update-user.dto';

import { AuthGuard } from './auth.guard'; // Import your custom guard
import { handleDecodeHashString, handleHashString } from '../utils';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/auth/login')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: { type: 'string', default: 'majid' },
        password: { type: 'string', default: '123' },
      },
    },
  })
  async login(@Body() loginData: CreateUserDto): Promise<string> {
    const hashPass = handleDecodeHashString(loginData?.password);
    const user: CreateUserDto = await this.usersService.findOne({
      username: loginData.username,
      password: hashPass,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.password !== loginData?.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return 'Logged in';
  }

  @Post('/auth/register')
  create(@Body() loginData: CreateUserDto) {
    const hashPass = handleHashString(loginData?.password);
    this.usersService.create({
      username: loginData.username,
      password: hashPass,
    });
    return 'created';
  }

  @Get('allUsers')
  @UseGuards(AuthGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    //  @Body() updateUserDto: UpdateUserDto
  ) {
    return this.usersService.update(+id);
  }
}
