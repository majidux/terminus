import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody } from '@nestjs/swagger';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/auth/login')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        firstName: { type: 'string', default: 'majid' },
        password: { type: 'string', default: '123' },
      },
    },
  })
  login(@Body() createUserDto: CreateUserDto) {
    return this.usersService.findOne(createUserDto.firstName);
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
