import { UserResponse } from '../../common/responses/user.response';
import { Injectable } from '@nestjs/common';
import { UserDao } from '../../dao/dao/user.dao';
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

  async updateById(id: string, data: UpdateUserDto): Promise<UserResponse> {
    if (data.defaultCurrencyName) {
      await this.currencyDao.getOrCreate({ id: data.defaultCurrencyName });
    }

    return (await this.userDao.update(id, data)) as UserResponse;
  }

  async deleteById(id: string): Promise<UserResponse> {
    return (await this.userDao.deleteById(id))!;
  }
}
