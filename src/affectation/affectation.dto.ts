import { Prop } from '@nestjs/mongoose';
import { Subject } from 'src/subject/subject.schema';
import { Teacher } from 'src/teacher/teacher.schema';
import { VoeuxType } from 'src/utils/enum';

export class AffectionDto {
  @Prop({ required: true })
  teachet: Teacher;

  @Prop({ required: true })
  subject: Subject;

  @Prop({ required: true })
  index: number;

  @Prop({ required: true, enum: VoeuxType })
  type: VoeuxType;

  @Prop({ required: true })
  cours: Boolean;

  @Prop({ required: true })
  td: Boolean;

  @Prop({ required: true })
  tp: Boolean;
}
