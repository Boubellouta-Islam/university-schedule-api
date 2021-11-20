import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// choice means 'voeux'
@Schema()
export class Admin {
  @Prop({ required: true, IsEmail: true, unique: true })
  email: string;

  @Prop({ required: true, minlength: 3 })
  password: string;
}

export const adminSchema = SchemaFactory.createForClass(Admin);
