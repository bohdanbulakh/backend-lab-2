import { BaseDao } from '../base.dao';
import { Inject, Injectable } from '@nestjs/common';
import { POSTGRES_CONNECTION } from '../../db/drizzle.module';
import type { PostgresDatabase } from '../../db/drizzle.module';
import { categories } from '../../db/schema/categories';

@Injectable()
export class CategoryDao extends BaseDao<typeof categories> {
  constructor(
    @Inject(POSTGRES_CONNECTION)
    protected readonly postgres: PostgresDatabase,
  ) {
    super(categories, postgres);
  }
}
