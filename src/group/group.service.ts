import { Injectable } from '@nestjs/common';
import {
  CreateAddUserToGroupDto,
  CreateGroupDto,
} from './dto/create-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group, GroupMember } from './entities/group.entity';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
    @InjectRepository(GroupMember)
    private readonly groupMembersRepository: Repository<GroupMember>,
  ) {}

  save(createGroupDto: CreateGroupDto) {
    return this.groupRepository.save({
      ...createGroupDto,
    });
  }

  updateGroupBill(updateGroupDto: UpdateGroupDto) {
    return this.groupRepository.save({
      ...updateGroupDto,
    });
  }

  saveMemberToGroup(createAddUserToGroupDto: CreateAddUserToGroupDto) {
    return this.groupMembersRepository.save({
      ...createAddUserToGroupDto,
    });
  }
}
