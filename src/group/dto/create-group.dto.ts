import { IsNotEmpty } from 'class-validator';
import { Group } from '../entities/group.entity';
import { GroupMember } from '../entities/group-member.entity';

export class CreateGroupDto {
  @IsNotEmpty({ message: 'نام گروه نمیتواند خالی باشد' })
  readonly groupName: string;
  readonly ownerUser: GroupMember;
}

export class CreateAddUserToGroupDto {
  @IsNotEmpty({ message: 'نام عضو نمیتواند خالی باشد' })
  readonly memberName: string;
  @IsNotEmpty({ message: 'صاحب گروه نمیتواند خالی باشد' })
  readonly ownerGroup: Group;
}
