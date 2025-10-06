import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { AccessStrategy } from './strategies/access.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule],
  providers: [AuthService, JwtService, AccessStrategy, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
