import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';
import { validateEnv } from './config/env';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';
import { QueueModule } from './queue/queue.module';

const rootEnv = resolve(__dirname, '../../../.env');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [rootEnv, '.env', '.env.local'],
      validate: validateEnv,
    }),
    PrismaModule,
    QueueModule,
    HealthModule,
  ],
})
export class AppModule {}
