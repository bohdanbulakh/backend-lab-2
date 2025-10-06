import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '../../../config/config.service';
import { UserDao } from '../../../dao/dao/user.dao';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InvalidEntityIdException } from '../../../common/exceptions/invalid-entity-id.exception';
import { JwtPayload } from '../type/jwt-payload';
import { AuthUser } from '../type/auth-user';

@Injectable()
export class AccessStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userDao: UserDao,
    configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.accessSecret,
      ignoreExpiration: false,
      passReqToCallback: true,
    });
  }

  async validate(
    payload: JwtPayload,
  ): Promise<AuthUser> {
    if (!payload) throw new UnauthorizedException();

    const user = await this.userDao.getById(payload.sub);
    if (!user) throw new InvalidEntityIdException('users');

    const { password, ...result } = user;
    return result;
  }
}
