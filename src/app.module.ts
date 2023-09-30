import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_CONNECTION_STRING),
    ConfigModule.forRoot(),
    UsersModule,
  ],
})
export class AppModule {}
