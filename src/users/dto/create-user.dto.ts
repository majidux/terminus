import { IsEmail, IsNotEmpty, } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'نام کاربری خالی نمیتواند خالی باشد' })
  readonly username: string;

  @IsNotEmpty({ message: 'کلمه عبور خالی نمیتواند خالی باشد' })
  readonly password: string;

  @IsNotEmpty({ message: 'نام خالی نمیتواند خالی باشد' })
  readonly firstName: string;

  @IsNotEmpty({ message: 'نام خانوادگی خالی نمیتواند خالی باشد' })
  readonly lastName: string;

  @IsEmail({}, { message: 'ایمیل نمیتواند خالی باشد' })
  readonly email?: string;
}
