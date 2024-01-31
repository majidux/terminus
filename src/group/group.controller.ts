import { Controller, Post, Body, Req } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';

// import { AuthGuard } from '../users/auth.guard';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post('createGroup')
  create(@Body() createGroupDto: CreateGroupDto, @Req() request: any) {
    console.log('request', request.user);
    return this.groupService.create(createGroupDto);
  }
}
