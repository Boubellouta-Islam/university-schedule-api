import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Session } from 'inspector';
import { Model } from 'mongoose';
import { SessionDocument } from './session.schema';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session.name) sessionModel: Model<SessionDocument>,
  ) {}
}
