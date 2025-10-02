import { doublePrecision, pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { user } from './user';
import { category } from './category';
import { relations } from 'drizzle-orm';

export const records = pgTable('records', {
  id: uuid('id').primaryKey().defaultRandom(),
  sum: doublePrecision('sum').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  userId: uuid('user_id')
    .references(() => user.id, { onDelete: 'cascade' })
    .notNull(),

  categoryId: uuid('categoryId')
    .references(() => category.id)
    .notNull(),
});

export const recordRelations = relations(records, ({ one }) => ({
  user: one(user, {
    fields: [records.userId],
    references: [user.id],
  }),
  category: one(category, {
    fields: [records.categoryId],
    references: [category.id],
  }),
}));
