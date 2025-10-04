import { Injectable, PipeTransform } from '@nestjs/common';
import { CategoryDao } from '../../../dao/dao/category.dao';
import { InvalidEntityIdException } from '../../exceptions/invalid-entity-id.exception';
import { UserDao } from '../../../dao/dao/user.dao';
import { CreateRecordDto } from '../../dto/create-record.dto';

@Injectable()
export class CreateRecordValidationPipe implements PipeTransform {
  constructor(
    private readonly categoryDao: CategoryDao,
    private readonly userDao: UserDao,
  ) {}

  async transform(data: CreateRecordDto): Promise<CreateRecordDto> {
    const category = await this.categoryDao.getById(data.categoryId);
    if (!category)
      throw new InvalidEntityIdException(this.categoryDao.getTableName());

    const user = await this.userDao.getById(data.userId);
    if (!user) throw new InvalidEntityIdException(this.userDao.getTableName());

    return data;
  }
}
