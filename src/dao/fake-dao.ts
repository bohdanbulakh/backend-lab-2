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

  getById(id: string): EntityWithId<Data> | undefined {
    if (!this.exists(id)) return;

    return {
      id,
      ...this.data.get(id)!,
    };
  }

  updateById(id: string, data: Data): EntityWithId<Data> | undefined {
    if (!this.exists(id)) return;
    this.data.set(id, data);

    return {
      id,
      ...data,
    };
  }

  deleteById(id: string): EntityWithId<Data> | undefined {
    if (!this.exists(id)) return;

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

  exists(id: string): boolean {
    return this.data.has(id);
  }
}
