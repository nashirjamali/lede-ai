import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ARTICLE_STATUSES } from './index';

describe('ARTICLE_STATUSES', () => {
  it('has seven pipeline stages', () => {
    assert.equal(ARTICLE_STATUSES.length, 7);
  });
});
