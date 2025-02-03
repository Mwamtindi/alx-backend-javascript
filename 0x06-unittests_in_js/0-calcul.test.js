const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of two integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round the numbers and return the sum', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.4, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -6);
  });

  it('should handle mixed negative and positive numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, 3.7), 3);
    assert.strictEqual(calculateNumber(-1.5, 3.7), 2);
  });

  it('should handle zero correctly', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 3.7), 4);
    assert.strictEqual(calculateNumber(-0.4, -0.6), -1);
  });
});
