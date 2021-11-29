import { Grade } from 'src/utils/enum';
import { IsEnum, IsDefined, IsBoolean, IsInt, IsString } from 'class-validator';
import { type } from 'os';
export class CreateTeacherDto {

    teacher_id: string
    code_pin: number

    @IsDefined()
    @IsString()
    first_name: string;

    @IsDefined()
    @IsString()
    last_name: string;

    @IsDefined()
    @IsString()
    email: string;

    @IsDefined()
    @IsEnum(Grade)
    grade: Grade

    @IsDefined()
    @IsInt()
    max_hours: number

    @IsDefined()
    @IsInt()
    teached_hours: number
}