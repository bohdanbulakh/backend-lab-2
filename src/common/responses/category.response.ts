import { CategoryEntity } from '../../dao/dao/category.dao';

export type CategoryResponse = CategoryEntity & {
  id: string;
};
