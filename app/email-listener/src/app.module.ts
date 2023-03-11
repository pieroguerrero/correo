import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { DataServicesModule } from './services/data-services.module';
import { EmailUseCasesModule } from './use-cases/email/email-use-cases.module';
import { EmailController } from './controllers/email.cotroller';
import { IncomingEmailGatewayModule } from './frameworks/incoming-email-service/incoming-email-gateway.module';

@Module({
  imports: [
    DataServicesModule,
    EmailUseCasesModule,
    IncomingEmailGatewayModule,
  ],
  controllers: [AppController, EmailController],
  providers: [],
})
export class AppModule {}
