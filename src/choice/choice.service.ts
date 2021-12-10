import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import { VoeuxType } from 'src/utils/enum';
import { ChoiceDto } from './choice.dto';
import { Choice, ChoiceDocument } from './choice.schema';

@Injectable()
export class ChoiceService {
  constructor(
    @InjectModel(Choice.name) private choiceModel: Model<ChoiceDocument>,
  ) {}

  async getChoices() {
    return await this.choiceModel.find().exec();
  }

  async getChoice(id: string) {
    const choice = await this.choiceModel.findById(id);
    if (!choice) {
      throw new NotFoundException('');
    }
    return choice;
  }

  async insertChoice(createChoiceDto: ChoiceDto) {
    const newChoice = new this.choiceModel(createChoiceDto);
    return await newChoice.save();
  }

  async updateChoice(id: string, updateChoice: ChoiceDto) {
    return await this.choiceModel.findByIdAndUpdate(id, updateChoice);
  }

  async deleteChoice(id: string) {
    return await this.choiceModel.findByIdAndDelete(id);
  }
}
