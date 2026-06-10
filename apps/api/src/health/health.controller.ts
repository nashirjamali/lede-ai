import { Controller, Get } from '@nestjs/common';
import { ARTICLE_STATUSES } from '@lede/types';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok',
      service: 'api',
      pipelineStages: ARTICLE_STATUSES.length,
    };
  }
}
