import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { QUEUE_EMAIL } from '../queue/queue.constants';

describe('worker queues', () => {
  it('defines email dispatch queue', () => {
    assert.equal(QUEUE_EMAIL, 'email-dispatch');
  });
});
