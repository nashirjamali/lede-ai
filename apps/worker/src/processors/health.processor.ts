import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { QUEUE_EMAIL } from '../queue/queue.constants';

@Processor(QUEUE_EMAIL)
export class HealthProcessor extends WorkerHost {
  private readonly logger = new Logger(HealthProcessor.name);

  async process(job: Job): Promise<void> {
    this.logger.log(`Worker received job ${job.id} on ${job.queueName}`);
  }
}
