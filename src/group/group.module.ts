import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group, GroupMember } from './entities/group.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Group, GroupMember]), UsersModule],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
