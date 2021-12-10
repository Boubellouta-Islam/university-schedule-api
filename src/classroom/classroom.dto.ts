import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ClassType } from 'src/utils/enum';

export class ClassroomDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  capacity: number;

  @IsNotEmpty()
  @IsEnum(ClassType)
  type: ClassType;
}
