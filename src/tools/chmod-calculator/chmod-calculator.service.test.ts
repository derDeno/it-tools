import { describe, expect, it } from 'vitest';
import { computeChmodOctalRepresentation } from './chmod-calculator.service';

describe('chmod-calculator', () => {
  describe('computeChmodOctalRepresentation', () => {
    it('get the octal representation from permissions', () => {
      expect(
        computeChmodOctalRepresentation({
          permissions: {
            owner: { read: true, write: true, execute: true },
            group: { read: true, write: true, execute: true },
            public: { read: true, write: true, execute: true },
          },
        }),
      ).to.eql('777');

      expect(
        computeChmodOctalRepresentation({
          permissions: {
            owner: { read: false, write: false, execute: false },
            group: { read: false, write: false, execute: false },
            public: { read: false, write: false, execute: false },
          },
        }),
      ).to.eql('000');

      expect(
        computeChmodOctalRepresentation({
          permissions: {
            owner: { read: false, write: true, execute: false },
            group: { read: false, write: true, execute: true },
            public: { read: true, write: false, execute: true },
          },
        }),
      ).to.eql('235');

      expect(
        computeChmodOctalRepresentation({
          permissions: {
            owner: { read: true, write: false, execute: false },
            group: { read: false, write: true, execute: false },
            public: { read: false, write: false, execute: true },
          },
        }),
      ).to.eql('421');

      expect(
        computeChmodOctalRepresentation({
          permissions: {
            owner: { read: false, write: false, execute: true },
            group: { read: false, write: true, execute: false },
            public: { read: true, write: false, execute: false },
          },
        }),
      ).to.eql('124');

      expect(
        computeChmodOctalRepresentation({
          permissions: {
            owner: { read: false, write: true, execute: false },
            group: { read: false, write: true, execute: false },
            public: { read: false, write: true, execute: false },
          },
        }),
      ).to.eql('222');
    });
  });
});
