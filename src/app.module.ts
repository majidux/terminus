import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { constants } from './constant';

@Module({
  imports: [
    MongooseModule.forRoot(constants.dataBaseConnectionString),
    ConfigModule.forRoot(),
    UsersModule,
  ],
})
export class AppModule {}
