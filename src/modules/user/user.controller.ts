import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResponse } from '../../common/responses/user.response';
import { UserByIdValidationPipe } from '../../common/pipes/pipes/user-by-id-validation.pipe';
import { UpdateUserDto } from '../../common/dto/update-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  getAll(): Promise<UserResponse[]> {
    return this.userService.getAll();
  }

  @Get('/user/:userId')
  getById(
    @Param('userId', UserByIdValidationPipe) id: string,
  ): Promise<UserResponse> {
    return this.userService.getById(id);
  }

  @Patch('/user/:userId')
  updateById(
    @Param('userId', UserByIdValidationPipe) id: string,
    @Body() data: UpdateUserDto,
  ): Promise<UserResponse> {
    return this.userService.updateById(id, data);
  }

  @Delete('/user/:userId')
  deleteById(
    @Param('userId', UserByIdValidationPipe) id: string,
  ): Promise<UserResponse> {
    return this.userService.deleteById(id);
  }
}
