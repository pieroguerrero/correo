import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoGenericRepository } from './mongo-generic-repository';
import { IDataServices } from 'src/core';
import { Email, EmailDocument } from './models';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  emails: MongoGenericRepository<Email>;

  constructor(
    @InjectModel(Email.name)
    private EmailRepository: Model<EmailDocument>,
  ) {}

  onApplicationBootstrap() {
    this.emails = new MongoGenericRepository<Email>(this.EmailRepository);
  }
}
