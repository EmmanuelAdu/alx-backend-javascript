const calculateNumber = require('./0-calcul');
const assert = require('assert');


describe('calculateNumber', () => {
  it('rounding of a', () => {
    assert.equal(calculateNumber(12.76, 4), 17);
    assert.equal(calculateNumber(3.1, 0), 3);
    assert.equal(calculateNumber(10.5, 4), 15);
  });

  it('rounding of b', () => {
    assert.equal(calculateNumber(4, 12.76), 17);
    assert.equal(calculateNumber(0, 3.1), 3);
    assert.equal(calculateNumber(4, 10.5), 15);
  });

  it('suming of a and b', () => {
    assert.equal(calculateNumber(3.7, 12.76), 17);
    assert.equal(calculateNumber(0.2, 3.1), 3);
    assert.equal(calculateNumber(4.2, 10.5), 15);
  });
});