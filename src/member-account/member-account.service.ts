import { Injectable } from '@nestjs/common';
import { CreateMemberAccountDto } from './dto/create-member-account.dto';
import { UpdateMemberAccountDto } from './dto/update-member-account.dto';

@Injectable()
export class MemberAccountService {
  create(createMemberAccountDto: CreateMemberAccountDto) {
    return 'This action adds a new memberAccount';
  }

  findAll() {
    return `This action returns all memberAccount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memberAccount`;
  }

  update(id: number, updateMemberAccountDto: UpdateMemberAccountDto) {
    return `This action updates a #${id} memberAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} memberAccount`;
  }
}
