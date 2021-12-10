import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubgroupDto } from './sub-group.dto';
import { SubGroup, SubGroupDocument } from './sub-group.schema';

@Injectable()
export class SubGroupService {
  constructor(
    @InjectModel(SubGroup.name) readonly subGroupModel: Model<SubGroupDocument>,
  ) {}

  async getAllSugroups() {
    return await this.subGroupModel.find();
  }

  async getSubgroupBuId(id: string) {
    return await this.subGroupModel.findById(id);
  }

  async addNewSubgrou(createSubgroup: SubgroupDto) {
    let subgroup = new this.subGroupModel(createSubgroup);
    return await subgroup.save();
  }

  async updateSubgroup(id: string, updateSubgroup: SubgroupDto) {
    return await this.subGroupModel
      .findByIdAndUpdate(id, updateSubgroup)
      .setOptions({ overwrite: true, new: true });
  }
}
