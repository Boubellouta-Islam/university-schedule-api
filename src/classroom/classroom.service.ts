import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClassroomDto } from './classroom.dto';
import { ClassroomDocument, Classroom } from './classroom.schema';

@Injectable()
export class ClassroomService {
  constructor(
    @InjectModel(Classroom.name)
    private readonly classroomModel: Model<ClassroomDocument>,
  ) {}

  async readAll(): Promise<ClassroomDto[]> {
    return await this.classroomModel.find().exec();
  }

  async readById(id): Promise<ClassroomDto> {
    return await this.classroomModel.findById(id).exec();
  }

  async create(classroom: ClassroomDto): Promise<ClassroomDto> {
    const newClassroom = new this.classroomModel(classroom);
    return newClassroom.save();
  }

  async update(id, classroom: ClassroomDto): Promise<ClassroomDto> {
    return await this.classroomModel.findByIdAndUpdate(id, Classroom, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.classroomModel.findByIdAndRemove(id);
  }
}
