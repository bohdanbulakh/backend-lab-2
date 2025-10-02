import { BaseDao } from '../base.dao';
import { users } from '../../db/schema/users';
import { Inject, Injectable } from '@nestjs/common';
import type { PostgresDatabase } from '../../db/drizzle.module';
import { POSTGRES_CONNECTION } from '../../db/drizzle.module';

export type UserEntity = typeof users.$inferSelect;

@Injectable()
export class UserDao extends BaseDao<typeof users> {
  constructor(
    @Inject(POSTGRES_CONNECTION)
    protected readonly postgres: PostgresDatabase,
  ) {
    super(users, postgres);
  }
}
