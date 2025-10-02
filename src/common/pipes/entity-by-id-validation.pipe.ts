import { PipeTransform } from '@nestjs/common';
import { BaseDao } from '../../dao/base.dao';
import { InvalidEntityIdException } from '../exceptions/invalid-entity-id.exception';

export abstract class EntityByIdValidationPipe implements PipeTransform {
  protected constructor(private readonly dao: BaseDao<any>) {}

  async transform(id: string): Promise<string> {
    const result = await this.dao.getById(id);
    if (!result) throw new InvalidEntityIdException(this.dao.getTableName());

    return id;
  }
}
