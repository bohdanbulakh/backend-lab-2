import { Injectable } from '@nestjs/common';
import { UserDao } from '../../dao/dao/user.dao';

@Injectable()
export class AuthService {
  constructor(private readonly userDao: UserDao) {}
}
