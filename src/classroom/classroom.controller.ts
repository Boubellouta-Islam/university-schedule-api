import { Controller } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { Classroom } from './classroom.schema';

@Controller('classroom')
export class ClassroomController {
  constructor(private readonly classroomservice: ClassroomService) {}

  @Get()
  async fetchAll(@Res() response) {
    const classrooms = await this.classroomservice.readAll();
    return response.status(HttpStatus.OK).json({
      classrooms,
    });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const classroom = await this.classroomservice.readById(id);
    return response.status(HttpStatus.OK).json({
      classroom,
    });
  }

  @Post('add')
  async createclassroom(@Res() response, @Body() classroom: Classroom) {
    const newclassroom = await this.classroomservice.create(classroom);
    return response.status(HttpStatus.CREATED).json({
      newclassroom,
    });
  }

  @Put('update/:id')
  async update(@Res() response, @Param('id') id, @Body() classroom: Classroom) {
    const updatedclassroom = await this.classroomservice.update(id, classroom);
    return response.status(HttpStatus.OK).json({
      updatedclassroom,
    });
  }

  @Delete('delete/:id')
  async delete(@Res() response, @Param('id') id) {
    const deletedclassroom = await this.classroomservice.delete(id);
    return response.status(HttpStatus.OK).json({
      deletedclassroom,
    });
  }
}
