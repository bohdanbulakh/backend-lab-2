import { InvalidEntityIdException } from '../common/exceptions/invalid-entity-id.exception';
import { randomUUID } from 'node:crypto';

export type EntityWithId<T> = T & { id: string };

export class FakeDao<Data extends object> {
  private readonly data = new Map<string, Data>();

  getAll(): EntityWithId<Data>[] {
    const result = Array.from(this.data);
    return result.map(([id, data]) => ({
      id,
      ...data,
    }));
  }

  getById(id: string): EntityWithId<Data> {
    this.exists(id);

    return {
      id,
      ...this.data.get(id)!,
    };
  }

  updateById(id: string, data: Data): EntityWithId<Data> {
    this.exists(id);
    this.data.set(id, data);

    return {
      id,
      ...data,
    };
  }

  deleteById(id: string): EntityWithId<Data> {
    const result = this.getById(id);
    this.data.delete(id);

    return result;
  }

  create(data: Data): EntityWithId<Data> {
    const id = randomUUID();
    this.data.set(id, data);

    return {
      id,
      ...data,
    };
  }

  private exists(id: string): true | never {
    const result = this.data.has(id);
    if (!result) throw new InvalidEntityIdException('User');
    return true;
  }
}
