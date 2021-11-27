import { IsBoolean, IsNumber,IsString, IsNotEmpty,IsMongoId} from "class-validator";
import { Semester, Teaching_unit } from 'src/utils/enum';
export class CreateSubjectDto{
    @IsString()
    @IsNotEmpty()
    name: string;   
    @IsString()
    @IsNotEmpty()
    Unity: Teaching_unit;  
    @IsNumber()
    @IsNotEmpty()
    coeff: number; 
    @IsNumber()
    @IsNotEmpty() 
    credit: number;   
    @IsNumber()
    @IsNotEmpty()
    semester: Semester; 
    @IsBoolean()
    @IsNotEmpty() 
    has_course: Boolean;  
    @IsBoolean()
    @IsNotEmpty() 
    has_td: Boolean;
    @IsBoolean()
    @IsNotEmpty()    
    has_tp: Boolean;
    @IsNumber()
    @IsNotEmpty()    
    cours_num: number;   
    @IsNumber()
    @IsNotEmpty()
    td_num: number;  
    @IsNumber()
    @IsNotEmpty()
    tp_num: number;
  
}
export class UpdateSubjectDto{
    @IsMongoId()
    @IsNotEmpty()
    id:string;
    @IsString()
    @IsNotEmpty()
    name: string;   
    @IsString()
    @IsNotEmpty()
    Unity: Teaching_unit;  
    @IsNumber()
    @IsNotEmpty()
    coeff: number; 
    @IsNumber()
    @IsNotEmpty() 
    credit: number;   
    @IsNumber()
    @IsNotEmpty()
    semester: Semester; 
    @IsBoolean()
    @IsNotEmpty() 
    has_course: Boolean;  
    @IsBoolean()
    @IsNotEmpty() 
    has_td: Boolean;
    @IsBoolean()
    @IsNotEmpty()    
    has_tp: Boolean;
    @IsNumber()
    @IsNotEmpty()    
    cours_num: number;   
    @IsNumber()
    @IsNotEmpty()
    td_num: number;  
    @IsNumber()
    @IsNotEmpty()
    tp_num: number;
  
}