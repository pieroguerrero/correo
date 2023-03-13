import { EmailPriority } from "./EnEmailPriority";
import { EmailType } from "./EnEmailType";

export interface IEmail {
  _id: string;
  from: string;
  fromFullName: string;
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
  cc: string;
  bcc: string;
}
