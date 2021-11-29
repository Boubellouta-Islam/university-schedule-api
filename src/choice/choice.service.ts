import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import { VoeuxType } from 'src/utils/enum';
import { CreateChoiceDto } from './choice.dto'
import { Choice, ChoiceDocument } from './choice.schema';

@Injectable()
export class ChoiceService {
  constructor(
    @InjectModel(Choice.name) private choiceModel: Model<ChoiceDocument>,
  ) { }
  async insertChoice(createChoiceDto: CreateChoiceDto) {
    const newChoice = new this.choiceModel(createChoiceDto)
    const result = await newChoice.save();
    return result.id as string;
  }

  async getChoices() {
    const choices = await this.choiceModel.find().exec();
    if (choices) { return choices }
    return {}

  }

  async getChoice(id: string) {
    const choice = await this.findChoice(id);
    return choice
  }

  async updateChoice(choiceId: string, choiceType: VoeuxType, choiceIndex: number, course: boolean, td: boolean, tp: boolean) {
    const choice = await this.findChoice(choiceId);
    if (choiceType) {
      choice.set('type', choiceType)
    }
    if (choiceIndex) {
      choice.set('index', choiceIndex)
    }
    if (course) {
      choice.course = course
    }
    if (td) {
      choice.td = td
    }
    if (tp) {
      choice.tp = tp
    }

    choice.save()
  }

  async deleteChoice(id: string) {
    if (Mongoose.prototype.isValidObjectId(id)) {
      const res = await this.countDocs(this.choiceModel)
      if (res != 0) {
        const deletedChoice = await this.choiceModel.deleteOne({ _id: id })
        if (!deletedChoice) {
          throw new HttpException('No choice with that id', HttpStatus.NOT_FOUND)
        }
      }
    } else return new HttpException('Invalid id', HttpStatus.BAD_REQUEST)
  }

  async countDocs(model: Model<ChoiceDocument>) {
    var res = await model.countDocuments()
    return res
  }

  private async findChoice(id: string) {
    const res = await this.countDocs(this.choiceModel)
    if (res !== 0) {
      try {
        const choice = await this.choiceModel.findById(id)
        return choice
      } catch (err) {
        throw new NotFoundException('No choice with that id')
      }
    }
    else {
      throw new NotFoundException('No choices exist')
    }
  }


}

