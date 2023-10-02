import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, default: 'majid' })
  username: string;

  @Prop({ required: true, default: '123' })
  password: string;
}

export const UserModel = SchemaFactory.createForClass(User);
