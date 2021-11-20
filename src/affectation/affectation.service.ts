import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AffecationDocument, Affectation } from './affectation.schema';

@Injectable()
export class AffectationService {
  constructor(
    @InjectModel(Affectation.name)
    private affectationModel: Model<AffecationDocument>,
  ) {}
}
