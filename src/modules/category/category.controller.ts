import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResponse } from '../../common/responses/category.response';
import type { CategoryEntity } from '../../dao/dao/category.dao';

@Controller('/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAll(): Promise<CategoryResponse[]> {
    return this.categoryService.getAll();
  }

  @Post()
  create(@Body() data: CategoryEntity): Promise<CategoryResponse> {
    return this.categoryService.create(data);
  }

  @Delete(':categoryId')
  updateById(@Param('categoryId') id: string): Promise<CategoryResponse> {
    return this.categoryService.deleteById(id);
  }
}
