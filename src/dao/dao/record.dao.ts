import { BaseDao } from '../base.dao';
import { Inject, Injectable } from '@nestjs/common';
import type { PostgresDatabase } from '../../db/drizzle.module';
import { POSTGRES_CONNECTION } from '../../db/drizzle.module';
import { records } from '../../db/schema/record';

export type RecordEntity = typeof records.$inferSelect;

@Injectable()
export class RecordDao extends BaseDao<typeof records> {
  constructor(
    @Inject(POSTGRES_CONNECTION)
    protected readonly postgres: PostgresDatabase,
  ) {
    super(records, postgres);
  }
}
