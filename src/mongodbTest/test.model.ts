import * as mongoose from 'mongoose';

export const testSchema = new mongoose.Schema({
    attribute: { type: String, required: true}
});


export interface Test {
    attribute: String,
}