import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubGroup, SubGroupDocument } from './sub-group.schema';

@Injectable()
export class SubGroupService {
  constructor(
    @InjectModel(SubGroup.name) subGroupModel: Model<SubGroupDocument>,
  ) {}
}
