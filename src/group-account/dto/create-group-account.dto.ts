import { IsNotEmpty, IsUUID, IsOptional } from 'class-validator';
import { Group } from '../../group/entities/group.entity';

export class CreateGroupAccountDto {
  @IsNotEmpty({ message: 'آی دی گروه خالی نمیتواند باشد' })
  readonly groupId: Group;
  readonly bill: string;
  readonly cashDesk: string;
  readonly expense: string;
  @IsNotEmpty({ message: 'نام نمیتواند خالی باشد' })
  readonly expenseName: string;
  @IsOptional()
  @IsUUID('all', { message: 'آی دی گروه باید یک UUID باشد' })
  readonly id: string;
}
