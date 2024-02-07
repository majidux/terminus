import { Module } from '@nestjs/common';
import { GroupAccountService } from './group-account.service';
import { GroupAccountController } from './group-account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupAccount } from './entities/group-account.entity';
import { Group } from '../group/entities/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GroupAccount]), Group],
  controllers: [GroupAccountController],
  providers: [GroupAccountService],
})
export class GroupAccountModule {}
