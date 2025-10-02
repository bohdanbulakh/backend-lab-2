import { EntityByIdValidationPipe } from '../entity-by-id-validation.pipe';
import { Injectable } from '@nestjs/common';
import { CategoryDao } from '../../../dao/dao/category.dao';

@Injectable()
export class CategoryByIdValidationPipe extends EntityByIdValidationPipe {
  constructor(categoryDao: CategoryDao) {
    super(categoryDao);
  }
}
