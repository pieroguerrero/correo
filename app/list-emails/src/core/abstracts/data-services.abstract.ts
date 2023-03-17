import { Injectable } from '@nestjs/common';
import { EmailEntity } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';
/**
 * Abstractly stores the abstract entities that provide different services.
 */
@Injectable()
export abstract class IDataServices {
  abstract emails: IGenericRepository<EmailEntity>;
}
