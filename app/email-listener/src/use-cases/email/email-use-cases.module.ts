import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services.module';
import { EmailFactoryService } from './email-factory.service';
import { EmailUseCases } from './email.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [EmailFactoryService, EmailUseCases],
  exports: [EmailFactoryService, EmailUseCases],
})
export class EmailUseCasesModule {}
