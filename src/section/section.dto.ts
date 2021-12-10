import { IsNotEmpty, IsNumber, IsObject } from 'class-validator';
import { LevelDto } from 'src/level/level.dto';

export class SectionDto {
  @IsNotEmpty()
  @IsNumber()
  section_num: number;

  @IsNotEmpty()
  @IsNumber()
  student_num: number;

  @IsNotEmpty()
  @IsObject()
  level: LevelDto;
}
