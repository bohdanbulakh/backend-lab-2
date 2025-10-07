import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserByIdValidationPipe } from '../../common/pipes/pipes/user-by-id-validation.pipe';
import { UpdateUserDto } from '../../common/dto/update-user.dto';
import { AccessGuard } from '../../common/guards/access.guard';
import { UserResponse } from '../../common/responses/user.response';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AccessGuard)
  @Get('/users')
  getAll(): Promise<UserResponse[]> {
    return this.userService.getAll();
  }

  @UseGuards(AccessGuard)
  @Get('/user/:userId')
  getById(
    @Param('userId', UserByIdValidationPipe) id: string,
  ): Promise<UserResponse> {
    return this.userService.getById(id);
  }

  @UseGuards(AccessGuard)
  @Patch('/user/:userId')
  updateById(
    @Param('userId', UserByIdValidationPipe) id: string,
    @Body() data: UpdateUserDto,
  ): Promise<UserResponse> {
    return this.userService.updateById(id, data);
  }

  @UseGuards(AccessGuard)
  @Delete('/user/:userId')
  deleteById(
    @Param('userId', UserByIdValidationPipe) id: string,
  ): Promise<UserResponse> {
    return this.userService.deleteById(id);
  }
}
