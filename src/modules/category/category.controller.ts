import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResponse } from '../../common/responses/category.response';
import { CreateCategoryDto } from '../../common/dto/create-category.dto';
import { CategoryByIdValidationPipe } from '../../common/pipes/pipes/category-by-id-validation.pipe';
import { AccessGuard } from '../../common/guards/access.guard';

@Controller('/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(AccessGuard)
  @Get()
  getAll(): Promise<CategoryResponse[]> {
    return this.categoryService.getAll();
  }

  @UseGuards(AccessGuard)
  @Post()
  create(@Body() data: CreateCategoryDto): Promise<CategoryResponse> {
    return this.categoryService.create(data);
  }

  @UseGuards(AccessGuard)
  @Delete(':categoryId')
  deleteById(
    @Param('categoryId', CategoryByIdValidationPipe) id: string,
  ): Promise<CategoryResponse> {
    return this.categoryService.deleteById(id);
  }
}
