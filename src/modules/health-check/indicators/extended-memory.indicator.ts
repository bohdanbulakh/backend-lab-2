import { HealthIndicatorResult, MemoryHealthIndicator } from '@nestjs/terminus';
import { HealthIndicatorService } from '@nestjs/terminus/dist/health-indicator/health-indicator.service';
import { Injectable } from '@nestjs/common';

export type MemoryHealthThreshold = {
  thresholdBytes?: number;
  thresholdPercent?: number;
};

@Injectable()
export class ExtendedMemoryIndicator extends MemoryHealthIndicator {
  constructor(private readonly healthService: HealthIndicatorService) {
    super(healthService);
  }

  checkHeap<Key extends string = string>(
    key: Key,
    threshold: number,
  ): Promise<HealthIndicatorResult<Key>>;

  checkHeap<Key extends string = string>(
    key: Key,
    threshold: MemoryHealthThreshold,
  ): Promise<HealthIndicatorResult<Key>>;

  checkHeap<Key extends string = string>(
    key: Key,
    threshold: number | MemoryHealthThreshold,
  ): Promise<HealthIndicatorResult<Key>> {
    if (typeof threshold === 'number') {
      return super.checkHeap(key, threshold);
    }
    const { thresholdBytes, thresholdPercent } = threshold;

    const { heapUsed, heapTotal } = process.memoryUsage();
    const percentUsed = heapUsed / heapTotal;

    let allowedPercent: number;
    if (thresholdPercent) {
      allowedPercent = thresholdPercent;
    } else if (thresholdBytes) {
      allowedPercent = thresholdBytes / heapTotal;
    } else {
      throw new Error(
        'You have to pass thresholdBytes or thresholdPercent into parameters',
      );
    }

    const indicator = this.healthService.check(key);

    const details = {
      heapUsed,
      heapTotal,
      percentUsed: percentUsed.toFixed(2),
      allowedPercent: allowedPercent.toFixed(2),
    };

    return Promise.resolve(
      percentUsed < allowedPercent
        ? indicator.up(details)
        : indicator.down(details),
    );
  }
}
