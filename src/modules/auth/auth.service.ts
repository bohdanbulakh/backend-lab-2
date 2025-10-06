import { Injectable } from '@nestjs/common';
import { UserDao } from '../../dao/dao/user.dao';
import { JwtPayload } from './type/jwt-payload';
import { AuthUser } from './type/auth-user';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '../../config/config.service';
import { LoginResponse } from '../../common/dto/login.response';

@Injectable()
export class AuthService {
  constructor(
    private readonly userDao: UserDao,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: AuthUser): LoginResponse {
    const payload: JwtPayload = { sub: user.id };

    return {
      accessToken: this.jwtService.sign(payload, {
        expiresIn: this.configService.accessTtl,
        secret: this.configService.accessSecret,
      }),
    };
  }
}
