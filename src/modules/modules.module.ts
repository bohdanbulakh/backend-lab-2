import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { RecordModule } from './record/record.module';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [
    HealthCheckModule,
    UserModule,
    CategoryModule,
    RecordModule,
    CurrencyModule,
  ],
})
export class ModulesModule {}
