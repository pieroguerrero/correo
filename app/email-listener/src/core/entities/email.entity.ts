import { EmailPriority } from './email-priority.entity';
import { EmailType } from './email-type.entity';

export class Email {
  from: string;
  to: string;
  subject: string;
  body: string;
  isActive: boolean;
  type: EmailType | string;
  priority: EmailPriority | string;
  created: Date;
  received: Date;
  sent: Date;
  isRead: boolean;
}
