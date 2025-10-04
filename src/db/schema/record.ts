import {
  doublePrecision,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';
import { users } from './users';
import { categories } from './categories';
import { relations } from 'drizzle-orm';
import { currencies } from './currencies';

export const records = pgTable('records', {
  id: uuid('id').primaryKey().defaultRandom(),
  sum: doublePrecision('sum').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  userId: uuid('user_id')
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),

  categoryId: uuid('categoryId')
    .references(() => categories.id)
    .notNull(),

  currencyName: varchar('default_currency_name', { length: 3 })
    .references(() => currencies.name)
    .notNull(),
});

export const recordsRelations = relations(records, ({ one }) => ({
  user: one(users, {
    fields: [records.userId],
    references: [users.id],
  }),
  category: one(categories, {
    fields: [records.categoryId],
    references: [categories.id],
  }),
  currency: one(currencies, {
    fields: [records.currencyName],
    references: [currencies.name],
  }),
}));
