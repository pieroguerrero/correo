import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EmailDocument = HydratedDocument<EmailModel>;

@Schema()
export class EmailModel {
  @Prop({ required: true })
  from: string;
  @Prop({ required: true })
  senderName: string;

  @Prop({ required: true })
  to: string;

  @Prop({ required: true })
  subject: string;
  @Prop()
  subjectDetails: string;
  @Prop({ required: true })
  body: string;
  @Prop({ required: true })
  isActive: boolean;
  @Prop({ required: true, default: Date.now() })
  created: Date;
  @Prop()
  received: Date;
  @Prop()
  sent: Date;
  @Prop({ required: true })
  isRead: boolean;
  @Prop({ required: true })
  priority: string;
  @Prop({ required: true })
  type: string;
  @Prop({ default: '' })
  cc: string;
  @Prop({ default: '' })
  bcc: string;
}

export const EmailSchema = SchemaFactory.createForClass(EmailModel);
