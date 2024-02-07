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
}
