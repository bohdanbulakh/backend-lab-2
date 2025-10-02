import { EntityByIdValidationPipe } from '../entity-by-id-validation.pipe';
import { UserDao } from '../../../dao/dao/user.dao';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserByIdValidationPipe extends EntityByIdValidationPipe {
  constructor(userDao: UserDao) {
    super(userDao);
  }
}
