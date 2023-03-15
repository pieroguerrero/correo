import { Model } from 'mongoose';
import { IGenericRepository } from 'src/core';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  constructor(repository: Model<T>) {
    this._repository = repository;
  }

  getEmails(email: string): Promise<T[]> {
    const regex = new RegExp(email);
    return this._repository
      .find({ $or: [{ to: { $regex: regex } }, { cc: { $regex: regex } }] })
      .sort({ created: -1 })
      .exec();
  }
}
