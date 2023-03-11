import { Injectable } from '@nestjs/common';
import { CreateEmailDTO, Email, IDataServices } from 'src/core';
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

  createIncomingEmail(createEmailDto: CreateEmailDTO): Promise<Email> {
    const email = this.emailFactoryService.createIncomingEmail(createEmailDto);
    return this.dataServices.emails.createIncomingEmail(email);
  }
}
