import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:root@localhost:27017/?authMechanism=DEFAULT',
    ),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
