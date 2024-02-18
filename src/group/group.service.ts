import { Injectable } from '@nestjs/common';
import {
  CreateAddUserToGroupDto,
  CreateGroupDto,
} from './dto/create-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';
import { GroupMember } from './entities/group-member.entity';

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

  saveMemberToGroup(createAddUserToGroupDto: CreateAddUserToGroupDto) {
    return this.groupMembersRepository.save({
      ...createAddUserToGroupDto,
    });
  }

  findMemberInGroup(createAddUserToGroupDto: CreateAddUserToGroupDto) {
    return this.groupMembersRepository.find({
      where: {
        ownerGroup: createAddUserToGroupDto.ownerGroup,
      },
    });
  }
}
