export abstract class IGenericRepository<T> {
  abstract getAll(): Promise<T[]>;

  abstract createIncomingEmail(item: T): Promise<T>;
}
