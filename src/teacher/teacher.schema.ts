import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { type } from 'os';
import { Grade } from 'src/utils/enum';
import { Document } from 'mongoose';

// Teacher schema

export type TeacherDocument = Teacher & Document;
@Schema()
export class Teacher {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true, IsEmail: true })
  email: string;

  @Prop({ required: true, enum: Grade })
  grade: Grade;

  @Prop({ required: true })
  max_houres: Number;

  @Prop({ default: 0 })
  teached_houres: Number;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
