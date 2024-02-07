import { PartialType } from '@nestjs/swagger';
import { CreateGroupAccountDto } from './create-group-account.dto';

export class UpdateGroupAccountDto extends PartialType(CreateGroupAccountDto) {}
