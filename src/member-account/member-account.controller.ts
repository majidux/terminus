import {
  Controller,
  Post,
  Body,
  BadRequestException,
  Delete,
  Param,
  Req,
} from '@nestjs/common';
import { MemberAccountService } from './member-account.service';
import { CreateMemberAccountDto } from './dto/create-member-account.dto';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { handleResponse } from '../utils';
import { UpdateMemberAccountDto } from './dto/update-member-account.dto';

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

  @ApiParam({
    name: 'id',
    type: 'string',
    schema: {
      type: 'string',
    },
  })
  @Delete('deleteMemberGroup/:id')
  async deleteGroup(@Param('id') id: string, @Req() request: any) {
    try {
      // const payload: UpdateMemberAccountDto = {
      //   id: id,
      //   ownerMember: request.user.id,
      // };
      // await this.memberAccountService.deleteMemberGroup(payload);
      return handleResponse({ message: 'گروه با موفقیت حذف شد' });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
