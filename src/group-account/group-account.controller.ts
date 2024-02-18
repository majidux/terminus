import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { GroupAccountService } from './group-account.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateGroupAccountDto } from './dto/create-group-account.dto';
import { handleResponse } from '../utils';

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
        expenseName: {
          type: 'string',
          default: 'خیارشور',
        },
        pain: {
          type: 'number',
          default: 5000,
        },
      },
    },
  })
  @Post('groupExpense')
  async groupBill(@Body() createGroupAccountDto: CreateGroupAccountDto) {
    try {
      await this.groupAccountService.addNewGroupBill(createGroupAccountDto);
      return handleResponse({ message: 'خرج با موفقیت اضافه شد' });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
