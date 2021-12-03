import { Controller, Get,Body,Post,Patch,Delete, Param } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto,UpdateSubjectDto } from './subject.dto';
@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}
  @Get()
  getModuleName():string{
    return this.subjectService.getModuleName();
  }
  @Get()
  async getAllSubjects(){
    return await this.subjectService.getSubjects();
  }
  @Get(':id')
  async getSingleSubjects(@Param('id') id:string){
    return await this.subjectService.getSingleSubject(id);
  }
  @Post()
  async createSubject(@Body() subject: CreateSubjectDto) {
    return await this.subjectService.createSubject(subject);
  }
  @Patch(':id')
  async updateSubject(@Param('id') id: string , @Body() subject: UpdateSubjectDto) {
    return this.subjectService.updateSubject(id,subject);
  } 
  @Delete(':id')
  async deleteSubject(@Param('id') id: string ) {
     await this.subjectService.deleteSubject(id);
     return null;
  }
}
