import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { RecordModule } from './record/record.module';
import { CurrencyModule } from './currency/currency.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    HealthCheckModule,
    UserModule,
    CategoryModule,
    RecordModule,
    CurrencyModule,
    AuthModule,
  ],
})
export class ModulesModule {}
