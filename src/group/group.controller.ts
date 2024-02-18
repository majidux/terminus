import {
  Controller,
  Post,
  Body,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { GroupService } from './group.service';
import {
  CreateAddUserToGroupDto,
  CreateGroupDto,
} from './dto/create-group.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { handleResponse } from '../utils';

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
  async createGroup(
    @Body() createGroupDto: CreateGroupDto,
    @Req() request: any,
  ) {
    try {
      const payload: CreateGroupDto = {
        groupName: createGroupDto.groupName,
        ownerUser: request.user.id,
      };
      await this.groupService.save(payload);
      return handleResponse({ message: 'گروه با موفقیت اضافه شد' });
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
      await this.groupService.saveMemberToGroup(createMemberGroupDto);
      return handleResponse({ message: 'عضو با موفقیت اضافه شد' });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
