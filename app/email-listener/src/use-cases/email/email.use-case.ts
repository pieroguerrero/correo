import { Injectable } from '@nestjs/common';
import { CreateEmailDTO, Email, IDataServices, UpdateEmailDTO } from 'src/core';
import { EmailFactoryService } from './email-factory.service';

@Injectable()
export class EmailUseCases {
  constructor(
    private dataServices: IDataServices,
    private emailFactoryService: EmailFactoryService,
  ) {}

  getAllEmails(): Promise<Email[]> {
    return this.dataServices.emails.getAll();
  }

  getEmailById(id: any): Promise<Email> {
    return this.dataServices.emails.get(id);
  }

  createEmail(createEmailDto: CreateEmailDTO): Promise<Email> {
    const email = this.emailFactoryService.createNewEmail(createEmailDto);
    return this.dataServices.emails.create(email);
  }

  updateEmail(emailId: string, updateEmailDto: UpdateEmailDTO): Promise<Email> {
    const email = this.emailFactoryService.updateEmail(updateEmailDto);
    return this.dataServices.emails.update(emailId, email);
  }
}
