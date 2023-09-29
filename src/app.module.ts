import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://majid:12345@terminus.7i1fkgj.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
  ],
})
export class AppModule {}
