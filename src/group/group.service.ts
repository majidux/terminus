import { Injectable } from '@nestjs/common';
import {
  CreateAddUserToGroupDto,
  CreateGroupDto,
} from './dto/create-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group, GroupMember } from './entities/group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
    @InjectRepository(GroupMember)
    private readonly groupMembersRepository: Repository<GroupMember>,
  ) {}

  findOneGroup(updateUserDto: CreateGroupDto): Promise<Group> {
    return this.groupRepository.findOne({
      where: {
        ...updateUserDto,
      },
    });
  }

  save(createGroupDto: CreateGroupDto) {
    return this.groupRepository.save({
      ...createGroupDto,
    });
  }

  saveUserToGroup(createAddUserToGroupDto: CreateAddUserToGroupDto) {
    return this.groupMembersRepository.save({
      ...createAddUserToGroupDto,
    });
  }
}
