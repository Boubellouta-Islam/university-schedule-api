// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Section, sectionDocument } from './section.schema';

// @Injectable()
// export class SectionService {
//   constructor(
//     @InjectModel(Section.name) private sectionModel: Model<sectionDocument>,
//   ) {}
//   async findAll(): Promise<Section[]> {
//     return this.sectionModel.find().exec();
//   }

//   async getAll() {
//     return await this.sectionModel.find();
//   }
//   async findOne(id: string): Promise<Section> {
//     return await this.sectionModel.findById(id).exec();
//   }
//   async create(section: SectionDto): Promise<Section> {
//     const createdSection = new this.sectionModel(section);
//     return createdSection.save();
//   }

//   async update(id: string, section: SectionDto): Promise<Section> {
//     return await this.sectionModel.findByIdAndUpdate(id, section).exec();
//   }
//   async delete(id) {
//     await this.sectionModel.deleteOne({ _id: id });
//   }
// }
