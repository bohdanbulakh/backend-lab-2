import { InvalidEntityIdException } from '../../common/exceptions/invalid-entity-id.exception';
import { Injectable } from '@nestjs/common';
import { CategoryResponse } from '../../common/responses/category.response';
import { CategoryDao } from '../../dao/dao/category.dao';
import { CreateCategoryDto } from '../../common/dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryDao: CategoryDao) {}

  getAll(): Promise<CategoryResponse[]> {
    return this.categoryDao.getAll();
  }

  create(data: CreateCategoryDto): Promise<CategoryResponse> {
    return this.categoryDao.create(data);
  }

  async deleteById(id: string): Promise<CategoryResponse> {
    const result = await this.categoryDao.deleteById(id);
    if (!result) throw new InvalidEntityIdException('Category');

    return result;
  }
}
