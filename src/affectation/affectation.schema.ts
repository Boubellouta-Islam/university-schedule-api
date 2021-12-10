import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Choice } from 'src/choice/choice.schema';
import { Subject } from 'src/subject/subject.schema';
import { Teacher } from 'src/teacher/teacher.schema';

export type AffecationDocument = Affectation & Document;

@Schema()
export class Affectation {
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

  @Prop({ required: true })
  cours: Boolean;

  @Prop({ required: true })
  td: Boolean;

  @Prop({ required: true })
  tp: Boolean;
}

export const AffectationSchema = SchemaFactory.createForClass(Affectation);
