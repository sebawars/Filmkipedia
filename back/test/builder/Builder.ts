import { EntityManager } from 'typeorm';
import { getProvider } from '../test.util';

export abstract class Builder<T> {
  protected instance: T;

  build(): T {
    return this.instance;
  }

  buildAndPersist(): Promise<T> {
    return getProvider(EntityManager).save(this.instance);
  }
}
