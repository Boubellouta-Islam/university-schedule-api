import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
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
  max_hours: number;

  @Prop({ default: 0 })
  teached_hours: number;

  @Prop({ required: true })
  code_pin: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
