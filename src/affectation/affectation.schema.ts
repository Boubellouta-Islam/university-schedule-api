import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Choice } from 'src/choice/choice.schema';

export type AffecationDocument = Affectation & Document;

@Schema()
export class Affectation extends Choice {}

export const AffectationSchema = SchemaFactory.createForClass(Affectation);
