import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from 'src/controllers/app.controller';
import { EmailController } from 'src/controllers/email.cotroller';
import { CreateEmailDTO } from 'src/core';
import { EmailPriority } from 'src/core/entities/email-priority.entity';
import { EmailType } from 'src/core/entities/email-type.entity';
import { IncomingEmailGatewayModule } from 'src/frameworks/incoming-email-service/incoming-email-gateway.module';
import { DataServicesModule } from 'src/services/data-services.module';
import { EmailUseCasesModule } from 'src/use-cases/email/email-use-cases.module';

describe('EmailController in Email Listener service', () => {
  let emailController: EmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        DataServicesModule,
        IncomingEmailGatewayModule,
        EmailUseCasesModule,
      ],
      controllers: [AppController, EmailController],
      providers: [],
    }).compile();

    emailController = module.get<EmailController>(EmailController);
  });

  it('Frist try receiving an emails', async () => {
    const email: CreateEmailDTO = {
      from: 'email1@email.com',
      senderName: 'John Doe 1',
      to: 'test1@test.com',
      cc: 'email5@email.com',
      bcc: '',
      subject: 'Subject 13',
      subjectDetails:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      body: 'The content 10',
      priority: EmailPriority.HIGH,
      type: EmailType.TEXT,
    };
    const response = await emailController.receiveEmail(email);
    expect(response.messagesSent).not.toBeUndefined();
  });
});
