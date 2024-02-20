import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { GroupModule } from './group/group.module';
import { GroupAccountModule } from './group-account/group-account.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { MemberAccountModule } from './member-account/member-account.module';
import typeorm from './constant/typeorm';
import { AuthModule } from './users/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      cache: true,
      load: [typeorm],
    }),
    DevtoolsModule.register({
      http: process.env.NODE_ENV === 'development',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER?.toString(),
      password: process.env.PG_PASSWORD?.toString(),
      database: process.env.PG_DB,
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      synchronize: process.env.NODE_ENV === 'development',
      autoLoadEntities: true,
      poolSize: 5,
      logging: 'all',
    }),
    UsersModule,
    GroupModule,
    GroupAccountModule,
    MemberAccountModule,
    AuthModule,
  ],
})
export class AppModule {
  // constructor(private connection: ConnectOptions) {}
}
