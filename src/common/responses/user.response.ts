import { InferSelectModel } from 'drizzle-orm';
import { users } from '../../db/schema/users';

export type UserResponse = Omit<InferSelectModel<typeof users>, 'password'>;
