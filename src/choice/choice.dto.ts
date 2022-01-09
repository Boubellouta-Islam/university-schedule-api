import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsObject,
} from 'class-validator';
import { SubjectDto } from 'src/subject/subject.dto';
import { TeacherDto } from 'src/teacher/teacher.dto';
import { VoeuxType } from 'src/utils/enum';
export class ChoiceDto {
  @IsNotEmpty()
  @IsObject()
  teacher: TeacherDto;

  @IsNotEmpty()
  @IsObject()
  subject: SubjectDto;

  @IsNotEmpty()
  @IsInt()
  index: number;

  @IsNotEmpty()
  @IsEnum(VoeuxType)
  type: VoeuxType;

  @IsNotEmpty()
  @IsBoolean()
  cours: boolean;

  @IsNotEmpty()
  @IsBoolean()
  td: boolean;

  @IsNotEmpty()
  @IsBoolean()
  tp: boolean;
}
