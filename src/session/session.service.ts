import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Session } from 'inspector';
import { Model } from 'mongoose';
import { SessionDto } from './session.dto';
import { SessionDocument } from './session.schema';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session.name) private sessionModel: Model<SessionDocument>,
  ) {}

  async getAll() {
    try {
      return await this.sessionModel.find();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findOne(id: String) {
    return await this.sessionModel.findById(id);
  }

  async addNewsession(sessionDto: SessionDto) {
    const session = new this.sessionModel(sessionDto);
    return session.save();
  }

  async updateSession(id: string, sessionDto: SessionDto) {
    return this.sessionModel
      .findByIdAndUpdate(id, sessionDto)
      .setOptions({ overwrite: true, new: true });
  }
}
