import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
// import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { constants } from './constant';
// import { ConnectOptions } from 'typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    // MongooseModule.forRoot(constants.dataBaseConnectionString),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'majid',
      password: 'majid12345',
      database: 'terminus',
      host: 'localhost',
      synchronize: true,
      entities: [User],
      autoLoadEntities: true,
    }),
    ConfigModule.forRoot(),
    UsersModule,
  ],
})
export class AppModule {
  // constructor(private connection: ConnectOptions) {}
}
