import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  QUEUE_ANALYTICS,
  QUEUE_BRIEF,
  QUEUE_EMAIL,
  QUEUE_PUBLISH,
} from './queue.constants';

@Module({
  imports: [
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        connection: {
          url: config.getOrThrow<string>('REDIS_URL'),
        },
      }),
    }),
    BullModule.registerQueue(
      { name: QUEUE_PUBLISH },
      { name: QUEUE_BRIEF },
      { name: QUEUE_EMAIL },
      { name: QUEUE_ANALYTICS },
    ),
  ],
  exports: [BullModule],
})
export class QueueModule {}
