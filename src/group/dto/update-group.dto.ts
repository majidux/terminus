import { PartialType } from '@nestjs/swagger';
import { CreateGroupDto } from './create-group.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
  @IsNotEmpty({ message: 'آی دی خالی نمیتواند باشد' })
  readonly id: string;

  readonly groupBill: string;

  readonly groupCashDesk: string;

  readonly groupExpense: string;
}
