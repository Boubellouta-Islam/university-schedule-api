import { Grade } from 'src/utils/enum';
import { IsEnum, IsInt, IsString, IsNotEmpty, IsEmail } from 'class-validator';
export class TeacherDto {
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsEnum(Grade)
  grade: Grade;

  @IsNotEmpty()
  @IsInt()
  max_hours: number;

  @IsNotEmpty()
  @IsInt()
  teached_hours: number;

  @IsNotEmpty()
  @IsString()
  code_pin: string;
}
