import { Controller, Post, Body } from '@nestjs/common';
import { MemberAccountService } from './member-account.service';
import { CreateMemberAccountDto } from './dto/create-member-account.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('member-account')
export class MemberAccountController {
  constructor(private readonly memberAccountService: MemberAccountService) {}

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        groupId: {
          type: 'string',
          default: 'ea9314fe-738e-40db-8a27-98fc7c9c2f5e',
        },
        id: {
          type: 'string',
          default: 'ee931c29-7efd-4fd4-85a8-085567f5502e',
        },
        memberId: {
          type: 'number',
          default: 5000,
        },
      },
    },
  })
  @Post()
  create(@Body() createMemberAccountDto: CreateMemberAccountDto) {
    return this.memberAccountService.create(createMemberAccountDto);
  }
}
