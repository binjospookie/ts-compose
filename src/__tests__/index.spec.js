const { compose } = require('../../build/index');

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const fold = (x, y) => x + y;
const uppercase = (x) => x.toUpperCase();

const baseFn = compose(double, addOne, addOne);

describe('compose', () => {
  it('happy', () => {
    expect(compose(double, addOne, addOne)(1)).toBe(6);
    expect(compose(baseFn, fold)(1, 2)).toBe(10);
    expect(compose(baseFn, uppercase)('test')).toBe(NaN);
  });
  it('error', () => {
    const fn = compose(baseFn, uppercase);
    try {
      fn(1);
    } catch ({ message }) {
      expect(message).toBe('x.toUpperCase is not a function');
    }
  });
});
