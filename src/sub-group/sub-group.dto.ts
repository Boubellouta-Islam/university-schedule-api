import { IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';
import { GroupDto } from 'src/group/group.dto';

export class SubgroupDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  student_num: number;

  @IsNotEmpty()
  @IsObject()
  group: GroupDto;
}
