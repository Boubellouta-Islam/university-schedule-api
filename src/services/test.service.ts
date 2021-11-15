import { HttpException, Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Test } from '../models/test.model';

@Injectable()
export class TestService {
    
    constructor(@InjectModel('Test') private readonly testModel: Model<Test>) {}

    async add(attribute: String) {
        try {
            const test = new this.testModel({
                attribute
            });
            await test.save();
            return { msg: { test } };
        } catch (error) {
            throw new HttpException(error, 400);
        }
    }

    async viewAll() {
        const test = await this.testModel.find({}).exec();
        return { test };
    }
}
