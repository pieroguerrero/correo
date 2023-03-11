import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateEmailDTO } from 'src/core';
import { IncomingEmailGatewayService } from 'src/frameworks/incoming-email-service/incoming-email-gateway.service';
import { EmailUseCases } from 'src/use-cases/email/email.use-case';

@Controller('correo/receive')
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

  @Get()
  async getAll() {
    return this.emailUseCases.getAllEmails();
  }

  @Post()
  async receiveEmail(@Body() createEmailDto: CreateEmailDTO) {
    const email = await this.emailUseCases.createIncomingEmail(createEmailDto);
    if (email['_id']) {
      try {
        if (this.gateway.server.emit('newEmail', email)) {
          return { newEmailId: email['_id'], messageEmitted: 'YES' };
        }
        return { newEmailId: email['_id'], messageEmitted: 'NO' };
      } catch (error) {
        return { newEmailId: email['_id'], messageEmitted: 'NO', error };
      }
    }
  }
}
