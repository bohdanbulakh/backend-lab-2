import { pgTable, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './users';
import { records } from './record';

export const currencies = pgTable('currencies', {
  id: varchar('name', { length: 3 }).primaryKey().notNull(),
});

export const currenciesRelations = relations(currencies, ({ many }) => ({
  users: many(users),
  records: many(records),
}));
