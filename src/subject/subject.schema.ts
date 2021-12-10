import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import * as mongoose from 'mongoose';
import { Level } from 'src/level/level.schema';
import { Semester, Teaching_unit } from 'src/utils/enum';

export type SubjectDocumnt = Subject & mongoose.Document;
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

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Level.name,
    required: false,
  })
  @Type(() => Level)
  level: Level;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
