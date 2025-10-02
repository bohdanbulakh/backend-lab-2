import { BaseDao } from '../base.dao';
import { Inject, Injectable } from '@nestjs/common';
import type { PostgresDatabase } from '../../db/drizzle.module';
import { POSTGRES_CONNECTION } from '../../db/drizzle.module';
import { categories } from '../../db/schema/categories';

export type CategoryEntity = typeof categories.$inferSelect;

@Injectable()
export class CategoryDao extends BaseDao<typeof categories> {
  constructor(
    @Inject(POSTGRES_CONNECTION)
    protected readonly postgres: PostgresDatabase,
  ) {
    super(categories, postgres);
  }
}
