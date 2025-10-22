import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true, enum: ['admin', 'user'] })
  role: string;
  @Prop({ required: false })
  age?: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
