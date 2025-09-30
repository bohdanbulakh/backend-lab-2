import { UserEntity } from '../../dao/user/user.entity';
import { InvalidEntityIdException } from '../../common/exceptions/invalid-entity-id.exception';
import { UserResponse } from '../../common/responses/user.response';
import { UserFakeDao } from '../../dao/user/user.fake-dao';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserFakeDao) {}

  getById(id: string): UserResponse {
    const result = this.userDao.getById(id);
    if (!result) throw new InvalidEntityIdException('User');

    return result;
  }

  create(data: UserEntity): UserResponse {
    return this.userDao.create(data);
  }

  updateById(id: string, data: UserEntity): UserResponse {
    const result = this.userDao.updateById(id, data);
    if (!result) throw new InvalidEntityIdException('User');

    return result;
  }

  deleteById(id: string) {
    const result = this.userDao.deleteById(id);
    if (!result) throw new InvalidEntityIdException('User');

    return result;
  }
}
