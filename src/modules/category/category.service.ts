import { InvalidEntityIdException } from '../../common/exceptions/invalid-entity-id.exception';
import { Injectable } from '@nestjs/common';
import { CategoryFakeDao } from '../../dao/category/category.fake-dao';
import { CategoryResponse } from '../../common/responses/category.response';
import { CategoryEntity } from '../../dao/category/category.entity';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryDao: CategoryFakeDao) {}

  getAll(): CategoryResponse[] {
    return this.categoryDao.getAll();
  }

  create(data: CategoryEntity): CategoryResponse {
    return this.categoryDao.create(data);
  }

  deleteById(id: string) {
    const result = this.categoryDao.deleteById(id);
    if (!result) throw new InvalidEntityIdException('Category');

    return result;
  }
}
