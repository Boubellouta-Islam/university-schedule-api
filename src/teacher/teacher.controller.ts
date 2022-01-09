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
    try{
      console.log(createTeacherDto);
      return await this.teacherService.insertTeacher(createTeacherDto);
    } catch(error){
      throw error;
    }
  }

  @Put('/update/:id')
  async update(@Param('id') teacherId: string, @Body() updateTeacherDto: TeacherDto) {
     try{
      console.log(updateTeacherDto);
      return await this.teacherService.updateTeacher(teacherId, updateTeacherDto);
    } catch(error){
      throw error;
    }
  }

  @Delete(':id')
  async removeTeacher(@Param('id') teacherId: string) {
         try{
      console.log(teacherId);
      return await this.teacherService.deleteTeacher(teacherId);
    } catch(error){
      throw error;
    }
  }
}
