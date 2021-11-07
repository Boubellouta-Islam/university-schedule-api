import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { testSchema } from './test.model';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Test', schema: testSchema}])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
