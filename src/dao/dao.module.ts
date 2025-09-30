import { Global, Module } from '@nestjs/common';
import { UserFakeDao } from './user/user.fake-dao';
import { CategoryFakeDao } from './category/category.fake-dao';
import { RecordFakeDao } from './record/record.fake-dao';

@Global()
@Module({
  providers: [UserFakeDao, CategoryFakeDao, RecordFakeDao],
  exports: [UserFakeDao, CategoryFakeDao, RecordFakeDao],
})
export class DaoModule {}
