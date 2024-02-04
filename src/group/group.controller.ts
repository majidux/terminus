import {
  Controller,
  Post,
  Body,
  Req,
  BadRequestException,
  Put,
} from '@nestjs/common';
import { GroupService } from './group.service';
import {
  CreateAddUserToGroupDto,
  CreateGroupDto,
} from './dto/create-group.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UpdateGroupDto } from './dto/update-group.dto';

@ApiTags('Group')
@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        groupName: { type: 'string', default: 'گروه 1' },
      },
    },
  })
  @Post('createGroup')
  createGroup(@Body() createGroupDto: CreateGroupDto, @Req() request: any) {
    try {
      const payload: CreateGroupDto = {
        groupName: createGroupDto.groupName,
        ownerUser: request.user.id,
      };
      return this.groupService.save(payload);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        memberName: { type: 'string', default: 'عضو یک' },
        ownerGroup: {
          type: 'string',
          default: 'ce1f5d08-aef0-4815-a66f-79d3ea1c726e',
        },
      },
    },
  })
  @Post('newMember')
  async addUserToGroup(@Body() createMemberGroupDto: CreateAddUserToGroupDto) {
    try {
      const payload: CreateAddUserToGroupDto = {
        memberName: createMemberGroupDto.memberName,
        ownerGroup: createMemberGroupDto.ownerGroup,
      };
      return this.groupService.saveMemberToGroup(payload);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string', default: '782726a7-9ae3-4226-af7c-c66c965ca23a' },
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
  @Put('groupBill')
  async groupBill(@Body() updateGroupDto: UpdateGroupDto) {
    try {
      return this.groupService.updateGroupBill(updateGroupDto);
    } catch (error) {}
  }
}
