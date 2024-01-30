import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  NotFoundException,
  UseGuards,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody } from '@nestjs/swagger';
import { FindOneUserDto, UpdateUserDto } from './dto/update-user.dto';

import { AuthGuard } from './auth.guard';
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
  async login(
    @Body() userDto: UpdateUserDto,
  ): Promise<{ access_token: string }> {
    const user: FindOneUserDto = await this.usersService.findOne({
      username: userDto?.username,
    });

    if (!user) {
      throw new NotFoundException('کاربری با این مشخصات وجود ندارد');
    }

    const decodedHashPass: boolean = await handleDecodeHashString(
      user?.password,
      userDto?.password,
    );

    if (!decodedHashPass) {
      throw new UnauthorizedException('رمز عبور نادرست است');
    }
    return await this.usersService.signIn(user);
  }

  @Post('/auth/register')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: { type: 'string', default: 'majid' },
        password: { type: 'string', default: '123' },
        email: { type: 'string', default: 'majiddarvish93@gmail.com' },
      },
    },
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<string> {
    const hashPass = await handleHashString(createUserDto?.password);
    const user: FindOneUserDto = await this.usersService.findOne({
      username: createUserDto?.username,
    });

    if (user) {
      throw new ForbiddenException('نام کاربری تکراری است');
    }
    await this.usersService.save({
      ...createUserDto,
      password: hashPass,
    });
    return 'اکانت جدید ساخته شد';
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
