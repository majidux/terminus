import { Module } from '@nestjs/common';
import { MemberAccountService } from './member-account.service';
import { MemberAccountController } from './member-account.controller';

@Module({
  controllers: [MemberAccountController],
  providers: [MemberAccountService],
})
export class MemberAccountModule {}
