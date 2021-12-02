import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { Affectation } from 'src/affectation/affectation.schema';
import { Classroom } from 'src/classroom/classroom.schema';
import { Group } from 'src/group/group.schema';
import { Schedule } from 'src/schedule/schedule.schema';
import { ClassType, Day } from 'src/utils/enum';

export type SessionDocument = Session & Document;

@Schema()
export class Session {
  @Prop({ required: true })
  start_hour: String;

  @Prop({ required: true })
  end_hour: String;

  @Prop({ required: true, enum: Day })
  day: Day;

  @Prop({ required: true, enum: ClassType })
  type: ClassType;

  // @Prop({ type: Affectation })
  // @Type(() => Affectation)
  // affectation: Affectation;

  // @Prop({ type: Classroom })
  // @Type(() => Classroom)
  // classroom: Classroom;

  // @Prop({ type: Group })
  // @Type(() => Group)
  // group: Group;

  // @Prop({ type: Schedule })
  // @Type(() => Schedule)
  // schedule: Schedule;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
