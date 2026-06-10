import { Module } from '@nestjs/common';
import { HealthProcessor } from './health.processor';

@Module({
  providers: [HealthProcessor],
})
export class ProcessorsModule {}
