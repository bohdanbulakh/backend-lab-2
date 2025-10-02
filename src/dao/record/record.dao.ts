import { BaseDao } from '../base.dao';
import { Inject, Injectable } from '@nestjs/common';
import { POSTGRES_CONNECTION } from '../../db/drizzle.module';
import type { PostgresDatabase } from '../../db/drizzle.module';
import { records } from '../../db/schema/record';

@Injectable()
export class RecordDao extends BaseDao<typeof records> {
  constructor(
    @Inject(POSTGRES_CONNECTION)
    protected readonly postgres: PostgresDatabase,
  ) {
    super(records, postgres);
  }
}
