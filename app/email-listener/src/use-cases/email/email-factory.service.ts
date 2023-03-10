import { Injectable } from '@nestjs/common';
import {
  CreateEmailDTO,
  UpdateEmailDTO,
} from 'src/core/data-transfer-objects/email.dto';
import { Email } from 'src/core/entities';

@Injectable()
export class EmailFactoryService {
  createNewEmail(createdEmailDto: CreateEmailDTO) {
    const newEmail = new Email();
    newEmail.body = createdEmailDto.body;
    newEmail.from = createdEmailDto.from;
    newEmail.subject = createdEmailDto.subject;
    newEmail.to = createdEmailDto.to;
    newEmail.status = 'ACTIVE';

    return newEmail;
  }

  updateEmail(updatedEmailDto: UpdateEmailDTO) {
    const newEmail = new Email();
    newEmail.body = updatedEmailDto.body;
    newEmail.from = updatedEmailDto.from;
    newEmail.subject = updatedEmailDto.subject;
    newEmail.to = updatedEmailDto.to;

    return newEmail;
  }
}
