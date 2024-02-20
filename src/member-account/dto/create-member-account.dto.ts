import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { Group } from '../../group/entities/group.entity';
import { GroupMember } from '../../group/entities/group-member.entity';

export class CreateMemberAccountDto {
  @IsNotEmpty({ message: 'آی دی گروه خالی نمیتواند باشد' })
  readonly ownerGroup: Group;
  @IsNotEmpty({ message: 'آی دی عضو خالی نمیتواند باشد' })
  readonly ownerMember: GroupMember;
  readonly paid: string;
  @IsNotEmpty({ message: 'نام نمیتواند خالی باشد' })
  readonly expenseName: string;
  @IsOptional()
  @IsUUID('all', { message: 'آی دی گروه باید یک UUID باشد' })
  readonly id: string;
}
