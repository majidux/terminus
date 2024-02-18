import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { MemberAccountService } from './member-account.service';
import { CreateMemberAccountDto } from './dto/create-member-account.dto';
import { ApiBody } from '@nestjs/swagger';
import { handleResponse } from '../utils';

@Controller('member-account')
export class MemberAccountController {
  constructor(private readonly memberAccountService: MemberAccountService) {}

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        ownerGroup: {
          type: 'string',
          default: '2293adaa-461d-4097-8ee0-2b2ae1da2a3b',
        },
        ownerMember: {
          type: 'string',
          default: '7b21ffc3-f109-4b75-ac9d-ac4dd6f55080',
        },
      },
    },
  })
  @Post('memberExpense')
  async create(@Body() createMemberAccountDto: CreateMemberAccountDto) {
    try {
      await this.memberAccountService.create(createMemberAccountDto);
      return handleResponse({ message: 'موفقیت اضافه شد' });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
