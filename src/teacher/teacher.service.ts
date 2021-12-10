import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher, TeacherDocument } from './teacher.schema';
import { TeacherDto } from './teacher.dto';
import { Grade } from 'src/utils/enum';
import * as mongoose from 'mongoose';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name)
    private teacherModel: Model<TeacherDocument> = Model,
  ) {}

  async getTeachers() {
    try {
      return await this.teacherModel.find().exec();
    } catch (error) {}
  }

  async getTeacherById(id: string) {
    const teacher = await this.teacherModel.findById(id);
    if (!teacher) {
      throw new NotFoundException('Teacher not found');
    }
    return teacher;
  }

  async insertTeacher(createTeacherDto: TeacherDto) {
    const newTeacher = new this.teacherModel(createTeacherDto);
    return await newTeacher.save();
  }

  async updateTeacher(id: string, teacherDto: TeacherDto) {
    return await this.teacherModel.findByIdAndUpdate(id, teacherDto);
  }

  async deleteTeacher(id: string) {
    return await this.teacherModel.findByIdAndDelete(id);
  }
}
