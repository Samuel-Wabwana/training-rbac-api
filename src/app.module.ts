import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
    cache: true,
  }),
  MikroOrmModule.forRoot({
    entities: ['./dist/entities'],
    entitiesTs: ['./src/entities'],
    dbName: process.env.DB_NAME,
    type: 'postgresql',
    password: process.env.DB_PASS,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
