import { Global, Module } from '@nestjs/common';
import { UserFakeDao } from './user/user.fake-dao';
import { CategoryFakeDao } from './category/category.fake-dao';

@Global()
@Module({
  providers: [UserFakeDao, CategoryFakeDao],
  exports: [UserFakeDao, CategoryFakeDao],
})
export class DaoModule {}
