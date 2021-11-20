import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Teacher } from 'src/teacher/teacher.schema';
import { Day, Status } from 'src/utils/enum';
import { Type } from 'class-transformer';

export type PeriodDocument = Period & Document;

@Schema()
export class Period {
  @Prop({ required: true })
  start_hour: Date;

  @Prop({ required: true })
  end_hour: Date;

  @Prop({ required: true, enum: Day })
  day: Day;

  @Prop({ required: true, enum: Status })
  status: Status;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Teacher.name,
    required: true,
  })
  @Type(() => Teacher)
  teacher: Teacher;
}

export const PeriodSchema = SchemaFactory.createForClass(Period);
