import { UserResponse } from '../../common/responses/user.response';
import { Injectable } from '@nestjs/common';
import { UserDao } from '../../dao/dao/user.dao';
import { CurrencyDao } from '../../dao/dao/currency.dao';
import { UpdateUserDto } from '../../common/dto/update-user.dto';
import { users } from '../../db/schema/users';

@Injectable()
export class UserService {
  constructor(
    private readonly userDao: UserDao,
    private readonly currencyDao: CurrencyDao,
  ) {}

  async getAll(): Promise<UserResponse[]> {
    const result = await this.userDao.getAll();
    return result.map((i) => this.removePassword(i));
  }

  async getById(id: string): Promise<UserResponse> {
    return this.removePassword((await this.userDao.getById(id))!);
  }

  async updateById(id: string, data: UpdateUserDto): Promise<UserResponse> {
    if (data.defaultCurrencyName) {
      await this.currencyDao.getOrCreate({ id: data.defaultCurrencyName });
    }

    return this.removePassword((await this.userDao.update(id, data))!);
  }

  async deleteById(id: string): Promise<UserResponse> {
    return this.removePassword((await this.userDao.deleteById(id))!);
  }

  private removePassword(data: typeof users.$inferSelect): UserResponse {
    const { password: _, ...user } = data;
    return user;
  }
}
