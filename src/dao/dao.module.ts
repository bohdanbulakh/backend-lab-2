import { Global, Module } from '@nestjs/common';
import { UserDao } from './user/user.dao';
import { CategoryDao } from './category/category.dao';
import { RecordDao } from './record/record.dao';

@Global()
@Module({
  providers: [UserDao, CategoryDao, RecordDao],
  exports: [UserDao, CategoryDao, RecordDao],
})
export class DaoModule {}
