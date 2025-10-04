import { Injectable } from '@nestjs/common';
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
    return this.currencyDao.create({ id: data.name });
  }

  async deleteById(id: string): Promise<CurrencyEntity> {
    return (await this.currencyDao.deleteById(id))!;
  }
}
