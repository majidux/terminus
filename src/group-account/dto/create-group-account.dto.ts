import { IsNotEmpty, IsUUID, IsOptional } from 'class-validator';
import { Group } from '../../group/entities/group.entity';

export class CreateGroupAccountDto {
  @IsNotEmpty({ message: 'آی دی گروه خالی نمیتواند باشد' })
  readonly groupId: Group;
  readonly groupBill: string;
  readonly groupCashDesk: string;
  readonly groupExpense: string;
  @IsOptional()
  @IsUUID('all', { message: 'آی دی گروه باید یک UUID باشد' })
  readonly id: string;
}
