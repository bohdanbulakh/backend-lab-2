import { UserResponse } from '../../common/responses/user.response';
import { Injectable } from '@nestjs/common';
import { UserDao } from '../../dao/dao/user.dao';
import { CreateUserDto } from '../../common/dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDao) {}

  getAll(): Promise<UserResponse[]> {
    return this.userDao.getAll();
  }

  async getById(id: string): Promise<UserResponse> {
    return (await this.userDao.getById(id))!;
  }

  create(data: CreateUserDto): Promise<UserResponse> {
    return this.userDao.create(data);
  }

  async deleteById(id: string): Promise<UserResponse> {
    return (await this.userDao.deleteById(id))!;
  }
}
