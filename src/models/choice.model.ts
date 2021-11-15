import * as mongoose from 'mongoose';

// choice means 'voeux'

export const choiceSchema = new mongoose.Schema({
    type: { type: Number, default: 0, min: 0, max: 1 },
    tacher_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Teacher",
    },
    module_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Module",
    }
});

export interface Choice {
    type: String;
    tacher_id: mongoose.Schema.Types.ObjectId;
    module_id: mongoose.Schema.Types.ObjectId;
}