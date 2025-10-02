import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const category = pgTable('category', {
  id: uuid('id').primaryKey(),
  name: varchar('name', { length: 100 }),
});
