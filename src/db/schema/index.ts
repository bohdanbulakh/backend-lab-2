import { users } from './users';
import { categories } from './categories';
import { records } from './record';
import { currencies } from './currencies';

export const schema = {
  users,
  records,
  categories,
  currencies,
} as const;
