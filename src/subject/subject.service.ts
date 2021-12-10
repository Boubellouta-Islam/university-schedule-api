import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subject, SubjectDocumnt } from './subject.schema';
import { SubjectDto } from './subject.dto';
import { Semester } from 'src/utils/enum';
@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(Subject.name) private subjectModul: Model<SubjectDocumnt>,
  ) {}

  async getSubjects(): Promise<SubjectDto[]> {
    try {
      return await this.subjectModul.find().exec();
    } catch (error) {
      console.log(error);
    }
  }

  async findSubject(idSubject: string) {
    try {
      const subject = await this.subjectModul.findById(idSubject);

      if (!subject) {
        throw new NotFoundException('Subject not found');
      }
      return subject;
    } catch (error) {}
  }

  async createSubject(subject: SubjectDto) {
    try {
      const createdSubject = new this.subjectModul(subject);
      return createdSubject.save();
    } catch (error) {
      console.log(error);
    }
  }
  async updateSubject(id: string, subject: SubjectDto) {
    try {
      const updatedSubject = await this.subjectModul
        .findByIdAndUpdate(id, subject)
        .setOptions({ overwrite: true, new: true });
      if (!updatedSubject) {
        throw new NotFoundException();
      }
      return updatedSubject;
    } catch (error) {}
  }
  async deleteSubject(subjectId: string) {
    const deletedSubject = await this.subjectModul.findByIdAndDelete(subjectId);
    if (!deletedSubject) {
      throw new NotFoundException();
    }

    return deletedSubject;
  }
}
