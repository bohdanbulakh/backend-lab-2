import { UserEntity } from '../../dao/user/user.entity';
import { InvalidEntityIdException } from '../../common/exceptions/invalid-entity-id.exception';
import { UserResponse } from '../../common/responses/user.response';
import { Injectable } from '@nestjs/common';
import { UserDao } from '../../dao/user/user.dao';

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDao) {}

  getAll(): Promise<UserResponse[]> {
    return this.userDao.getAll();
  }

  async getById(id: string): Promise<UserResponse> {
    const result = await this.userDao.getById(id);
    if (!result) throw new InvalidEntityIdException('User');

    return result;
  }

  create(data: UserEntity): Promise<UserResponse> {
    return this.userDao.create(data);
  }

  async deleteById(id: string): Promise<UserResponse> {
    const result = await this.userDao.deleteById(id);
    if (!result) throw new InvalidEntityIdException('User');

    return result;
  }
}
