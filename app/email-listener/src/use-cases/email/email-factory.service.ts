import { Injectable } from '@nestjs/common';
import { CreateEmailDTO } from 'src/core/data-transfer-objects/email.dto';
import { EmailEntity } from 'src/core/entities';
/**
 * Stores the Email factory methods: Create, Update or Delete.
 * It transform the Data Transfer Object to the Email entity to be stored in the database.
 */
@Injectable()
export class EmailFactoryService {
  createIncomingEmail(createdEmailDto: CreateEmailDTO) {
    const newEmail = new EmailEntity();
    newEmail.body = createdEmailDto.body;
    newEmail.from = createdEmailDto.from;
    newEmail.subject = createdEmailDto.subject;
    newEmail.to = createdEmailDto.to;
    newEmail.priority = createdEmailDto.priority;
    newEmail.created = new Date();
    newEmail.received = newEmail.created;
    newEmail.isRead = false;
    newEmail.isActive = true;
    newEmail.type = createdEmailDto.type.toUpperCase();
    newEmail.senderName = createdEmailDto.senderName;
    newEmail.subjectDetails = createdEmailDto.subjectDetails;
    newEmail.cc = createdEmailDto.cc;
    newEmail.bcc = createdEmailDto.bcc;

    return newEmail;
  }
}
