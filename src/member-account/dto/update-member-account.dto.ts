import { PartialType } from '@nestjs/swagger';
import { CreateMemberAccountDto } from './create-member-account.dto';

export class UpdateMemberAccountDto extends PartialType(CreateMemberAccountDto) {}
