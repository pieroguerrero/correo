import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EmailDocument = HydratedDocument<Email>;

@Schema()
export class Email {
  @Prop({ required: true })
  from: string;

  @Prop({ required: true })
  to: string;

  @Prop({ required: true })
  subject: string;
  @Prop({ required: true })
  body: string;
  @Prop({ required: true })
  status: 'ACTIVE' | 'INACTIVE';
}

export const EmailSchema = SchemaFactory.createForClass(Email);
