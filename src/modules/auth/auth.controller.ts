import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserDto } from '../../common/dto/register-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from '../../common/dto/login.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() body: RegisterUserDto) {}

  @Post('/login')
  login(@Body() body: LoginDto) {}
}
