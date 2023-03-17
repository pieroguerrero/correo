import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from 'src/controllers/app.controller';
import { EmailController } from 'src/controllers/email.cotroller';
import { DataServicesModule } from 'src/services/data-services.module';
import { EmailUseCasesModule } from 'src/use-cases/email/email-use-cases.module';

describe('EmailController in List Emails service', () => {
  let emailController: EmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        //DataServicesModule,
        EmailUseCasesModule,
      ],
      controllers: [AppController, EmailController],
      providers: [],
    }).compile();

    emailController = module.get<EmailController>(EmailController);
  });

  it('Return an empty list of Emails', async () => {
    emailController.listEmails = jest
      .fn()
      .mockImplementation(async (email: string) => []);

    const response = await emailController.listEmails('email@email.com');
    expect(response.length).toBe(0);
  });

  it('Successfully handles a bad Email address parameter', async () => {
    try {
      await emailController.listEmails('');
    } catch (error) {
      expect(error.status).toBe(400);
      expect(error.message).toBe('Email was NOT provided');
    }
  });
});
