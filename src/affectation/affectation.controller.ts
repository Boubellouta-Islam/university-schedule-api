import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
// import { TeacherDto } from '../teacher/teacher.dto';
import { AffectionDto } from './affectation.dto';
import { AffectationService } from './affectation.service';

@Controller('affectation')
export class AffectationController {
  constructor(private readonly affectationService: AffectationService) {}

  @Get('')
  async getAffection() {
    return this.affectationService.findAllAffection();
  }

  // @Get('/affectionbyteacher')
  // async getAffectionByTeacher(@Body() teacher: TeacherDto) {
  //   return this.affectationService.findByTeacherId(teacher);
  // }

  // @Get('/affectionbysubject')
  // async getAffectionBySubject(@Body() subject: SubjectDto) {
  //   return this.affectationService.findBySubjectId(subject);
  // }

  // @Get('/affectionbyteachersubject')
  // async getAffectionBySubTeac(
  //   @Body() subject: SubjectDto,
  //   @Body() teacher: TeacherDto,
  // ) {
  //   return this.affectationService.findBySubjectTeacher(teacher, subject);
  // }

  @Post('/add')
  async createAffection(@Body() affection: AffectionDto) {
    return this.affectationService.createAffection(affection);
  }

  @Put(':id')
  async updateAffection(@Param() id: string, @Body() affection: AffectionDto) {
    return this.affectationService.updateAffection(id, affection);
  }

  @Delete(':id')
  async deletePost(@Param() id: string) {
    return this.affectationService.deleteAffection(id);
  }
}
