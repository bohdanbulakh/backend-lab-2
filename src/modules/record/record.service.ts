import { InvalidEntityIdException } from '../../common/exceptions/invalid-entity-id.exception';
import { Injectable } from '@nestjs/common';
import { RecordResponse } from '../../common/responses/record.response';
import { RecordFakeDao } from '../../dao/record/record.fake-dao';
import { CreateRecordDto } from '../../common/dto/create-record.dto';
import { GetRecordsQueryDto } from '../../common/dto/get-records-query.dto';
import { isEmpty } from '../../common/utils/object.utils';
import { EmptyQueryException } from '../../common/exceptions/empty-query.exception';

@Injectable()
export class RecordService {
  constructor(private readonly recordDao: RecordFakeDao) {}

  getAll(query: GetRecordsQueryDto): RecordResponse[] {
    if (isEmpty(query)) throw new EmptyQueryException();

    return this.recordDao
      .getAll()
      .filter(
        ({ categoryId }) =>
          !query.categoryId || categoryId === query.categoryId,
      )
      .filter(({ userId }) => !query.userId || userId === query.userId);
  }

  getById(id: string): RecordResponse {
    const result = this.recordDao.getById(id);
    if (!result) throw new InvalidEntityIdException('Record');

    return result;
  }

  create(data: CreateRecordDto): RecordResponse {
    return this.recordDao.create({
      ...data,
      createdAt: new Date(),
    });
  }

  deleteById(id: string): RecordResponse {
    const result = this.recordDao.deleteById(id);
    if (!result) throw new InvalidEntityIdException('Record');

    return result;
  }
}
