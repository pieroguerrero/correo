import { Injectable } from '@nestjs/common';
import { EmailEntity, IDataServices } from 'src/core';

@Injectable()
export class EmailUseCases {
  constructor(private dataServices: IDataServices) {}

  getEmails(email: string): Promise<EmailEntity[]> {
    return this.dataServices.emails.getEmails(email);
  }
}
