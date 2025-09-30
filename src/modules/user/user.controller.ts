import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResponse } from '../../common/responses/user.response';
import { UserEntity } from '../../dao/user/user.entity';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(): UserResponse[] {
    return this.userService.getAll();
  }

  @Get(':userId')
  getById(@Param('userId') id: string): UserResponse {
    return this.userService.getById(id);
  }

  @Post()
  create(@Body() data: UserEntity): UserResponse {
    return this.userService.create(data);
  }

  @Delete(':userId')
  updateById(@Param('userId') id: string): UserResponse {
    return this.userService.deleteById(id);
  }
}
