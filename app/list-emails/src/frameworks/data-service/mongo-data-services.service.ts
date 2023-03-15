import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoGenericRepository } from './mongo-generic-repository';
import { IDataServices } from 'src/core';
import { EmailModel, EmailDocument } from './models';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  emails: MongoGenericRepository<EmailModel>;

  constructor(
    @InjectModel(EmailModel.name)
    private EmailRepository: Model<EmailDocument>,
  ) {}

  onApplicationBootstrap() {
    this.emails = new MongoGenericRepository<EmailModel>(this.EmailRepository);
  }
}
