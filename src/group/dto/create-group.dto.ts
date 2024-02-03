import { IsNotEmpty } from 'class-validator';
import { GroupMember, Group } from '../entities/group.entity';

export class CreateGroupDto {
  @IsNotEmpty({ message: 'نام گروه خالی نمیتواند خالی باشد' })
  readonly groupName: string;
  readonly ownerUser: GroupMember;
}

export class CreateAddUserToGroupDto {
  @IsNotEmpty({ message: 'نام عضو خالی نمیتواند خالی باشد' })
  readonly memberName: string;
  readonly ownerGroup: Group;
}
