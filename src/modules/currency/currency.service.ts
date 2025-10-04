import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CurrencyDao, CurrencyEntity } from '../../dao/dao/currency.dao';
import { CreateCurrencyDto } from '../../common/dto/create-currency.dto';

@Injectable()
export class CurrencyService {
  constructor(private readonly currencyDao: CurrencyDao) {}

  getAll(): Promise<CurrencyEntity[]> {
    return this.currencyDao.getAll();
  }

  async getById(id: string): Promise<CurrencyEntity> {
    return (await this.currencyDao.getById(id))!;
  }

  async create(data: CreateCurrencyDto): Promise<CurrencyEntity> {
    const exists = await this.currencyDao.getById(data.name);
    if (exists) throw new ConflictException('Such currency already exist');

    return this.currencyDao.create({ id: data.name });
  }

  async deleteById(id: string): Promise<CurrencyEntity> {
    const usedByCount = await this.currencyDao.getUsersCount(id);
    if (usedByCount > 0) {
      throw new BadRequestException(
        `Unable to delete currency because ${usedByCount} user${usedByCount === 1 ? '' : 's'} use${usedByCount === 1 ? 's' : ''} this currency as default`,
      );
    }

    return (await this.currencyDao.deleteById(id))!;
  }
}
