import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { HealthController } from './health.controller';

describe('HealthController', () => {
  it('returns ok status', () => {
    const controller = new HealthController();
    const result = controller.check();
    assert.equal(result.status, 'ok');
    assert.equal(result.service, 'api');
    assert.equal(result.pipelineStages, 7);
  });
});
