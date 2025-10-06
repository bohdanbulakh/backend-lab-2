import { ConflictException, Injectable } from '@nestjs/common';
import { UserDao } from '../../dao/dao/user.dao';
import { JwtPayload } from './type/jwt-payload';
import { AuthUser } from './type/auth-user';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '../../config/config.service';
import { LoginResponse } from '../../common/dto/login.response';
import { RegisterUserDto } from '../../common/dto/register-user.dto';
import { UserResponse } from '../../common/responses/user.response';
import { CurrencyDao } from '../../dao/dao/currency.dao';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userDao: UserDao,
    private readonly currencyDao: CurrencyDao,
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

  async register(data: RegisterUserDto): Promise<UserResponse> {
    if (await this.userDao.getByUsername(data.username)) {
      throw new ConflictException(
        `User with such username (${data.username}) already registered`,
      );
    }

    data.password = await this.hashPassword(data.password);
    await this.currencyDao.getOrCreate({ id: data.defaultCurrencyName });

    return this.userDao.create(data);
  }

  async hashPassword(password: string) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
  }
}
