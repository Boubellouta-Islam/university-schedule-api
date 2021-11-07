import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Test } from './test.model';

@Injectable()
export class TestService {
    
    constructor(
        @InjectModel('Test') private readonly testModel: Model<Test>
    ) {}

    //: Promise<{msg: String}>
    async add(attribute: String) {
        const test = new this.testModel({
            attribute
        });
        await test.save();
        return { msg: "added"};
    }
}
