import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Domain, Filiere, LavelName, Speciality } from 'src/utils/enum';

export type LevelDocument = Level & Document;

@Schema()
export class Level {
  @Prop({ required: true, enum: LavelName })
  name: LavelName;

  @Prop({ required: true, enum: Domain })
  domain: Domain;

  @Prop({ required: true, enum: Filiere })
  filiere: Filiere;

  @Prop({ required: true, enum: Speciality })
  speciality: Speciality;
}

export const LevelSchema = SchemaFactory.createForClass(Level);
