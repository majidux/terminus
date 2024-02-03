import { Controller, Post, Body, Req } from '@nestjs/common';
import { GroupService } from './group.service';
import {
  CreateAddUserToGroupDto,
  CreateGroupDto,
} from './dto/create-group.dto';
import { ApiBody } from '@nestjs/swagger';

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
    const payload: CreateGroupDto = {
      groupName: createGroupDto.groupName,
      ownerUser: request.user.id,
    };
    return this.groupService.save(payload);
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        memberName: { type: 'string', default: 'عضو یک' },
        ownerGroup: {
          type: 'string',
          default: 'aa47f18b-144e-46cc-a71a-5a9a22cea5ba',
        },
      },
    },
  })
  @Post('addUserToGroup')
  async addUserToGroup(@Body() createMemberGroupDto: any) {
    // const group = await this.groupService.findOneGroup(
    //   createMemberGroupDto.ownerGroup,
    // );
    console.log(createMemberGroupDto);
    const payload: CreateAddUserToGroupDto = {
      memberName: createMemberGroupDto.memberName,
      ownerGroup: createMemberGroupDto.ownerGroup,
    };
    return this.groupService.saveUserToGroup(payload);
  }
}
