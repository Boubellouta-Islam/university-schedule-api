import { IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';
import { SectionDto } from 'src/section/section.dto';

export class GroupDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  student_number: number;

  @IsNotEmpty()
  @IsObject()
  section: SectionDto;
}
