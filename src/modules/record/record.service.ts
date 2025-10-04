import { Injectable } from '@nestjs/common';
import { RecordResponse } from '../../common/responses/record.response';
import { CreateRecordDto } from '../../common/dto/create-record.dto';
import { GetRecordsQueryDto } from '../../common/dto/get-records-query.dto';
import { isEmpty } from '../../common/utils/object.utils';
import { EmptyQueryException } from '../../common/exceptions/empty-query.exception';
import { RecordDao } from '../../dao/dao/record.dao';
import { UserDao } from '../../dao/dao/user.dao';
import { CurrencyDao } from '../../dao/dao/currency.dao';

@Injectable()
export class RecordService {
  constructor(
    private readonly userDao: UserDao,
    private readonly recordDao: RecordDao,
    private readonly currencyDao: CurrencyDao,
  ) {}

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
    return (await this.recordDao.getById(id))!;
  }

  async create(data: CreateRecordDto): Promise<RecordResponse> {
    const user = (await this.userDao.getById(data.userId))!;

    if (data.currencyName) {
      await this.currencyDao.getOrCreate({
        id: data.currencyName,
      });
    }

    return this.recordDao.create({
      ...data,
      currencyName: data.currencyName ?? user.defaultCurrencyName,
      createdAt: new Date(),
    });
  }

  async deleteById(id: string): Promise<RecordResponse> {
    return (await this.recordDao.deleteById(id))!;
  }
}
