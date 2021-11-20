import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScheduleDocument = Schedule & Document;

@Schema()
export class Schedule {
  @Prop({ required: true })
  session_duration: number;

  @Prop({ required: true })
  days: number;

  @Prop({ required: true })
  lunch_break: number;

  @Prop({ required: true })
  between_sessions: number;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
