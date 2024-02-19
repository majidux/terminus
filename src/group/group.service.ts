import { Injectable } from '@nestjs/common';
import {
  CreateAddUserToGroupDto,
  CreateGroupDto,
  GetGroupDto,
} from './dto/create-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';
import { GroupMember } from './entities/group-member.entity';
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

  deleteGroup(createAddUserToGroupDto: UpdateGroupDto) {
    return this.groupRepository.save({
      ...createAddUserToGroupDto,
      isDeleted: true,
    });
  }

  getGroups(getGroupDto: GetGroupDto) {
    return this.groupRepository.find({
      select: { groupName: true, isDeleted: true },
      where: { ownerUser: { id: getGroupDto.ownerUserId }, isDeleted: false },
    });
  }

  saveMemberToGroup(createAddUserToGroupDto: CreateAddUserToGroupDto) {
    return this.groupMembersRepository.save({
      ...createAddUserToGroupDto,
    });
  }
}
