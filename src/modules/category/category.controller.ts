import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResponse } from '../../common/responses/category.response';
import { CategoryEntity } from '../../dao/category/category.entity';

@Controller('/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAll(): CategoryResponse[] {
    return this.categoryService.getAll();
  }

  @Post()
  create(@Body() data: CategoryEntity): CategoryResponse {
    return this.categoryService.create(data);
  }

  @Delete(':categoryId')
  updateById(@Param('categoryId') id: string): CategoryResponse {
    return this.categoryService.deleteById(id);
  }
}
