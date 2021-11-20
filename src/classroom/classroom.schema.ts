import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ClassType } from 'src/utils/enum';

export type ClassroomDocument = Classroom & Document;

@Schema()
export class Classroom {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  capacity: number;

  @Prop({ required: true, enum: ClassType })
  type: ClassType;
}

export const ClassroomSchema = SchemaFactory.createForClass(Classroom);
