import * as mongoose from 'mongoose';

export const teacherSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    grade: { type: String, required: true },
    diploma: { type: String, required: true },
    specialty: { type: String, required: true },
});

export interface Teacher {
    first_name: String;
    last_name: String;
    email: String;
    grade: String;
    diploma: String;
    specialty: String
}