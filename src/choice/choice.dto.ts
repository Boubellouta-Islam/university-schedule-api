import { VoeuxType } from 'src/utils/enum';
import {
  IsEnum,
  IsDefined,
  IsBoolean,
  IsInt,
  IsString,
  IsObject,
  IsNotEmpty,
} from 'class-validator';
import { TeacherDto } from 'src/teacher/teacher.dto';
import { SubjectDto } from 'src/subject/subject.dto';
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
