import * as mongoose from 'mongoose';

export const testSchema = new mongoose.Schema({
    attribute: { type: String, required: true },
    number_att: { type: Number, min: [10, 'minimum number is 10!'], max: 100},
    word: { 
        type: String,
        validate: {
            validator: function(v) {
                return /\w{5}/.test(v);
            },
            message: props => `${props.value} is not a valid word!`
        },
        required: true
    }
});

export interface Test {
    attribute: String
}