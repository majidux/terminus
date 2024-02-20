import { PartialType } from '@nestjs/swagger';
import { CreateGroupDto } from './create-group.dto';
import { IsNotEmpty } from 'class-validator';
import { User } from '../../users/entities/user.entity';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
  @IsNotEmpty({ message: 'آی دی گروه نمیتواند خالی باشد' })
  readonly id: string;

  @IsNotEmpty({ message: 'آی دی صاحب گروه نمیتواند خالی باشد' })
  readonly ownerUser: User;
}
 
