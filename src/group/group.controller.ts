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
        ownerUserId: request?.user?.id,
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

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        ownerGroup: {
          type: 'ownerGroup',
          default: '9bd4ac03-e9a0-4597-bbc8-df62c858702e',
        },
        id: {
          type: 'string',
          default: 'e5669c1f-6e9e-4c1c-86ff-a55480771f1a',
        },
      },
    },
  })
  @Delete('deleteMemberGroup/:ownerGroup')
  async deleteMemberGroup(@Body() updateMemberAccountDto: any) {
    try {
      const payload: any = {
        ownerGroup: updateMemberAccountDto.ownerGroup,
        id: updateMemberAccountDto.id,
      };
      await this.groupService.deleteMemberGroup(payload);
      return handleResponse({ message: 'عضو با موفقیت حذف شد' });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
