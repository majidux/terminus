import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { MongooseModule } from '@nestjs/mongoose';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    // MongooseModule.forFeature([{ name: User.name, schema: UserModel }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
