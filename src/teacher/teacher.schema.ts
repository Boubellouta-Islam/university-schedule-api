import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// Teqcher schema
@Schema()
export class Teacher {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true, IsEmail: true })
  email: string;

  @Prop({ required: true })
  grade: string;

  @Prop({ required: true })
  max_houres: Number;

  @Prop({ default: 0 })
  teached_houres: Number;
}
