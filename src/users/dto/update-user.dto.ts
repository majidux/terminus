import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty({ message: 'نام کاربری خالی نمیتواند خالی باشد' })
  readonly username: string;

  @IsNotEmpty({ message: 'کلمه عبور خالی نمیتواند خالی باشد' })
  readonly password: string;
}

export class FindOneUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty({ message: 'نام کاربری خالی نمیتواند خالی باشد' })
  readonly username: string;
}
