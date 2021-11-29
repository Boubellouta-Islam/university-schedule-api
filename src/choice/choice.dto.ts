import { VoeuxType } from 'src/utils/enum';
import { IsEnum, IsDefined, IsBoolean, IsInt, IsString } from 'class-validator';
export class CreateChoiceDto {

    @IsDefined()
    @IsString()
    teacher: string;

    @IsDefined()
    @IsString()
    subject: string;

    @IsDefined()
    @IsInt()
    index: number;

    @IsDefined()
    @IsEnum(VoeuxType)
    type: VoeuxType;

    @IsDefined()
    @IsBoolean()
    course: boolean;

    @IsDefined()
    @IsBoolean()
    td: boolean;

    @IsDefined()
    @IsBoolean()
    tp: boolean
}