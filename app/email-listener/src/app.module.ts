import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { DataServicesModule } from './services/data-services.module';
import { EmailUseCasesModule } from './use-cases/email/email-use-cases.module';
import { EmailController } from './controllers/email.cotroller';

@Module({
  imports: [DataServicesModule, EmailUseCasesModule],
  controllers: [AppController, EmailController],
  providers: [],
})
export class AppModule {}
