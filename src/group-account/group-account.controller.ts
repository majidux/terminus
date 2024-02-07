import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { GroupAccountService } from './group-account.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateGroupAccountDto } from './dto/create-group-account.dto';

@ApiTags('Group account')
@Controller('group-account')
export class GroupAccountController {
  constructor(private readonly groupAccountService: GroupAccountService) {}

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        groupId: {
          type: 'string',
          default: 'ce1f5d08-aef0-4815-a66f-79d3ea1c726e',
        },
        groupBill: {
          type: 'number',
          default: 5000,
        },
        groupCashDesk: {
          type: 'number',
          default: 0,
        },
        groupExpense: {
          type: 'number',
          default: 0,
        },
      },
    },
  })
  @Post('groupBill')
  async groupBill(@Body() createGroupAccountDto: CreateGroupAccountDto) {
    try {
      return this.groupAccountService.addNewGroupBill(createGroupAccountDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
