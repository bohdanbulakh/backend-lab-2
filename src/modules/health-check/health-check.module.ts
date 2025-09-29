import { Module } from '@nestjs/common';
import { HealthCheckController } from './health-check.controller';
import { TerminusModule } from '@nestjs/terminus';
import { ExtendedMemoryIndicator } from './indicators/extended-memory.indicator';

@Module({
  imports: [TerminusModule],
  controllers: [HealthCheckController],
  providers: [ExtendedMemoryIndicator],
  exports: [ExtendedMemoryIndicator],
})
export class HealthCheckModule {}
