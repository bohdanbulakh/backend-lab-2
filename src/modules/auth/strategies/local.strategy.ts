import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserDao } from '../../../dao/dao/user.dao';
import { InferSelectModel } from 'drizzle-orm';
import { users } from '../../../db/schema/users';
import { InvalidEntityIdException } from '../../../common/exceptions/invalid-entity-id.exception';
import { UserResponse } from '../../../common/responses/user.response';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userDao: UserDao) {
    super();
  }

  async validate(username: string, password: string): Promise<UserResponse> {
    const user: InferSelectModel<typeof users> | undefined =
      await this.userDao.getByUsername(username);

    console.log(username);

    if (!user) throw new InvalidEntityIdException('users');

    await this.validatePassword(password, user.password);
    const { password: _, ...result } = user;
    return result;
  }

  private async validatePassword(password: string, hash: string) {
    const matches = await bcrypt.compare(password, hash);
    if (!matches) throw new UnauthorizedException('The password is incorrect');
  }
}
