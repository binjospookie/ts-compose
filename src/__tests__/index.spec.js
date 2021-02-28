const { compose } = require('../../build/index');

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const fold = (x, y) => x + y;
const toUpper = (x) => x.toUpperCase();

const baseFn = compose(double, addOne, addOne);

describe('compose', () => {
  it('example', () => {
    const classyGreeting = (firstName, lastName) => "The name's " + lastName + ', ' + firstName + ' ' + lastName;
    const yellGreeting = compose(toUpper, classyGreeting);
    expect(yellGreeting('James', 'Bond')).toBe("THE NAME'S BOND, JAMES BOND");

    expect(compose(Math.abs, addOne, double)(-4)).toBe(7);
  });
  it('happy', () => {
    expect(compose(double, addOne, addOne)(1)).toBe(6);
    expect(compose(baseFn, fold)(1, 2)).toBe(10);
    expect(compose(baseFn, toUpper)('test')).toBe(NaN);
  });
  it('error', () => {
    const fn = compose(baseFn, toUpper);
    try {
      fn(1);
    } catch ({ message }) {
      expect(message).toBe('x.toUpperCase is not a function');
    }
  });
});
