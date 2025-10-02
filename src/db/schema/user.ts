import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: uuid('id').primaryKey(),
  name: varchar('name', { length: 50 }),
});
