import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { Section, SectionSchema } from './section.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Section.name, schema: SectionSchema }]),
  ],
  controllers: [SectionController],
  providers: [SectionService],
})
class SectionModule {}

export default SectionModule;
