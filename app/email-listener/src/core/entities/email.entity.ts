import { EmailPriority } from './email-priority.entity';
import { EmailType } from './email-type.entity';

export class EmailEntity {
  from: string;
  senderName: string;
  to: string;
  subject: string;
  subjectDetails: string;
  body: string;
  isActive: boolean;
  type: EmailType | string;
  priority: EmailPriority | string;
  created: Date;
  received: Date;
  sent: Date;
  isRead: boolean;
  cc: string;
  bcc: string;
}
