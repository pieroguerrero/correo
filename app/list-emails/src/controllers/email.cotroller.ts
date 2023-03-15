import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { EnvConfigFile } from 'src/configuration';
import { EmailUseCases } from 'src/use-cases/email/email.use-case';
import StaticValues from 'src/util/StaticValues';

//TODO: To check how to get the URL path value when the @Controller decorator is executed.
@Controller(EnvConfigFile.serviceURL.getValue())
export class EmailController {
  constructor(
    /**
     * Property that contains the different Use Cases of the Email entity.
     */
    private emailUseCases: EmailUseCases,
  ) {}

  @Get('inbox')
  async listEmails(@Query('email') email: string) {
    if (!email || !email.trim().match(StaticValues.EmailRegex))
      throw new HttpException('Email was NOT provided', HttpStatus.BAD_REQUEST);

    return this.emailUseCases.getEmails(email.trim().toLowerCase());
  }
}
