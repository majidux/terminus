import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupService {
  create(createGroupDto: CreateGroupDto) {
    return 'This action adds a new group';
  }
}
