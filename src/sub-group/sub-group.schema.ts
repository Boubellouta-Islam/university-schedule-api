import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import * as mongoose from 'mongoose';
import { Group } from 'src/group/group.schema';

export type SubGroupDocument = SubGroup & mongoose.Document;

@Schema()
export class SubGroup extends Group {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Group.name,
    required: true,
  })
  @Type(() => Group)
  group: Group;
}

export const SubGroupSchema = SchemaFactory.createForClass(SubGroup);
