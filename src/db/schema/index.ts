import { users } from './users';
import { categories } from './categories';
import { records } from './record';

export const schema = {
  users,
  records,
  categories,
} as const;
