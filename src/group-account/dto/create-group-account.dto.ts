import { IsNotEmpty } from 'class-validator';
import { Group } from '../../group/entities/group.entity';

export class CreateGroupAccountDto {
  @IsNotEmpty({ message: 'آی دی گروه خالی نمیتواند باشد' })
  readonly groupId: Group;
  readonly groupBill: string;
  readonly groupCashDesk: string;
  readonly groupExpense: string;
}
