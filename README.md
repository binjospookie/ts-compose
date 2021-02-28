# ts-compose

```
((y → z), (x → y), …, (o → p), ((a, b, …, n) → o)) → ((a, b, …, n) → z)
```

Performs right-to-left function composition.

```typescript
import { compose } from 'ts-compose';

const addOne = (x: number) => x + 1;
const double = (x: number) => x * 2;
const toUpper = (x: string) => x.toUpperCase();
const fold = (x, y) => x + y;
const classyGreeting = (firstName: string, lastName: string) => "The name's " + lastName + ", " + firstName + " " + lastName;
const yellGreeting = compose(toUpper, classyGreeting);

compose(Math.abs, addOne, double)(-4); //=> 7
yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"

compose(double, addOne, addOne, toUpper)('1'); //=> can't compose toUpper with addOne
compose(double, addOne, addOne, fold)(1); //=> expect 2 arguments
```

[Try it](https://codesandbox.io/s/ts-compose-4c8fh?file=/src/index.ts)

