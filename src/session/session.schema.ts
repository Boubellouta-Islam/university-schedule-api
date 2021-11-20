import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { Affectation } from 'src/affectation/affectation.schema';
import { Classroom } from 'src/classroom/classroom.schema';
import { ClassType, Day } from 'src/utils/enum';

export type SessionDocument = Session & Document;

@Schema()
export class Session {
  @Prop({ required: true })
  start_hour: Date;

  @Prop({ required: true })
  end_hour: Date;

  @Prop({ required: true, enum: Day })
  day: Day;

  @Prop({ required: true, enum: ClassType })
  type: ClassType;

  @Prop({ type: Affectation, required: true })
  @Type(() => Affectation)
  affectation: Affectation;

  @Prop({ type: Classroom })
  @Type(() => Classroom)
  classroom: Classroom;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
