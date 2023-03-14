import { EmailPriority } from "./EnEmailPriority";
import { EmailType } from "./EnEmailType";

export interface IEmailListDTO {
  _id: string;
  from: string;
  senderName: string;
  to: string;
  subject: string;
  subjectDetails: string;
  body: string;
  isActive: boolean;
  type: EmailType | string;
  priority: EmailPriority | string;
  created: string;
  received: string;
  sent: string;
  isRead: boolean;
  cc: string;
  bcc: string;
}
