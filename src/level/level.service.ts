import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Level, LevelDocument } from './level.schema';
import { LevelDto } from './level.dto';

@Injectable()
export class LevelService {
  constructor(
    @InjectModel(Level.name) private levelModel: Model<LevelDocument>,
  ) {}

  async getLevels() {
    try {
      return await this.levelModel.find().exec();
    } catch (error) {}
  }

  async getLevel(id: string) {
    const level = await this.levelModel.findById(id);
    if (!level) {
      throw new NotFoundException('No Level with that id');
    }
    return level;
  }

  async insertLevel(createLevelDto: LevelDto) {
    const newLevel = new this.levelModel(createLevelDto);
    return await newLevel.save();
  }

  async updateLevel(id: string, updateLevelDto: LevelDto) {
    try {
      return await this.levelModel
        .findByIdAndUpdate(id, updateLevelDto)
        .setOptions({ overwrite: true, new: true });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteLevel(id: string) {
    try {
      await this.levelModel.findByIdAndDelete(id);
    } catch {
      throw new NotFoundException('No Level with that id');
    }
  }
}
