import { Filiere, LavelName, Speciality, Domain } from 'src/utils/enum';
import { IsEnum, IsNotEmpty } from 'class-validator';
export class LevelDto {
  @IsNotEmpty()
  @IsEnum(LavelName)
  name: LavelName;

  @IsNotEmpty()
  @IsEnum(Domain)
  domain: Domain;

  @IsNotEmpty()
  @IsEnum(Filiere)
  filiere: Filiere;

  @IsNotEmpty()
  @IsEnum(Speciality)
  speciality: Speciality;
}
