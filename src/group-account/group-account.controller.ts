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
          default: 'ea9314fe-738e-40db-8a27-98fc7c9c2f5e',
        },
        id: {
          type: 'string',
          default: 'ee931c29-7efd-4fd4-85a8-085567f5502e',
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
  @Post('groupExpense')
  async groupBill(@Body() createGroupAccountDto: CreateGroupAccountDto) {
    try {
      return this.groupAccountService.addNewGroupBill(createGroupAccountDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
