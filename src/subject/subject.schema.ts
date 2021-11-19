import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Subject {
  @Prop({ unique: true, required: true })
  name: string;

  // FIXME:: enum type
  @Prop({ /*enum: true,*/ required: true })
  Unity: string;

  @Prop({ required: true })
  coeff: number;

  @Prop({ required: true })
  credit: number;

  // FIXME:: enum type
  @Prop({ /*enum: true,*/ required: true })
  semester: number;

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
