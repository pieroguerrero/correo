import { Injectable } from '@nestjs/common';
import { CreateEmailDTO, EmailEntity, IDataServices } from 'src/core';
import { EmailFactoryService } from './email-factory.service';

@Injectable()
export class EmailUseCases {
  constructor(
    private dataServices: IDataServices,
    private emailFactoryService: EmailFactoryService,
  ) {}

  createIncomingEmail(createEmailDto: CreateEmailDTO): Promise<EmailEntity> {
    const email = this.emailFactoryService.createIncomingEmail(createEmailDto);
    return this.dataServices.emails.createIncomingEmail(email);
  }
}
