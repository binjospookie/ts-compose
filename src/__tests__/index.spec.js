const { compose } = require('../../build/index');

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const fold = (x, y) => x + y;
const uppercase = (x) => x.toUpperCase();

describe('compose', () => {
  it('happy', () => {
    expect(compose(double, addOne, addOne)(1)).toBe(6);

    expect(compose(double, addOne, addOne, fold)(1, 2)).toBe(10);
  });
});
