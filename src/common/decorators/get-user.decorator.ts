import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserResponse } from '../responses/user.response';

export const GetUser = createParamDecorator(
  (
    field: keyof UserResponse | null = null,
    ctx: ExecutionContext,
  ): UserResponse[keyof UserResponse] | UserResponse => {
    const request: Request & { user: UserResponse } = ctx
      .switchToHttp()
      .getRequest();
    return field ? request.user?.[field] : request.user;
  },
);
