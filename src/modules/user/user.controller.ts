import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResponse } from '../../common/responses/user.response';
import { CreateUserDto } from '../../common/dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  getAll(): Promise<UserResponse[]> {
    return this.userService.getAll();
  }

  @Get('/user/:userId')
  getById(@Param('userId') id: string): Promise<UserResponse> {
    return this.userService.getById(id);
  }

  @Post('user')
  create(@Body() data: CreateUserDto): Promise<UserResponse> {
    return this.userService.create(data);
  }

  @Delete('/user/:userId')
  deleteById(@Param('userId') id: string): Promise<UserResponse> {
    return this.userService.deleteById(id);
  }
}
