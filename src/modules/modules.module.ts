import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [HealthCheckModule, UserModule, CategoryModule],
})
export class ModulesModule {}
