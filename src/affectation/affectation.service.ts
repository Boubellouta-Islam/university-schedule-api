import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subject } from 'src/subject/subject.schema';
import { Teacher } from 'src/teacher/teacher.schema';
import { AffectionDto } from './affectation.dto';
import { AffecationDocument, Affectation } from './affectation.schema';

@Injectable()
export class AffectationService {
  constructor(
    @InjectModel(Affectation.name)
    private affectationModel: Model<AffecationDocument>,
  ) {}

  async findAllAffection() {
    return this.affectationModel.find();
  }

  async findByTeacherId(teacher: Teacher) {
    const post = await this.affectationModel.find({ teacher: teacher });
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  async findBySubjectId(subject: Subject) {
    const post = await this.affectationModel.find({ subject: subject });
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  async findBySubjectTeacher(teacher: Teacher, subject: Subject) {
    const post = await this.affectationModel.find({
      teacher: teacher,
      subject: subject,
    });
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  async createAffection(Data: AffectionDto) {
    const createdPost = new this.affectationModel(Data);
    return createdPost.save();
  }

  async updateAffection(id: string, Data: AffectionDto) {
    const post = await this.affectationModel
      .findByIdAndUpdate(id, Data)
      .setOptions({ overwrite: true, new: true });
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  async deleteAffection(affectionId: string) {
    const result = await this.affectationModel.findByIdAndDelete(affectionId);
    if (!result) {
      throw new NotFoundException();
    }
  }
}
