import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { browserFingerprintOptions } from '../../src/browser/options.js';

describe('browserFingerprintOptions', () => {
  test('leaves user agent and timezone to CloakBrowser by default', () => {
    assert.deepEqual(browserFingerprintOptions({}), {});
  });

  test('trims nonblank overrides', () => {
    assert.deepEqual(
      browserFingerprintOptions({
        THREADS_USER_AGENT: '  custom agent  ',
        THREADS_TIMEZONE: '  Europe/Paris ',
      }),
      { userAgent: 'custom agent', timezone: 'Europe/Paris' },
    );
  });

  test('treats blank overrides as unset', () => {
    assert.deepEqual(
      browserFingerprintOptions({ THREADS_USER_AGENT: ' ', THREADS_TIMEZONE: '\t' }),
      {},
    );
  });
});
