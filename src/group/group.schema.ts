import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import * as mongoose from 'mongoose';
import { Section } from 'src/section/section.schema';

export type GroupeDecument = Group & mongoose.Document;

@Schema()
export class Group {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  student_number: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Section.name,
    required: true,
  })
  @Type(() => Section)
  private section: Section;
}

export const GroupSchema = SchemaFactory.createForClass(Group);
