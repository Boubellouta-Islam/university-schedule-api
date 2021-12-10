import {
  IsBoolean,
  IsNumber,
  IsString,
  IsNotEmpty,
  IsMongoId,
  IsEnum,
  IsObject,
} from 'class-validator';
import { LevelDto } from 'src/level/level.dto';
import { Semester, Teaching_unit } from 'src/utils/enum';
export class SubjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(Teaching_unit)
  @IsNotEmpty()
  Unity: Teaching_unit;

  @IsNumber()
  @IsNotEmpty()
  coeff: number;

  @IsNumber()
  @IsNotEmpty()
  credit: number;

  @IsNumber()
  @IsNotEmpty()
  semester: Semester;

  @IsBoolean()
  @IsNotEmpty()
  has_course: Boolean;

  @IsBoolean()
  @IsNotEmpty()
  has_td: Boolean;

  @IsBoolean()
  @IsNotEmpty()
  has_tp: Boolean;

  @IsNumber()
  @IsNotEmpty()
  cours_num: number;

  @IsNumber()
  @IsNotEmpty()
  td_num: number;

  @IsNumber()
  @IsNotEmpty()
  tp_num: number;

  @IsObject()
  level: LevelDto;
}
