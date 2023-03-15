import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services.module';
import { EmailUseCases } from './email.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [EmailUseCases],
  exports: [EmailUseCases],
})
export class EmailUseCasesModule {}
