import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Put,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherDto } from './teacher.dto';
import { Grade } from 'src/utils/enum';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  async getAll() {
    return await this.teacherService.getTeachers();
  }

  @Get(':id')
  async getOneTeacher(@Param('id') teacherId: string) {
    return await this.teacherService.getTeacherById(teacherId);
  }

  @Post('/add')
  async create(@Body() createTeacherDto: TeacherDto) {
    return await this.teacherService.insertTeacher(createTeacherDto);
  }

  @Put('update/:id')
  update(@Param('id') teacherId: string, @Body() updateTeacherDto: TeacherDto) {
    this.teacherService.updateTeacher(teacherId, updateTeacherDto);
    return null;
  }

  @Delete(':id')
  removeTeacher(@Param('id') teacherId: string) {
    this.teacherService.deleteTeacher(teacherId);
    return null;
  }
}
