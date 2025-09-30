import { Module } from '@nestjs/common';
import { ModulesModule } from './modules/modules.module';
import { ConfigModule } from './config/config.module';
import { DaoModule } from './dao/dao.module';

@Module({
  imports: [ConfigModule, ModulesModule, DaoModule],
})
export class AppModule {}
