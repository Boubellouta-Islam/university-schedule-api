import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Group, GroupeDecument } from './group.schema';
import { GroupDto } from './group.dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectModel(Group.name) private groupModel: Model<GroupeDecument>,
  ) {}

  async getGroups() {
    return await this.groupModel.find().exec();
  }

  async getGroupById(id: string) {
    let group = await this.groupModel.findById(id);
    if (!group) {
      throw new NotFoundException('group not Found');
    }
    return group;
  }

  async addGroup(createGroup: GroupDto) {
    let group = new this.groupModel(createGroup);
    return await group.save();
  }

  async updateGroup(id: string, updateGroup: GroupDto) {
    return await this.groupModel.findByIdAndUpdate(id, updateGroup);
  }

  async deleteGroup(id: string) {
    return await this.groupModel.findByIdAndDelete(id);
  }
}
