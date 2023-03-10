import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATA_BASE_CONFIGURATION } from 'src/configuration';
import { IDataServices } from 'src/core';
import { Email, EmailSchema } from './models';
import { MongoDataServices } from './mongo-data-services.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Email.name, schema: EmailSchema }]),
    MongooseModule.forRoot(DATA_BASE_CONFIGURATION.dbConnectionString),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
