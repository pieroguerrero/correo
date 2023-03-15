/**
 * Provides the abstrac definitions of the services an entity T can provide.
 */
export abstract class IGenericRepository<T> {
  abstract createIncomingEmail(item: T): Promise<T>;
}
