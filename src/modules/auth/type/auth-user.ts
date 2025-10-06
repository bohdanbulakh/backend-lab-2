import { InferSelectModel } from 'drizzle-orm';
import { users } from '../../../db/schema/users';

export type AuthUser = Omit<InferSelectModel<typeof users>, 'password'>;
