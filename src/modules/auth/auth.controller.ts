import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { RegisterUserDto } from '../../common/dto/register-user.dto';
import { AuthService } from './auth.service';
import { LocalGuard } from '../../common/guards/local.guard';
import { GetUser } from '../../common/decorators/get-user.decorator';
import type { AuthUser } from './type/auth-user';
import { LoginResponse } from '../../common/dto/login.response';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() body: RegisterUserDto) {}

  @Post('/login')
  @UseGuards(LocalGuard)
  login(@GetUser() user: AuthUser): LoginResponse {
    return this.authService.login(user);
  }
}
