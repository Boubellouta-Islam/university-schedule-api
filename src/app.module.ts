import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { TestModule } from './mongodbTest/test.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/scheduleDB'),
    TestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
