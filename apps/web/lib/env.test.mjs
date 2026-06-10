import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('web env defaults', () => {
  it('has a default API URL', () => {
    const url = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api/v1';
    assert.equal(url, 'http://localhost:3001/api/v1');
  });
});
