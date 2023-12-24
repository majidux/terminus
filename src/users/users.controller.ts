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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

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
  async login(@Body() updateUserDto: UpdateUserDto): Promise<string> {
    const user: UpdateUserDto = await this.usersService.findOne({
      username: updateUserDto?.username,
    });

    if (!user) {
      throw new NotFoundException('کاربری با این مشخصات وجود ندارد');
    }

    const decodedHashPass: boolean = await handleDecodeHashString(
      user?.password,
      updateUserDto?.password,
    );

    if (!decodedHashPass) {
      throw new UnauthorizedException('اطلاعات نادرست');
    }

    return 'وارد شدید';
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
  async create(@Body() createUserDto: CreateUserDto) {
    const hashPass = await handleHashString(createUserDto?.password);
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
