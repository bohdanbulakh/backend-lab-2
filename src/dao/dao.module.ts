import { Global, Module } from '@nestjs/common';
import { UserDao } from './dao/user.dao';
import { CategoryDao } from './dao/category.dao';
import { RecordDao } from './dao/record.dao';
import { DrizzleModule } from '../db/drizzle.module';
import { CurrencyDao } from './dao/currency.dao';

@Global()
@Module({
  imports: [DrizzleModule],
  providers: [UserDao, CategoryDao, RecordDao, CurrencyDao],
  exports: [UserDao, CategoryDao, RecordDao, CurrencyDao],
})
export class DaoModule {}
