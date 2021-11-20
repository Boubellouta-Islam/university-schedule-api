import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubGroupService } from './sub-group.service';
import { SubGroupController } from './sub-group.controller';
import { SubGroup, SubGroupSchema } from './sub-group.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SubGroup.name, schema: SubGroupSchema },
    ]),
  ],
  controllers: [SubGroupController],
  providers: [SubGroupService],
})
class SubgroupModule {}

export default SubgroupModule;
