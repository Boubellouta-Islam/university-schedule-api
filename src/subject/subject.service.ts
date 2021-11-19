import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subject, SubjectDocumnt } from './subject.schema';

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(Subject.name) private subjectModul: Model<SubjectDocumnt>,
  ) {}
}
