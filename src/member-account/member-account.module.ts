import { Module } from '@nestjs/common';
import { MemberAccountService } from './member-account.service';
import { MemberAccountController } from './member-account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberAccount } from './entities/member-account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MemberAccount])],
  controllers: [MemberAccountController],
  providers: [MemberAccountService],
})
export class MemberAccountModule {}
