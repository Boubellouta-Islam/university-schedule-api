import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Choice, ChoiceDocument } from './choice.schema';

@Injectable()
export class ChoiceService {
  constructor(
    @InjectModel(Choice.name) private choiceModel: Model<ChoiceDocument>,
  ) {}
}
