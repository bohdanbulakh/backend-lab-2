import { FakeDao } from '../fake-dao';
import { CategoryEntity } from './category.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryFakeDao extends FakeDao<CategoryEntity> {}
