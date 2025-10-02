import { InvalidEntityIdException } from '../../common/exceptions/invalid-entity-id.exception';
import { Injectable } from '@nestjs/common';
import { RecordResponse } from '../../common/responses/record.response';
import { CreateRecordDto } from '../../common/dto/create-record.dto';
import { GetRecordsQueryDto } from '../../common/dto/get-records-query.dto';
import { isEmpty } from '../../common/utils/object.utils';
import { EmptyQueryException } from '../../common/exceptions/empty-query.exception';
import { RecordDao } from '../../dao/dao/record.dao';

@Injectable()
export class RecordService {
  constructor(private readonly recordDao: RecordDao) {}

  async getAll(query: GetRecordsQueryDto): Promise<RecordResponse[]> {
    if (isEmpty(query)) throw new EmptyQueryException();
    const data = await this.recordDao.getAll();

    return data
      .filter(
        ({ categoryId }) =>
          !query.categoryId || categoryId === query.categoryId,
      )
      .filter(({ userId }) => !query.userId || userId === query.userId);
  }

  async getById(id: string): Promise<RecordResponse> {
    const result = await this.recordDao.getById(id);
    if (!result) throw new InvalidEntityIdException('Record');

    return result;
  }

  create(data: CreateRecordDto): Promise<RecordResponse> {
    return this.recordDao.create({
      ...data,
      createdAt: new Date(),
    });
  }

  async deleteById(id: string): Promise<RecordResponse> {
    const result = await this.recordDao.deleteById(id);
    if (!result) throw new InvalidEntityIdException('Record');

    return result;
  }
}
