import { Controller, Get } from '@nestjs/common';
import { DiskHealthIndicator, HealthCheckService } from '@nestjs/terminus';

@Controller()
export class HealthCheckController {
  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly diskHealthIndicator: DiskHealthIndicator,
  ) {}

  @Get('/healthcheck')
  public async healthcheck() {
    const { status } = await this.healthCheckService.check([
      () =>
        this.diskHealthIndicator.checkStorage('storage', {
          path: '/',
          thresholdPercent: 0.95,
        }),
    ]);

    return {
      status,
      date: new Date(),
    };
  }
}
