import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EnvConfigFile } from 'src/configuration';
import { CreateEmailDTO } from 'src/core';
import { IncomingEmailGatewayService } from 'src/frameworks/incoming-email-service/incoming-email-gateway.service';
import { EmailUseCases } from 'src/use-cases/email/email.use-case';
import StaticValues from 'src/util/StaticValues';

@Controller(EnvConfigFile.serviceURL.getValue())
export class EmailController {
  constructor(
    /**
     * Property that contains the different Use Cases of the Email entity.
     */
    private emailUseCases: EmailUseCases,
    /**
     * Property that contains the socket.io instance.
     */
    private gateway: IncomingEmailGatewayService,
  ) {}

  /**
   * Receives an email and pushes it in a notification via Web socket.
   * @param createEmailDto - Email create Data Transfer Object
   * @returns
   */
  @Post()
  async receiveEmail(@Body() createEmailDto: CreateEmailDTO) {
    const email = await this.emailUseCases.createIncomingEmail(createEmailDto);

    if (!email['_id'])
      throw new HttpException(
        'Email was not created',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    //Get unique emails to notify
    const emailAddressesToNotify = new Set([
      ...email.to.split(','),
      ...email.cc.split(','),
    ]);

    let countEmails = 0;
    //Loop and send notifications
    emailAddressesToNotify.forEach((emailAddress) => {
      if (
        emailAddress.trim().match(StaticValues.EmailRegex) &&
        this.gateway.server.emit(emailAddress.trim().toLowerCase(), email)
      )
        countEmails++;
    });

    return {
      newEmailId: email['_id'],
      messagesSent:
        countEmails.toString() + '/' + emailAddressesToNotify.size.toString(),
    };
  }
}
