export class Email {
  from: string;
  to: string;
  subject: string;
  body: string;
  status: 'ACTIVE' | 'INACTIVE';
}
