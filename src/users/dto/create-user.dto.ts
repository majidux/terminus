import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'نام کاربری خالی نمیتواند خالی باشد' })
  readonly username: string;

  @IsNotEmpty({ message: 'کلمه عبور خالی نمیتواند خالی باشد' })
  readonly password: string;

  @IsEmail({}, { message: 'ایمیل نمیتواند خالی باشد' })
  readonly email?: string;
}
