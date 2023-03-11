import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvConfigFile } from 'src/configuration';
import { IDataServices } from 'src/core';
import { Email, EmailSchema } from './models';
import { MongoDataServices } from './mongo-data-services.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Email.name, schema: EmailSchema }]),
    //Getting the environmental data on 'Import' time:
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>(EnvConfigFile.dbConnectionString.name),
      }),
      inject: [ConfigService],
    }),
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
