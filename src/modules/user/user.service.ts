import { UserResponse } from '../../common/responses/user.response';
import { Injectable } from '@nestjs/common';
import { UserDao } from '../../dao/dao/user.dao';
import { CreateUserDto } from '../../common/dto/create-user.dto';
import { CurrencyDao } from '../../dao/dao/currency.dao';
import { UpdateUserDto } from '../../common/dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userDao: UserDao,
    private readonly currencyDao: CurrencyDao,
  ) {}

  getAll(): Promise<UserResponse[]> {
    return this.userDao.getAll();
  }

  async getById(id: string): Promise<UserResponse> {
    return (await this.userDao.getById(id))!;
  }

  async create(data: CreateUserDto): Promise<UserResponse> {
    await this.currencyDao.getOrCreate({ id: data.defaultCurrencyName });

    return this.userDao.create(data);
  }

  async updateById(id: string, data: UpdateUserDto): Promise<UserResponse> {
    if (data.defaultCurrencyName) {
      await this.currencyDao.getOrCreate({ id: data.defaultCurrencyName });
    }

    return (await this.currencyDao.update(id, data)) as UserResponse;
  }

  async deleteById(id: string): Promise<UserResponse> {
    return (await this.userDao.deleteById(id))!;
  }
}
