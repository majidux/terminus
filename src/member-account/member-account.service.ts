import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberAccount } from './entities/member-account.entity';
import { CreateMemberAccountDto } from './dto/create-member-account.dto';
import { UpdateMemberAccountDto } from './dto/update-member-account.dto';

@Injectable()
export class MemberAccountService {
  constructor(
    @InjectRepository(MemberAccount)
    private readonly memberAccountRepository: Repository<MemberAccount>,
  ) {}

  create(createMemberAccountDto: CreateMemberAccountDto) {
    return this.memberAccountRepository.save({
      ...createMemberAccountDto,
    });
  }

  deleteMemberGroup(createMemberAccountDto: UpdateMemberAccountDto) {
    return this.memberAccountRepository.save({
      ...createMemberAccountDto,
      isDeleted: true,
    });
  }
}
