import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Teacher } from 'src/teacher/teacher.schema';
import { Type } from 'class-transformer';
import { Subject } from 'src/subject/subject.schema';
// choice means 'voeux'
export type ChoiceDocument = Choice & mongoose.Document;
@Schema()
export class Choice {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Teacher.name,
    required: true,
  })
  @Type(() => Teacher)
  teacher: Teacher;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Subject.name,
    required: true,
  })
  @Type(() => Subject)
  subject: Subject;
}

export const ChoiceSchema = SchemaFactory.createForClass(Choice);
