import { Module } from '@nestjs/common';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { schema } from './schema';
import postgres from 'postgres';

export type PostgresDatabase = PostgresJsDatabase<typeof schema>;
export const POSTGRES_CONNECTION = 'POSTGRES_CONNECTION';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: POSTGRES_CONNECTION,
      inject: [ConfigService],
      useFactory: (configService: ConfigService): PostgresDatabase => {
        const uri = configService.databaseUrl;
        const client = postgres(uri);
        return drizzle(client, { schema });
      },
    },
  ],
  exports: [POSTGRES_CONNECTION],
})
export class DrizzleModule {}
