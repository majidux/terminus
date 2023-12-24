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
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    // MongooseModule.forRoot(constants.dataBaseConnectionString),
    TypeOrmModule.forRoot({
      // type: 'postgres',
      // port: 5432,
      // username: 'majid',
      // password: 'majid12345',
      // database: 'terminus',
      // host: 'localhost',
      type: process.env.DB_TYPE as any,
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      synchronize: true,
      entities: [User],
      autoLoadEntities: true,
    }),
    UsersModule,
  ],
})
export class AppModule {
  // constructor(private connection: ConnectOptions) {}
}
