import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Semester, Teaching_unit } from 'src/utils/enum';

export type SubjectDocumnt = Subject & Document;
@Schema()
export class Subject {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ enum: Teaching_unit, required: true })
  Unity: Teaching_unit;

  @Prop({ required: true })
  coeff: number;

  @Prop({ required: true })
  credit: number;

  @Prop({ enum: Semester, required: true })
  semester: Semester;

  @Prop({ required: true })
  has_course: Boolean;

  @Prop({ required: true })
  has_td: Boolean;

  @Prop({ required: true })
  has_tp: Boolean;

  @Prop({ required: true })
  cours_num: number;

  @Prop({ required: true })
  td_num: number;

  @Prop({ required: true })
  tp_num: number;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
