import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberAccount } from './entities/member-account.entity';
import { CreateMemberAccountDto } from './dto/create-member-account.dto';

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

  remove(id: number) {
    return `This action removes a #${id} memberAccount`;
  }
}
