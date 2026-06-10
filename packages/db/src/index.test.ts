import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { prisma } from './index';

describe('prisma client', () => {
  it('exports a prisma instance', () => {
    assert.ok(prisma);
    assert.equal(typeof prisma.$connect, 'function');
  });
});
