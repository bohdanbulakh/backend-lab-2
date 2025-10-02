import { Module } from '@nestjs/common';
import { ModulesModule } from './modules/modules.module';
import { ConfigModule } from './config/config.module';
import { DaoModule } from './dao/dao.module';
import { DrizzleModule } from './db/drizzle.module';

@Module({
  imports: [DrizzleModule, ConfigModule, ModulesModule, DaoModule],
})
export class AppModule {}
