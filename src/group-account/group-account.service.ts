import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupAccount } from './entities/group-account.entity';
import { CreateGroupAccountDto } from './dto/create-group-account.dto';

@Injectable()
export class GroupAccountService {
  constructor(
    @InjectRepository(GroupAccount)
    private readonly groupAccountRepository: Repository<GroupAccount>,
  ) {}

  addNewGroupBill(createGroupAccountDto: CreateGroupAccountDto) {
    return this.groupAccountRepository.save({
      ...createGroupAccountDto,
    });
  }
}
