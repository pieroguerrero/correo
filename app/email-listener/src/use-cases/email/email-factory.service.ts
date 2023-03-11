import { Injectable } from '@nestjs/common';
import { CreateEmailDTO } from 'src/core/data-transfer-objects/email.dto';
import { Email } from 'src/core/entities';

@Injectable()
export class EmailFactoryService {
  createIncomingEmail(createdEmailDto: CreateEmailDTO) {
    const newEmail = new Email();
    newEmail.body = createdEmailDto.body;
    newEmail.from = createdEmailDto.from;
    newEmail.subject = createdEmailDto.subject;
    newEmail.to = createdEmailDto.to;
    newEmail.priority = createdEmailDto.priority;
    newEmail.created = new Date();
    newEmail.received = new Date();
    newEmail.isRead = false;
    newEmail.isActive = true;
    newEmail.type = createdEmailDto.type.toUpperCase();

    return newEmail;
  }
}
