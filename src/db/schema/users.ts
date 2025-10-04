import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { records } from './records';
import { currencies } from './currencies';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 50 }).notNull(),
  defaultCurrencyName: varchar('default_currency_name', { length: 3 })
    .references(() => currencies.id)
    .notNull(),
});

export const usersRelations = relations(users, ({ many, one }) => ({
  records: many(records),
  defaultCurrency: one(currencies, {
    fields: [users.defaultCurrencyName],
    references: [currencies.id],
  }),
}));
