import { IsNotEmpty, IsOptional } from 'class-validator';
import { Group } from '../entities/group.entity';
import { User } from '../../users/entities/user.entity';

export class CreateGroupDto {
  @IsNotEmpty({ message: 'نام گروه نمیتواند خالی باشد' })
  readonly groupName: string;
  readonly ownerUser: User;
}

export class GetGroupDto {
  @IsOptional()
  readonly groupName?: string;
  readonly ownerUserId: string;
}
 
export class CreateAddUserToGroupDto {
  @IsNotEmpty({ message: 'نام عضو نمیتواند خالی باشد' })
  readonly memberName: string;
  @IsNotEmpty({ message: 'صاحب گروه نمیتواند خالی باشد' })
  readonly ownerGroup: Group;
}
