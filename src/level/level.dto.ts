import { Filiere, Grade, Speciality } from 'src/utils/enum';
import { IsEnum, IsDefined, IsBoolean, IsInt, IsString } from 'class-validator';
import { Domain } from 'domain';
export class CreateLevelDto {

    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @IsEnum(Domain)
    domain: Domain;

    @IsDefined()
    @IsEnum(Filiere)
    filier: Filiere;

    @IsDefined()
    @IsEnum(Grade)
    sem_num: number

    @IsDefined()
    @IsInt()
    speciality: Speciality


}