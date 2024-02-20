import { PartialType } from '@nestjs/swagger';
import { CreateMemberAccountDto } from './create-member-account.dto';
import { IsNotEmpty } from 'class-validator';
import { GroupMember } from '../../group/entities/group-member.entity';
import { Group } from '../../group/entities/group.entity';

export class UpdateMemberAccountDto extends PartialType(
  CreateMemberAccountDto,
) {
  @IsNotEmpty({ message: 'آی دی گروه نمیتواند خالی باشد' })
  readonly id: string;

  @IsNotEmpty({ message: 'آی دی گروه نمیتواند خالی باشد' })
  readonly ownerGroup: Group;

  @IsNotEmpty({ message: 'آی دی صاحب گروه نمیتواند خالی باشد' })
  readonly ownerMember: GroupMember;
}
