import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChoiceService } from './choice.service';
import { ChoiceController } from './choice.controller';
import { Choice, ChoiceSchema } from './choice.schema';
import { TeacherService } from 'src/teacher/teacher.service';
import TeacherModule from 'src/teacher/teacher.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Choice.name, schema: ChoiceSchema }]),
    TeacherModule
  ],
  controllers: [ChoiceController],
  providers: [ChoiceService],
})
class ChoiceModule { }

export default ChoiceModule;
