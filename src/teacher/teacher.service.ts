import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher, TeacherDocument } from './teacher.schema';
import { CreateTeacherDto } from './teacher.dto';
import { Grade } from 'src/utils/enum';
import * as mongoose from 'mongoose';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument> = Model,
  ) { }

  async insertTeacher(createTeacherDto: CreateTeacherDto) {
    const newTeacher = new this.teacherModel(createTeacherDto)
    const result = await newTeacher.save();
    return result.id as string;
  }

  async getTeachers() {
    const teachers = await this.teacherModel.find().exec();
    if (teachers) {
      return teachers
    }
    return {}

  }

  async getTeacher(id: string) {
    const teacher = await this.findTeacher(id);
    return teacher
  }
  async updateTeacher(teacherId: string, firstName: string, lastName: string, email: string, grade: Grade, maxHours: number, teachedHours: number) {
    const teacher = await this.findTeacher(teacherId);
    if (firstName) {
      teacher.first_name = firstName
    }
    if (lastName) {
      teacher.last_name = lastName
    }
    if (email) {
      teacher.email = email
    }
    if (grade) {
      teacher.grade = grade
    }
    if (maxHours) {
      teacher.max_hours = maxHours
    }
    if (teachedHours) {
      teacher.teached_hours = teachedHours
    }

    teacher.save()
  }

  async countDocs(model: Model<TeacherDocument>) {
    var res = await model.countDocuments()
    return res
  }

  async deleteTeacher(id: string) {
    const res = await this.countDocs(this.teacherModel)
    if (res != 0) {
      if (mongoose.Types.ObjectId.isValid(id)) {
        await this.teacherModel.remove({ _id: id })
      }
      else {
        throw new NotFoundException("Invalid id");
      }
    } else {
      throw new NotFoundException("No teachers");
    }
  }

  private async findTeacher(id: string) {

    const res = await this.countDocs(this.teacherModel)
    if (res != 0) {
      const teacher = await this.teacherModel.findById(id)
      return teacher
    } else {
      throw new NotFoundException("No teachers");
    }


  }

}
