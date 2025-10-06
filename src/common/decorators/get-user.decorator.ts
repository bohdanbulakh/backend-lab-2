import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthUser } from '../../modules/auth/type/auth-user';

export const GetUser = createParamDecorator(
  (
    field: keyof AuthUser | null = null,
    ctx: ExecutionContext,
  ): AuthUser[keyof AuthUser] | AuthUser => {
    const request: Request & { user: AuthUser } = ctx
      .switchToHttp()
      .getRequest();
    return field ? request.user?.[field] : request.user;
  },
);
