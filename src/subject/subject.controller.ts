import {
  Controller,
  Get,
  Body,
  Post,
  Patch,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectDto } from './subject.dto';
@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  async getAllSubjects(): Promise<SubjectDto[]> {
    return await this.subjectService.getSubjects();
  }
  @Get(':id')
  async getSingleSubjects(@Param('id') id: string) {
    return await this.subjectService.findSubject(id);
  }
  @Post('add')
  async createSubject(@Body() subject: SubjectDto) {
    return await this.subjectService.createSubject(subject);
  }
  @Put(':id')
  async updateSubject(@Param('id') id: string, @Body() subject: SubjectDto) {
    return this.subjectService.updateSubject(id, subject);
  }
  @Delete('delete/:id')
  async deleteSubject(@Param('id') id: string) {
    await this.subjectService.deleteSubject(id);
    return null;
  }
}
