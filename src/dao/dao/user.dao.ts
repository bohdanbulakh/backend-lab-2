import { BaseDao } from '../base.dao';
import { users } from '../../db/schema/users';
import { Inject, Injectable } from '@nestjs/common';
import type { PostgresDatabase } from '../../db/drizzle.module';
import { POSTGRES_CONNECTION } from '../../db/drizzle.module';
import { eq, InferSelectModel } from 'drizzle-orm';

export type UserEntity = typeof users.$inferSelect;

@Injectable()
export class UserDao extends BaseDao<typeof users> {
  constructor(
    @Inject(POSTGRES_CONNECTION)
    protected readonly postgres: PostgresDatabase,
  ) {
    super(users, postgres);
  }

  async getByUsername(
    username: string,
  ): Promise<InferSelectModel<typeof users> | undefined> {
    const [result] = await this.postgres
      .select()
      .from(users)
      .where(eq(users.username, username));

    return result;
  }
}
