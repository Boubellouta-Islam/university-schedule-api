import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Teacher } from 'src/teacher/teacher.schema';
import { Type } from 'class-transformer';
import { Subject } from 'src/subject/subject.schema';
import { VoeuxType } from 'src/utils/enum';
import { Affectation } from 'src/affectation/affectation.schema';
// choice means 'voeux'
export type ChoiceDocument = Choice & mongoose.Document;
@Schema()
export class Choice extends Affectation {
  @Prop({ required: true })
  index: number;

  @Prop({ required: true, enum: VoeuxType })
  type: VoeuxType;
}

export const ChoiceSchema = SchemaFactory.createForClass(Choice);
