import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './teacher.dto';
import { Grade } from 'src/utils/enum';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) { }
  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto) {
    const generatedId = await this.teacherService.insertTeacher(createTeacherDto);
    return { id: generatedId };
  }

  @Get()
  async getAll() {
    return await this.teacherService.getTeachers();
  }

  @Get(':id')
  async getOneTeacher(@Param('id') choiceId: string) {
    return await this.teacherService.getTeacher(choiceId);
  }

  @Patch(':id')
  update(@Param('id') teacherId: string, @Body('firstName') firstName: string, @Body('lastName') lastName: string, @Body('email') email: string, @Body('grade') grade: Grade, @Body('maxHours') maxHours: number, @Body('teachedHours') teachedHours: number) {
    this.teacherService.updateTeacher(teacherId, firstName, lastName, email, grade, maxHours, teachedHours);
    return null;
  }

  @Delete(':id')
  removeTeacher(@Param('id') teacherId: string) {
    this.teacherService.deleteTeacher(teacherId);
    return null;
  }
}
