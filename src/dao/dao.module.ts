import { Global, Module } from '@nestjs/common';
import { UserFakeDao } from './user/user.fake-dao';

@Global()
@Module({
  providers: [UserFakeDao],
  exports: [UserFakeDao],
})
export class DaoModule {}
