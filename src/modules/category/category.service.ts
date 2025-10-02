import { InvalidEntityIdException } from '../../common/exceptions/invalid-entity-id.exception';
import { Injectable } from '@nestjs/common';
import { CategoryResponse } from '../../common/responses/category.response';
import { CategoryEntity } from '../../dao/category/category.entity';
import { CategoryDao } from '../../dao/category/category.dao';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryDao: CategoryDao) {}

  getAll(): Promise<CategoryResponse[]> {
    return this.categoryDao.getAll();
  }

  create(data: CategoryEntity): Promise<CategoryResponse> {
    return this.categoryDao.create(data);
  }

  async deleteById(id: string): Promise<CategoryResponse> {
    const result = await this.categoryDao.deleteById(id);
    if (!result) throw new InvalidEntityIdException('Category');

    return result;
  }
}
