import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { RegisterUserDto } from '../../common/dto/register-user.dto';
import { AuthService } from './auth.service';
import { LocalGuard } from '../../common/guards/local.guard';
import { GetUser } from '../../common/decorators/get-user.decorator';
import type { UserResponse } from '../../common/responses/user.response';
import { LoginResponse } from '../../common/dto/login.response';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() data: RegisterUserDto): Promise<UserResponse> {
    return this.authService.register(data);
  }

  @Post('/login')
  @UseGuards(LocalGuard)
  login(@GetUser() user: UserResponse): LoginResponse {
    return this.authService.login(user);
  }
}
