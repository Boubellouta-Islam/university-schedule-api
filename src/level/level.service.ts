import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Level, LevelDocument } from './level.schema';
import { Domain } from 'src/utils/enum';
import { Filiere } from 'src/utils/enum';
import { Speciality } from 'src/utils/enum';
import { LavelName } from 'src/utils/enum';
import { CreateLevelDto } from './level.dto'


@Injectable()
export class LevelService {
  constructor(
    @InjectModel(Level.name) private levelModel: Model<LevelDocument>,
  ) { }
  async insertLevel(createLevelDto: CreateLevelDto) {
    const newLevel = new this.levelModel(createLevelDto)
    const result = await newLevel.save();
    return result.id as string;
  }

  async getLevels() {
    const levels = await this.levelModel.find().exec();
    if (levels) {
      return levels.map(level => ({ id: level.id, name: level.name, domain: level.domain, filiere: level.filiere, sem_num: level.sem_num, speciality: level.speciality }));
    }
    return {}

  }

  async getLevel(id: string) {
    const level = await this.findLevel(id);
    return { id: level.id, name: level.name, domain: level.domain, filiere: level.filiere, sem_num: level.sem_num, speciality: level.speciality };
  }

  async updateLevel(levelId: string, name: LavelName, domain: Domain, filiere: Filiere, sem_num: number, speciality: Speciality) {
    const Level = await this.findLevel(levelId);
    if (name) {
      Level.name = name
    }
    if (filiere) {
      Level.filiere = filiere
    }
    if (sem_num) {
      Level.sem_num = sem_num
    }
    if (speciality) {
      Level.speciality = speciality
    }

    Level.save()
  }

  async deleteLevel(id: string) {
    try {
      await this.levelModel.deleteOne({ _id: id })
    }
    catch {
      throw new NotFoundException('No Level with that id')
    }
  }

  async countDocs(model: Model<LevelDocument>) {
    var res = await model.countDocuments()
    return res
  }

  private async findLevel(id: string) {
    try {
      const res = await this.countDocs(this.levelModel)
      if (res !== 0) {
        const level = await this.levelModel.findById(id)
        return level
      }
      else {
        throw new NotFoundException('No Levels exist')
      }
    } catch (err) {
      throw new NotFoundException('No Level with that id')
    }

  }

}
