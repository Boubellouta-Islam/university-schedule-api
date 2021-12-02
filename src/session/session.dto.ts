// import AffectionDto from "src/affectation/affectation.dto";
import { IsEnum, IsString } from 'class-validator';
import { ClassType, Day } from 'src/utils/enum';

export class SessionDto {
  @IsString()
  start_hour: String;

  @IsString()
  end_hour: String;

  @IsEnum(Day)
  day: Day;

  @IsEnum(ClassType)
  type: ClassType;
  // affectation: AffectionDto;
}
