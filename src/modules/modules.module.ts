import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [HealthCheckModule, UserModule],
})
export class ModulesModule {}
