import {
  Controller,
  Post,
  Body,
  Req,
  BadRequestException,
  Delete,
  Param,
  Get,
} from '@nestjs/common';
import { GroupService } from './group.service';
import {
  CreateAddUserToGroupDto,
  CreateGroupDto,
} from './dto/create-group.dto';
import { ApiBody, ApiTags, ApiParam } from '@nestjs/swagger';
import { handleResponse } from '../utils';
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

  @ApiParam({
    name: 'id',
    type: 'string',
    schema: {
      type: 'string',
      default: 'ef2050cd-df9a-4472-9d02-cb2c30587869',
    },
  })
  @Delete('deleteGroup/:id')
  async deleteGroup(@Param('id') id: string, @Req() request: any) {
    try {
      const payload: UpdateGroupDto = {
        id: id,
        ownerUser: request.user.id,
      };
      await this.groupService.deleteGroup(payload);
      return handleResponse({ message: 'گروه با موفقیت حذف شد' });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get('getGroups')
  async getGroups(@Req() request: any) {
    try {
      const groups = await this.groupService.getGroups({
        ownerUser: request?.user?.id,
      });
      return handleResponse({ data: groups });
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
