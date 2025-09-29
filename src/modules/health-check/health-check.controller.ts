import { Controller, Get } from '@nestjs/common';
import { DiskHealthIndicator, HealthCheckService } from '@nestjs/terminus';
import { ExtendedMemoryIndicator } from './indicators/extended-memory.indicator';
import { HealthCheckStatus } from '@nestjs/terminus/dist/health-check/health-check-result.interface';

@Controller()
export class HealthCheckController {
  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly diskHealthIndicator: DiskHealthIndicator,
    private readonly memoryIndicator: ExtendedMemoryIndicator,
  ) {}

  @Get('/healthcheck')
  public async healthcheck() {
    let status: HealthCheckStatus;
    try {
      const result = await this.healthCheckService.check([
        () =>
          this.diskHealthIndicator.checkStorage('storage', {
            path: '/',
            thresholdPercent: 0.95,
          }),
        () =>
          this.memoryIndicator.checkHeap('heap', {
            thresholdPercent: 0.9,
          }),
      ]);
      status = result.status;
    } catch {
      status = 'error';
    }

    return {
      status,
      date: new Date(),
    };
  }
}
