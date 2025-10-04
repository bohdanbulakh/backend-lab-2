import { BaseDao } from '../base.dao';
import { Inject, Injectable } from '@nestjs/common';
import type { PostgresDatabase } from '../../db/drizzle.module';
import { POSTGRES_CONNECTION } from '../../db/drizzle.module';
import { currencies } from '../../db/schema/currencies';
import { InferInsertModel } from 'drizzle-orm';

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
}
