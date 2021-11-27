import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subject, SubjectDocumnt } from './subject.schema';
import { CreateSubjectDto,UpdateSubjectDto } from './subject.dto';
import { compileFunction } from 'vm';
import { Semester } from 'src/utils/enum';
@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(Subject.name) private subjectModul: Model<SubjectDocumnt>,
  ) {}

  
  getModuleName():string {
    return '1';
  }
  async getSubjects() {
     const subjects=await this.subjectModul.find().exec();
    return subjects as Subject[];
  }
  async getSingleSubject(idSubject:string) {
    const subject=await this.findSubject(idSubject);
    return subject;
  }
  async  createSubject(subject: CreateSubjectDto){
    const createdSubject=new this.subjectModul(CreateSubjectDto);
    return createdSubject.save();
    
  }
 async  updateSubject(id:string,subject: UpdateSubjectDto){
    //const subjectt(idSubject);
    const updatedSubject=await this.subjectModul.findByIdAndUpdate(id,subject)
    .setOptions({ overwrite: true, new: true });
    if (!updatedSubject) {
      throw new NotFoundException();
    }
    return updatedSubject;
    
  }
 async deleteSubject(subjectId: string){
  const deletedSubject=await this.subjectModul.findByIdAndDelete(subjectId)
  if (!deletedSubject) {
    throw new NotFoundException();
  }

  return deletedSubject;
   
  } 
   private findSubject(idSubject:string){
    const subject=  this.subjectModul.findById(idSubject);
    
    if(!subject){
      throw new NotFoundException('Subject not found');
    }
    return subject;
  }
}
