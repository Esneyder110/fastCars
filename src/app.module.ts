import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth/jwt-auth.guard';
import { enviroments } from './configuration/enviroments';
import config from './configuration/config';
import { ConfigSchema } from './configuration/config.entity';

@Module({
  imports: [
    CarsModule,
    DatabaseModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV
        ? enviroments[process.env.NODE_ENV]
        : '.env',
      isGlobal: true,
      load: [config],
      validationSchema: ConfigSchema,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
