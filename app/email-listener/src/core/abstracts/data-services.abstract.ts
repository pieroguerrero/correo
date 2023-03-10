import { Email } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract emails: IGenericRepository<Email>;
}
