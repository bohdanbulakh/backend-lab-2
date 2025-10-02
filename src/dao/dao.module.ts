import { Global, Module } from '@nestjs/common';
import { UserDao } from './dao/user.dao';
import { CategoryDao } from './dao/category.dao';
import { RecordDao } from './dao/record.dao';
import { DrizzleModule } from '../db/drizzle.module';

@Global()
@Module({
  imports: [DrizzleModule],
  providers: [UserDao, CategoryDao, RecordDao],
  exports: [UserDao, CategoryDao, RecordDao],
})
export class DaoModule {}
