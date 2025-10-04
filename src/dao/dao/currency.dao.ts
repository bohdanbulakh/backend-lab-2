import { BaseDao } from '../base.dao';
import { Inject, Injectable } from '@nestjs/common';
import type { PostgresDatabase } from '../../db/drizzle.module';
import { POSTGRES_CONNECTION } from '../../db/drizzle.module';
import { currencies } from '../../db/schema/currencies';
import { count, eq, InferInsertModel } from 'drizzle-orm';
import { users } from '../../db/schema/users';

export type CurrencyEntity = typeof currencies.$inferSelect;

@Injectable()
export class CurrencyDao extends BaseDao<typeof currencies> {
  constructor(
    @Inject(POSTGRES_CONNECTION)
    protected readonly postgres: PostgresDatabase,
  ) {
    super(currencies, postgres);
  }

  async getOrCreate(data: InferInsertModel<typeof currencies>) {
    const result = await this.getById(data.id);
    return result ?? (await this.create(data));
  }

  async getUsersCount(id: string): Promise<number> {
    const [res] = await this.postgres
      .select({ count: count() })
      .from(currencies)
      .innerJoin(users, eq(users.defaultCurrencyName, id))
      .where(eq(currencies.id, id));

    return res.count;
  }
}
