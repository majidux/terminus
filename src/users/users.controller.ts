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
// import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody } from '@nestjs/swagger';
import { User } from './entities/user.entity';
// import { UpdateUserDto } from './dto/update-user.dto';

import { AuthGuard } from './auth.guard'; // Import your custom guard

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
  @UseGuards(AuthGuard)
  async login(
    @Body() loginData: { username: string; password: string },
  ): Promise<User> {
    const { username, password } = loginData;
    const user: any = await this.usersService.findOne(username);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  @Get()
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
