import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import * as mongoose from 'mongoose';
import { Level } from 'src/level/level.schema';

export type sectionDocument = Section & mongoose.Document;

@Schema()
export class Section {
  @Prop({ required: true })
  section_num: number;

  @Prop({ required: true })
  student_num: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Level.name,
    required: true,
  })
  @Type(() => Level)
  level: Level;
}

export const SectionSchema = SchemaFactory.createForClass(Section);
