import { IsBoolean, IsNotEmpty, IsObject } from 'class-validator';
import { SubjectDto } from 'src/subject/subject.dto';
import { TeacherDto } from 'src/teacher/teacher.dto';

export class AffectionDto {
  @IsNotEmpty()
  @IsObject()
  teacher: TeacherDto;

  @IsNotEmpty()
  @IsObject()
  subject: SubjectDto;

  @IsNotEmpty()
  @IsBoolean()
  cours: Boolean;

  @IsNotEmpty()
  @IsBoolean()
  td: Boolean;

  @IsNotEmpty()
  @IsBoolean()
  tp: Boolean;
}
