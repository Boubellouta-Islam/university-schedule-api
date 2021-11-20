import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Period, PeriodDocument } from './period.schema';

@Injectable()
export class PeriodService {
  constructor(
    @InjectModel(Period.name) private periodModel: Model<PeriodDocument>,
  ) {}
}
