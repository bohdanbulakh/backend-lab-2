import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  get port(): number {
    const port = this.configService.get<string>('port');
    if (!port) throw new Error('Add PORT variable to .env');
    return +port;
  }

  get databaseUrl(): string {
    const url = this.configService.get<string>('url');
    if (!url) throw new Error('Add PORT DATABASE_URL to .env');

    return url;
  }
}
