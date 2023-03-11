import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './controllers/app.controller';
import { EmailController } from './controllers/email.cotroller';
import { IncomingEmailGatewayModule } from './frameworks/incoming-email-service/incoming-email-gateway.module';
import { DataServicesModule } from './services/data-services.module';
import { EmailUseCasesModule } from './use-cases/email/email-use-cases.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DataServicesModule,
    EmailUseCasesModule,
    IncomingEmailGatewayModule,
  ],
  controllers: [AppController, EmailController],
  providers: [],
})
export class AppModule {}
